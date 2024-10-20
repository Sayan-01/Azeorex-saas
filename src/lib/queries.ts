"use server";

import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { Invitation, Notification, SubAccount, User } from "../../models/schema";
import connectDb from "./dbConnect";
import { IUser } from "@/types/types";
import { getSession } from "next-auth/react";

//============================================================

export const getUserDetails = async () => {
  const session = await auth();
  if (!session) redirect("/agency/sign-in");
  connectDb();

  const userData = await User.findOne({ email: session?.user?.email })
    .populate({
      path: "agencyId",
      populate: [
        { path: "sidebarOption" }, // Populate SidebarOption inside Agency
        {
          path: "subAccount",
          populate: { path: "sidebarOption" }, // Populate SidebarOption inside SubAccount
        },
      ],
    })
    .populate("permissions")
    .exec();
  return userData;
};
//=============================================================

export const saveActivityLogsNotification = async ({ agencyId, description, subAccountId }: { agencyId: string; description: string; subAccountId?: string }) => {
  const session = await auth();
  if (!session) redirect("/agency/sign-in");
  connectDb();

  let userData;

  if (session?.user) {
    userData = await User.findOne({
      email: session?.user?.email,
    });
  } else {
    console.log("User not find");
    return;
  }

  let foundAgencyId = agencyId;
  if (!foundAgencyId) {
    if (!subAccountId) {
      throw new Error("You need to provide at least an agency Id or subaccount Id");
    }
    const response = await SubAccount.findById(subAccountId);
    if (response) {
      foundAgencyId = response.agencyId;
    }
  }
  if (subAccountId) {
    await Notification.create({
      notification: `${session?.user?.name} | ${description}`,
      agencyId: foundAgencyId,
      subAccountId: subAccountId,
      userId: session?.user?.id,
    });
  } else {
    await Notification.create({
      notification: `${session?.user?.name} | ${description}`,
      agencyId: foundAgencyId,
      userId: session?.user?.id,
    });
  }
};

//=============================================================

export const createTeameUser = async (agencyId: string, user: Partial<IUser>) => {
  if (user.role === "AGENCY_OWNER") return null;
  const response = await User.create({ ...user });
  return response
};

export const verifyAndAcceptInvitation = async () => {
  const session = await auth();
  if (!session) redirect("/agency/sign-in");
  connectDb();

  const invitationExist = await Invitation.findOne({
    email: session?.user?.email,
    status: "PENDING",
  });

  if (invitationExist) {
    const userDetails = await createTeameUser(invitationExist?.agencyId, {
      email: invitationExist.email,
      agencyId: invitationExist.agencyId,
      image: `${session?.user?.image}`,
      username: `${session?.user?.name}`,
      createdAt: new Date(),
      role: invitationExist.role,
    });
    await saveActivityLogsNotification({ agencyId: invitationExist?.agencyId, description: "Joined" });

    if (userDetails) {
      const session = await getSession();
      if (session && session.user) {
        // @ts-ignore: Ignore type error for role
        session.user.role = userDetails.role || "SUBACCOUNT_USER";
      }
      await Invitation.deleteOne({ email: userDetails?.email });

      return userDetails.agencyId;
    } else return null;
  } else {
    const agency = await User.findOne({
      email: session?.user?.email,
    });
    return agency ? agency.agencyId : null;
  }
};

//=============================================================
