"use client";

import React, { useState } from "react";

const Input = () => {
  const [dimensions, setDimensions] = useState({ width: 300, height: 300 }); // Initial dimensions
  const [isDraggingWidth, setIsDraggingWidth] = useState(false); // Track width drag
  const [isDraggingHeight, setIsDraggingHeight] = useState(false); // Track height drag

  const handleMouseDownWidth = () => setIsDraggingWidth(true);
  const handleMouseDownHeight = () => setIsDraggingHeight(true);
  const handleMouseUp = () => {
    setIsDraggingWidth(false);
    setIsDraggingHeight(false);
  };

  const handleMouseMove = (event:any) => {
    if (isDraggingWidth) {
      setDimensions((prev) => ({
        ...prev,
        width: Math.max(prev.width + event.movementX, 50), // Minimum width of 50px
      }));
    }
    if (isDraggingHeight) {
      setDimensions((prev) => ({
        ...prev,
        height: Math.max(prev.height + event.movementY, 50), // Minimum height of 50px
      }));
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Stops resizing when leaving the area
      className="flex flex-col items-center space-y-4"
    >
      {/* Resizable Div */}
      <div
        style={{
          width: `${dimensions.width}px`, // Use correct JSX syntax for dynamic values
          height: `${dimensions.height}px`, // Use correct JSX syntax for dynamic values
          backgroundColor: "#FF014F",
          transition: isDraggingWidth || isDraggingHeight ? "none" : "all 0.2s ease",
        }}
      ></div>
      <div className="flex flex-col space-y-2">
        {/* Width Input Field */}
        <input
          type="text"
          onMouseDown={handleMouseDownWidth}
          onMouseUp={handleMouseUp}
          value={`Width: ${dimensions.width}px`} // Use template literals
          readOnly
          style={{
            cursor: "ew-resize",
            textAlign: "center",
            width: "150px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            userSelect: "none",
          }}
        />

        {/* Height Input Field */}
        <input
          type="text"
          onMouseDown={handleMouseDownHeight}
          onMouseUp={handleMouseUp}
          value={`Height: ${dimensions.height}px`} // Use template literals
          readOnly
          style={{
            cursor: "ns-resize",
            textAlign: "center",
            width: "150px",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            userSelect: "none",
          }}
        />
      </div>
    </div>
  );
};

export default Input;
