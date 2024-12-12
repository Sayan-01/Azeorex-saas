"use client";
import { Badge } from "@/components/ui/badge";
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import clsx from "clsx";
import { Trash } from "lucide-react";
import React from "react";

type Props = {
  element: EditorElement;
};

const TextComponent = (props: Props) => {
  const { dispatch, state } = useEditor();

  const handleDeleteElement = () => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: { elementDetails: props.element },
    });
  };
  const styles = props.element.styles;

  const handleOnClickBody = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {
        elementDetails: props.element,
      },
    });
  };

  //WE ARE NOT ADDING DRAG DROP
  return (
    <div
      className={clsx("p-[2px] w-max ok relative text-[16px] transition-all ", {
        "!shadow-inner-border-blue-500 outline-[1px] !outline-dotted !outline-blue-500": state.editor.selectedElement.id === props.element.id,
        "shadow-inner-border-slate-500 hover:outline hover:outline-[1px] hover:outline-blue-500": !state.editor.liveMode,
      })}
      onClick={handleOnClickBody}
    >
      <div
        style={styles}
        className="p-[2px] transition-all "
      >
        <span
          className=" border-none outline-none"
          contentEditable={!state.editor.liveMode && state.editor.selectedElement.id === props.element.id}
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
      </div>
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <Badge className="absolute -top-[15px] left-0 h-4 text-xs rounded-none rounded-t-md flex items-center">{state.editor.selectedElement.name}</Badge>
      )}
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <div className="absolute bg-blue-500 px-2.5 py-1 text-xs font-bold -top-[20px] -right-[1px] rounded-none rounded-t-lg !text-white">
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

export default TextComponent;
