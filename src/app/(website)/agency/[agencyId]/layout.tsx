import React from "react";
import { auth } from "../../../../../auth";
import { verifyAndAcceptInvitation } from "@/lib/queries";
import { redirect } from "next/navigation";
import { Role } from "@/types/types";
import Unauthorized from "@/components/unauthorized";
import Sidebar from "@/components/sidebar";
import GlassCard from "@/components/global/glass-card";
import BlurPage from "@/components/global/blur-page";
import InfoBar from "@/components/global/InfoBar";

type Props = {
  children: React.ReactNode;
  params: { agencyId: string };
};

const layout = async ({ children, params }: Props) => {
  const session = await auth();
  const agencyId = await verifyAndAcceptInvitation();

  if (!session?.user) redirect("agency/sign-in");
  if (!agencyId) redirect("/agency");

  //@ts-ignore
  if (session?.user?.role !== Role.AGENCY_ADMIN && session?.user?.role !== Role.AGENCY_OWNER) return <Unauthorized />;
  //=>TODO: notification

  return (
    <div className="h-screen overflow-hidden">
      <Sidebar
        id={params.agencyId}
        type="agency"
      />
      <div className="md:pl-[300px]">
        <InfoBar/>
        <div className="relative">

          <BlurPage>{children}</BlurPage>
        </div>
      </div>
    </div>
  );
};

export default layout;
