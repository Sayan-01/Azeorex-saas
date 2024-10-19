"use server";

import { auth } from "../../auth";
import { User } from "../../models/schema";
import connectDb from "./dbConnect";

export const getUserDetails = async () => {

  const session = await auth();
  if (!session) return;
  connectDb();

  const userData = await User.findOne({ email: session?.user?.email })
    .populate({
      path: "agencyId",
      populate: [
        { path: "sidebarOptionId" }, // Populate SidebarOption inside Agency
        {
          path: "subAccountId",
          populate: { path: "sidebarOptionId" }, // Populate SidebarOption inside SubAccount
        },
      ],
    })
    .populate("permissionsId")
    .exec();
  console.log(userData);
  return userData;
};

// export const initUser = async (newUser: Partial<User>) => {

// }