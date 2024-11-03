import React from "react";

import FunnelForm from "@/components/forms/funnel-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import FunnelProductsTable from "./funnel-products-table";
import { db } from "@/lib/db";
import connectDb from "@/lib/dbConnect";
import { Funnel } from "@prisma/client";

interface FunnelSettingsProps {
  subaccountId: string;
  defaultData: Funnel;
}

const FunnelSettings: React.FC<FunnelSettingsProps> = async ({ subaccountId, defaultData }) => {
  //CHALLENGE: go connect your stripe to sell products
  await connectDb();
  const subaccountDetails = await db.subAccount.findUnique({
    where: {
      id: subaccountId,
    },
  });

  if (!subaccountDetails) return;
  // if (!subaccountDetails.connectAccountId) return;
  // const products = await getConnectAccountProducts(subaccountDetails.connectAccountId);

  return (
    <div className="flex gap-4 flex-col xl:!flex-row">
      <Card className="flex-1 flex-shrink">
        <CardHeader>
          <CardTitle>Funnel Products</CardTitle>
          <CardDescription>Select the products and services you wish to sell on this funnel. You can sell one time and recurring products too.</CardDescription>
        </CardHeader>
        <CardContent>
          <>
          {/* use in stripe connects */}
            {
              /* {subaccountDetails.connectAccountId ? (
              <FunnelProductsTable
                defaultData={defaultData}
                products={products}
              />
            ) : ( */

              "Connect your stripe account to sell products."
            }
          </>
        </CardContent>
      </Card>

      <FunnelForm
        subAccountId={subaccountId}
        defaultData={defaultData}
      />
    </div>
  );
};

export default FunnelSettings;
