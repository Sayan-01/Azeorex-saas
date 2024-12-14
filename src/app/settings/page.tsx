"use client"
import React, { useRef, useState, useEffect } from "react";

const Page = () => {
  const resizableDivRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (resizableDivRef.current) {
        const { offsetWidth, offsetHeight } = resizableDivRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    // Create a ResizeObserver to monitor changes
    const resizeObserver = new ResizeObserver(handleResize);

    if (resizableDivRef.current) {
      resizeObserver.observe(resizableDivRef.current);
      handleResize(); // Initialize dimensions on mount
    }

    // Cleanup observer on component unmount
    return () => {
      if (resizableDivRef.current) {
        resizeObserver.unobserve(resizableDivRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-zinc-800 h-[40rem]">
      <div
        ref={resizableDivRef}
        className="w-40 h-40 shadow-inner-border-blue-500 bg-yellow-300 overflow-auto"
        style={{ resize: "both" }}
      ></div>
      <p className="text-white mt-4">
        Width: {dimensions.width}px, Height: {dimensions.height}px
      </p>
    </div>
  );
};

export default Page;
