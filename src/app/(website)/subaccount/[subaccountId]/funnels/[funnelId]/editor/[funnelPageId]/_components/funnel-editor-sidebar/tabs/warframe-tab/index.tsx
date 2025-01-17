"use client";
import React, { useEffect, useState } from "react";
import { useEditor } from "../../../../../../../../../../../../../providers/editor/editor-provider";
import { Warframe } from "@/types/types";
import { Button } from "@/components/ui/button";
import { createWarframe, deleteWarframe, findWarframe } from "@/lib/queries";
import { v4 } from "uuid";
import { Loader } from "@/components/global/Loader";
import { Copy, Settings2, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/db";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/custom-input";

const WarframeTab = () => {
  const { state } = useEditor();
  const [components, setComponents] = useState<Warframe[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const [warframeName, setWarframeName] = useState("");
  const [warframeImage, setWarframeImage] = useState("");

  const handleCreateWarframe = async () => {
    await createWarframe({
      id: v4(),
      warframe_name: warframeName,
      warframe_image: warframeImage,
      warframe: JSON.stringify(state.editor.selectedElement),
    });
    toast({ title: "Warframe created" });
    setWarframeName("");
    setWarframeImage("");
  };

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
            <div className="absolute top-2 right-2 opacity-60 flex gap-1">
              <div
                className="flex gap-2"
                onClick={() => {
                  navigator.clipboard.writeText(item.warframe);
                  toast({ title: "Copied Successfully" });
                }}
              >
                <Copy size={15} />
              </div>
              <button
                onClick={async () => {
                  await deleteWarframe(item.id);
                  toast({ title: "Warframe deleted" });
                }}
              >
                <Trash2 size={15.5} />
              </button>
            </div>
            <button className="absolute top-2 left-2 hidden opacity-60 ">
              <Settings2 size={15} />
            </button>
          </div>
        );
      })}
      <Loader
        loading={loading}
        className="mb-3"
      />
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="w-full h-8 my-4">Create warframe</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Create Warframe</AlertDialogTitle>
              <AlertDialogDescription>Please enter the details for the new Warframe.</AlertDialogDescription>
            </AlertDialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Warframe Name</label>
                <Input
                  className="h-10"
                  value={warframeName}
                  onChange={(e) => setWarframeName(e.target.value)}
                  placeholder="Enter warframe name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Warframe Image URL</label>
                <Input
                  className="h-10"
                  value={warframeImage}
                  onChange={(e) => setWarframeImage(e.target.value)}
                  placeholder="Enter image URL"
                />
              </div>
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              {/* <AlertDialogAction> */}
                <button onClick={handleCreateWarframe}>Create</button>
              {/* </AlertDialogAction> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default WarframeTab;
