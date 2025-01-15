import React from "react";
import "./btn.css";
import { TrendingUp } from "lucide-react";

const AnimatedBtn = () => {
  return (
    <>
      <div id="poda">
        <div className="glow"></div>

        <div className="borderBtn"></div>

        <div id="mainnn">
          <div className="bg-black border-2 border-transparent w-[calc(100%-2.6px)] rounded-full m-[1.3px] relative z-[10] flex p-1 h-[35.5px] items-center text-zinc-300">
            <span className="px-2.5 py-[1px]  rounded-full text-black bg-white mr-2">New</span> A special treatment<span className="mx-2"><TrendingUp size={18}/></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedBtn;
