import { redirect } from "next/navigation";
import React from "react";

type Props = { params: { funnelId: string; subAccountId: string } };

const FunnelPage = async ({ params }: Props) => {
  const funnelPages = await getFunnel ()
  if(!funnelPages) redirect (`/subaccount/${params.subAccountId}/funnels`)
  return <div>FunnelPage</div>;
};

export default FunnelPage;
