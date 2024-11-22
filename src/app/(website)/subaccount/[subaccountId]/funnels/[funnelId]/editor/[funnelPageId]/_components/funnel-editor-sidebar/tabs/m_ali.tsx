"use client";
import React from "react";

import {
  AlignCenter,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  ArrowDownToLine,
  ArrowUpToLine,
  ChevronFirst,
  ChevronLast,
  ChevronsDownUp,
  Columns3,
  Eye,
  FoldVertical,
  Fullscreen,
  ImagePlus,
  LaptopMinimal,
  LayoutDashboard,
  Maximize2,
  Minus,
  Radius,
  Shrink,
} from "lucide-react";
import { FlipHorizontal, RotateCw, FlipVertical } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/custom-input";
import InputIcon from "./input-icon";

const Sidebar = (): React.JSX.Element => {
  const [inputValue, setInputValue] = React.useState("");
  const [value, setValue] = React.useState<string>("#ffffff");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="my-10 -mx-10">
      <div className="container ">
        <div className="frameOne bg-[#1E1E1E] w-[280px]">
          <div className="styleTopArea p-[12px] ">
            <div className="styelHeadingArea">
              <div className="styleHeading">
                <h1 className="font-dmSans font-semibold text-white text-xl">Styles</h1>
              </div>

              <div className="subHeading pb-2 ">
                <p className=" text-[#B5B5B5] mt-1 font-[300] text-[12.9px] font-dmSans">Show your creativity! You can customize every component as you like.</p>
              </div>
            </div>

            {/* this custom Area start */}

            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white  font-[400] text-[14.94px] font-dmSans">Custom</AccordionTrigger>
                <AccordionContent>
                  <div className="customArea pb-2  ">
                    <div className="witdhHeigth flex gap-1">
                      <div className="widthArea">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Width</h3>

                        <div className="widthInput">
                          <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="512"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="hightArea">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Heigth</h3>
                        <div className="hightInput">
                          <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="512"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="angleArea  ">
                      <div className="angleheaderArea  grid grid-cols-6 ">
                        <div className="angleHeading col-span-3">
                          <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Angle</h3>
                        </div>
                        <div className="rotationHeading col-span-3">
                          <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Rotation</h3>
                        </div>
                      </div>

                      <div className="angleInputAndIcon grid grid-cols-6 gap-1">
                        <div className="angleInput col-span-3">
                          <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="512"
                            type="text"
                          />
                        </div>
                        <div className="rotationIcon col-span-3">
                          <InputIcon>
                            <RotateCw
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <FlipHorizontal
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <FlipVertical
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                          </InputIcon>
                        </div>
                      </div>
                    </div>

                    <div className="connerRedusArea">
                      <div className="cornerHeaderArea  grid grid-cols-6 ">
                        <div className="cornerRadiusHeading col-span-3">
                          <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Corner Radius</h3>
                        </div>
                        <div className="OverflowHeading col-span-3">
                          <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Overflow</h3>
                        </div>
                      </div>

                      <div className="connerRedusInputAndIcon grid grid-cols-6  gap-1">
                        <div className="connerRedusInput col-span-2">
                          <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="512"
                            type="text"
                          />
                        </div>
                        <div
                          style={{ padding: "4px 2px 0px 2px", height: "30px" }}
                          className="connerRedusIcon  col-span-1 rounded-[5px]  bg-[#373737] text-[#ACACAC] inline-block text-[18px] "
                        >
                          <Radius className=" w-5 h-5 mx-auto" />
                        </div>
                        <div className="rotationIcon col-span-3">
                          <InputIcon>
                            <RotateCw
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <FlipHorizontal
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <FlipVertical
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                          </InputIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* this custom Area end */}
          </div>

          {/* Background Area start */}

          <div className="BackgroundArea border-y-[2px] border-y-[#373737] ">
            <div className="BackgroundAreatop p-[12px]">
              <Accordion
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-white  font-[400] text-[14.94px] font-dmSans">Background</AccordionTrigger>
                  <AccordionContent>
                    <div className="ObjectFillAndAppearance grid grid-cols-6  gap-1 ">
                      <div className="ObjectFill col-span-3">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Color</h3>
                      </div>
                      <div className="AppearanceArea col-span-3">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Opacity</h3>
                      </div>
                    </div>

                    <div className="colorPickerArea grid grid-cols-6  gap-1">
                      <div
                        className="colorInput col-span-3 flex gap-1 rounded-[5px] bg-[#373737] border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] 
          focus:outline-none"
                        style={{ padding: "2px" }}
                      >
                        {/* <MuiColorInput
                          format="hex"
                          value={value}
                          onChange={handleChange}
                        /> */}
                      </div>

                      <div className="AppearanceInput col-span-3">
                        <input
                          className="custom-range"
                          type="range"
                        />
                      </div>
                    </div>

                    {/* <div className="borderRedusArea">
                <div className="borderRadiusHeading">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">
                    Border Radius
                  </h3>
                </div>
                <div className="borderRedusInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                  <div className="borderRedusInput col-span-3">
                    <Input />
                  </div>
                  <div className="borderRedusIcon  col-span-1 "></div>
                  <div className="borderRedusIcon  col-span-1 "></div>
                  <div className="borderRedusIcon  col-span-1 p-2 rounded-[5px]  bg-[#373737] text-[#ACACAC] inline-block text-[18px] ">
                    <Radius />
                  </div>
                </div>
              </div> */}

                    <div className="bgImgArea">
                      <div className="bgImgHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">BG Image</h3>
                      </div>
                      <div className="bgImgInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                        <div
                          className="bgImgIcon  col-span-1 p-2   bg-[#373737] text-[#ffffff] inline-block text-[18px] "
                          style={{
                            borderRadius: " 5px 0px 0px 5px",
                            padding: "4px 2px 0px 2px",
                            height: "32px",
                          }}
                        >
                          <ImagePlus className=" w-5 h-5 mx-auto" />
                        </div>
                        <div className="bgImgInput col-span-5">
                          <input
                            className="  bg-[#373737] text-white border w-[100%] border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            type="text"
                            placeholder="Url()"
                            style={{
                              borderRadius: " 0px 5px 5px 0px",
                              padding: "4px",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="imagePositionArea">
                      <div className="imagePositionHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Image Position</h3>
                      </div>
                      <div className="bgImgInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                        <div className="bgImgInput col-span-6">
                          <InputIcon>
                            <ChevronFirst
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <ChevronsDownUp
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <ChevronLast
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <Maximize2
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <Fullscreen
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <Shrink
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                          </InputIcon>
                        </div>
                      </div>
                    </div>
                    <div className="ImageOpacityArea flex justify-between pb-5 gap-1 border-b-[2px] border-b-[#373737] ">
                      <div className="ImageOpacityHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Image Opacity</h3>
                      </div>
                      <div className="ImageOpacity">
                        <input
                          className="custom-range"
                          type="range"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Background Area end */}

          {/* Typography Area start */}

          <div className="typographyArea p-[12px]">
            <Accordion
              type="single"
              collapsible
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-white  font-[400] text-[14.94px] font-dmSans">Typography</AccordionTrigger>
                <AccordionContent>
                  <div className="typographyArea">
                    <div className="typographyHeading">
                      <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Font Family</h3>
                    </div>

                    <div className="typographyInputAndIcon grid grid-cols-6 items-center justify-end gap-1">
                      <div className="typographyInput col-span-5">
                        <div className="layoutLastAreaInput col-span-4">
                          <select
                            className="  bg-[#373737] text-white  w-[100%] border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            style={{
                              borderRadius: " 5px 0px 0px 5px",
                              padding: "4px",
                            }}
                          >
                            <option
                              value=""
                              data-select2-id="3"
                            >
                              Default
                            </option>
                            <option
                              value="Arial"
                              data-select2-id="5"
                            >
                              Arial
                            </option>

                            <option
                              value="Tahoma"
                              data-select2-id="6"
                            >
                              Tahoma
                            </option>

                            <option
                              value="Verdana"
                              data-select2-id="7"
                            >
                              Verdana
                            </option>

                            <option
                              value="Helvetica"
                              data-select2-id="8"
                            >
                              Helvetica
                            </option>

                            <option
                              value="Times New Roman"
                              data-select2-id="9"
                            >
                              Times New Roman
                            </option>

                            <option
                              value="Trebuchet MS"
                              data-select2-id="10"
                            >
                              Trebuchet MS
                            </option>

                            <option
                              value="Georgia"
                              data-select2-id="11"
                            >
                              Georgia
                            </option>
                            <option
                              value="ABeeZee"
                              data-select2-id="13"
                            >
                              ABeeZee
                            </option>

                            <option
                              value="ADLaM Display"
                              data-select2-id="14"
                            >
                              ADLaM Display
                            </option>

                            <option
                              value="AR One Sans"
                              data-select2-id="15"
                            >
                              AR One Sans
                            </option>

                            <option
                              value="Abel"
                              data-select2-id="16"
                            >
                              Abel
                            </option>

                            <option
                              value="Abhaya Libre"
                              data-select2-id="17"
                            >
                              Abhaya Libre
                            </option>

                            <option
                              value="Aboreto"
                              data-select2-id="18"
                            >
                              Aboreto
                            </option>

                            <option
                              value="Abril Fatface"
                              data-select2-id="19"
                            >
                              Abril Fatface
                            </option>

                            <option
                              value="Abyssinica SIL"
                              data-select2-id="20"
                            >
                              Abyssinica SIL
                            </option>

                            <option
                              value="Aclonica"
                              data-select2-id="21"
                            >
                              Aclonica
                            </option>

                            <option
                              value="Acme"
                              data-select2-id="22"
                            >
                              Acme
                            </option>

                            <option
                              value="Actor"
                              data-select2-id="23"
                            >
                              Actor
                            </option>

                            <option
                              value="Adamina"
                              data-select2-id="24"
                            >
                              Adamina
                            </option>

                            <option
                              value="Advent Pro"
                              data-select2-id="25"
                            >
                              Advent Pro
                            </option>

                            <option
                              value="Afacad"
                              data-select2-id="26"
                            >
                              Afacad
                            </option>

                            <option
                              value="Agbalumo"
                              data-select2-id="27"
                            >
                              Agbalumo
                            </option>

                            <option
                              value="Agdasima"
                              data-select2-id="28"
                            >
                              Agdasima
                            </option>

                            <option
                              value="Aguafina Script"
                              data-select2-id="29"
                            >
                              Aguafina Script
                            </option>

                            <option
                              value="Akatab"
                              data-select2-id="30"
                            >
                              Akatab
                            </option>

                            <option
                              value="Akaya Kanadaka"
                              data-select2-id="31"
                            >
                              Akaya Kanadaka
                            </option>
                            <option
                              value="Noto Naskh Arabic"
                              data-select2-id="1669"
                            >
                              Noto Naskh Arabic
                            </option>

                            <option
                              value="Noto Sans Hebrew"
                              data-select2-id="1670"
                            >
                              Noto Sans Hebrew
                            </option>

                            <option
                              value="Open Sans Hebrew"
                              data-select2-id="1671"
                            >
                              Open Sans Hebrew
                            </option>

                            <option
                              value="Open Sans Hebrew Condensed"
                              data-select2-id="1672"
                            >
                              Open Sans Hebrew Condensed
                            </option>
                          </select>
                        </div>
                      </div>
                      <div
                        className="typographyIcon  col-span-1 p-2   bg-[#373737] text-[#ffffff] inline-block text-[18px] "
                        style={{
                          borderRadius: " 0px 5px 5px 0px",
                          padding: "4px 2px 0px 2px",
                          height: "32px",
                        }}
                      >
                        <LayoutDashboard className=" w-5 h-5 mx-auto" />
                      </div>
                    </div>

                    <div className="textAlignHeading">
                      <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Text Align</h3>
                    </div>

                    <div className="textAlineIconArea  grid grid-cols-6 gap-2">
                      <div className="textAlignIconLeft col-span-3 ">
                        <div className="bgImgInput col-span-5">
                          <InputIcon>
                            <AlignLeft
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <AlignCenter
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <AlignJustify
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                          </InputIcon>
                        </div>
                      </div>
                      <div className="textAlignIconRight col-span-3 ">
                        <div className="bgImgInput col-span-5">
                          <InputIcon>
                            <ArrowDownToLine
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <FoldVertical
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                            <ArrowUpToLine
                              className="text-[#fff] w-6 h-6"
                              style={{ padding: "4px" }}
                            />
                          </InputIcon>
                        </div>
                      </div>
                    </div>

                    <div className=" TextFillcolorAndAppearance grid grid-cols-6 gap-1 ">
                      <div className="TextFillcolor col-span-3">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Text Fill</h3>
                      </div>
                      <div className="AppearanceArea col-span-3">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Appearance</h3>
                      </div>
                    </div>

                    <div className="TextFillcolorPickerArea grid grid-cols-6 gap-1">
                      <div
                        className="TextFillcolorInput col-span-3 w-[100%]  rounded-[5px] bg-[#373737]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                        style={{ padding: "2px" }}
                      >
                        {/* <MuiColorInput
                          format="hex"
                          value={value}
                          onChange={handleChange}
                        /> */}
                      </div>

                      <div className="AppearanceInput col-span-3">
                        <input
                          className="custom-range"
                          type="range"
                        />
                      </div>
                    </div>

                    <div className="fontWeightArea">
                      <div className="fontWeightHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Font Weight</h3>
                      </div>

                      <div className="selectFontWeightArea grid grid-cols-8 gap-1">
                        <div className="selectFontWeight col-span-4">
                          <select
                            style={{ padding: "2px" }}
                            className="  bg-transparent text-[#ACACAC] rounded-[5px] border w-[100%] border-[#6A6A6A] hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                          >
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Xxl">Xxl</option>
                          </select>
                        </div>
                        {/* <div className="pixalArea col-span-2">
                    <input
                      type="text"
                      className="w-[100%] bg-[#373737] text-white p-2 border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                      style={{ borderRadius: "0px 5px 5px 0px" }}
                      placeholder="9.47"
                    />
                  </div> */}

                        <div className="AppearanceInput col-span-4">
                          <input
                            className="custom-range"
                            type="range"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="fontSizeArea">
                      <div className="fontSizeHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Font Size</h3>
                      </div>

                      <div className="selectFontSizeArea grid grid-cols-8 gap-1">
                        <div className="pixalArea col-span-4">
                          <input
                            style={{ padding: "2px 6px" }}
                            type="text"
                            className="w-[100%] bg-[#373737] text-white rounded-[5px] border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            placeholder="9.47px"
                          />
                        </div>

                        <div className="AppearanceInput col-span-4">
                          <input
                            className="custom-range"
                            type="range"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="LineHeightArea">
                      <div className="LineHeightHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Line Height</h3>
                      </div>

                      <div className="selectLineHeightArea grid grid-cols-8 gap-1">
                        <div className="pixalArea col-span-4">
                          <input
                            style={{ padding: "2px 6px" }}
                            type="text"
                            className="w-[100%] bg-[#373737] text-white rounded-[5px]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            placeholder="Auto"
                          />
                        </div>

                        <div className="AppearanceInput col-span-4">
                          <input
                            className="custom-range"
                            type="range"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="LetterSpecingArea">
                      <div className="fontSizeHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Letter Specing</h3>
                      </div>

                      <div className="selectLetterSpecingArea grid grid-cols-8 gap-1">
                        <div className="pixalArea col-span-4">
                          <input
                            style={{ padding: "2px 6px" }}
                            type="text"
                            className="w-[100%] bg-[#373737] text-white rounded-[5px] border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            placeholder="0%"
                          />
                        </div>

                        <div className="AppearanceInput col-span-4">
                          <input
                            className="custom-range"
                            type="range"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" DecorationAndAppearance flex justify-between gap-1 ">
                      <div className="DecorationHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Decoration</h3>
                      </div>
                      <div className="AppearanceArea">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Appearance</h3>
                      </div>
                    </div>

                    <div className="DecorationArea grid grid-cols-6 gap-1">
                      <div className="selectDecoration col-span-3">
                        <select
                          style={{ padding: "2px" }}
                          className="  bg-transparent text-[#ACACAC]  rounded-[5px] border w-[100%] border-[#6A6A6A] hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                        >
                          <option value="Default">Default</option>
                          <option value="Underline">Underline</option>
                          <option value="OverLine">OverLine</option>
                          <option value="LineThrought">Line Throught</option>
                          <option value=" None">None</option>
                        </select>
                      </div>

                      <div className="AppearanceInput col-span-3">
                        <input
                          className="custom-range"
                          type="range"
                        />
                      </div>
                    </div>

                    <div className=" TransformAndAppearance flex justify-between gap-1 ">
                      <div className="TransformHeading">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Transform</h3>
                      </div>
                      <div className="AppearanceArea">
                        <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Style</h3>
                      </div>
                    </div>

                    <div className="TransformArea grid grid-cols-6 gap-1">
                      <div className="selectDecoration col-span-3">
                        <select
                          style={{ padding: "2px 6px" }}
                          className="  bg-transparent text-[#ACACAC]  rounded-[5px] border w-[100%] border-[#6A6A6A] hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                        >
                          <option value="Default">Default</option>
                          <option value="Uppercase">Uppercase</option>
                          <option value="Lowercase">Lowercase</option>
                          <option value="Capitalize">Capitalize</option>
                          <option value="Normal">Normal</option>
                        </select>
                      </div>

                      <div className="selectDecoration col-span-3">
                        <select
                          style={{ padding: "2px 6px" }}
                          className="  bg-transparent text-[#ACACAC]  rounded-[5px] border w-[100%] border-[#6A6A6A] hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                        >
                          <option value="Default">Default</option>
                          <option value="Normal">Normal</option>
                          <option value="Italic">Italic</option>
                          <option value="Oblique">Oblique</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Typography Area end */}

          {/* border Area start */}
          <div className="borderArea my-1 border-y-[2px] border-y-[#373737]">
            <div className="borderArea p-[12px] ">
              <div className="borderArea">
                <div className="borderAreatop">
                  <Accordion
                    type="single"
                    collapsible
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-white  font-[400] text-[14.94px] font-dmSans">Borders</AccordionTrigger>
                      <AccordionContent>
                        <div className=" BorderscolorAndAppearance grid grid-cols-6 gap-1 ">
                          <div className="Borderscolor col-span-3">
                            <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Borders color</h3>
                          </div>
                          <div className="AppearanceArea col-span-3">
                            <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Appearance</h3>
                          </div>
                        </div>

                        <div className="colorPickerArea grid grid-cols-6 gap-1">
                          <div
                            style={{ padding: "2px 4px" }}
                            className="colorInput col-span-3 rounded-[5px] bg-[#373737]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                          >
                            {/* <MuiColorInput
                              format="hex"
                              value={value}
                              onChange={handleChange}
                            /> */}
                          </div>

                          <div className="AppearanceInput col-span-3">
                            <input
                              className="custom-range"
                              type="range"
                            />
                          </div>
                        </div>

                        <div className="strokeStyleArea">
                          <div className="ObjectFillAndAppearance grid grid-cols-6 gap-1 ">
                            <div className="ObjectFill col-span-3">
                              <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Stroke Style</h3>
                            </div>
                            <div className="StrokeThiknessArea col-span-3">
                              <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Stroke Thikness</h3>
                            </div>
                          </div>
                        </div>

                        <div className="strokeSelectArea grid grid-cols-6 gap-2">
                          <div className="strokeSelect col-span-3 ">
                            <select
                              style={{ padding: "2px 4px" }}
                              className="  bg-[#373737] text-white rounded-[5px] border w-[100%] border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            >
                              <option value="Inside">Inside</option>
                              <option value="OutSide">OutSide</option>
                            </select>
                          </div>

                          <div className="strokeThikness col-span-3">
                            <input
                              className="custom-range"
                              type="range"
                            />
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          {/* border Area end */}

          {/* Effects Area Start */}
          <div className="effectsArea border-b-[2px] border-b-[#373737]">
            <div
              className="effectsAreaArea  "
              style={{ padding: "0px 12px 12px 12px" }}
            >
              <Accordion
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#ffffff] my-1  font-[400] text-[14.94px] font-dmSans">Effects</AccordionTrigger>
                  <AccordionContent>
                    <div className="effectsAreaLastArea ">
                      <div className="effectsLastAreaIcon">
                        <div className="effectsLastAreaIconAndInput grid grid-cols-7 items-center justify-center gap-2">
                          <div
                            style={{ padding: "6px", height: "30px" }}
                            className="effectsLastAreaIcon justify-self-center  col-span-1 rounded-[5px] bg-[#373737] text-[#fff] inline-block text-[18px] "
                          >
                            <LaptopMinimal className=" w-5 h-5 mx-auto" />
                          </div>

                          <div className="effectsLastAreaInput col-span-4">
                            <select
                              style={{ padding: "2px 4px" }}
                              className="  bg-[#373737] text-white rounded-[5px] border w-[100%] border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            >
                              <option value="Inside">Inside</option>
                              <option value="OutSide">OutSide</option>
                            </select>
                          </div>

                          <div className="viewBtn col-span-1 justify-self-end text-[#fff] inline-block text-[18px] ">
                            <Eye className="w-5 h-5" />
                          </div>
                          <div className="MinusBtn col-span-1 justify-self-end text-[#fff] inline-block text-[18px]">
                            <Minus className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* Effects Area end */}

          {/* layout grid area start */}

          <div className="layoutGridArea border-b-[2px] border-b-[#373737]">
            <div
              className="layoutArea "
              style={{ padding: "0px 12px 12px 12px" }}
            >
              <Accordion
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[#ffffff] my-1  font-[400] text-[14.94px] font-dmSans">Layout Grid</AccordionTrigger>
                  <AccordionContent>
                    <div className="layoutLastArea ">
                      <div className="layoutLastAreaIcon">
                        <div className="layoutLastAreaIconAndInput grid grid-cols-7 items-center justify-center gap-2">
                          <div
                            style={{ padding: "6px", height: "30px" }}
                            className="layoutLastAreaIcon justify-self-center  col-span-1 p-2 rounded-[5px] bg-[#373737] text-[#fff] inline-block text-[18px] "
                          >
                            <Columns3 className=" w-5 h-5 mx-auto " />
                          </div>

                          <div className="layoutLastAreaInput col-span-4">
                            <select
                              style={{ padding: "2px 4px" }}
                              className="  bg-[#373737] text-white  rounded-[5px] border w-[100%] border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                            >
                              <option value="1"> 1 Coloms</option>
                              <option value="1"> 2 Coloms</option>
                              <option value="3"> 3 Coloms</option>
                              <option value="4"> 4 Coloms</option>
                              <option value="5"> 5 Coloms</option>
                              <option value="6">6 Coloms</option>
                              <option value="7">7 Coloms</option>
                              <option value="8">8 Coloms</option>
                              <option value="9">9 Coloms</option>
                              <option value="10">10 Coloms</option>
                              <option value="11">11 Coloms</option>
                              <option value="12">12 Coloms</option>
                            </select>
                          </div>

                          <div className="viewBtn col-span-1 justify-self-end text-[#fff] inline-block text-[18px] ">
                            <Eye className="w-5 h-5" />
                          </div>
                          <div className="MinusBtn col-span-1 justify-self-end text-[#fff] inline-block text-[18px]">
                            <Minus className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          {/* layout grid area ennd */}

          {/* flex box area start  */}
          <div className="flexArea border-b-[2px] border-b-[#373737] ">
            <div
              className="fullFlexBox "
              style={{ padding: "0px 12px 12px 12px" }}
            >
              <div className="FlexBoxHeadingAndIcon flex  justify-between items-center">
                <div className="FlexBoxHeading ">
                  <h2 className="text-white  font-[400] text-[14.94px] font-dmSans">Flex Box</h2>
                </div>
                <div className="FlexBoxIcon justify-self-end">
                  <div className="FlexBoxIcon">
                    {/* <FormGroup className="">
                      <FormControlLabel
                        control={
                          <Switch
                            sx={{
                              "& .MuiSwitch-track": {
                                background: "linear-gradient(90deg, #A4A3FF 0%, #726FFF 100%)",
                              },
                              "& .MuiSwitch-thumb": {
                                backgroundColor: "#fff", // optional: to customize the thumb color
                              },
                            }}
                          />
                        }
                        label={undefined}
                      />
                    </FormGroup> */}
                  </div>
                </div>
              </div>

              {/* <div className="XYArea flex gap-1">
                <div className="xArea">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">
                    X
                  </h3>

                  <div className="XInput">
                    <Input />
                  </div>
                </div>
                <div className="yightArea">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">
                    Y
                  </h3>
                  <div className="YInput">
                    <Input />
                  </div>
                </div>
              </div>

              <div className="flexBoxWitdhHeigth flex gap-1">
                <div className="flexBoxWidthArea">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">
                    Width
                  </h3>

                  <div className="widthInput">
                    <Input />
                  </div>
                </div>
                <div className="flexBoxHightArea">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">
                    Heigth
                  </h3>
                  <div className="flexBoxHightInput">
                    <Input />
                  </div>
                </div>
              </div> */}

              <div className="justifyContentArea">
                <div className="justifyContenHeading">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Justify Content</h3>
                </div>
                <div className="justifyContenInputAndIcon grid grid-cols-5">
                  <div className="bgImgInput col-span-5">
                    <InputIcon>
                      <AlignHorizontalSpaceBetween
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignHorizontalSpaceAround
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignHorizontalJustifyCenter
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignHorizontalJustifyStart
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignHorizontalJustifyEnd
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                    </InputIcon>
                  </div>
                </div>
              </div>
              <div className="AlignItemsArea">
                <div className="AlignItemsHeading">
                  <h3 className="text-[#ACACAC] my-1  font-[300] text-[12.22px] font-dmSans">Align Items</h3>
                </div>
                <div className="AlignItemsInputAndIcon grid grid-cols-5">
                  <div className="AlignItemsInput col-span-5">
                    <InputIcon>
                      <AlignVerticalSpaceBetween
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignVerticalSpaceAround
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignVerticalJustifyCenter
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignVerticalJustifyEnd
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                      <AlignVerticalJustifyStart
                        className="text-[#fff] w-6 h-6"
                        style={{ padding: "4px" }}
                      />
                    </InputIcon>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* flex box area end  */}

          {/* Selection Color area start */}
          <div
            className="selectionColorArea "
            style={{ padding: "0px 12px 12px 12px" }}
          >
            <div className="allColorHeading">
              <h3 className="text-[#ffffff] my-2  font-[400] text-[14.94px] font-dmSans">Selection Color</h3>
            </div>
            <div className="allColor grid row-span-4 gap-2">
              <div className="colorOne grid grid-cols-6 gap-1">
                <div className="colorPickerArea col-span-3 flex items-center gap-1">
                  <div
                    style={{ padding: "2px 4px" }}
                    className="colorInput flex gap-1 rounded-[5px] bg-[#373737] w-[100%]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                  >
                    {/* <MuiColorInput
                      format="hex"
                      value={value}
                      onChange={handleChange}
                    /> */}
                    {/* <div>
                      <input
                        type="color"
                        className="border-none outline-none p-0"
                      />
                    </div>

                    <div>
                      <h3 className="text-white text-xs">#00000</h3>
                    </div> */}
                  </div>
                </div>
                <div className="AppearanceInput col-span-3">
                  <input
                    className="custom-range"
                    type="range"
                  />
                </div>
              </div>

              <div className="colorTwo grid grid-cols-6 gap-1 ">
                <div className="colorPickerArea col-span-3 flex items-center gap-1">
                  <div
                    style={{ padding: "2px 4px" }}
                    className="colorInput flex gap-1 w-[100%] rounded-[5px] bg-[#373737]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                  >
                    {/* <MuiColorInput
                      format="hex"
                      value={value}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
                <div className="AppearanceInput col-span-3">
                  <input
                    className="custom-range"
                    type="range"
                  />
                </div>
              </div>

              <div className="colorThree grid grid-cols-6 gap-1">
                <div className="colorPickerArea col-span-3 flex items-center gap-1">
                  <div
                    style={{ padding: "2px 4px" }}
                    className="colorInput flex gap-1  w-[100%] rounded-[5px] bg-[#373737]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                  >
                    {/* <MuiColorInput
                      format="hex"
                      value={value}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>

                <div className="AppearanceInput col-span-3">
                  <input
                    className="custom-range"
                    type="range"
                  />
                </div>
              </div>

              <div className="colorFour grid grid-cols-6 gap-1">
                <div className="colorPickerArea col-span-3  gap-1">
                  <div
                    style={{ padding: "2px 4px" }}
                    className="colorInput flex w-[100%] gap-1 rounded-[5px] bg-[#373737]  border border-transparent hover:border-[#6A6A6A] focus:border-[#726FFF] focus:outline-none"
                  >
                    {/* <MuiColorInput
                      format="hex"
                      value={value}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
                <div className="AppearanceInput col-span-3">
                  <input
                    className="custom-range"
                    type="range"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Selection Color area end */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
