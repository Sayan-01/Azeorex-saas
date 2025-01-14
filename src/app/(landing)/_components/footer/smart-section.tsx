import Image from "next/image";
import React from "react";
// import Heading from "../design/Heading";
// import Button from "../buttons/Button";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradient-text";

const Smart = () => {
  return (
    <section className="py-1 max-w-7xl md:px-0 px-5 mx-auto relative bottom-24 h-[10rem] md:my-40 my-20">
      <div className="relative md:-mb-[16rem] -mb-[9rem] left-1/2 -translate-x-1/2">
        <Image
          src={"/earth.png"}
          width={1000}
          height={1000}
          className="sm:scale-100 md:w-[28rem] w-[20rem] mx-auto "
          alt="glob"
        />
        <div className="w-full md:h-[17rem] h-[10rem] top-40 absolute bg-[#000000] blur-xl"></div>
      </div>
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <h2 className="text-4xl md:text-[4rem] font-semibold text-center mb-4">Start Your journey</h2>
        <p className="text-lg md:text-center text-left mt-4 mb-10 text-muted-foreground">
          Boost your creativity and business with Azeorex Team. Start your journey towards success and innovation today!
        </p>
      </BackdropGradient>
    </section>
  );
};

export default Smart;
