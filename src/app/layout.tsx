//ॐ
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import "./globals.css";
import { auth } from "../../auth";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import ModalProvider from "../../providers/model-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// const xyz = Roboto_Mono({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={`bg-black dark w-full overflow-auto min-h-screen antialiased box x`}>
          <ModalProvider>
            <NextTopLoader
              color="#ffffff"
              height={2}
              showSpinner={false}
            />
            {children}
            <Toaster />
          </ModalProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
