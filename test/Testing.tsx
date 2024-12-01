"use client"
import { useState } from "react";

function Appp() {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected); // Toggle selection on click
  };

  return (
    <div
      className={`selectable-div ${isSelected ? "shadow-lg" : ""} 
        p-5 bg-gray-100 rounded-lg opacity-100 cursor-pointer 
        transition-shadow duration-300 ease-in-out 
        hover:shadow-xl active:shadow-2xl`}
      onClick={handleClick}
    >
      Click or Hover on Me
    </div>
  );
}

export default Appp;