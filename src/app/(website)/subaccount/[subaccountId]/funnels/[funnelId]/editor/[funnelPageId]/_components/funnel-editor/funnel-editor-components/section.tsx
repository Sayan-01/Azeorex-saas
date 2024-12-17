"use client";
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import React, { useEffect } from "react";
import RecursiveElement from "./recursive";

import { v4 } from "uuid";
import clsx from "clsx";
import { Badge } from "@/components/ui/badge";
import { defaultStyles, EditorBtns } from "@/types/types";

type Props = {
  element: EditorElement;
};

const Section = (props: Props) => {
  const { id, content, styles, type } = props.element;
  const { dispatch, state } = useEditor();

  const handleOnDrop = (e: React.DragEvent) => {
    e.stopPropagation();
    const componentType = e.dataTransfer.getData("componentType") as EditorBtns;
    switch (componentType) {
      case "text":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: { innerText: "Text Component" },
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
      case "2Col":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: [],
              id: v4(),
              name: "Two Columns",
              styles: { ...defaultStyles },
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
        elementDetails: props.element,
      },
    });
  };

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: {
        elementDetails: props.element,
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
      className={clsx("relative transition-all z-[1004] group box inset-0", {
        "h-fit": type === "container",
        "h-full": type === "__body",
        "m-4": type === "container",
        "outline-[1px] outline-dotted outline-blue-400": state.editor.selectedElement.id === props.element.id && !state.editor.liveMode,
        "hover:outline hover:outline-[1px] hover:outline-blue-400": !state.editor.liveMode,
      })}
      id="innerContainer"
      onDrop={(e) => handleOnDrop(e)}
      onDragOver={handleDragOver}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "container")}
    >
      <div
        id={id}
        style={props.element.styles}
        className={clsx("p-4 transition-all !relative !top-0 !bottom-0 !left-0 !right-0 box-1 z-[1002] min-h-full !w-full !m-0", {
          "!p-9 !shadow-inner-border-empty": Array.isArray(props.element.content) && !props.element.content.length && !state.editor.liveMode,
        })}
      >
        {Array.isArray(content) &&
          content.map((childElement) => (
            <RecursiveElement
              key={childElement.id}
              element={childElement}
            />
          ))}
      </div>
      <div
        className={clsx("absolute overflow-visible pointer-events-none z-[1002] inset-0 shadow-inner-border-slate-500", {
          hidden: state.editor.liveMode,
          "!shadow-inner-border-blue-500": state.editor.selectedElement.id === props.element.id,
        })}
      ></div>
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <Badge className="absolute   z-[1006] -top-[17px] h-4 text-xs items-center  left-0 rounded-none rounded-t-md">{state.editor.selectedElement.name}</Badge>
      )}
    </div>
  );
};

export default Section;
