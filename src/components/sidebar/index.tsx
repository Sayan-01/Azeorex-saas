import { getUserDetails } from "@/lib/queries";
import React from "react";
import MenuOptions from "./MenuOptions";

type Props = {
  id: String;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  const user = await getUserDetails();
  if (!user) return;
  if(!user?.agencyId) return
  let sidebarLogo = '/azeorex.png'

  return <div>
    <MenuOptions defaultOption={true}  />
  </div>;
};

export default Sidebar;
