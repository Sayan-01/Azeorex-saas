import { getUserDetails } from "@/lib/queries";
import React from "react";
import MenuOptions from "./MenuOptions";

type Props = {
  id: String;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  const user = await getUserDetails();
  if (!user) return null;

  if(!user?.agencyId) return
  let sidebarLogo = '/azeorex.png'

  const details = type ==="agency"?user.age
  return <div>
    <MenuOptions defaultOption={true}  />
  </div>;
};

export default Sidebar;
