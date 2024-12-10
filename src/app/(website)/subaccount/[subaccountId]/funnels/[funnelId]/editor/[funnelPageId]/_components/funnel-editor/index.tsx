"use client";
import { Button } from "@/components/ui/button";
import { getFunnelPageDetails } from "@/lib/queries";
import { useEditor } from "../../../../../../../../../../../providers/editor/editor-provider";
import clsx from "clsx";
import { EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import Recursive from "./funnel-editor-components/recursive";
import { Loader } from "@/components/global/Loader";
import { useOverlay } from "../../../../../../../../../../../providers/overlay-provider";

type Props = { funnelPageId: string; liveMode?: boolean };

const FunnelEditor = ({ funnelPageId, liveMode }: Props) => {
  const { dispatch, state } = useEditor();
  const [load, setLoade] = useState(true);
  const { hoverStyle, clickStyle } = useOverlay();

  useEffect(() => {
    if (liveMode) {
      dispatch({
        type: "TOGGLE_LIVE_MODE",
        payload: { value: true },
      });
    }
  }, [liveMode]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFunnelPageDetails(funnelPageId);
      if (!response) return;
      setLoade(false);
      dispatch({
        type: "LOAD_DATA",
        payload: {
          elements: response.content ? JSON.parse(response?.content) : "",
          withLive: !!liveMode,
        },
      });
    };
    fetchData();
  }, [funnelPageId]);

  const handleClick = () => {
    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: {},
    });
  };

  const handleUnpreview = () => {
    dispatch({ type: "TOGGLE_PREVIEW_MODE" });
    dispatch({ type: "TOGGLE_LIVE_MODE" });
  };
  return load ? (
    <Loader
      loading
      className="pb-12 mr-[250px]"
    />
  ) : (
    <div
      className={clsx("relative w-full h-full overflow-hidden mr-[250px] use-automation-zoom-in mx-auto transition-all", {
        "!p-0 !mr-0 !mx-0 ": state.editor.previewMode === true || state.editor.liveMode === true,
        "!w-[850px]": state.editor.device === "Tablet",
        "!w-[420px]": state.editor.device === "Mobile",
        "w-full": state.editor.device === "Desktop",
      })}
    >
      {state.editor.liveMode ? (
        <></>
      ) : (
        <>
          <div
            className={clsx("absolute shadow-inner-border-blue-500 pointer-events-none z-[1000]", hoverStyle.display === "block" ? "visible" : "invisible")}
            style={{
              top: hoverStyle.top - 48,
              left: hoverStyle.left - 0.8,
              width: hoverStyle.width,
              height: hoverStyle.height,
            }}
          >
            <span className="absolute transition-all -top-4 left-0 bg-blue-500 text-white text-xs h-4 px-3  rounded-t">item name</span>
          </div>
          <div
            className={clsx("absolute shadow-inner-border-blue-500 pointer-events-none z-[1000]", hoverStyle.display === "block" ? "visible" : "invisible")}
            style={{
              top: clickStyle.top - 48,
              left: clickStyle.left - 0.8,
              width: clickStyle.width,
              height: clickStyle.height,
            }}
          >
            <span className="absolute transition-all -top-4 left-0 bg-blue-500 text-white text-xs h-4 px-3  rounded-t">item name</span>
          </div>
        </>
      )}

      <div
        className={clsx("use-automation-zoom-in h-full pb-[48px] overflow-y-scroll mx-auto bg-background transition-all box", {
          "!p-0 !mr-0 !mx-0 ": state.editor.previewMode === true || state.editor.liveMode === true,
          "!w-[850px]": state.editor.device === "Tablet",
          "!w-[420px]": state.editor.device === "Mobile",
          "w-full": state.editor.device === "Desktop",
        })}
        onClick={handleClick}
      >
        {state.editor.previewMode && state.editor.liveMode && (
          <Button
            variant={"ghost"}
            size={"icon"}
            className="w-6 h-6 bg-slate-600 p-[2px] fixed top-0 left-0 z-[100]"
            onClick={handleUnpreview}
          >
            <EyeOff />
          </Button>
        )}
        {Array.isArray(state.editor.elements) &&
          state.editor.elements.map((childElement) => (
            <Recursive
              key={childElement.id}
              element={childElement}
            />
          ))}
      </div>
    </div>
  );
};

export default FunnelEditor;
