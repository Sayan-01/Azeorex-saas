import BackdropGradient from "@/components/global/backdrop-gradient";
import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "@/icons";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  border: string;
  title: string;
  tag: string;
  color: string;
  features: [string, string, string, string, string];
};

export const PricingSection = () => {
  return (
    <div
      className="w-full pt-20 flex flex-col items-center gap-3"
      id="pricing"
    >
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <GradientText
          className="text-4xl font-semibold text-center"
          element="H2"
        >
          Pricing Plans That Fit Your Right
        </GradientText>
        <p className="text-sm md:text-center text-left mt-4 mb-10 text-muted-foreground">
          Grouple is a vibrant online community platform that empowers people to connect, <br className="hidden md:block" />
          collaborate, and cultivate meaningful relationships
        </p>
      </BackdropGradient>
      <div className="flex md:flex-row flex-col gap-2">
        <PriceCard
          features={["Collaborate with up to 3 teammates", "Core task management features", "Unlimited projects and tasks", "Board and list views", "Basic integrations"]}
          border="border-white/5  bg-[#0C0E13] scale-90"
          title="Free Plane"
          tag="$0 forever"
          color="text-[#b4b0a3]"
        />
        <PriceCard
          features={["Collaborate with up to 3 teammates", "Core task management features", "Unlimited projects and tasks", "Board and list views", "Basic integrations"]}
          border="relative border-white/10 z-10  bg-main/40 pricing-shadow"
          title="Pro Plane"
          tag="$15 / month"
          color="text-[#b4b0a3]"
        />
        <PriceCard
          features={["Collaborate with up to 3 teammates", "Core task management features", "Unlimited projects and tasks", "Board and list views", "Basic integrations"]}
          border="border-white/5 bg-[#0C0E13] scale-90"
          title="Premium Plane"
          tag="$45 / month"
          color="text-[#b4b0a3]"
        />
      </div>
    </div>
  );
};

const PriceCard = ({ border, title, tag, color, features }: Props) => {
  return (
    <Card className={clsx("p-8 mt-10 w-[22rem] rounded-[40px] border-2", border)}>
      <div className="flex flex-col gap-2 mb-8">
        <CardTitle className={clsx(color)}>{title}</CardTitle>
        <CardDescription className="my-5">
          <div className="text-5xl text-white font-medium mb-3">{tag}</div>
          <p className="text-[#B4B0AE]">Great if you’re just getting started</p>
        </CardDescription>
        <Link
          href="#"
          className="w-full"
        >
          <Button
            variant="default"
            className="py-[22px] text-md font-semibold w-full rounded-xl btn-shadow"
          >
            Start your journey
          </Button>
        </Link>
        <p className="text-xs opacity-60 mx-auto">powered by azeorex company</p>
      </div>
      <Separator className={tag === "$9 / month" ? "bg-white/50": ""}/>
      <div className={clsx("flex flex-col gap-2 mt-5", tag === "$9 / month" ? "text-white" : "text-[#d3cfcd]")}>
        <p>Features</p>
        {features.map((i) => (
          <span className="flex gap-2 mt-2 items-center">
            <Check />
            {i}
          </span>
        ))}
      </div>
    </Card>
  );
};
