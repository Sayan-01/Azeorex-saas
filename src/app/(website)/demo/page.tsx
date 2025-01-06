
import EditorProvider from "../../../../providers/editor/editor-provider";
import FunnelEditorNavigation from "../subaccount/[subaccountId]/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor-navigation";
import FunnelEditor from "../subaccount/[subaccountId]/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor";
import FunnelEditorSidebar from "../subaccount/[subaccountId]/funnels/[funnelId]/editor/[funnelPageId]/_components/funnel-editor-sidebar";

type Props = {
  params: {
    subaccountId: string;
    funnelId: string;
    funnelPageId: string;
  };
};

const page = async ({ params }: Props) => {
  const funnelPageDetails = {
    id: "123",
    name: "test",
    pathName: "text",
    createdAt: 123,
    updatedAt: 123,
    visits: 0,
    content: "",
    order: 2,
    previewImage: null,
    funnelId: "8dc050a4-6062-4163-83ce-deeafa4a1282",
  } as any;

  return (
    <div className="fixed top-0 bottom-0 border-x border-main-az left-0 right-0 z-20 bg-zinc-950 overflow-hidden">
      {/* starts from 16:39 */}
      <EditorProvider
        subaccountId={"809f3a62-c48c-4005-93ae-128c92a8da05"}
        funnelId={"8dc050a4-6062-4163-83ce-deeafa4a1282"}
        pageDetails={funnelPageDetails}
      >
        <FunnelEditorNavigation
          funnelId={"8dc050a4-6062-4163-83ce-deeafa4a1282"}
          funnelPageDetails={funnelPageDetails}
          subaccountId={"809f3a62-c48c-4005-93ae-128c92a8da05"}
        />
        <div className="h-full flex justify-center ">
          <FunnelEditor funnelPageId={"6b642563-4a17-4f97-a215-2446cefa5da7"} />
        </div>
        <FunnelEditorSidebar subaccountId={"809f3a62-c48c-4005-93ae-128c92a8da05"} />
      </EditorProvider>
    </div>
  );
};

export default page;
