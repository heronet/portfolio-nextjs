"use client";
import csharp from "@/assets/csharp.png";
import dotnet from "@/assets/dotnet.png";
import postgres from "@/assets/postgres.png";
import docker from "@/assets/docker.png";
import { ItemCanvas } from "./techitem";

export const BackendStack = () => {
  const items = [dotnet, csharp, postgres, docker];

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
