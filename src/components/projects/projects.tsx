"use client";
import opedemy from "@/assets/projects/opedemy.png";
import hiar from "@/assets/projects/hiar.png";
import tt from "@/assets/projects/tt.png";
import Project from "./project";

export default function Projects() {
  const projects = [
    {
      company: "Hackules Inc.",
      year: "2024",
      title: "Opedemy",
      tasks: [
        "Spearheaded frontend development using SvelteKit, building the platform from scratch with TypeScript",
        "Implemented complex calculation logic for course metrics and student progress tracking",
        "Designed responsive UI components and optimized performance for 50% faster page loads",
        "Integrated RESTful APIs for seamless data flow between frontend and backend systems",
      ],
      link: "https://opedemy.com",
      image: opedemy,
    },
    {
      company: "Hackules Inc.",
      year: "2024",
      title: "HIAR",
      tasks: [
        "Led SvelteKit-based frontend development for academic research platform",
        "Developed interactive data visualization components for research analytics",
        "Implemented authentication flow and role-based access control",
        "Optimized application architecture to handle complex academic data structures",
      ],
      link: "https://hiar.ac",
      image: hiar,
    },
    {
      company: "Hackules Inc.",
      year: "2024",
      title: "Teachers Today",
      tasks: [
        "Completed and refactored the incomplete codebase of full-stack app using Next.js (frontend) and Express.js (backend)",
        "Built CRUD operations for teacher resources with MongoDB integration",
        "Integrated SMS API for sending notifications to teachers for updates & reminders",
      ],
      link: "https://teacherstoday.org",
      image: tt,
    },
  ];

  return (
    <div
      id="projects"
      className="h-fit  max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Featured Projects
        </h2>
        <p className="text-neutral-300 text-sm md:text-base ">
          Some real world projects I have worked on
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-6  ">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  );
}
