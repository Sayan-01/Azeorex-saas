import Image from "next/image";
import LandingPageNavbar from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Image src="/bg.svg" width={2000} height={2000} alt="grid" className="w-full absolute opacity-60"/>
      <div className="flex flex-col container relative">
        <LandingPageNavbar />
        {children}
      </div>
    </div>
  );
};

export default LandingPageLayout;
