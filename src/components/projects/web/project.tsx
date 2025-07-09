"use client";
import React, { useState, useRef } from "react";
import {
  IconExternalLink,
  IconBrandGithub,
  IconCalendar,
  IconBolt,
  IconArrowUpRight,
  IconCircleCheck,
  IconGitBranch,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface ProjectProps {
  project: {
    company: string;
    year: string;
    title: string;
    tasks: string[];
    stack: StaticImageData[];
    githubUrl?: string; // for code button
    liveUrl?: string; // for live button
    image: StaticImageData;
  };
}

const Project = ({ project }: ProjectProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Personal":
        return <IconGitBranch className="w-4 h-4" />;
      default:
        return <IconBolt className="w-4 h-4" />;
    }
  };

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Personal":
        return "from-emerald-400/10 to-green-400/10 border-emerald-400/20 text-emerald-400";
      default:
        return "from-blue-400/10 to-cyan-400/10 border-blue-400/20 text-blue-400";
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative max-w-sm w-full"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />

      {/* Main card container */}
      <div className="relative bg-black/[0.96] h-full backdrop-blur-xl border border-white/[0.08] rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/[0.12] group-hover:shadow-2xl group-hover:shadow-black/50 flex flex-col">
        {/*  Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Header Section */}
        <div className="relative h-56 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top badges */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
            <div
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm border rounded-full text-xs font-medium",
                `bg-gradient-to-r ${getCategoryStyle(project.company)}`
              )}
            >
              {getCategoryIcon(project.company)}
              {project.company}
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full text-xs ">
              <IconCalendar className="w-3 h-3" />
              {project.year}
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative p-5 flex-grow flex flex-col">
          {/* Title and Stack */}
          <div className="flex items-start justify-between gap-2 mb-4">
            <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-white/90 transition-colors duration-200">
              {project.title}
            </h3>
            <div className="flex gap-1 flex-shrink-0">
              {project.stack.map((img, ii) => (
                <Image
                  src={img}
                  alt={ii.toString()}
                  key={ii}
                  className="h-6 w-6 rounded-sm bg-white/[0.05] p-1 border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
                />
              ))}
            </div>
          </div>

          {/* Tasks List */}
          <div className="mb-4 flex-grow">
            <ul className="space-y-2 text-sm text-neutral-300">
              {project.tasks.map((task, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <IconCircleCheck className="min-w-4 min-h-4 w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                  <span className="leading-relaxed group-hover:text-neutral-200 transition-colors duration-200">
                    {task}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/[0.05] hover:bg-white/[0.08] text-neutral-300 hover:text-white rounded-lg border border-white/[0.08] hover:border-white/[0.12] transition-all duration-200 text-sm font-medium group/btn flex-1 justify-center"
              >
                <IconBrandGithub className="w-4 h-4" />
                Code
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm font-medium group/btn flex-1 justify-center",
                  "hover:border-white/[0.12] border-white/[0.08]",
                  `bg-gradient-to-r ${getCategoryStyle(
                    project.company
                  )} text-inherit`
                )}
              >
                <IconExternalLink className="w-4 h-4" />
                Live
                <IconArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Corner glow effect */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-2xl"></div>
      </div>
    </div>
  );
};

export default Project;
