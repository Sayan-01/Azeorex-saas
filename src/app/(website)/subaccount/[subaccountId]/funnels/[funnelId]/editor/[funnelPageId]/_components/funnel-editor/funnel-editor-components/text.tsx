"use client";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";
import React, { useEffect } from "react";
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import { moveObject } from "@/lib/moveElement";

type Props = {
  element: EditorElement;
};

const TextComponent = (props: Props) => {
  const { dispatch, state, activeContainer, setActiveContainer } = useEditor();

  // const handleOnDrop = (e: React.DragEvent, id: string) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   console.log("first", id);

  //   if (activeContainer) {
  //     if (id !== activeContainer) {
  //       moveObject(state.editor.elements, activeContainer, id);
  //       setActiveContainer(null);
  //     }
  //   }
  // };

  // const handleDragEnter = (e: React.DragEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const target = e.currentTarget as HTMLElement;
  //   target.style.outline = "1px solid #fcbd0f"; // Add outline
  //   // target.style.outlineOffset = "-1px"
  // };

  // const handleDragLeave = (e: React.DragEvent) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const target = e.currentTarget as HTMLElement;
  //   target.style.outline = "none"; // Remove outline
  // };

  // const handleDragOver = (e: React.DragEvent) => {
  //   e.preventDefault(); // Allow drop
  //   e.stopPropagation();
  // };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === "__body") return;
    e.dataTransfer.setData("componentType", type); //=> 14:18
    // target.style.opacity = "0.3";
    const target = e.target as HTMLElement;

    // Check if the target has an id property
    if (target.id) {
      const targetId = target.id;
      setActiveContainer(targetId);
    }
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    target.style.opacity = "1"; // Reset the opacity
    setActiveContainer(null);
  };

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
      id={props.element.id}
      draggable
      className={clsx("w-max relative text-[14px] transition-all ")}
      // onDragEnter={handleDragEnter}
      // onDragLeave={handleDragLeave}
      // onDragOver={handleDragOver}
      // onDrop={(e) => handleOnDrop(e, props.element.id)}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "element")}
      onDragEnd={handleDragEnd}
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
