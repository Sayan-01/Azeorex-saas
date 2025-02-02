import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import EditorProvider from "../../../../../../../../../providers/editor/editor-provider";
import FunnelEditor from "./_components/funnel-editor";
import FunnelEditorNavigation from "./_components/funnel-editor-navigation";
import FunnelEditorSidebar from "./_components/funnel-editor-sidebar";

type Props = {
  params: {
    subaccountId: string;
    funnelId: string;
    funnelPageId: string;
  };
};

const page = async ({ params }: Props) => {
  const funnelPageDetails = await db.funnelPage.findFirst({
    where: {
      id: params.funnelPageId,
    },
  });
  if (!funnelPageDetails) {
    return redirect(`/subaccount/${params.subaccountId}/funnels/${params.funnelId}`);
  }

  return (
    <div className="fixed top-0 bottom-0 border-x border-main-az left-0 right-0 z-20 bg-zinc-950 overflow-hidden">
      {/* starts from 16:39 */}
      <EditorProvider
        subaccountId={params.subaccountId}
        funnelId={params.funnelId}
        pageDetails={funnelPageDetails}
      >
        <FunnelEditorNavigation
          funnelId={params.funnelId}
          funnelPageDetails={funnelPageDetails}
          subaccountId={params.subaccountId}
        />
        <div className="h-full flex justify-center ">
          <FunnelEditor funnelPageId={params.funnelPageId} />
        </div>
        <FunnelEditorSidebar subaccountId={params.subaccountId} />
      </EditorProvider>
    </div>
  );
};

export default page;
