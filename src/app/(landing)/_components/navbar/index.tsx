import GlassSheet from "@/components/global/glass-sheet";
import { Button } from "@/components/ui/button";
import { Compass, Logout } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { RiMenu5Line } from "react-icons/ri";
import { auth } from "../../../../../auth";
import Menu from "./menu";
import UserBtn from "./user-btn";

const LandingPageNavbar = async () => {
  const session = await auth();

  return (
    <div className="fixed top-0 z-[40] w-full ">
      <div className="max-w-[87.5rem] container mx-auto md:px-[72px] flex justify-between  items-center py-5 z-50 bg-blend-color-dodge">
        <p className="font-bold w-[100px] text-2xl">Sayan.</p>
        <Menu orientation="desktop" />
        <div className="flex gap-2 w-[100px] justify-end ">
          {session?.user?.email ? (
            <div className="md:flex gap-4 hidden">
              <Link href="/agency">
                <Button
                  variant="outline"
                  className="bg-themeBlack element rounded-2xl h-9 flex gap-2 border-themeGray elemrnt hover:bg-themeGray"
                >
                  <Compass />
                  Create
                </Button>
              </Link>
              <UserBtn
                imageUrl={session?.user?.image || "/user.png"}
                username={session?.user?.name || ""}
                email={session?.user?.email || ""}
              >
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
          ) : (
            <Link href="/agency/sign-in">
              <Button
                variant="outline"
                className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray elemrnt hover:bg-themeGray"
              >
                <Logout />
                Login
              </Button>
            </Link>
          )}

          <GlassSheet
            triggerClass="lg:hidden"
            trigger={
              <Button
                variant="ghost"
                className="hover:bg-transparent px-0"
              >
                <RiMenu5Line size={25} />
              </Button>
            }
          >
            <Menu orientation="mobile" />
          </GlassSheet>
        </div>
      </div>
    </div>
  );
};

export default LandingPageNavbar;
