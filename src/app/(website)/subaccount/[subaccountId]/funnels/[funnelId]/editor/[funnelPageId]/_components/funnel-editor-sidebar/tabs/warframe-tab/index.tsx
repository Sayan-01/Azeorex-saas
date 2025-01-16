"use client";
import React, { useEffect, useState } from "react";
import { useEditor } from "../../../../../../../../../../../../../providers/editor/editor-provider";
import { Warframe } from "@/types/types";
import { Button } from "@/components/ui/button";
import { createWarframe, findWarframe } from "@/lib/queries";
import { v4 } from "uuid";
import { Loader } from "@/components/global/Loader";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WarframeTab = () => {
  const { state } = useEditor();
  const [components, setComponents] = useState<Warframe[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const res = await findWarframe();
        setComponents(res);
      } catch (error) {
        console.error("Failed to fetch warframes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchComponents();
  }, []);

  return (
    <div className="p-2">
      {components.map((item: Warframe) => {
        return (
          <div
            key={item.id}
            id={item.id}
            onDragStart={(e) => {
              e.dataTransfer.setData("componentType", item.warframe); //item.warframe 1 ta string 
            }}
            draggable
            className="mb-2 rounded-md bg-zinc-800 text-xs p-2 px-3 h-20 flex items-center justify-center relative border-2 border-zinc-700 border-dashed"
          >
            <p>{item?.warframe_name}</p>
            <div className="absolute top-2 right-2 opacity-60">
              <div
                className="flex gap-2"
                onClick={() => {
                  navigator.clipboard.writeText(item.warframe);
                  toast({ title: "Copied Successfully" });
                }}
              >
                <Copy size={15} />
              </div>
            </div>
          </div>
        );
      })}
      <Loader
        loading={loading}
        className="mb-3"
      />
      <Button
        className="w-full h-8 my-4"
        onClick={async () => {
          await createWarframe({
            id: v4(),
            warframe_name: "Navbar",
            warframe_image: "",
            warframe: JSON.stringify(state.editor.selectedElement),
          });
        }}
      >
        Create warframe
      </Button>
    </div>
  );
};

export default WarframeTab;
