"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/custom-input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { saveActivityLogsNotification, upsertFunnelPage } from "@/lib/queries";
import { FunnelPage } from "@prisma/client";
import clsx from "clsx";
import { ArrowLeftCircle, EyeIcon, Laptop, Redo2, Smartphone, Tablet, Undo2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FocusEventHandler, useEffect } from "react";
import { DeviceTypes, useEditor } from "../../../../../../../../../../providers/editor/editor-provider";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

type Props = {
  funnelId: string;
  funnelPageDetails: FunnelPage;
  subaccountId: string;
};

const FunnelEditorNavigation = ({ funnelId, funnelPageDetails, subaccountId }: Props) => {
  const router = useRouter();
  const { state, dispatch } = useEditor();
  const { toast } = useToast();

  useEffect(() => {
    dispatch({
      type: "SET_FUNNELPAGE_ID",
      payload: { funnelPageId: funnelPageDetails.id },
    });
  }, [funnelPageDetails]);

  const handleOnBlurTitleChange: FocusEventHandler<HTMLInputElement> = async (event) => {
    if (event.target.value === funnelPageDetails.name) return;
    if (event.target.value) {
      await upsertFunnelPage(
        subaccountId,
        {
          id: funnelPageDetails.id,
          name: event.target.value,
          order: funnelPageDetails.order,
        },
        funnelId
      );

      toast({
        description: "✨Saved Funnel Page title",
      });
      router.refresh();
    } else {
      toast({
        description: "😫You need to have a title!",
      });
      event.target.value = funnelPageDetails.name;
    }
  };

  const handlePreviewClick = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
    dispatch({ type: "TOGGLE_LIVE_MODE" });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  const handleRedo = () => {
    dispatch({ type: "REDO" });
  };

  const handleOnSave = async () => {
    const content = JSON.stringify(state.editor.elements);
    try {
      const response = await upsertFunnelPage(
        subaccountId,
        {
          ...funnelPageDetails,
          content,
        },
        funnelId
      );
      await saveActivityLogsNotification({
        agencyId: undefined,
        description: `Updated a funnel page | ${response?.name}`,
        subAccountId: subaccountId,
      });
      toast({
        description: "✨Saved Editor",
      });
    } catch (error) {
      toast({
        description: "😫Could not save editor",
      });
    }
  };

  return (
    <TooltipProvider>
      <nav className={clsx("border- border-main-black flex items-center justify-between px-3 py-1 gap-2 transition-all", { "!h-0 !p-0 !overflow-hidden": state.editor.previewMode })}>
        <aside className="flex items-center gap-4 max-w-[260px] w-[300px]">
          <Link href={`/subaccount/${subaccountId}/funnels/${funnelId}`}>
            <Image src={"/azeorex.png"} alt="logo" width={32} height={32} className="rounded"/>
          </Link>
          <div className="flex flex-col w-full ">
            <Input
              defaultValue={funnelPageDetails.name}
              className="h-7 -ml-2 mt-0 text-lg"
              onBlur={handleOnBlurTitleChange}
            />
            {/* <span className="text-sm text-muted-foreground">Path: /{funnelPageDetails.pathName}</span> */}
          </div>
        </aside>
        <aside>
          <Tabs
            defaultValue="Desktop"
            className="w-fit "
            value={state.editor.device}
            onValueChange={(value) => {
              dispatch({
                type: "CHANGE_DEVICE",
                payload: { device: value as DeviceTypes },
              });
            }}
          >
            <TabsList className="grid w-full grid-cols-3 bg-transparent gap-4 h-fit">
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Desktop"
                    className="data-[state=active]:bg-muted w-8 h-8 p-0"
                  >
                    <Laptop size={18} />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Desktop</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Tablet"
                    className="w-8 h-8 p-0 data-[state=active]:bg-muted"
                  >
                    <Tablet size={18} />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tablet</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <TabsTrigger
                    value="Mobile"
                    className="w-8 h-8 p-0 data-[state=active]:bg-muted"
                  >
                    <Smartphone size={18} />
                  </TabsTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Mobile</p>
                </TooltipContent>
              </Tooltip>
            </TabsList>
          </Tabs>
        </aside>
        <aside className="flex items-center gap-0">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800"
            onClick={handlePreviewClick}
          >
            <EyeIcon size={18} />
          </Button>
          <Button
            disabled={!(state.history.currentIndex > 0)}
            onClick={handleUndo}
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800"
          >
            <Undo2 size={18} />
          </Button>
          <Button
            disabled={!(state.history.currentIndex < state.history.history.length - 1)}
            onClick={handleRedo}
            variant={"ghost"}
            size={"icon"}
            className="hover:bg-slate-800 mr-4"
          >
            <Redo2 size={18} />
          </Button>
          <div className="flex flex-col item-center mr-4">
            <div className="flex flex-row text-sm items-center gap-4">
              Draft
              <Switch
                disabled
                defaultChecked={true}
              />
              Publish
            </div>
            {/* <span className="text-muted-foreground text-sm">Last updated {funnelPageDetails.updatedAt.toLocaleDateString()}</span> */}
          </div>
          <Button
            size={"sm"}
            onClick={handleOnSave}
          >
            Save
          </Button>
        </aside>
      </nav>
    </TooltipProvider>
  );
};

export default FunnelEditorNavigation;
