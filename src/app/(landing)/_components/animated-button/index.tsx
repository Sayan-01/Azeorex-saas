import React from "react";

const AnimatedBtn = () => {
  return (
    <button className="bg-slate-800 mx-auto no-underline group cursor-pointer relative shadow-css rounded-full pb-[1px] px-[1px] pt-[1px] text-xs leading-6  text-white/75 inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.4)_0%,rgba(56,189,248,0.2)_100%)] opacity-100 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-1 items-center z-10 rounded-full bg-zinc-950 py-1 px-4 ring-1 ring-white/10 ">
        <span className="flex">
          🌟 A special treatment <span className="md:flex hidden"> . . . .</span>
        </span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-100" />
    </button>
  );

};

export default AnimatedBtn;
