import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../../auth";
import { getUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import Agency_form from "@/components/forms/Agency_form";
import Unauthorized from "@/components/unauthorized";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/agency/sign-in");

  const agencyId = await verifyAndAcceptInvitation();    

  const res = await getUserDetails(); 
  const user = await res.json() 

  if (agencyId) {
    if (user?.role === "SUBACCOUNT_GUEST" || user?.role === "SUBACCOUNT_USER") {
      return redirect("/subaccount");
    } else if (user?.role === "AGENCY_OWNER" || user?.role === "AGENCY_ADMIN") {
      return redirect(`/agency/${agencyId}`);
    } else {
      return <div><Unauthorized/></div>;
    }
  }
  
  return (
    <div className="flex justify-center items-center my-4">
      <div className=" max-w-[850px]  p-4 rounded-xl">
        <h1 className="text-4xl font-bold mb-5">Create An Agency</h1>
        <Agency_form data={{companyEmail: session?.user?.email ?? undefined}} />
      </div>
    </div>
  );
};

export default page;
