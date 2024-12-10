"use client";
import { useEffect, useRef, useState } from "react";
// import Background from "./components/Background";
// import Foreground from "./components/Foreground";
import { motion } from "motion/react";

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const ref = useRef(null);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className="relative w-full h-screen bg-zinc-800">
      {/* <Background /> */}
      <div
        ref={ref}
        className="fixed flex z-[3] p-2 top-0 left-0 w-full h-full bg-sky-800/5"
      >
        <Card reference={ref} />
        <Card reference={ref} />
        <Card reference={ref} />
      </div>
    </div>
  );
}

export default App;

function Card({ reference }: { reference: any }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1 }}
      dragTransition={{
        power: 0, // Adjust to change the drag responsiveness
        timeConstant: 0, // Reduces the smoothness during dragging
        modifyTarget: (target) => Math.round(target), // Snaps the position
      }}

      className="relative w-60 h-80 bg-zinc-900/90 text-white rounded-[25px] p-8 m-2 overflow-hidden"
    >
      {/* <FaRegFileLines /> */}
      <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur.</p>
      <div className="absolute bottom-0 bg-blue-400 w-full h-[45px] left-0"></div>
      data tag
    </motion.div>
  );
}
