"use client";
import csharp from "@/assets/csharp.png";
import dotnet from "@/assets/dotnet.png";
import postgres from "@/assets/postgres.png";
import docker from "@/assets/docker.png";
import TechItem from "./techitem";

export const BackendStack = () => {
  const techIcons = [
    { src: dotnet.src, alt: "Dotnet" },
    { src: csharp.src, alt: "C#" },
    { src: postgres.src, alt: "Postgres" },
    { src: docker.src, alt: "Docker" },
  ];

  return (
    <div className="md:grid sm:flex grid grid-cols-2 h-full items-center px-8 mt-2 justify-center gap-8">
      {techIcons.map((icon, index) => (
        <TechItem icon={icon} key={index} />
      ))}
    </div>
  );
};
