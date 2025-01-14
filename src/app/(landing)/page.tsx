import dynamic from "next/dynamic";
import CallToAction from "./_components/call-to-action";
import DashboardSnippet from "./_components/dashboard-snippet";

const PriceSection = dynamic(
  () =>
    import("./_components/pricing").then(
      (component) => component.PricingSection,
    ),
  { ssr: true },
);

export default function Home() {
  return (
    <div className="md:px-10 md:py-20 md:pt-[calc(171px-98px)] py-10 pt-[calc(120px-75px)] flex-col gap-36">
      <div>
        <CallToAction />
        <DashboardSnippet />
      </div>
      <PriceSection/>
    </div>
  );
}
