"use client";
import React, { ChangeEventHandler } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/custom-input";
import {
  AlignCenter,
  AlignHorizontalJustifyCenterIcon,
  AlignHorizontalJustifyEndIcon,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalSpaceBetween,
  ArrowRightLeft,
  Blinds,
  ChevronsLeftRightIcon,
  CircleOff,
  Eye,
  EyeClosed,
  Italic,
  LucideImageDown,
  Mouse,
  MoveDown,
  MoveRight,
  Underline,
} from "lucide-react";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";

type Props = {};

const SettingsTab = (props: Props) => {
  const { state, dispatch } = useEditor();

  const handleOnChanges = (e: any) => {
    const styleSettings = e.target.id;
    let value = e.target.value;
    const styleObject = {
      [styleSettings]: value,
    };

    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...state.editor.selectedElement,
          styles: {
            ...state.editor.selectedElement.styles,
            ...styleObject,
          },
        },
      },
    });
  };

  const handleChangeCustomValues = (e: any) => {
    const settingProperty = e.target.id;
    let value = e.target.value;
    const styleObject = {
      [settingProperty]: value,
    };

    dispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        elementDetails: {
          ...state.editor.selectedElement,
          content: {
            ...state.editor.selectedElement.content,
            ...styleObject,
          },
        },
      },
    });
  };

  return (
    <Accordion
      type="multiple"
      className="w-[249px]"
      defaultValue={["Dimensions", "Typography", "Spacing", "Background", "Decorations", "Flexbox"]}
    >
      <AccordionItem
        value="Dimensions"
        className="px-3 py-0  "
      >
        <AccordionTrigger className="!no-underline font-semibold">Dimensions</AccordionTrigger>
        <AccordionContent>
          {/* 1st width nad height */}
          <div className="flex gap-2 mb-3">
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Width</p>
              <Input
                placeholder="Auto"
                id="width"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.width || ""}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Height</p>

              <Input
                id="height"
                placeholder="Auto"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.height || ""}
              />
            </div>
          </div>
          {/* 2nd Angle and rotation*/}
          <div className="flex gap-2 mb-3">
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Angle</p>
              <Input
                id="rotate"
                placeholder="0deg"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.rotate || ""}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Rotation 🌟</p>
              <Input
                placeholder="px"
                id="transform"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.transform || ""}
              />
            </div>
          </div>
          {/* 3rd radius and opacity*/}
          <div className="flex gap-2 mb-3">
            <div className="flex flex-col w-full">
              <p className="text-muted-foreground text-xs">Border Radius</p>
              <Input
                id="borderRadius"
                placeholder="0px"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.borderRadius || ""}
              />
            </div>

            <div className="w-full">
              <p className="text-muted-foreground text-xs">Opacity</p>
              <div className="flex items-center justify-end">
                <small className="pb-[14px] pt-[9px] -mt-[22px] text-xs">
                  {typeof state.editor.selectedElement.styles?.opacity === "number"
                    ? state.editor.selectedElement.styles?.opacity
                    : parseFloat((state.editor.selectedElement.styles?.opacity || "0").replace("%", "")) || 0}
                  %
                </small>
              </div>
              <Slider
                onValueChange={(e) => {
                  handleOnChanges({
                    target: {
                      id: "opacity",
                      value: `${e[0]}%`,
                    },
                  });
                }}
                value={[
                  typeof state.editor.selectedElement.styles?.opacity === "number"
                    ? state.editor.selectedElement.styles?.opacity
                    : parseFloat((state.editor.selectedElement.styles?.opacity || "0").replace("%", "")) || 0,
                ]}
                max={100}
                step={1}
              />
            </div>
          </div>
          {/* 4rt overflow */}
          <div className="flex flex-col">
            <p className="text-muted-foreground text-xs mb-2">Overflow</p>
            <Tabs
              onValueChange={(e) =>
                handleOnChanges({
                  target: {
                    id: "overflow",
                    value: e,
                  },
                })
              }
              value={state.editor.selectedElement.styles.overflow || "visible"}
            >
              <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-0">
                <TabsTrigger
                  value="visible"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <Eye size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="hidden"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <EyeClosed size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="scroll"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <Mouse size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="auto"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950 "
                >
                  <Blinds size={15} />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="Typography"
        className="px-3 py-0"
      >
        <AccordionTrigger className="!no-underline font-semibold">Typography</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3 ">
          {/* 1st Txt align */}
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs ">Text Align</p>
            <Tabs
              onValueChange={(e) =>
                handleOnChanges({
                  target: {
                    id: "textAlign",
                    value: e,
                  },
                })
              }
              value={state.editor.selectedElement.styles.textAlign || "left"}
            >
              <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-4">
                <TabsTrigger
                  value="left"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <AlignLeft size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="right"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <AlignRight size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="center"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <AlignCenter size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="justify"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950 "
                >
                  <AlignJustify size={15} />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {/* 2nd font family */}
          <div className="flex flex-col ">
            <p className="text-muted-foreground text-xs">Font Family 🌟</p>
            <Input
              placeholder="Default"
              id="DM Sans"
              onChange={handleOnChanges}
              value={state.editor.selectedElement.styles.fontFamily}
            />
          </div>
          {/* 3rd color */}
          <div className="flex flex-col ">
            <p className="text-muted-foreground text-xs">Color</p>
            <Input
              id="color"
              placeholder="transparent"
              onChange={handleOnChanges}
              value={state.editor.selectedElement.styles.color || ""}
            />
          </div>
          {/* 4th weight and size */}
          <div className="flex gap-2">
            <div className="w-full">
              <p className=" text-muted-foreground text-xs mb-2">Weight</p>
              <Select
                onValueChange={(e) =>
                  handleOnChanges({
                    target: {
                      id: "font-weight",
                      value: e,
                    },
                  })
                }
              >
                <SelectTrigger className=" mt-1 px-2 h-8 border-2 border-[#272727] w-full text-xs">
                  <SelectValue placeholder="Normal" />
                </SelectTrigger>
                <SelectContent className="text-xs">
                  <SelectGroup className="text-xs">
                    <SelectLabel className="text-xs">Font Weights</SelectLabel>
                    <SelectItem
                      className="text-xs"
                      value="bold"
                    >
                      Bold
                    </SelectItem>
                    <SelectItem
                      className="text-xs"
                      value="normal"
                    >
                      Regular
                    </SelectItem>
                    <SelectItem
                      className="text-xs"
                      value="lighter"
                    >
                      Light
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <p className=" text-muted-foreground text-xs">Size</p>
              <Input
                placeholder="px"
                id="fontSize"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.fontSize}
              />
            </div>
          </div>
          {/* line height and letter spaccing */}
          <div className="flex gap-2">
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Line Height</p>
              <Input
                id="lineHeight"
                placeholder="Auto"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.lineHeight || ""}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Letter Specing</p>
              <Input
                placeholder="auto"
                id="letterSpacing"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.letterSpacing || ""}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs ">Text Decoration</p>

            <Tabs
              onValueChange={(e) =>
                handleOnChanges({
                  target: {
                    id: "textDecoration",
                    value: e,
                  },
                })
              }
              value={String(state.editor.selectedElement.styles.textDecoration || "none")}
            >
              <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-4">
                <TabsTrigger
                  value="none"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <CircleOff size={13} />
                </TabsTrigger>
                <TabsTrigger
                  value="underline"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <Underline size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="italic"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  🌟
                </TabsTrigger>
                <TabsTrigger
                  value="overline"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                >
                  <AlignCenter size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="line-through"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950 "
                >
                  <AlignJustify size={15} />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>
      {/* ///////////////////////////////////////////////////////////////// */}
      <AccordionItem
        value="Spacing"
        className=" px-3 py-0"
      >
        <AccordionTrigger className="!no-underline font-semibold">Spacing</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 flex-col">
                <div className="flex gap-2">
                  <div>
                    <p className=" text-muted-foreground text-xs">Margin Top</p>
                    <Input
                      id="marginTop"
                      placeholder="16px"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.marginTop || ""}
                    />
                  </div>
                  <div>
                    <p className=" text-muted-foreground text-xs">Margin Bottom</p>
                    <Input
                      placeholder="16px"
                      id="marginBottom"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.marginBottom || ""}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <p className=" text-muted-foreground text-xs">Margin Left</p>
                    <Input
                      placeholder="16px"
                      id="marginLeft"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.marginLeft || ""}
                    />
                  </div>
                  <div>
                    <p className=" text-muted-foreground text-xs">Margin Right</p>
                    <Input
                      placeholder="16px"
                      id="marginRight"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.marginRight || ""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 flex-col">
                <div className="flex gap-2">
                  <div>
                    <p className=" text-muted-foreground text-xs">Padding Top</p>
                    <Input
                      placeholder="16px"
                      id="paddingTop"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.paddingTop || ""}
                    />
                  </div>
                  <div>
                    <p className=" text-muted-foreground text-xs">Padding Bottom</p>
                    <Input
                      placeholder="16px"
                      id="paddingBottom"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.paddingBottom || ""}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div>
                    <p className=" text-muted-foreground text-xs">Padding Left</p>
                    <Input
                      placeholder="16px"
                      id="paddingLeft"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.paddingLeft || ""}
                    />
                  </div>
                  <div>
                    <p className=" text-muted-foreground text-xs">Padding Right</p>
                    <Input
                      placeholder="16px"
                      id="paddingRight"
                      onChange={handleOnChanges}
                      value={state.editor.selectedElement.styles.paddingRight || ""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="Background"
        className="px-3 py-0"
      >
        <AccordionTrigger className="!no-underline font-semibold">Background</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          {/* 1st */}
          <div className="flex gap-2 ">
            {/* bcgc */}
            <div className="flex flex-col w-full ">
              <p className=" text-muted-foreground text-xs">Background Color</p>
              <div
                className={
                  "flex w-[120px] h-8 mt-2 rounded border-2 group hover:border-[#6A6A6A] bg-[#272727] pr-2 items-center text-xs shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:border-[#726FFF]  disabled:cursor-not-allowed disabled:opacity-50 "
                }
              >
                <div className=" overflow-hidden h-full rounded-l-[3px] w-[39px] mr-2">
                  <input
                    className="h-12 -mt-2 border-2 group-hover:border-[#6A6A6A] transition-colors border-r-0 hover:border-[#6A6A6A] bg-[#272727] -ml-[8px] rounded-l"
                    type="color"
                    id="backgroundColor"
                    placeholder="transparent"
                    onChange={handleOnChanges}
                    value={state.editor.selectedElement.styles.backgroundColor}
                  />
                </div>
                {state.editor.selectedElement.styles?.backgroundColor || "transparent"}
              </div>
            </div>
            {/* opacity */}
            <div className="w-full">
              <p className="text-muted-foreground text-xs">Opacity</p>
              <div className="flex items-center justify-end">
                <small className="pb-[14px] pt-[9px] -mt-[22px] text-xs">
                  {typeof state.editor.selectedElement.styles?.opacity === "number"
                    ? state.editor.selectedElement.styles?.opacity
                    : parseFloat((state.editor.selectedElement.styles?.opacity || "100").replace("%", "")) || 100}
                  %
                </small>
              </div>
              <Slider
                onValueChange={(e) => {
                  handleOnChanges({
                    target: {
                      id: "opacity",
                      value: `${e[0]}%`,
                    },
                  });
                }}
                value={[
                  typeof state.editor.selectedElement.styles?.opacity === "number"
                    ? state.editor.selectedElement.styles?.opacity
                    : parseFloat((state.editor.selectedElement.styles?.opacity || "100").replace("%", "")) || 100,
                ]}
                max={100}
                step={1}
              />
            </div>
          </div>
          {/* 2rd radius */}
          <div className="flex w-full gap-2 items-center">
            <p className="text-muted-foreground text-xs w-min">Border Radius</p>
            <div className="w-full relative flex flex-row-reverse gap-2 items-center">
              <div className="flex items-center justify-end ">
                <small className=" text-xs ">
                  {typeof state.editor.selectedElement.styles?.borderRadius === "number"
                    ? state.editor.selectedElement.styles?.borderRadius
                    : parseFloat((state.editor.selectedElement.styles?.borderRadius || "0").replace("px", "")) || 0}
                  px
                </small>
              </div>
              <Slider
                onValueChange={(e) => {
                  handleOnChanges({
                    target: {
                      id: "borderRadius",
                      value: `${e[0]}px`,
                    },
                  });
                }}
                value={[
                  typeof state.editor.selectedElement.styles?.borderRadius === "number"
                    ? state.editor.selectedElement.styles?.borderRadius
                    : parseFloat((state.editor.selectedElement.styles?.borderRadius || "0").replace("%", "")) || 0,
                ]}
                max={100}
                step={1}
              />
            </div>
          </div>
          {/* 3rd bcg image */}
          <div className="flex flex-col gap-2">
            <p className=" text-muted-foreground text-xs">Background Image</p>
            <div className="flex  rounded-md group">
              <div
                className="w-12 border-2 group-hover:border-[#6a6a6a]  transition-colors border-main-black rounded-l border-r-0"
                style={{
                  backgroundImage: state.editor.selectedElement.styles.backgroundImage,
                }}
              />
              <Input
                placeholder="url()"
                className="mt-0 rounded-l-none hover:border-l-none group-hover:border-[#6a6a6a]"
                id="backgroundImage"
                onChange={handleOnChanges}
                value={state.editor.selectedElement.styles.backgroundImage}
              />
            </div>
          </div>
          {/* image position */}
          <div className="flex flex-col gap-2">
            <p className=" text-muted-foreground text-xs">Image Position</p>
            <Tabs
              onValueChange={(e) =>
                handleOnChanges({
                  target: {
                    id: "backgroundSize",
                    value: e,
                  },
                })
              }
              value={state.editor.selectedElement.styles.backgroundSize?.toString()}
            >
              <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-transparent h-fit gap-4">
                <TabsTrigger
                  value="cover"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-muted"
                >
                  <ChevronsLeftRightIcon size={18} />
                </TabsTrigger>
                <TabsTrigger
                  value="contain"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-muted"
                >
                  <AlignVerticalJustifyCenter size={15} />
                </TabsTrigger>
                <TabsTrigger
                  value="auto"
                  className="w-10 h-[26.4px] p-0 data-[state=active]:bg-muted"
                >
                  <LucideImageDown size={15} />
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="Flexbox"
        className="px-3 py-0 "
      >
        <AccordionTrigger className="!no-underline font-semibold">Auto Layoutx</AccordionTrigger>
        <AccordionContent>
          <div className="flex items-center gap-2 py-3">
            <div className="w-full">
              <p className=" text-muted-foreground text-xs mb-2">Display</p>

              <Tabs
                onValueChange={(e) =>
                  handleOnChanges({
                    target: {
                      id: "display",
                      value: e,
                    },
                  })
                }
                value={state.editor.selectedElement.styles.display || "block"}
              >
                <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-1">
                  <TabsTrigger
                    value="flex"
                    className="w-full h-[26.4px] text-xs p-0 data-[state=active]:bg-zinc-950"
                  >
                    F
                  </TabsTrigger>
                  <TabsTrigger
                    value="block"
                    className="w-full h-[26.4px] text-xs p-0 data-[state=active]:bg-zinc-950"
                  >
                    B
                  </TabsTrigger>
                  <TabsTrigger
                    value="grid"
                    className="w-full h-[26.4px] text-xs p-0 data-[state=active]:bg-zinc-950"
                  >
                    G
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="w-full">
              <p className=" text-muted-foreground text-xs mb-2"> Direction</p>
              <Tabs
                onValueChange={(e) =>
                  handleOnChanges({
                    target: {
                      id: "flexFlow",
                      value: e,
                    },
                  })
                }
                value={state.editor.selectedElement.styles.flexFlow || "row"}
              >
                <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-1">
                  <TabsTrigger
                    value="row"
                    className="w-full h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                  >
                    <MoveRight size={15} />
                  </TabsTrigger>
                  <TabsTrigger
                    value="column"
                    className="w-full h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                  >
                    <MoveDown size={15} />
                  </TabsTrigger>
                  <TabsTrigger
                    value="wrap"
                    className="w-full h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
                  >
                    <ArrowRightLeft size={15} />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          <p className="text-muted-foreground text-xs mb-2">Justify Content</p>
          <Tabs
            onValueChange={(e) =>
              handleOnChanges({
                target: {
                  id: "justifyContent",
                  value: e,
                },
              })
            }
            value={state.editor.selectedElement.styles.justifyContent || "center"}
          >
            <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-4">
              <TabsTrigger
                value="space-between"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
              >
                <AlignHorizontalSpaceBetween size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="space-evenly"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
              >
                <AlignHorizontalSpaceAround size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="center"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
              >
                <AlignHorizontalJustifyCenterIcon size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="start"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950 "
              >
                <AlignHorizontalJustifyStart size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="end"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950 "
              >
                <AlignHorizontalJustifyEndIcon size={15} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <p className="text-muted-foreground text-xs mb-2 mt-3">Align Items</p>
          <Tabs
            onValueChange={(e) =>
              handleOnChanges({
                target: {
                  id: "alignItems",
                  value: e,
                },
              })
            }
            value={state.editor.selectedElement.styles.alignItems || "center"}
          >
            <TabsList className="p-[2px] flex items-center flex-row justify-between border-[1px] rounded-md bg-[#272727] h-fit gap-4">
              <TabsTrigger
                value="center"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
              >
                <AlignVerticalJustifyCenter size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="normal"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
              >
                <AlignVerticalJustifyCenter size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="end"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950"
              >
                <AlignVerticalJustifyEnd size={15} />
              </TabsTrigger>
              <TabsTrigger
                value="stretch"
                className="w-10 h-[26.4px] p-0 data-[state=active]:bg-zinc-950 "
              >
                <AlignVerticalSpaceBetween size={15} />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default SettingsTab;
