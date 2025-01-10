"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import clsx from "clsx";
import React from "react";
import TabList from "./tabs";
import SettingsTab from "./tabs/settings-tab";
import MediaBucketTab from "./tabs/media-bucket-tab";
import ComponentsTab from "./tabs/components-tab";
import { useEditor } from "../../../../../../../../../../../providers/editor/editor-provider";
import LayersTab from "./tabs/layers-tab";

type Props = {
  subaccountId: string;
};

const FunnelEditorSidebar = ({ subaccountId }: Props) => {
  const { state } = useEditor();

  return (
    <>
      <Sheet
        open={true}
        modal={false}
      >
        <Tabs
          className="w-full h-[80%]"
          defaultValue="Components"
        >
          <TabList className={clsx({ hidden: state.editor.previewMode })} />
          <SheetContent
            showX={false}
            side="left"
            className={clsx("mt-[81.8px] h-full border-b border-main-az ml-[1px] w-[240px] z-[40] shadow-none p-0  bg-background transition-all overflow-hidden border-none  rounded-none", {
              hidden: state.editor.previewMode,
            })}
          >
            <div className="grid gap-4 h-full w-[240px] pb-12 overflow-auto overflow-x-hidden box bg-[#151515] border-r border-main-az">
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
      <Sheet
        open={true}
        modal={false}
      >
        <Tabs
          className="w-full"
          defaultValue="Settings"
        >
          <SheetContent
            showX={false}
            side="right"
            className={clsx("mt-[40.8px] mr-[1px] w-[240px] z-[40] shadow-none p-0  bg-background h-full transition-all overflow-hidden border-none  rounded-none", {
              hidden: state.editor.previewMode,
            })}
          >
            <div className="grid gap-4 h-full w-[240px] pb-4 overflow-auto overflow-x-hidden box border-l border-main-az">
              <TabsContent value="Settings">
                <SettingsTab />
              </TabsContent>
            </div>
          </SheetContent>
        </Tabs>
      </Sheet>
    </>
  );
};

export default FunnelEditorSidebar;
