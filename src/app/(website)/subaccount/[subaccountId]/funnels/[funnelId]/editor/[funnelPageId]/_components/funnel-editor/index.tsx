"use client";
import { Button } from "@/components/ui/button";
import { getFunnelPageDetails } from "@/lib/queries";
import { useEditor } from "../../../../../../../../../../../providers/editor/editor-provider";
import clsx from "clsx";
import { EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import Recursive from "./funnel-editor-components/recursive";
import { Loader } from "@/components/global/Loader";

type Props = { funnelPageId: string; liveMode?: boolean };

const FunnelEditor = ({ funnelPageId, liveMode }: Props) => {
  const { dispatch, state, position } = useEditor();
  const [load, setLoade] = useState(true);

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
      className="pb-12 "
    />
  ) : (
    <div
      className={clsx("use-automation-zoom-in h-[calc(100%-40.8px)] pt-4 overflow-y-auto mx-[240px] bg-[#1c1c1c] transition-all az-bar", {
        "!p-0 !mr-0 !mx-0 h-full": state.editor.previewMode === true || state.editor.liveMode === true,
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
      {/* <div className="border-6 border-red-500 bg-blue-500/20" style={{height: position.height, width: position.width, position: "absolute", top: position.top, left: position.left ,zIndex: 1002, overflow: "visible", pointerEvents: "none",}}>s</div> */}
      {Array.isArray(state.editor.elements) &&
        state.editor.elements.map((childElement) => (
          <Recursive
            key={childElement.id}
            element={childElement}
          />
        ))}
    </div>
  );
};

export default FunnelEditor;
