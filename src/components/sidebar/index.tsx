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

  if (!user?.agencyId) return;

  const details = type === "agency" ? user.agencyId : user.agency.subAccountsId.find((subacc: any) => subacc._id === id);

  let whiteLable = user.agencyId.whiteLabel;
  let sidebarLogo = user.agencyId.agencyLogo || "/azeorex.png";

  if (!whiteLable) {
    if (type === "subaccount") {
      sidebarLogo = user?.agency.subAccountsId.find((subacc: any) => subacc._id === id)?.subAccountLogo || user.agencyID.agencyLogo;
    }
  }
  const sideBarOpt = type === "agency" ? user.agencyId.sidebarOptions || [] : user.agency.subAccountsId.find((subacc: any) => subacc._id === id) || [];
  const subaccounts = user.agencyId.subAccountsId.filter((subacc: any) => user.permissions.find((permission: any) => permission.subAccountsId === subacc._id && permission.access));
  return (
    <div>
      <MenuOptions
        defaultOption={true}
        details={details}
        id={id}
        sidebarLogo={sidebarLogo}
        sideBarOpt={sideBarOpt}
        subAccounts={subaccounts}
        user={user}
      />
      <MenuOptions
        details={details}
        id={id}
        sidebarLogo={sidebarLogo}
        sideBarOpt={sideBarOpt}
        subAccounts={subaccounts}
        user={user}
      />
    </div>
  );
};

export default Sidebar;
