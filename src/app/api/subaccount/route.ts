import connectDb from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { Agency, SubAccount, User } from "../../../../models/schema";
import { updateAgency } from "@/lib/queries";

export const POST = async (req: any) => {

  let subaccount = await req.json()

  if (!subaccount.companyEmail) return null;

  try {
    await connectDb();
    const user = await User.findOne({ email: subaccount.companyEmail });
    if (!user) {
      throw new Error("User not found");
    }

    const agencyDetails = await Agency.findById(subaccount.agencyId);

    let subaccountDetails = await SubAccount.create({
      ...subaccount,
    });

    if (subaccountDetails) {
      // Update the agency's sidebar options
      (subaccountDetails.sidebarOptions = [
        {
          name: "Dashboard",
          icon: "category",
          link: `/subaccount/${subaccountDetails._id}`,
        },
        {
          name: "Funnels",
          icon: "pipelines",
          link: `/subaccount/${subaccountDetails._id}/funnels`,
        },
        {
          name: "Media",
          icon: "database",
          link: `/subaccount/${subaccountDetails._id}/media`,
        },
        {
          name: "Pipelines",
          icon: "flag",
          link: `/subaccount/${subaccountDetails._id}/pipelines`,
        },
        {
          name: "Automations",
          icon: "chip",
          link: `/subaccount/${subaccountDetails._id}/automations`,
        },
        {
          name: "Contacts",
          icon: "person",
          link: `/subaccount/${subaccountDetails._id}/contacts`,
        },
        {
          name: "Settings",
          icon: "settings",
          link: `/subaccount/${subaccountDetails._id}/settings`,
        },
        {
          name: "Launchpad",
          icon: "clipboardIcon",
          link: `/subaccount/${subaccountDetails._id}/launchpad`,
        },
      ]),
        (subaccountDetails.permissions = [
          {
            access: true,
            email: agencyDetails.email,
            _id: subaccountDetails._id, // Use _id in Mongoose for ObjectId
          },
        ]),
        await subaccountDetails.save();
      await updateAgency(agencyDetails, subaccountDetails._id);

      return NextResponse.json(subaccountDetails);
    }

    return null;
  } catch (error) {
    console.log("err", error);
    return null;
  }
};
