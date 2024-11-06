
import { getUserDetails } from "@/lib/queries";
import React from "react";
import MenuOptions from "./MenuOptions";

type Props = {
  id: string;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  
  const user = await getUserDetails();
  if (!user) return null;

  if (!user?.Agency) return;

  const details = type === "agency" ? user?.Agency : user.Agency.SubAccount.find((subacc: any) => subacc.id === id);

  let whiteLable = user?.Agency?.whiteLabel;
  let sidebarLogo = user?.Agency?.agencyLogo || "/azeorex.png";

  if (!whiteLable) {
    if (type === "subaccount") {
      sidebarLogo = user?.Agency.SubAccount.find((subacc: any) => subacc.id === id)?.subAccountLogo || user.Agency.agencyLogo;
    }
  }
  const sideBarOpt = type === "agency" ? user.Agency.SidebarOption || [] : user.Agency.SubAccount.find((subacc: any) => subacc.id === id)?.SidebarOption || [];
  const subaccounts = user.Agency.SubAccount.filter((subacc: any) => user.Permissions.find((permission: any) => permission.SubAccount === subacc._id && permission.access));
    
  return (
    <>
      <MenuOptions
        type={type}
        defaultOption={true}
        subAccounts={subaccounts}
        sideBarOpt={sideBarOpt}
        sidebarLogo={sidebarLogo}
        details={details}
        user={user}
        id={id}
      />
      {/* <MenuOptions
        subAccounts={subaccounts}
        sideBarOptJson={JSON.stringify(sideBarOpt)}
        sidebarLogo={sidebarLogo}
        detailsJson={JSON.stringify(details)}
        userJson={JSON.stringify(user)}
        id={id}
      /> */}
    </>
  );
};

export default Sidebar;
