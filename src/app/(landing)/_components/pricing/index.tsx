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
  tag: React.ReactNode;
  color: string;
  features: [string, string, string, string, string];
};

export const PricingSection = () => {
  return (
    <div
      className="w-full md:pt-5 flex flex-col items-center gap-y-3"
      id="pricing"
    >
      <BackdropGradient className="w-8/12 h-full opacity-40 flex flex-col items-center">
        <h2 className="text-4xl md:text-[4rem] font-semibold text-center mb-4">Pricing Plans That Fit You</h2>
        <p className="text-lg md:text-center text-left mt-4 mb-10 text-muted-foreground">
          Discover innovative tools designed to optimize your workflows
          <br /> and drive success.
        </p>
      </BackdropGradient>
      <div className="flex xl:flex-row flex-col gap-2">
        <PriceCard
          features={["Collaborate with up to 3 teammates", "Core task management features", "Unlimited projects and tasks", "Board and list views", "Basic integrations"]}
          border="border-white/5  bg-[#0C0E13] xl:scale-90"
          title="Free Plane"
          tag="$0 /"
          color="text-[#b4b0a3]"
        />
        <PriceCard
          features={["Collaborate with up to 3 teammates", "Core task management features", "Unlimited projects and tasks", "Board and list views", "Basic integrations"]}
          border="relative border-white/10 z-10  bg-[#402fb5]/40 pricing-shadow"
          title="Pro Plane"
          tag="$15 /"
          color="text-[#b4b0a3]"
        />
        <PriceCard
          features={["Collaborate with up to 3 teammates", "Core task management features", "Unlimited projects and tasks", "Board and list views", "Basic integrations"]}
          border="border-white/5 bg-[#0C0E13] xl:scale-90"
          title="Premium Plane"
          tag="$45 /"
          color="text-[#b4b0a3]"
        />
      </div>
    </div>
  );
};

const PriceCard = ({ border, title, tag, color, features }: Props) => {
  return (
    <Card className={clsx("p-8 mt-10 xl:w-[22rem] sm:w-[30rem] w-[18rem] rounded-[40px] border-2", border)}>
      <div className="flex flex-col gap-2 mb-8">
        <CardTitle className={clsx(color)}>{title}</CardTitle>
        <CardDescription className="my-5">
          <div className="flex items-end gap-2 mb-3">
            <div className="text-5xl text-white font-medium">{tag}</div>
            <div className="text-xl"> month</div>
          </div>
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
      <Separator className={tag === "$15 /" ? "bg-white/20" : ""} />
      <div className={clsx("flex flex-col gap-2 mt-5", tag === "$15 /" ? "text-white" : "text-[#d3cfcd]")}>
        <p>Features</p>
        {features.map((i, idx) => (
          <span
            className="flex gap-2 mt-2 items-center"
            key={idx}
          >
            <Check />
            {i}
          </span>
        ))}
      </div>
    </Card>
  );
};
