import Footer from "./_components/footer";
import Smart from "./_components/footer/smart-section";
import LandingPageNavbar from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <LandingPageNavbar />
      <div className="absolute w-full h-[810px] bottom-0 left-0 right-0 top-0 bg-center bg-repeat-x bg-[url(/bg_2.svg)] opacity-70"></div>
      <div className="flex flex-col container relative">
        {children}
        <Smart />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPageLayout;
