"use server";

import { auth } from "../../auth";
import { User } from "../../models/schema";
import connectDb from "./dbConnect";

export const getUserDetails = async () => {
  const session = await auth();
  if (!session) return;
  connectDb();

  const userData = await User.findOne({ email: session?.user?.email })
    // .populate({
    //   path: "agencyId",
    //   populate: [
    //     { path: "SidebarOption" }, // Populate SidebarOption inside Agency
    //     {
    //       path: "SubAccount",
    //       populate: { path: "SidebarOption" }, // Populate SidebarOption inside SubAccount
    //     },
    //   ],
    // })
    // .populate("Permissions")
    // .exec();
  console.log(userData);

  return userData;
};
