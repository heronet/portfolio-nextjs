"use client";
import Project from "./project";
import opedemy from "@/assets/projects/opedemy.png";
import hiar from "@/assets/projects/hiar.png";
import tt from "@/assets/projects/tt.png";
import camreg from "@/assets/projects/camreg.png";
import goodwill from "@/assets/projects/goodwill.png";
import typescript from "@/assets/typescript.png";
import next from "@/assets/nextjs.png";
import tailwind from "@/assets/tailwind.png";
import svelte from "@/assets/svelte.png";

export default function Projects() {
  const projects = [
    {
      company: "Hackules Inc.",
      year: "2025",
      title: "Opedemy",
      tasks: [
        "Spearheaded frontend development using SvelteKit, building the platform from scratch with TypeScript",
        "Implemented complex calculation logic for course metrics and student progress tracking",
        "Designed responsive UI components and optimized performance for 50% faster page loads",
        "Integrated RESTful APIs for seamless data flow between frontend and backend systems",
      ],
      link: "https://opedemy.com",
      image: opedemy,
      stack: [svelte, typescript, tailwind],
    },
    {
      company: "Hackules Inc.",
      year: "2025",
      title: "HIAR",
      tasks: [
        "Led SvelteKit-based frontend development for academic research platform",
        "Developed interactive data visualization components for research analytics",
        "Implemented authentication flow and role-based access control",
        "Optimized application architecture to handle complex academic data structures",
      ],
      link: "https://hiar.ac",
      image: hiar,
      stack: [svelte, typescript, tailwind],
    },
    {
      company: "Hackules Inc.",
      year: "2024",
      title: "Teachers Today",
      tasks: [
        "Revamped and completed a full-stack teacher recruitment platform (Next.js + Express.js), enabling tutors and students to connect for tuition jobs",
        "Developed advanced filtering and sorting (location, subject, salary) with dynamic UI components for seamless job matching",
        "Integrated MongoDB for CRUD operations and SMS API (Twilio) to notify teachers about job posts and application updates",
        "Implemented role-based dashboards (teachers/students) with tailored workflows for posting jobs, applications, and scheduling",
      ],
      link: "https://teacherstoday.org",
      image: tt,
      stack: [next, typescript, tailwind],
    },
    {
      company: "CAM-SUST",
      year: "2025",
      title: "CAM Registration",
      tasks: [
        "Developed a full-stack registration platform from scratch using SvelteKit and TypeScript after discussing requirements with the team",
        "Implemented server-side logic in `server.ts` to handle form submissions, data processing, and user authentication",
        "Integrated Google Sheets API and Google Drive API to automate data storage and document management",
        "Enabled bulk registration capabilities, significantly improving efficiency for CAM-SUST (one of SUST's largest clubs)",
      ],
      link: "https://cam-register.vercel.app",
      image: camreg,
      stack: [svelte, typescript, tailwind],
    },
    {
      company: "Personal",
      year: "2024",
      title: "GoodWill",
      tasks: [
        "Built a full-stack blood donation and volunteer coordination platform from scratch using SvelteKit and TypeScript",
        "Integrated Google Maps API to connect donors/volunteers with nearby requests and display real-time locations",
        "Leveraged Gemini API to implement an AI assistant for medical FAQs, first-aid guidance, and donor eligibility checks",
        "Designed a secure registration system featuring Google OAuth with user roles (donors, volunteers, seekers) and automated notifications",
      ],
      link: "https://cam-register.vercel.app",
      image: goodwill,
      stack: [svelte, typescript, tailwind],
    },
  ];

  return (
    <div
      id="projects"
      className="h-fit font-sans mt-24  max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  py-20  lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Featured Projects
        </h2>
        <p className="text-neutral-300 text-sm md:text-base max-w-md text-center">
          A mix of professional work and personal experiments—built to solve
          real problems, streamline workflows, or just explore new tech.
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
