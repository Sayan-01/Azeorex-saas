import React from "react";
import { auth } from "../../../../../../auth";
import { Agency, User } from "../../../../../../models/schema";

type Props = { params: { agencyId: string } };

const page = async ({ params }: Props) => {
  const session = await auth();
  
  const userDetails = await User.findById(session?.user?.id);
  const agencyDetails = await Agency.findById(params.agencyId).populate("subAccountsId").exec();
  
  if (session?.user || agencyDetails) return null;

  const subAccountsId = agencyDetails.subAccountsId;

  return <div>page</div>;
};

export default page;
