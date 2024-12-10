import React from "react";

type OverlayProps = {
  top: number;
  left: number;
  width: number;
  height: number;
  display: string;
};

const Overlay: React.FC<OverlayProps> = ({ top, left, width, height, display }) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        width,
        height,
        border: "2px solid blue",
        pointerEvents: "none",
        display,
        transition: "all 0.1s ease-in-out", // Smooth updates
      }}
    />
  );
};

export default Overlay;
