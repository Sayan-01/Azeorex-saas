import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { EditorBtns } from "@/types/types";
import React, { useState } from "react";
import TextPlaceholder from "./text-placeholder";
import ContainerPlaceholder from "./container-placeholder";
import VideoPlaceholder from "./video-placeholder";
import TwoColumnsPlaceholder from "./two-columns-placeholder";
import LinkPlaceholder from "./link-placeholder";
import ContactFormComponentPlaceholder from "./contact-form-placeholder";
import CheckoutPlaceholder from "./checkout-placeholder";
import SectionPlaceholder from "./section-placeholder";
import { EditorElement, useEditor } from "../../../../../../../../../../../../../providers/editor/editor-provider";
import { Button } from "@/components/ui/button";

const ComponentsTab = () => {
  const { state } = useEditor();
  const [components, setComponents] = useState<any>([]);


  const elements: {
    Component: React.ReactNode;
    label: string;
    id: EditorBtns;
    group: "layout" | "elements";
  }[] = [
    {
      Component: <TextPlaceholder />,
      label: "Text",
      id: "text",
      group: "elements",
    },
    {
      Component: <ContainerPlaceholder />,
      label: "Container",
      id: "container",
      group: "layout",
    },
    {
      Component: <TwoColumnsPlaceholder />,
      label: "2 Columns",
      id: "2Col",
      group: "layout",
    },
    {
      Component: <SectionPlaceholder />,
      label: "Section",
      id: "section",
      group: "layout",
    },
    // {
    //   Component: <VideoPlaceholder />,
    //   label: "Video",
    //   id: "video",
    //   group: "elements",
    // },
    // {
    //   Component: <ContactFormComponentPlaceholder />,
    //   label: "Contact",
    //   id: "contactForm",
    //   group: "elements",
    // },
    // {
    //   Component: <CheckoutPlaceholder />,
    //   label: "Checkout",
    //   id: "paymentForm",
    //   group: "elements",
    // },
    {
      Component: <LinkPlaceholder />,
      label: "Link",
      id: "link",
      group: "elements",
    },
  ];

  return (
    <Accordion
      type="multiple"
      className="w-full select-none "
      defaultValue={["Layout", "Elements", "Components"]}
    >
      <AccordionItem
        value="Layout"
        className="px-3 py-0 border-y-[1px] border-main-az"
      >
        <AccordionTrigger className="!no-underline">Layout</AccordionTrigger>
        <AccordionContent className="grid grid-cols-3 ">
          {elements
            .filter((element) => element.group === "layout")
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex cursor-grab"
              >
                {element.Component}
                <span className="text-muted-foreground text-xs mb-4 mt-1">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="Elements"
        className="px-3 py-0 border-main-az"
      >
        <AccordionTrigger className="!no-underline">Elements</AccordionTrigger>
        <AccordionContent className="grid grid-cols-3">
          {elements
            .filter((element) => element.group === "elements")
            .map((element) => (
              <div
                key={element.id}
                className="flex-col items-center justify-center flex"
              >
                {element.Component}
                <span className="text-muted-foreground text-xs mb-4 mt-1">{element.label}</span>
              </div>
            ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="Components"
        className="px-3 py-0 border-main-az"
      >
        <AccordionTrigger className="!no-underline">Your components</AccordionTrigger>
        <AccordionContent className="pb-0">
          {components.map((item: EditorElement) => {
            return (
              <div
                id={item.id}
                onDragStart={(e) => {
                  e.dataTransfer.setData("componentType", JSON.stringify(item));
                }}
                draggable
                className="mb-2 rounded-md bg-zinc-800 text-xs p-2 px-3"
              >
                {item?.name}: {item?.id?.substring(0, 8)}...
              </div>
            );
          })}
          {state.editor.selectedElement.type !== null && state.editor.selectedElement.type !== "__body" ? (
            <Button
              className="w-full h-8 mb-4"
              onClick={() => {
                setComponents([...components, state.editor.selectedElement])
                console.log(components);
                ;
              }}
            >
              Create components
            </Button>
          ) : (
            <></>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ComponentsTab;
