import Image from "next/image";
import LandingPageNavbar from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-[810px] bottom-0 left-0 right-0 top-0 bg-center bg-repeat-x bg-[url(/bg_2.svg)] opacity-70"></div>
      {/* <Image
        src="/bg.svg"
        width={2000}
        height={2000}
        alt="grid"
        className="w-full absolute opacity-70"
      /> */}
      <div className="flex flex-col container relative">
        <LandingPageNavbar />
        {children}
      </div>
    </div>
  );
};

export default LandingPageLayout;
