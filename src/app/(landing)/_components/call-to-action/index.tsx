import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import AnimatedBtn from "../animated-button";
import { BadgePlusIcon } from "lucide-react";
import { auth } from "../../../../../auth";
import { Anton, Bebas_Neue } from "next/font/google";


const aaaa = Anton({ subsets: ["latin"], weight: "400" });

const CallToAction = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-center gap-y-5 md:gap-y-0">
      <AnimatedBtn />
      <GradientText
        className={`text-[37px] cursor-default md:mt-4 md:mb-4 text-center md:text-[40px] lg:text-[40px] xl:text-[70px] 2xl:text-[72px] md:leading-[1.1] leading-[1.2] font-semibold`}
        element="H1"
      >
        Next-gen <br className="block md:hidden" />
        SaaS Solution <br className="hidden md:block" />
        For Your Powerfull Presence{" "}
      </GradientText>
      <p className=" text-center cursor-default md:my-2  mb-2 md:text-lg text-sm text-muted-foreground">
        Empower your business with Bester’s
        <br className="block md:hidden" /> AI-driven solutions designed to streamline flow
        <br className="hidden md:block" />
        operations and enhance customer relationships with us.
      </p>
      <div className="flex md:flex-row flex-col text-lg md:justify-center gap-5 md:mt-6 w-full">
        <Link
          href={"/demo"}
          className="w-full md:w-fit"
        >
          <Button
            variant="outline"
            className="rounded-lg bg-zinc-950 py-4 element text-base w-full"
          >
            Demo
          </Button>
        </Link>
        <Button className="rounded-lg bg-main/70 py-4 element-main text-base text-white hover:bg-main flex gap-2 ">
          <BadgePlusIcon size={18} /> Get Started your journey
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
