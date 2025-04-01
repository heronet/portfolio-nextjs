"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { IconCircleCheck, IconExternalLink } from "@tabler/icons-react";
import { GlowingEffect } from "../ui/glowing-effect";

interface ProjectProps {
  project: {
    company: string;
    year: string;
    title: string;
    tasks: string[];
    stack: StaticImageData[];
    link: string;
    image: StaticImageData;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="relative  w-96  rounded-2xl border border-gray-700  p-2  md:rounded-3xl md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="p-4 md:gap-8 relative justify-between flex-col flex  items-center  h-full overflow-hidden rounded-2xl border-0.75  shadow-[0px_0px_27px_0px_#2D2D2D] ">
        <div className="flex gap-3  flex-col">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full max-w-xl rounded-xl h-56"
          />

          <div className="flex flex-col gap-3 ">
            <div>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
                {project.company} - {project.year}
              </p>
              <h3 className="text-2xl mt-1 font-bold text-white flex items-center justify-between">
                {project.title}

                <div className="items-center flex gap-3">
                  {project.stack.map((img, ii) => (
                    <Image
                      src={img}
                      alt={ii.toString()}
                      key={ii}
                      className="w-fit h-7 bg-white p-1 rounded-full"
                    />
                  ))}
                </div>
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {project.tasks.map((task, i) => (
                <li key={i} className="flex  gap-2">
                  <IconCircleCheck className="min-w-4 mni-h-4 w-4 h-4 mt-1" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          className="px-4 w-full  flex items-center justify-center gap-1 my-4 text-center py-2 rounded-md border cursor-pointer border-neutral-300 bg-neutral-100 text-neutral-700 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
        >
          Live link <IconExternalLink className="h-4" />
        </a>
      </div>
    </div>
  );
}
