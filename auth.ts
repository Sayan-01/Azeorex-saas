import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import connectDb from "@/lib/dbConnect";
import { User } from "./models/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({}),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/agency/sign-in",
    error: "/auth/error",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (token.sub && user) {
        const email = token.email;
        const alreadyUserr = await User.findOne({ email });
        if (!alreadyUserr) return token;
        token._id = alreadyUserr._id;
        token.username = alreadyUserr.username;
        token.role = alreadyUserr.role;
        return token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token._id && session.user) {
        // @ts-ignore: Ignore type error for role
        session.user._id = token._id;
        // @ts-ignore: Ignore type error for role
        session.user.username = token.username;
        // @ts-ignore: Ignore type error for role
        session.user.role = token.role;
      }
      return session;
    },
    signIn: async ({ user, account }) => {
      await connectDb();

      if (account?.provider === "google") {
        const { email, name, image, id } = user;

        const alreadyUser = await User.findOne({ email }).select("+password");

        if (alreadyUser) {
          if (!alreadyUser.googleId) {
            throw false;
          } else return true;
        } else if (!alreadyUser) {
          await User.create({
            email,
            username: name,
            image,
            googleId: id,
            isVarified: true,
          });
        }
        return true;
      } else if (account?.provider === "github") {
        const { email, name, image, id } = user;

        await connectDb();
        const alreadyUser = await User.findOne({ email }).select("+password");

        if (alreadyUser) {
          if (!alreadyUser.githubId) {
            throw false;
          } else return true;
        } else if (!alreadyUser) {
          await User.create({
            email,
            username: name,
            image,
            githubeId: id,
            isVarified: true,
          });
        }
        return true;
      }
      return true;
    },
  },
  session: {
    strategy: "jwt",
  },
});
