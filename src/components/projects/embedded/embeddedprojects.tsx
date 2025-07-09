import SectionHeader from "../../common/section-header";
import { cn } from "@/lib/utils";

export default function WebProjects() {
  // const projects = [];

  return (
    <div className="relative py-2">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div
        id="projects"
        className="h-fit font-sans mt-24 max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center  overflow-hidden"
      >
        <SectionHeader
          title="Embedded Systems Projects"
          subtitle="A mix of professional work and personal experiments—built to solve
          real problems, streamline workflows, or just explore new tech. - embedded systems"
        />
        <div className="flex flex-wrap justify-center w-full gap-6  z-20">
          {/* {projects.map((project, i) => (
            <Project project={project} key={i} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
