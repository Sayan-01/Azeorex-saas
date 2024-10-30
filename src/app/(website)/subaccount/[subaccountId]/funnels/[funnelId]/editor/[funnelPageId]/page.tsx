import React from "react";
import { FunnelPage } from "../../../../../../../../../models/schema";
import { redirect } from "next/navigation";

type Props = {
  params: {
    subaccountId: string;
    funnelId: string;
    funnenPageId: string;
  };
};

const page = async ({ params }: Props) => {
  const funnelPageDetails = await FunnelPage.findById(params.funnelId);
  if (!funnelPageDetails) {
    return redirect(`/subaccount/${params.subaccountId}/funnels/${params.funnelId}`);
  }

  return <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-zinc-950 overflow-hidden">page</div>;
};

export default page;
