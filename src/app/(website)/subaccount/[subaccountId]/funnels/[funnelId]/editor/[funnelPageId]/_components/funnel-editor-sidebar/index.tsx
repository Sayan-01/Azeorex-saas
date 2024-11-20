"use client";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import clsx from "clsx";
import React from "react";
import TabList from "./tabs";
import SettingsTab from "./tabs/settings-tab";
import MediaBucketTab from "./tabs/media-bucket-tab";
import ComponentsTab from "./tabs/components-tab";
import { useEditor } from "../../../../../../../../../../../providers/editor/editor-provider";
import LayersTab from "./tabs/layers-tab";
import Sidebar from "./tabs/m_ali";

type Props = {
  subaccountId: string;
};

const FunnelEditorSidebar = ({ subaccountId }: Props) => {
  const { state, dispatch } = useEditor();

  return (
    <Sheet
      open={true}
      modal={false}
    >
      <Tabs
        className="w-full"
        defaultValue="Settings"
      >
        <TabList className={clsx({ hidden: state.editor.previewMode })} />
        <SheetContent
          showX={false}
          side="right"
          className={clsx("mt-[48px] mr-[1px] w-[249px] z-[40] shadow-none p-0  bg-background h-full transition-all overflow-hidden border-none  rounded-none", { hidden: state.editor.previewMode })}
        >
          <div className="grid gap-4 h-full w-[249px] pb-32 overflow-auto overflow-x-hidden box">
            <TabsContent value="Settings">
              <SettingsTab />
              <Sidebar />
            </TabsContent>
            <TabsContent value="Media">
              <MediaBucketTab subaccountId={subaccountId} />
            </TabsContent>
            <TabsContent value="Components">
              <SheetHeader className="text-left p-3 ">
                <SheetTitle>Components</SheetTitle>
                <SheetDescription>You can drag and drop components on the canvas</SheetDescription>
              </SheetHeader>
              <ComponentsTab />
            </TabsContent>
            <TabsContent value="Layers">
              <LayersTab />
            </TabsContent>
          </div>
        </SheetContent>
      </Tabs>
    </Sheet>
  );
};

export default FunnelEditorSidebar;
