import React from "react";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { getFunnels } from "@/lib/queries";
import FunnelsDataTable from "./data-table";
import FunnelForm from "@/components/forms/funnel-form";
import BlurPage from "@/components/global/blur-page";

const Funnels = async ({ params }: { params: { subaccountId: string } }) => {

  const funnels = await getFunnels(params.subaccountId);
  if (!funnels) return null;

  return (
    <BlurPage>
      <FunnelsDataTable
        actionButtonText={
          <>
            <Plus size={15} />
            Create Funnel
          </>
        }
        modalChildren={<FunnelForm subAccountId={params.subaccountId}></FunnelForm>}
        filterValue="name"
        columns={columns}
        data={funnels}
      />
    </BlurPage>
  );
};

export default Funnels;
