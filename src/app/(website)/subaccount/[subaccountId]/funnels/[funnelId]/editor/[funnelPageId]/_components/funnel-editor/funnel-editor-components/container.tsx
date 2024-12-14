"use client";
import { Badge } from "@/components/ui/badge";
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import clsx from "clsx";
import React, { useEffect } from "react";
import { v4 } from "uuid";
import Recursive from "./recursive";
import { defaultStyles, EditorBtns } from "@/types/types";

type Props = { element: EditorElement };

const Container = ({ element }: Props) => {
  const { id, content, name, styles, type } = element;
  const { dispatch, state } = useEditor();

  const handleOnDrop = (e: React.DragEvent, type: string) => {
    e.stopPropagation();
    const componentType = e.dataTransfer.getData("componentType") as EditorBtns;

    switch (componentType) {
      case "text":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "Element" },
              id: v4(),
              name: "Text",
              styles: {
                color: "#ffffff",
                ...defaultStyles,
              },
              type: "text",
            },
          },
        });
        break;
      case "link":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                innerText: "Link Element",
                href: "#",
              },
              id: v4(),
              name: "Link",
              styles: {
                color: "#ffffff",
                ...defaultStyles,
              },
              type: "link",
            },
          },
        });
        break;
      case "video":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                src: "https://www.youtube.com/embed/A3l6YYkXzzg?si=zbcCeWcpq7Cwf8W1",
              },
              id: v4(),
              name: "Video",
              styles: {},
              type: "video",
            },
          },
        });
        break;
      case "container":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Container",
              styles: { ...defaultStyles },
              type: "container",
            },
          },
        });
        break;
      case "section":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Section",
              styles: { ...defaultStyles },
              type: "section",
            },
          },
        });
        break;
      case "contactForm":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Contact Form",
              styles: {},
              type: "contactForm",
            },
          },
        });
        break;
      case "paymentForm":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Payment Form",
              styles: {},
              type: "paymentForm",
            },
          },
        });
        break;
      case "2Col":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [
                {
                  content: [],
                  id: v4(),
                  name: "Container",
                  styles: { ...defaultStyles, width: "100%" },
                  type: "container",
                },
                {
                  content: [],
                  id: v4(),
                  name: "Container",
                  styles: { ...defaultStyles, width: "100%" },
                  type: "container",
                },
              ],
              id: v4(),
              name: "Two Columns",
              styles: { ...defaultStyles, display: "flex" },
              type: "2Col",
            },
          },
        });
        break;
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === "__body") return;
    e.dataTransfer.setData("componentType", type);
  };

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the currently focused element is an editable field
      const activeElement = document.activeElement as HTMLElement;
      const isEditable = activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable;

      // Prevent deletion if an input or editable field is focused
      if (e.key === "Backspace" && !isEditable) {
        if (state.editor.selectedElement.id === id && type !== "__body") {
          e.preventDefault(); // Prevent default browser behavior
          handleDeleteElement();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDeleteElement, id, state.editor.selectedElement.id]);

  return (
    <div
      id={id}
      style={{
        width: styles?.width,
        height: styles?.height,
        position: styles?.position || "relative",
        top: styles?.top || 0,
        bottom: styles?.bottom || 0,
        left: styles?.left || 0,
        right: styles?.right || 0,
        zIndex: styles?.zIndex || 0,
        marginTop: styles?.marginTop,
        marginBottom: styles?.marginBottom,
        marginLeft: styles?.marginLeft,
        marginRight: styles?.marginRight,
      }}
      className={clsx("relative transition-all z-[1004] box inset-0", {
        "w-full": type === "section",
        "h-fit max-w-[80rem] mx-auto w-full": type === "container" || type === "2Col",
        "h-full": type === "__body",
        "overflow-scroll bg-[#212121]  overflow-x-hidden": type === "__body",
        "flex flex-col md:!flex-row": type === "2Col",
        "outline-[1px] outline-dotted outline-blue-400":
          state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type !== "__body",
        "shadow-inner-border-blue-500 ": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type === "__body",
        "outline-[1px] !outline-dotted !outline-blue-400": state.editor.selectedElement.id === id && !state.editor.liveMode,
        "hover:outline hover:outline-[1px] hover:outline-blue-400": !state.editor.liveMode && type !== "__body",
        // "!shadow-inner-border-empty":
        //   state.editor.selectedElement.id === id && Array.isArray(state.editor.selectedElement.content) && !state.editor.selectedElement.content.length && !state.editor.liveMode,
      })}
      onDrop={(e) => handleOnDrop(e, id)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "container")}
    >
      <div
        style={{
          ...styles,
        }}
        className={clsx("transition-all !relative !top-0 !bottom-0 !left-0 !right-0 box-1 z-[1002] min-h-full !w-full !m-0", {
          "p-4": type !== "__body",
        })}
      >
        {Array.isArray(content) &&
          content.map((childElement) => (
            <Recursive
              key={childElement.id}
              element={childElement}
            />
          ))}
      </div>
      <div
        className={clsx("absolute overflow-visible pointer-events-none z-[1002] inset-0 shadow-inner-border-slate-500", {
          "hidden": state.editor.liveMode,
          "!shadow-inner-border-blue-500": state.editor.selectedElement.id === element.id,
        })}
      ></div>
      <Badge
        className={clsx("absolute  z-[1006] -top-[17px] h-4 text-xs items-center  left-0 rounded-none rounded-t-md hidden", {
          flex: state.editor.selectedElement.id === element.id && !state.editor.liveMode,
        })}
      >
        {element.name}
      </Badge>
    </div>
  );
};

export default Container;
