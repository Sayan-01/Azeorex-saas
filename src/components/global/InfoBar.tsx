"use client";
import UserBtn from "@/app/(landing)/_components/navbar/user-btn";
import { Bell, Message, Settings } from "@/icons";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoBar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-[68px] z-[100] w-full flex items-center justify-between px-4 border-b">
      <Link href="/" className="md:ml-0 ml-12">
        <p className="font-bold w-[100px] text-2xl">Grouple.</p>
      </Link>
      <div className="flex items-center gap-5">
        <div className=" md:flex gap-4 hidden">
          <Bell />
          <Settings />
          <Message />
        </div>
        <UserBtn margin="mr-2 mt-5" imageUrl={session?.user?.image || "/user.png"}>
          <div className="w-9 h-9 rounded-full overflow-hidden">
            <Image
              alt="profile-image"
              src={session?.user?.image || "/user.png"}
              className="w-full h-full"
              width={100}
              height={100}
            />
          </div>
        </UserBtn>
      </div>
    </div>
  );
};

export default InfoBar;
