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
    <div className="md:px-10 py-20 pt-24 flex-col gap-36">
      <div>
        <CallToAction />
        <DashboardSnippet />
      </div>
      <PriceSection/>
    </div>
  );
}
