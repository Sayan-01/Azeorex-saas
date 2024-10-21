"use server";

import { redirect } from "next/navigation";
import { auth, signOut } from "../../auth";
import { Agency, Invitation, Notification, SubAccount, User } from "../../models/schema";
import connectDb from "./dbConnect";
import { IAgency, IUser, Role } from "@/types/types";
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
  return response;
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
    const agency = await Agency.findOne({
      companyEmail: session?.user?.email,
    });    
    return agency ? agency._id : null;
  }
};

//=============================================================

export const initUser = async (newUser: Partial<IUser>) => {
  const session = await auth();
  if (!session) return;
  connectDb();

  const userData = await User.findOneAndUpdate(
    { email: newUser.email }, // Search for user by email
    {
      $set: newUser, // Update with new user data
      $setOnInsert: {
        image: newUser.image,
        email: newUser.email,
        name: `${newUser.username}`,
        role: newUser.role || Role.SUBACCOUNT_USER,
      },
    },
    {
      upsert: true, // Insert if the user doesn't exist
      new: true, // Return the updated document
      setDefaultsOnInsert: true, // Apply schema defaults when inserting
    }
  );

  const userSession = await getSession();
  if (userSession && userSession.user) {
    // @ts-ignore: Ignore type error for role
    userSession.user.role = newUser.role || "SUBACCOUNT_USER";
  }

  return userData;
};

  //============================================================================

export const updateUserRole = async (newUser: Partial<IUser>) => {
  const session = await auth();
  if (!session) return;
  connectDb();
  console.log("sssss",newUser.role);
  

  await User.findOneAndUpdate(
    { email: session?.user?.email }, // Search for user by email
    {
      role: newUser.role || Role.SUBACCOUNT_USER,
    }
  );



};

export const upsertAgency = async (agency: Partial<IAgency>) => {
  if (!agency.companyEmail) return null;

  try {
    await connectDb();
    const user = await User.findOne({ email: agency.companyEmail });
    if (!user) {
      throw new Error("User not found");
    }

    let agencyDetails = await Agency.create({
      ...agency,
      users: [user._id],
    });

    if (agencyDetails) {
      // Update the agency's sidebar options
      agencyDetails.sidebarOptions = [
        {
          name: "Dashboard",
          icon: "category",
          link: `/agency/${agencyDetails._id.toString()}`,
        },
        {
          name: "Launchpad",
          icon: "clipboardIcon",
          link: `/agency/${agencyDetails._id.toString()}/launchpad`,
        },
        {
          name: "Billing",
          icon: "payment",
          link: `/agency/${agencyDetails._id.toString()}/billing`,
        },
        {
          name: "Settings",
          icon: "settings",
          link: `/agency/${agencyDetails._id.toString()}/settings`,
        },
        {
          name: "Sub Accounts",
          icon: "person",
          link: `/agency/${agencyDetails._id.toString()}/all-subaccounts`,
        },
        {
          name: "Team",
          icon: "shield",
          link: `/agency/${agencyDetails._id.toString()}/team`,
        },
      ];

      await agencyDetails.save();

    }

    return null;
  } catch (error) {
    console.log("err", error);
    return null;
  }
};
