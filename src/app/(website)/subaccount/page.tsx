import Unauthorized from "@/components/unauthorized";
import { getUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import React from "react";

type Props = {searchParams: {state: string}};

const page = async(props: Props) => {
  const agencyId = await verifyAndAcceptInvitation()

  if (!agencyId){
    return <Unauthorized/>
  }

  const user = await getUserDetails()
  if(!user) return

  return <div>page</div>;
};

export default page;
