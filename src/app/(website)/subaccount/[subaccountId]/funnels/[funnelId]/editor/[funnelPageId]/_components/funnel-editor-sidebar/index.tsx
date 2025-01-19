"use client";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import clsx from "clsx";
import React from "react";
import TabList from "./tabs";
import SettingsTab from "./tabs/settings-tab";
import MediaBucketTab from "./tabs/media-bucket-tab";
import ComponentsTab from "./tabs/components-tab";
import { useEditor } from "../../../../../../../../../../../providers/editor/editor-provider";
import LayersTab from "./tabs/layers-tab";
import WarframeTab from "./tabs/warframe-tab";
import LayoutTab from "./tabs/Layout";

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
          className="w-full h-full"
          defaultValue="Components"
        >
          <TabList className={clsx({ "-top-[44.8px]": state.editor.previewMode })} />
          <SheetContent
            showX={false}
            side="left"
            className={clsx("mt-[48.8px] h-full border-b border-main-az ml-[1px] w-[240px] z-[40] shadow-none p-0  bg-background transition-all overflow-x-hidden border-none  rounded-none", {
              hidden: state.editor.previewMode,
            })}
          >
            <div className="grid gap-4 h-full w-[240px] pb-12 overflow-auto overflow-x-hidden box bg-editor-bcgc border-r border-main-az">
              <TabsContent value="Media">
                <MediaBucketTab subaccountId={subaccountId} />
              </TabsContent>
              <TabsContent value="Components">
                <Tabs defaultValue="Components">
                  <div className="flex items-center p-3 border-b  border-main-az">
                    <TabsList className="w-full justify-between gap-2 p-[1px] h-[31px] rounded-lg bg-[#242424] text-sm">
                      <TabsTrigger
                        value="Components"
                        className="w-full h-7 data-[state=active]:bg-zinc-700"
                      >
                        Components
                      </TabsTrigger>
                      <TabsTrigger
                        value="Warframe"
                        className="w-full h-7 data-[state=active]:bg-zinc-700"
                      >
                        Warframe
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <TabsContent value="Components">
                    <SheetHeader className="text-left p-3 ">
                      <SheetTitle>Components</SheetTitle>
                      <SheetDescription>You can drag and drop components on the canvas</SheetDescription>
                    </SheetHeader>
                    <ComponentsTab />
                  </TabsContent>
                  <TabsContent value="Warframe">
                    <SheetHeader className="text-left p-3 ">
                      <SheetTitle>Warframe</SheetTitle>
                      <SheetDescription>You can drag and drop components on the canvas</SheetDescription>
                    </SheetHeader>
                    <WarframeTab />
                  </TabsContent>
                </Tabs>
              </TabsContent>
              <TabsContent value="Layers">
                <LayersTab />
              </TabsContent>
              <TabsContent value="Layout">
                <LayoutTab />
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
            className={clsx("mt-[48.8px] mr-[1px] w-[240px] z-[40] shadow-none p-0  bg-background h-full transition-all overflow-hidden border-none  rounded-none", {
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
