import { EditorBtns } from "@/types/types";
import React from "react";


const SectionPlaceholder = () => {
  const handleDragStart = (e: React.DragEvent, type: EditorBtns) => {
    if (type === null) return;
    e.dataTransfer.setData("componentType", type);
  };
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, "section")}
      className=" h-14 w-14 bg-muted/70 rounded-lg p-2 flex flex-col gap-[4px]"
    >
      <div className="border-dotted border-[2px] h-full rounded-sm border-muted-foreground/50 bg-muted-foreground/20 w-full" />
      <div className="border-dotted border-[2px] h-full rounded-sm border-muted-foreground/50 bg-muted-foreground/20 w-full" />
    </div>
  );
};

export default SectionPlaceholder;
