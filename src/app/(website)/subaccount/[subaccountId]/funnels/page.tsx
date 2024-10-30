import React from "react";
import { Plus } from "lucide-react";
import { columns } from "./columns";
import { getFunnels } from "@/lib/queries";
import FunnelsDataTable from "./data-table";
import FunnelForm from "@/components/forms/funnel-form";

const Funnels = async ({ params }: { params: { subaccountId: string } }) => {

  const res = await getFunnels(params.subaccountId);
  const funnels = JSON.parse(res || '')

  if (!funnels) return null;

  return (
    <>
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
    </>
  );
};

export default Funnels;
