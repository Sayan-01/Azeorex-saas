"use client";
import { Badge } from "@/components/ui/badge";

import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import clsx from "clsx";
import { Trash } from "lucide-react";
import Link from "next/link";

import React from "react";
import { EditorBtns } from "@/types/types";

type Props = {
  element: EditorElement;
};

const LinkComponent = (props: Props) => {
  const { dispatch, state } = useEditor();

  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
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

  const styles = props.element.styles;

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: { elementDetails: props.element },
    });
  };

  return (
    <div
      style={styles}
      draggable
      onDragStart={(e) => handleDragStart(e, "text")}
      onClick={handleOnClickBody}
      className={clsx("p-[2px] w-full ok relative text-[16px] transition-all", {
        "!outline-blue-500": state.editor.selectedElement.id === props.element.id,

        "!outline-solid": state.editor.selectedElement.id === props.element.id,
        "outline outline-[1px] outline-transparent hover:outline-blue-500 ": !state.editor.liveMode,
      })}
    >
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <Badge className="absolute -top-[20px] h-5 -left-[1px] rounded-none rounded-t-lg ">{state.editor.selectedElement.name}</Badge>
      )}
      {!Array.isArray(props.element.content) && (state.editor.previewMode || state.editor.liveMode) && <Link href={props.element.content.href || "#"}>{props.element.content.innerText}</Link>}
      {!state.editor.previewMode && !state.editor.liveMode && (
        <span
          contentEditable={!state.editor.liveMode}
          onBlur={(e) => {
            const spanElement = e.target as HTMLSpanElement;
            dispatch({
              type: "UPDATE_ELEMENT",
              payload: {
                elementDetails: {
                  ...props.element,
                  content: {
                    innerText: spanElement.innerText,
                  },
                },
              },
            });
          }}
        >
          {!Array.isArray(props.element.content) && props.element.content.innerText}
        </span>
      )}
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <div className="absolute bg-blue-500 px-2.5 py-1 text-xs font-bold  -top-[20px] -right-[1px] rounded-none rounded-t-lg !text-white">
          <Trash
            className="cursor-pointer"
            size={12}
            onClick={handleDeleteElement}
          />
        </div>
      )}
    </div>
  );
};

export default LinkComponent;
