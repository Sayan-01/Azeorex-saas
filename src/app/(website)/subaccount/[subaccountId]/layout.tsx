import InfoBar from "@/components/global/InfoBar";
import Sidebar from "@/components/sidebar";
import Unauthorized from "@/components/unauthorized";
// import { getAuthUserDetails, getNotificationAndUser, verifyAndAcceptInvitation } from "@/lib/queries";
import { getNotificationAndUser, getUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../../../auth";

type Props = {
  children: React.ReactNode;
  params: { subaccountId: string };
};

const SubaccountLayout = async ({ children, params }: Props) => {
  const agencyId = await verifyAndAcceptInvitation();
  if (!agencyId) return <Unauthorized />;
  const session = await auth();
  const user = session?.user;
  if (!user) {
    return redirect("/");
  }

  let notifications: any = [];

  if (!user.name) {
    return <Unauthorized />;
  } else {
    const allPermissions = await getUserDetails();
    const hasPermission = allPermissions?.Permissions.find((permissions) => permissions.access && permissions.subAccountId === params.subaccountId);
    if (!hasPermission) {
      return <Unauthorized />;
    }

    const allNotifications = await getNotificationAndUser(agencyId);

    //@ts-expect-error
    if (user.role === "AGENCY_ADMIN" || user.role === "AGENCY_OWNER") {
      notifications = allNotifications;
    } else {
      const filteredNoti = allNotifications?.filter((item) => item.subAccountId === params.subaccountId);
      if (filteredNoti) notifications = filteredNoti;
    }
  }

  return (
    <div className="box h-screen overflow-scroll ">
      <Sidebar
        id={params.subaccountId}
        type="subaccount"
      />

      <div className="md:pl-[300px]">
        <InfoBar
        // notifications={notifications}
        // role={user.privateMetadata.role as Role}
        // subAccountId={params.subaccountId as string}
        />
        <div className="relative">{children}</div>
      </div>
    </div>
  );
};

export default SubaccountLayout;
