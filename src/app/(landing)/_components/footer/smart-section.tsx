import Image from "next/image";
import React from "react";
// import Heading from "../design/Heading";
// import Button from "../buttons/Button";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradient-text";

const Smart = () => {
  return (
    <section className="py-1  -mb-32  md:mb-0 max-w-7xl md:px-0 px-5 mx-auto relative bottom-24 h-[10rem] mt-60">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <Image
          src={"/earth.png"}
          width={1000}
          height={1000}
          className="sm:scale-100 scale-150"
          alt="glob"
        />
      </div>
      <div className="w-full h-[17rem] sm:-bottom-56 absolute bg-[#000000] blur-xl"></div>
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <GradientText
          className="text-4xl font-semibold text-center"
          element="H2"
        >
          Start Your Journey
        </GradientText>
        <p className="text-sm md:text-center text-left mt-4 mb-10 text-muted-foreground">
          Boost your creativity and business with Azeorex Team. Start your journey towards success and innovation today!
        </p>
      </BackdropGradient>
      
      {/* <Link
        href={`${process.env.NEXT_URL}/connection`}
        className="md:absolute relative  md:left-1/2 md:-translate-x-1/2 -bottom-16 md:-bottom-20 z-50 w-max"
      >
        <Button className={" w-full flex items-center justify-center gap-2 "}>
          Contact <MdOutlineArrowOutward />
        </Button>
      </Link> */}
    </section>
  );
};

export default Smart;
