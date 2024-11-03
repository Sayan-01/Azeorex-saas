"use server";

import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { CreateFunnelFormSchema } from "@/types/types";
import { getSession } from "next-auth/react";
import { z } from "zod";
import { db } from "./db";
import { v4 } from "uuid";
import { Agency, Plan, SubAccount, User } from "@prisma/client";

//============================================================

export const getUserDetails = async () => {
  const session = await auth();
  const user = session?.user;

  if (!user && !session) {
    return;
  }

  const userData = await db.user.findUnique({
    where: {
      email: user?.email as string,
    },
    include: {
      Agency: {
        include: {
          SidebarOption: true,
          SubAccount: {
            include: {
              SidebarOption: true,
            },
          },
        },
      },
      Permissions: true,
    },
  });

  return userData;
};

//=============================================================

export const saveActivityLogsNotification = async ({ agencyId, description, subAccountId }: { agencyId: string | undefined; description: string; subAccountId?: string | undefined }) => {
  const session = await auth();
  if (!session) redirect("/agency/sign-in");

  let userData;

  if (session?.user) {
    const response = await db.user.findFirst({
      where: {
        Agency: {
          SubAccount: {
            some: { id: subAccountId },
          },
        },
      },
    });
    if (response) {
      userData = response;
    }
  } else {
    console.log("User not find");
    return;
  }

  let foundAgencyId = agencyId;
  if (!foundAgencyId) {
    if (!subAccountId) {
      throw new Error("You need to provide at least an agency Id or subaccount Id");
    }
    const response = await db.subAccount.findUnique({
      where: { id: subAccountId },
    });
    if (response) foundAgencyId = response.agencyId;
  }
  if (subAccountId) {
    await db.notification.create({
      data: {
        notification: `${session?.user?.name} | ${description}`,
        User: {
          connect: {
            id: session?.user?.id,
          },
        },
        Agency: {
          connect: {
            id: foundAgencyId,
          },
        },
        SubAccount: {
          connect: { id: subAccountId },
        },
      },
    });
  } else {
    await db.notification.create({
      data: {
        notification: `${session?.user?.name} | ${description}`,
        User: {
          connect: {
            id: session?.user?.id,
          },
        },
        Agency: {
          connect: {
            id: foundAgencyId,
          },
        },
      },
    });
  }
};

//=============================================================

export const createTeamUser = async (agencyId: string, user: User) => {
  if (user.role === "AGENCY_OWNER") return null;
  const response = await db.user.create({ data: { ...user } });
  return response;
};

//=============================================================

export const verifyAndAcceptInvitation = async () => {
  const session = await auth();
  const user = session?.user;
  if (!session || !user) redirect("/agency/sign-in");

  const invitationExist = await db.invitation.findUnique({
    where: {
      email: session?.user?.email as string,
      status: "PENDING",
    },
  });

  if (invitationExist) {
    const userDetails = await createTeamUser(invitationExist?.agencyId, {
      email: invitationExist.email,
      agencyId: invitationExist.agencyId,
      id: user.id as string,
      avatarUrl: `${session?.user?.image}`,
      name: `${session?.user?.name}`,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: invitationExist.role,
    });
    await saveActivityLogsNotification({ agencyId: invitationExist?.agencyId, description: "Joined" });

    if (userDetails) {
      const session = await getSession();
      if (session && session.user) {
        // @ts-ignore: Ignore type error for role
        session.user.role = userDetails.role || "SUBACCOUNT_USER";
      }

      await db.invitation.delete({
        where: { email: userDetails.email },
      });

      return userDetails.agencyId;
    } else return null;
  } else {
    const agency = await db.user.findUnique({
      where: {
        email: user?.email as string,
      },
    });
    return agency ? agency.agencyId : null;
  }
};

//============================================================================

export const updateAgencyDetails = async (agencyId: string, agencyDetails: Partial<Agency>) => {
  const response = await db.agency.update({
    where: { id: agencyId },
    data: { ...agencyDetails },
  });
  return response;
};

//============================================================================

export const deleteAgency = async (agencyId: string) => {
  const response = await db.agency.delete({ where: { id: agencyId } });
  return response;
};

//============================================================================

export const upsertAgency = async (agency: Agency, price?: Plan) => {
  if (!agency.companyEmail) return null;
  try {
    const agencyDetails = await db.agency.upsert({
      where: {
        id: agency.id,
      },
      update: agency,
      create: {
        users: {
          connect: { email: agency.companyEmail },
        },
        ...agency,
        SidebarOption: {
          create: [
            {
              name: "Dashboard",
              icon: "category",
              link: `/agency/${agency.id}`,
            },
            {
              name: "Sub Accounts",
              icon: "person",
              link: `/agency/${agency.id}/all-subaccounts`,
            },
            {
              name: "Billing",
              icon: "payment",
              link: `/agency/${agency.id}/billing`,
            },
            {
              name: "Team",
              icon: "shield",
              link: `/agency/${agency.id}/team`,
            },
            {
              name: "Settings",
              icon: "settings",
              link: `/agency/${agency.id}/settings`,
            },
            {
              name: "Launchpad",
              icon: "clipboardIcon",
              link: `/agency/${agency.id}/launchpad`,
            },
          ],
        },
      },
    });
    return agencyDetails;
  } catch (error) {
    console.log(error);
  }
};

//=============================================================================

export const updateUserRole = async (newUser: Partial<User>) => {
  const session = await auth();
  if (!session) return;

  await db.user.update({
    where: { email: session?.user?.email as string }, // Search for user by email
    data: {
      role: newUser.role || "SUBACCOUNT_USER",
      agencyId: newUser.agencyId,
    },
  });
};

//==============================================================================

export const getNotificationAndUser = async (agencyId: string) => {
  try {
    const response = await db.notification.findMany({
      where: { agencyId },
      include: { User: true },
      orderBy: {
        createdAt: "desc",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//===============================================================================

export const upsertSubAccount = async (subAccount: SubAccount) => {
  if (!subAccount.companyEmail) return null;
  const agencyOwner = await db.user.findFirst({
    where: {
      Agency: {
        id: subAccount.agencyId,
      },
      role: "AGENCY_OWNER",
    },
  });
  if (!agencyOwner) return console.log("🔴Erorr could not create subaccount");
  const permissionId = v4();
  const response = await db.subAccount.upsert({
    where: { id: subAccount.id },
    update: subAccount,
    create: {
      ...subAccount,
      Permissions: {
        create: {
          access: true,
          email: agencyOwner.email,
          id: permissionId,
        },
        connect: {
          subAccountId: subAccount.id,
          id: permissionId,
        },
      },
      Pipeline: {
        create: { name: "Lead Cycle" },
      },
      SidebarOption: {
        create: [
          {
            name: "Launchpad",
            link: `/subaccount/${subAccount.id}/launchpad`,
            icon: "clipboardIcon",
          },
          {
            name: "Settings",
            link: `/subaccount/${subAccount.id}/settings`,
            icon: "settings",
          },
          {
            name: "Funnels",
            link: `/subaccount/${subAccount.id}/funnels`,
            icon: "pipelines",
          },
          {
            name: "Media",
            link: `/subaccount/${subAccount.id}/media`,
            icon: "database",
          },
          {
            name: "Automations",
            link: `/subaccount/${subAccount.id}/automations`,
            icon: "chip",
          },
          {
            name: "Pipelines",
            link: `/subaccount/${subAccount.id}/pipelines`,
            icon: "flag",
          },
          {
            name: "Contacts",
            link: `/subaccount/${subAccount.id}/contacts`,
            icon: "person",
          },
          {
            name: "Dashboard",
            link: `/subaccount/${subAccount.id}`,
            icon: "category",
          },
        ],
      },
    },
  });
  return response;
};

//===============================================================================

export const getUserPermissions = async (userId: string) => {
  const response = await db.user.findUnique({
    where: { id: userId },
    select: { Permissions: { include: { SubAccount: true } } },
  });

  return response;
};

//===============================================================================

export const getSubaccountDetails = async (subaccountId: string) => {
  const response = await db.subAccount.findUnique({
    where: {
      id: subaccountId,
    },
  });
  return response;
};

//===============================================================================

export const deleteSubAccount = async (subaccountId: string) => {
  const response = await db.subAccount.delete({
    where: {
      id: subaccountId,
    },
  });
  return response;
};

//================================================================================

export const getFunnel = async (funnelId: string) => {
  const funnel = await db.funnel.findUnique({
    where: { id: funnelId },
    include: {
      FunnelPages: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  return funnel;
};

//=============================================================================

export const getFunnels = async (subacountId: string) => {
  const funnels = await db.funnel.findMany({
    where: { subAccountId: subacountId },
    include: { FunnelPages: true },
  });

  return funnels;
};

//===============================================================================

export const upsertFunnel = async (subaccountId: string, funnel: z.infer<typeof CreateFunnelFormSchema> & { liveProducts: string }, funnelId: string) => {
  const response = await db.funnel.upsert({
    where: { id: funnelId },
    update: funnel,
    create: {
      ...funnel,
      id: funnelId || v4(),
      subAccountId: subaccountId,
    },
  });

  return response;
};

//==============================================================================

export const upsertFunnelPage = async (subaccountId: string, funnelPage: any, funnelId: string) => {
  if (!subaccountId || !funnelId) return;
  const response = await db.funnelPage.upsert({
    where: { id: funnelPage.id || "" },
    update: { ...funnelPage },
    create: {
      ...funnelPage,
      content: funnelPage.content
        ? funnelPage.content
        : JSON.stringify([
            {
              content: [],
              id: "__body",
              name: "Body",
              styles: { backgroundColor: "white" },
              type: "__body",
            },
          ]),
      funnelId,
    },
  });

  // revalidatePath(`/subaccount/${subaccountId}/funnels/${funnelId}`, "page");
  return response;
};
