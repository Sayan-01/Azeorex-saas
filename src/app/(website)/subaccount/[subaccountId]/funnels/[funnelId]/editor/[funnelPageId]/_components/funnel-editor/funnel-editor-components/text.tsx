"use client";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import React, { useEffect } from "react";
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if the currently focused element is an editable field
      const activeElement = document.activeElement as HTMLElement;
      const isEditable = activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable;

      // Prevent deletion if an input or editable field is focused
      if (e.key === "Backspace" && !isEditable) {
        if (state.editor.selectedElement.id === props.element.id && props.element.type !== "__body") {
          e.preventDefault(); // Prevent default browser behavior
          handleDeleteElement();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDeleteElement, props.element.id, state.editor.selectedElement.id]);

  //WE ARE NOT ADDING DRAG DROP
  return (
    <div
      draggable
      className={clsx("w-max relative text-[14px] transition-all ")}
      onClick={handleOnClickBody}
    >
      <p
        style={styles}
        className={clsx("text-white border-none outline-none ", { abc: !state.editor.liveMode })}
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
      </p>
      {/* </div> */}
      <div
        className={clsx("absolute overflow-visible pointer-events-none z-[1002] inset-0 ", {
          hidden: state.editor.liveMode,
          "!shadow-inner-border-blue-500": state.editor.selectedElement.id === props.element.id,
        })}
      ></div>
      {state.editor.selectedElement.id === props.element.id && !state.editor.liveMode && (
        <Badge className="absolute bg-main -top-[16px] left-0 h-4 text-xs rounded-none rounded-t-md flex items-center">T</Badge>
      )}
    </div>
  );
};

export default TextComponent;
