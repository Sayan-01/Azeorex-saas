import React from "react";
import { auth } from "../../../../../auth";
import { verifyAndAcceptInvitation } from "@/lib/queries";
import { redirect } from "next/navigation";
import { Role } from "@/types/types";
import Unauthorized from "@/components/unauthorized";
import Sidebar from "@/components/sidebar";

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
  if (session?.user?.role !== Role.AGENCY_ADMIN && session?.user?.role !== Role.AGENCY_OWNER) return <Unauthorized/>
  //=>TODO: notification
  return <div className="h-screen overflow-hidden">
    <Sidebar id={params.agencyId} type="agency"/>
    <div></div>
    {children}
  </div>
};

export default layout;
