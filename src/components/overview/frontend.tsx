"use client";
import typescript from "@/assets/typescript.png";
import next from "@/assets/Next.js.png";
import tailwind from "@/assets/tailwind.png";
import svelte from "@/assets/svelte.png";
import { ItemCanvas } from "./techitem";

export const FrontendStack = () => {
  const items = [svelte, next, typescript, tailwind];

  return (
    <div className="flex flex-wrap items-center justify-center gap-7 h-fit mx-auto">
      {items.map((item) => (
        <div className="w-18 h-18" key={item.src}>
          <ItemCanvas icon={item.src} />
        </div>
      ))}
    </div>
  );
};
