import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import AnimatedBtn from "../animated-button"
import { BadgePlusIcon } from "lucide-react"
import { auth } from "../../../../../auth"


const CallToAction = async() => {
  const session = await auth()

  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <AnimatedBtn />
      <GradientText
        className="text-[35px] cursor-default mt-6 mb-4 text-center md:text-[40px] lg:text-[40px] xl:text-[70px] 2xl:text-[65px] leading-[1.1] font-semibold"
        element="H1"
      >
        Launch your business <br />
        with our saas in some steps
      </GradientText>
      <p className=" md:text-center cursor-default text-left my-2 text-muted-foreground">
        Stemp is a vibrant online community platform that empowers
        <br className="md:hidden" />
        people <br className="hidden md:block" />
        to connect, collaborate, and cultivate meaningful
        <br className="md:hidden" />
        relationships dfdfkier iijfskpc eryi
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button
          variant="outline"
          className="rounded-lg bg-zinc-950 element text-base"
        >
          Demo
        </Button>
        <Link
          href={
            session?.user
              ? "/subaccount/test/funnels/test/editor/test"
              : "agency/sign-in"
          }
        >
          <Button className="rounded-lg bg-main/70 element-main text-base text-white hover:bg-main flex gap-2 w-full">
            <BadgePlusIcon size={18} /> Get Started your journey
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CallToAction
