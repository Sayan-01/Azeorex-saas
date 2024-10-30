"use client";
import { AlertDialog } from "@/components/ui/alert-dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IFunnelPage } from "@/types/types";
import { Check, ExternalLink, LucideEdit } from "lucide-react";
import { DragDropContext, DragStart, DropResult, Droppable } from "react-beautiful-dnd";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import FunnelStepCard from "./funnel-step-card";
import { addFunnelPage } from "@/lib/queries";
import { Button } from "@/components/ui/button";
import CustomModal from "@/components/global/CustomModal";
import { useModal } from "../../../../../../../../providers/model-provider";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import CreateFunnelPage from "@/components/forms/funnel-page";
import FunnelPagePlaceholder from "@/icons/funnel-page-placeholder";

type Props = { funnel: any; subaccountId: string; pages: IFunnelPage[]; funnelId: string };


const FunnelSteps = ({ funnel, subaccountId, pages, funnelId }: Props) => {
  console.log("pages", pages);
  const [clickedPage, setClickedPage] = useState<IFunnelPage | undefined>(pages[0]);
  const [pagesState, setPagesState] = useState<any | undefined>(pages);
  const { toast } = useToast();
  const { setOpen } = useModal();
  

  const onDragStart = (event: DragStart) => {
    //current chosen page
    const { draggableId } = event;
    const value = pagesState.find((page: any) => page.id === draggableId);
  };

  const onDragEnd = (dropResult: DropResult) => {
    const { destination, source } = dropResult;

    //no destination or same position
    if (!destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
      return;
    }
    //change state
    const newPageOrder = [...pagesState]
      .toSpliced(source.index, 1)
      .toSpliced(destination.index, 0, pagesState[source.index])
      .map((page, idx) => {
        return { ...page, order: idx };
      });

    setPagesState(newPageOrder);
    newPageOrder.forEach(async (page, index) => {
      try {
        await addFunnelPage(
          subaccountId,
          {
            order: index,
            name: page.name,
          },
          funnelId
        );
      } catch (error) {
        console.log(error);
        toast({
          variant: "destructive",
          title: "Failed",
          description: "Could not save page order",
        });
        return;
      }
    });

    toast({
      title: "Success",
      description: "Saved page order",
    });
  };

  return (
    <AlertDialog>
      <div className="flex border-[1px] lg:!flex-row flex-col ">
        <aside className="flex-[0.3] bg-background p-6  flex flex-col justify-between ">
          <ScrollArea className="h-full ">
            <div className="flex gap-4 items-center">
              <Check />
              Funnel Steps
            </div>
            {pagesState.length ? (
              <DragDropContext
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
              >
                <Droppable
                  droppableId="funnels"
                  direction="vertical"
                  key="funnels"
                >
                  {(provided) => (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {pagesState.map((page: any, idx: any) => (
                        <div
                          className="relative"
                          key={page._id}
                          onClick={() => setClickedPage(page)}
                        >
                          <FunnelStepCard
                            funnelPage={page}
                            index={idx}
                            key={page.id}
                            activePage={page._id === clickedPage?._id}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              <div className="text-center text-muted-foreground py-6">No Pages</div>
            )}
          </ScrollArea>
          <Button
            className="mt-4 w-full"
            onClick={() => {
              setOpen(
                <CustomModal
                  title=" Create or Update a Funnel Page"
                  subheading="Funnel Pages allow you to create step by step processes for customers to follow"
                >
                  <CreateFunnelPage
                    subaccountId={subaccountId}
                    funnelId={funnelId}
                    order={pagesState.length}
                  />
                </CustomModal>
              );
            }}
          >
            Create New Steps
          </Button>
        </aside>
        <aside className="flex-[0.7] ~ p-4 ">
          {!!pages.length ? (
            <Card className="h-full flex justify-between flex-col">
              <CardHeader>
                <p className="text-sm text-muted-foreground">Page name</p>
                <CardTitle>{clickedPage?.name}</CardTitle>
                <CardDescription className="flex flex-col gap-4">
                  <div className="border-2 rounded-lg sm:w-80 w-full  overflow-clip">
                    <Link
                      href={`/subaccount/${subaccountId}/funnels/${funnelId}/editor/${clickedPage?._id}`}
                      className="relative group"
                    >
                      <div className="cursor-pointer group-hover:opacity-30 w-full">
                        <FunnelPagePlaceholder />
                      </div>
                      <LucideEdit
                        size={50}
                        className="!text-muted-foreground absolute top-1/2 left-1/2 opacity-0 transofrm -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-all duration-100"
                      />
                    </Link>

                    <Link
                      target="_blank"
                      href={`${process.env.NEXT_URL}${funnel.subDomainName}.${process.env.NEXT_URL}/${clickedPage?.pathName}`}
                      className="group flex items-center justify-start p-2 gap-2 hover:text-primary transition-colors duration-200"
                    >
                      <ExternalLink size={15} />
                      <div className="w-64 overflow-hidden overflow-ellipsis ">
                        {process.env.NEXT_URL}
                        {funnel.subDomainName}.{process.env.NEXT_URL}/{clickedPage?.pathName}
                      </div>
                    </Link>
                  </div>

                  <CreateFunnelPage
                    subaccountId={subaccountId}
                    defaultData={clickedPage}
                    funnelId={funnelId}
                    order={clickedPage?.order as number || 0}
                  />
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="h-[600px] flex items-center justify-center text-muted-foreground">Create a page to view page settings.</div>
          )}
        </aside>
      </div>
    </AlertDialog>
  );
};

export default FunnelSteps;
