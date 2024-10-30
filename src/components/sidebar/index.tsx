
import { getUserDetails } from "@/lib/queries";
import React from "react";
import MenuOptions from "./MenuOptions";

type Props = {
  id: string;
  type: "agency" | "subaccount";
};

const Sidebar = async ({ id, type }: Props) => {
  const res = await getUserDetails();
  const user = await res.json(); 
  if (!user) return null;

  if (!user?.agencyId) return;

  const details = type === "agency" ? user.agencyId : user.agencyId.subAccountsId.find((subacc: any) => subacc._id === id);

  let whiteLable = user.agencyId.whiteLabel;
  let sidebarLogo = user.agencyId.agencyLogo || "/azeorex.png";

  if (!whiteLable) {
    if (type === "subaccount") {
      sidebarLogo = user?.agencyId.subAccountsId.find((subacc: any) => subacc._id === id)?.subAccountLogo || user.agencyId.agencyLogo;
    }
  }
  const sideBarOpt = type === "agency" ? user.agencyId.sidebarOptions || [] : user.agencyId.subAccountsId.find((subacc: any) => subacc._id === id)?.sidebarOptions || [];
  const subaccounts = user.agencyId.subAccountsId.filter((subacc: any) => user.permissions.find((permission: any) => permission.subAccountsId === subacc._id && permission.access));
    
  return (
    <>
      <MenuOptions
        defaultOption={true}
        subAccounts={subaccounts}
        sideBarOptJson={JSON.stringify(sideBarOpt)}
        sidebarLogo={sidebarLogo}
        detailsJson={JSON.stringify(details)}
        userJson={JSON.stringify(user)}
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
