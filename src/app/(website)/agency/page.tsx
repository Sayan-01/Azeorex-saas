import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../../auth";
import { getUserDetails } from "@/lib/queries";
import Agency_details from "@/components/forms/Agency_details";

const page = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");

  const user = await getUserDetails();
  if (!user) {
    return <div>page</div>;
  }
  return (
    <div className="flex justify-center items-center mt-4">
      <div className=" max-w-[850px] border-[1px] p-4 rounded-xl">
        <h1 className="text-4xl">Create An Agency</h1>
        <Agency_details />
      </div>
    </div>
  )
};

export default page;
