"use client";
import typescript from "@/assets/typescript.png";
import next from "@/assets/nextjs.png";
import tailwind from "@/assets/tailwind.png";
import svelte from "@/assets/svelte.png";
import TechItem from "./techitem";

export const FrontendStack = () => {
  const techIcons = [
    { src: svelte.src, alt: "Svelte" },
    { src: next.src, alt: "Next.js" },
    { src: typescript.src, alt: "TypeScript" },
    { src: tailwind.src, alt: "Tailwind CSS" },
  ];

  return (
    <div className="md:grid sm:flex grid grid-cols-2 h-full items-center px-8 mt-2 justify-center gap-8">
      {techIcons.map((icon, index) => (
        <TechItem icon={icon} key={index} />
      ))}
    </div>
  );
};
