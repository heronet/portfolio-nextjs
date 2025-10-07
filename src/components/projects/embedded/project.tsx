"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  IconExternalLink,
  IconBrandGithub,
  IconCalendar,
  IconCpu,
  IconBolt,
  IconArrowUpRight,
  IconStar,
  IconGitBranch,
  IconFlask,
  IconBook,
  IconTrophy,
} from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    docsUrl?: string;
    image: StaticImageData;
    category:
      | "Research"
      | "Open Source"
      | "Personal"
      | "Professional"
      | "Faculty";
    status?: "Published" | "Ongoing" | "Completed";
    year: string;
    impact?: string;
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
      case "Open Source":
        return <IconGitBranch className="w-4 h-4" />;
      case "Research":
        return <IconFlask className="w-4 h-4" />;
      case "Personal":
        return <IconBolt className="w-4 h-4" />;
      case "Faculty":
        return <IconStar className="w-4 h-4" />;
      case "Professional":
        return <IconTrophy className="w-4 h-4" />;
      default:
        return <IconCpu className="w-4 h-4" />;
    }
  };

  const getCategoryStyle = (category: string) => {
    switch (category) {
      case "Open Source":
        return "from-emerald-400/10 to-green-400/10 border-emerald-400/20 text-emerald-400";
      case "Research":
        return "from-purple-400/10 to-pink-400/10 border-purple-400/20 text-purple-400";
      case "Personal":
        return "from-blue-400/10 to-cyan-400/10 border-blue-400/20 text-blue-400";
      case "Faculty":
        return "from-amber-400/10 to-orange-400/10 border-amber-400/20 text-amber-400";
      case "Professional":
        return "from-rose-400/10 to-red-400/10 border-rose-400/20 text-rose-400";
      default:
        return "from-neutral-400/10 to-gray-400/10 border-neutral-400/20 text-neutral-400";
    }
  };

  const getStatusStyle = (status?: string) => {
    switch (status) {
      case "Published":
        return "from-green-400/10 to-emerald-400/10 border-green-400/20 text-green-400";
      case "Ongoing":
        return "from-blue-400/10 to-cyan-400/10 border-blue-400/20 text-blue-400";
      case "Completed":
        return "from-neutral-400/10 to-gray-400/10 border-neutral-400/20 text-neutral-400";
      default:
        return "";
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
        {/* Aceternity grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Header Section */}
        <div className="relative h-56 bg-gradient-to-br from-neutral-900 via-black to-neutral-900 overflow-hidden flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Top badges with Aceternity styling */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start gap-2">
            <div className="flex gap-2 flex-wrap">
              <div
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 backdrop-blur-sm border rounded-full text-xs font-medium",
                  `bg-gradient-to-r ${getCategoryStyle(project.category)}`
                )}
              >
                {getCategoryIcon(project.category)}
                {project.category}
              </div>
              {project.status && (
                <div
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 backdrop-blur-sm border rounded-full text-xs font-medium",
                    `bg-gradient-to-r ${getStatusStyle(project.status)}`
                  )}
                >
                  {project.status}
                </div>
              )}
            </div>
            <div className="flex items-center gap-1 px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/[0.08] rounded-full text-xs shrink-0">
              <IconCalendar className="w-3 h-3" />
              {project.year}
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="relative p-5 flex-grow flex flex-col">
          {/* Title */}
          <div className="flex items-start justify-between gap-2 mb-4">
            <h3 className="text-lg font-semibold text-white leading-tight group-hover:text-white/90 transition-colors duration-200">
              {project.title}
            </h3>
            {(project.category === "Open Source" ||
              project.status === "Published") && (
              <IconStar className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-200 flex-shrink-0" />
            )}
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors duration-200 mb-4">
            {project.description}
          </p>

          {/* Impact badge */}
          {project.impact && (
            <div className="mb-4 bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2">
              <p className="text-xs text-neutral-400">
                <span className="text-neutral-500">Impact:</span>{" "}
                <span className="text-neutral-300">{project.impact}</span>
              </p>
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 6).map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs bg-white/[0.05] text-neutral-300 rounded-md border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-200"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2.5 py-1 text-xs bg-white/[0.05] text-neutral-400 rounded-md border border-white/[0.08]">
                +{project.technologies.length - 6}
              </span>
            )}
          </div>

          {/* Spacer to push buttons to bottom */}
          <div className="flex-grow"></div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-1 flex-wrap">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 justify-center items-center gap-2 px-4 py-2 bg-white/[0.05] hover:bg-white/[0.08] text-neutral-300 hover:text-white rounded-lg border border-white/[0.08] hover:border-white/[0.12] transition-all duration-200 text-sm font-medium group/btn"
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
                  "flex items-center flex-1 gap-2 px-4 py-2 rounded-lg border transition-all duration-200 text-sm font-medium group/btn",
                  "hover:border-white/[0.12] border-white/[0.08]",
                  `bg-gradient-to-r ${getCategoryStyle(
                    project.category
                  )} text-inherit`
                )}
              >
                <IconExternalLink className="w-4 h-4" />
                Live
                <IconArrowUpRight className="w-3 h-3 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all duration-200" />
              </a>
            )}

            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center flex-1 items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-400/10 to-green-400/10 border border-emerald-400/20 text-emerald-400 hover:border-emerald-400/30 rounded-lg transition-all duration-200 text-sm font-medium group/btn"
              >
                <IconBook className="w-4 h-4" />
                Docs
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
