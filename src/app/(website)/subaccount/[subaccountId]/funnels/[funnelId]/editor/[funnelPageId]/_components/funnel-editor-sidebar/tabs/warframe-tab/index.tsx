import React from "react";
import { EditorElement } from "../../../../../../../../../../../../../providers/editor/editor-provider";
import { Warframe } from "@/types/types";
import { Button } from "@/components/ui/button";

const WarframeTab = () => {
  const components: Warframe[] = [
    {
      id: "navbar",
      warframe_name: "Navbar",
      warframe_image: "",
      //contain only 1 object not a array
      warframe: {
        content: [
          {
            content: [
              {
                content: [
                  {
                    content: { innerText: "Xelora" },
                    id: "7bd3d873-0dcd-4065-94ce-8ca02aea5ce1",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                      fontWeight: "bold",
                      fontSize: "30px",
                    },
                    type: "text",
                  },
                ],
                id: "7edf87d9-03f7-4cf4-b320-168c64ff6355",
                name: "Container",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: 1,
                  maxWidth: "940px",
                  borderRadius: "0px",
                },
                type: "container",
              },
              {
                content: [
                  {
                    content: { innerText: "Home" },
                    id: "ee2a0180-d4d4-4bf1-b731-3c66acf90b09",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                  {
                    content: { innerText: "Feature" },
                    id: "239e12d2-3c34-4711-b508-bdabd7ba9b5b",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                  {
                    content: { innerText: "Pricing" },
                    id: "f1893a77-e06a-4681-ac9c-041f62e2eaf6",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                  {
                    content: { innerText: "Pages" },
                    id: "5b2710c9-602e-4e9c-8c73-524fdc3999ff",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                ],
                id: "7e1f70c0-874d-4c0b-8dae-5a75e8b8bc15",
                name: "Container",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: 1,
                  maxWidth: "940px",
                  borderRadius: "0px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "260px",
                },
                type: "container",
              },
              {
                content: [
                  {
                    content: [
                      {
                        content: { innerText: "Contact ✨" },
                        id: "ae1a8c5c-cfdc-4133-9735-d3b746797426",
                        name: "Text",
                        styles: {
                          color: "#ffffff",
                          backgroundPosition: "center",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          textAlign: "left",
                          opacity: "100%",
                        },
                        type: "text",
                      },
                    ],
                    id: "8398169e-e837-4a55-8f6d-b03beda8b9e4",
                    name: "Container",
                    styles: {
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: 1,
                      maxWidth: "940px",
                      borderRadius: "31px",
                      backgroundColor: "#5030f3",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginLeft: "",
                      width: "120px",
                      marginRight: "0",
                      display: "flex",
                      justifyContent: "space-evenly",
                    },
                    type: "container",
                  },
                ],
                id: "c252eb2a-3af9-4fd5-bff8-0d62f1d082c9",
                name: "Container",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: 1,
                  maxWidth: "940px",
                  borderRadius: "0px",
                  paddingRight: "10px",
                },
                type: "container",
              },
            ],
            id: "cccb8920-4ab3-4f91-8c8a-7084adc4c704",
            name: "Container",
            styles: {
              backgroundPosition: "center",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              textAlign: "left",
              opacity: "100%",
              maxWidth: "940px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              height: "60px",
              marginRight: "",
              paddingRight: "0",
              borderRadius: "55px",
            },
            type: "container",
          },
        ],
        id: "12d03a59-f89b-4990-b17a-f4b3cc4baf6b",
        name: "Section",
        styles: {
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "left",
          opacity: "100%",
          paddingTop: "10px",
          paddingBottom: "10px",
        },
        type: "section",
      },
    },
    {
      id: "navbar",
      warframe_name: "Navbar",
      warframe_image: "",
      warframe: {
        content: [
          {
            content: [
              {
                content: [
                  {
                    content: { innerText: "Xelora" },
                    id: "7bd3d873-0dcd-4065-94ce-8ca02aea5ce1",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                      fontWeight: "bold",
                      fontSize: "30px",
                    },
                    type: "text",
                  },
                ],
                id: "7edf87d9-03f7-4cf4-b320-168c64ff6355",
                name: "Container",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: 1,
                  maxWidth: "940px",
                  borderRadius: "0px",
                },
                type: "container",
              },
              {
                content: [
                  {
                    content: { innerText: "Home" },
                    id: "ee2a0180-d4d4-4bf1-b731-3c66acf90b09",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                  {
                    content: { innerText: "Feature" },
                    id: "239e12d2-3c34-4711-b508-bdabd7ba9b5b",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                  {
                    content: { innerText: "Pricing" },
                    id: "f1893a77-e06a-4681-ac9c-041f62e2eaf6",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                  {
                    content: { innerText: "Pages" },
                    id: "5b2710c9-602e-4e9c-8c73-524fdc3999ff",
                    name: "Text",
                    styles: {
                      color: "#000000",
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: "100%",
                    },
                    type: "text",
                  },
                ],
                id: "7e1f70c0-874d-4c0b-8dae-5a75e8b8bc15",
                name: "Container",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: 1,
                  maxWidth: "940px",
                  borderRadius: "0px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "260px",
                },
                type: "container",
              },
              {
                content: [
                  {
                    content: [
                      {
                        content: { innerText: "Contact ✨" },
                        id: "ae1a8c5c-cfdc-4133-9735-d3b746797426",
                        name: "Text",
                        styles: {
                          color: "#ffffff",
                          backgroundPosition: "center",
                          objectFit: "cover",
                          backgroundRepeat: "no-repeat",
                          textAlign: "left",
                          opacity: "100%",
                        },
                        type: "text",
                      },
                    ],
                    id: "8398169e-e837-4a55-8f6d-b03beda8b9e4",
                    name: "Container",
                    styles: {
                      backgroundPosition: "center",
                      objectFit: "cover",
                      backgroundRepeat: "no-repeat",
                      textAlign: "left",
                      opacity: 1,
                      maxWidth: "940px",
                      borderRadius: "31px",
                      backgroundColor: "#5030f3",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      marginLeft: "",
                      width: "120px",
                      marginRight: "0",
                      display: "flex",
                      justifyContent: "space-evenly",
                    },
                    type: "container",
                  },
                ],
                id: "c252eb2a-3af9-4fd5-bff8-0d62f1d082c9",
                name: "Container",
                styles: {
                  backgroundPosition: "center",
                  objectFit: "cover",
                  backgroundRepeat: "no-repeat",
                  textAlign: "left",
                  opacity: 1,
                  maxWidth: "940px",
                  borderRadius: "0px",
                  paddingRight: "10px",
                },
                type: "container",
              },
            ],
            id: "cccb8920-4ab3-4f91-8c8a-7084adc4c704",
            name: "Container",
            styles: {
              backgroundPosition: "center",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
              textAlign: "left",
              opacity: "100%",
              maxWidth: "940px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#ffffff",
              height: "60px",
              marginRight: "",
              paddingRight: "0",
              borderRadius: "55px",
            },
            type: "container",
          },
        ],
        id: "12d03a59-f89b-4990-b17a-f4b3cc4baf6b",
        name: "Section",
        styles: {
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          textAlign: "left",
          opacity: "100%",
          paddingTop: "10px",
          paddingBottom: "10px",
        },
        type: "section",
      },
    },
  ];
  return (
    <div className="p-2">
      {components.map((item: Warframe) => {
        return (
          <div
            id={item.id}
            onDragStart={(e) => {
              e.dataTransfer.setData("componentType", JSON.stringify(item.warframe));
            }}
            draggable
            className="mb-2 rounded-md bg-zinc-800 text-xs p-2 px-3"
          >
            {item?.warframe_name}
          </div>
        );
      })}
      <Button
        className="w-full h-8 mb-4"
        onClick={() => {
          // setComponents([...components, state.editor.selectedElement]);
          console.log(components);
        }}
      >
        Create components
      </Button>
    </div>
  );
};

export default WarframeTab;
