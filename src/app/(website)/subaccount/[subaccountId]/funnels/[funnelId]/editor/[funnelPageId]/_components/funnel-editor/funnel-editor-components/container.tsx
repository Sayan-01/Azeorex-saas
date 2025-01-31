"use client";
import { Badge } from "@/components/ui/badge";
import { EditorElement, useEditor } from "../../../../../../../../../../../../providers/editor/editor-provider";
import clsx from "clsx";
import React, { ReactEventHandler, ReactNode, useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import Recursive from "./recursive";
import { moveObject, updateId } from "@/lib/moveElement";
import { defaultStyles, EditorBtns } from "@/types/types";

type Props = { element: EditorElement };

const Container = ({ element }: Props) => {
  const { id, content, styles, type } = element;
  const { dispatch, state, activeContainer, setActiveContainer } = useEditor();

  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 100,
  });

  console.log("width", styles);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleResize = (e: any, direction: string) => {
    e.preventDefault();

    const startWidth = dimensions.width;
    const startHeight = dimensions.height;
    const startX = e.clientX;
    const startY = e.clientY;
    let newWidth = startWidth;
    let newHeight = startHeight;

    const onMouseMove = (event: any) => {
      requestAnimationFrame(() => {
        if (direction.includes("right")) {
          newWidth = Math.max(10, startWidth + (event.clientX - startX));
        }
        if (direction.includes("bottom")) {
          newHeight = Math.max(10, startHeight + (event.clientY - startY));
        }
        if (direction.includes("left")) {
          newWidth = Math.max(10, startWidth - (event.clientX - startX));
          setPosition((prev) => ({ ...prev, x: position.x + (event.clientX - startX) }));
        }
        if (direction.includes("top")) {
          newHeight = Math.max(10, startHeight - (event.clientY - startY));
          setPosition((prev) => ({ ...prev, y: position.y + (event.clientY - startY) }));
        }

        setDimensions({ width: newWidth, height: newHeight });

        // dispatch({
        //   type: "UPDATE_ELEMENT",
        //   payload: {
        //     elementDetails: {
        //       ...state.editor.selectedElement,
        //       styles: {
        //         ...state.editor.selectedElement.styles,
        //         ...styleObject,
        //       },
        //     },
        //   },
        // });
      });
    };

    const onMouseUp = () => {
      const styleObject = {
        width: `${newWidth}px`,
        height: `${newHeight}px`,
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
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleOnDrop = (e: React.DragEvent, id: string) => {
    e.stopPropagation();
    e.preventDefault();

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
      case "image":
        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              content: {
                src: "/sayan.png",
              },
              id: v4(),
              name: "Image",
              styles: { width: "100%" },
              type: "image",
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
              styles: { ...defaultStyles, maxWidth: "100%", backgroundColor: "#d9d9d9", opacity: 1, borderRadius: "0px" },
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
      case "element":
        if (activeContainer) {
          if (id !== activeContainer) {
            moveObject(state.editor.elements, activeContainer, id, state);
            setActiveContainer(null);
          }
        }
        break;
      default:
        if (componentType === null) return;
        const oldData = JSON.parse(componentType) as EditorElement;
        const newData = updateId(oldData);

        dispatch({
          type: "ADD_ELEMENT",
          payload: {
            containerId: id,
            elementDetails: {
              id: newData.id,
              name: newData.name,
              styles: newData.styles,
              type: newData.type,
              content: newData.content,
            },
          },
        });
    }
    const target = e.currentTarget as HTMLElement;
    target.style.outline = "none";
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    target.style.outline = "1px solid #fcbd0f";
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    target.style.outline = "none";
  };

  const handleDragStart = (e: React.DragEvent, type: string) => {
    if (type === "__body") return;
    e.dataTransfer.setData("componentType", type);
    const target = e.target as HTMLElement;
    target.style.opacity = "0.3";
    target.style.cursor = "grabbing";

    if (target.id) {
      const targetId = target.id;
      setActiveContainer(targetId);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.target as HTMLElement;
    target.style.opacity = "1";
    e.stopPropagation();
    setActiveContainer(null);
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

  const handleDeleteElement = useCallback(() => {
    dispatch({
      type: "DELETE_ELEMENT",
      payload: {
        elementDetails: element,
      },
    });
  }, [dispatch, element]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeElement = document.activeElement as HTMLElement;
      const isEditable = activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable;

      if (e.key === "Backspace" && !isEditable) {
        if (state.editor.selectedElement.id === id && type !== "__body") {
          e.preventDefault();
          handleDeleteElement();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDeleteElement, id, state.editor.selectedElement.id, type]);

  return (
    <div
      id={id}
      style={{
        width: type !== "__body" ? `${dimensions.width}px` : styles.width,
        height: type !== "__body" ? `${dimensions.height}px` : styles.width,
        position: styles?.position || "relative",
        top: styles?.top || position.y || 0,
        bottom: styles?.bottom || position.y || 0,
        left: styles?.left || 0,
        right: styles?.right || 0,
        zIndex: styles?.zIndex || 0,
        marginTop: styles?.marginTop,
        marginBottom: styles?.marginBottom,
        marginLeft: styles?.marginLeft,
        marginRight: styles?.marginRight,
        maxWidth: styles?.maxWidth,
        maxHeight: styles?.maxHeight,
        rotate: styles.rotate,
      }}
      className={clsx("relative z-[1004] box !inset-0", {
        "h-fit   w-full": type === "container" || type === "2Col",
        "!relative w-full": type === "__body",
        "flex flex-col md:!flex-row": type === "2Col",
        "shadow-inner-border-blue-500 ": state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type === "__body",
      })}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={(e) => handleOnDrop(e, id)}
      draggable={type !== "__body"}
      onClick={handleOnClickBody}
      onDragStart={(e) => handleDragStart(e, "element")}
      onDragEnd={handleDragEnd}
    >
      <div
        style={{
          ...styles,
          rotate: "0",
        }}
        className={clsx("!relative !top-0 !bottom-0 !left-0 !right-0 !rotate-[0px] box-1 z-[1002] !h-full !w-full !m-0 group", {
          "px-4": type !== "__body",
          "pt-4 min-h-screen": type === "__body",
          "empty-outline ": Array.isArray(element.content) && !element.content.length && !state.editor.liveMode && type !== "__body",
          // "!p-9": Array.isArray(element.content) && !element.content.length,
          abc: !state.editor.liveMode,
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
        className={clsx("absolute overflow-visible pointer-events-none z-[1002] inset-0 opacity-100 filter-none", {
          hidden: state.editor.liveMode,
          "!shadow-inner-border-blue-500": state.editor.selectedElement.id === element.id,
        })}
      ></div>

      {["top-left", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left"].map((position) => (
        <div
          key={position}
          onMouseDown={(e) => handleResize(e, position)}
          className={`absolute border-main border w-2 h-2 z-[1002] ${
            position === "top-left"
              ? "top-0 left-0 cursor-nwse-resize"
              : position === "top"
              ? "top-0 left-1/2 -translate-x-1/2 cursor-ns-resize"
              : position === "top-right"
              ? "top-0 right-0 cursor-nesw-resize"
              : position === "right"
              ? "top-1/2 right-0 -translate-y-1/2 cursor-ew-resize"
              : position === "bottom-right"
              ? "bottom-0 right-0 cursor-nwse-resize"
              : position === "bottom"
              ? "bottom-0 left-1/2 -translate-x-1/2 cursor-ns-resize"
              : position === "bottom-left"
              ? "bottom-0 left-0 cursor-nesw-resize"
              : "top-1/2 left-0 -translate-y-1/2 cursor-ew-resize"
          } ${state.editor.selectedElement.id === id && !state.editor.liveMode && state.editor.selectedElement.type !== "__body" ? "block" : "hidden"}`}
        />
      ))}
      <Badge
        className={clsx("absolute bg-main z-[1006] -top-[16px] h-4 text-xs items-center  left-0 rounded-none rounded-t-md hidden", {
          flex: state.editor.selectedElement.id === element.id && !state.editor.liveMode,
          "bg-transparent text-main border border-main hover:bg-transparent": type === "__body",
        })}
      >
        {element.name}
      </Badge>
    </div>
  );
};

export default Container;
