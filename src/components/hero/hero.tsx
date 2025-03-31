import React from "react";
import { cn } from "@/lib/utils";

import ExploreBtn from "./explore-btn";
import { Spotlight } from "../ui/spotlight";

export default function Hero() {
  return (
    <div className="relative flex py-50 h-fit w-full overflow-hidden  bg-[#0a0a0a] antialiased md:items-center md:justify-center">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <Spotlight />

      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
        <div className="bg-slate-800 mb-4 mx-auto no-underline group w-fit relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Welcome to my website</span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </div>

        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          Bringing ideas into reality <br /> with quality code.
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-sans text-center text-base font-normal text-neutral-300">
          This is <span className="">Sirat</span>, a Software Engineer
          specializing in full-stack web development and cross-platform mobile
          development.
        </p>

        <ExploreBtn />
      </div>
    </div>
  );
}
