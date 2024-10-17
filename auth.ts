import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import connectDb from "@/lib/dbConnect";
import { User } from "./models/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      // name: "Cradentials",
      // credentials: {
      //   email: {},
      //   password: {},
      // },
      // async authorize(credentials) {
      //   const { email, password } = credentials;

      //   if (!email || !password) {
      //     throw new Error("Please fill all fields");
      //   }

      //   await connectDb();

      //   const user = await User.findOne({ email }).select("+password");
      //   if (!user) {
      //     throw new Error("User not found");
      //   }

      //   const isAuth = await bcrypt.compare(password, user.password);
      //   if (!isAuth) {
      //     throw new Error("Password does not match");
      //   }
      //   return user;
      // },
    }),
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
        token.isVarified = alreadyUserr.isVarified;
        token.isAdmin = alreadyUserr.isAdmin;
        token.username = alreadyUserr.username;
        return token;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token._id && session.user) {
        session.user._id = token._id;
        session.user.isVarified = token.isVarified;
        session.user.isAdmin = token.isAdmin;
        session.user.username = token.username;
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
