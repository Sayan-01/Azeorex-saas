import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { Agency, User } from "../../../../models/schema";

export const POST = async (req: any) => {
  await connectDb();
  let payload = await req.json();

  const user = await User.findOne({ email: payload.companyEmail });
  if (!user) {
    throw new Error("User not found");
  }

  let agencyDetails = await Agency.create({
    ...payload,
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

  return NextResponse.json({ message: "Verification email send" }, { status: 200 });
};
