import Project from "./project";
import SectionHeader from "../common/section-header";
import opedemy from "@/assets/projects/opedemy.png";
import hiar from "@/assets/projects/hiar.png";
import tt from "@/assets/projects/tt.png";
import camreg from "@/assets/projects/camreg.png";
import goodwill from "@/assets/projects/goodwill.png";
import typescript from "@/assets/typescript.png";
import next from "@/assets/nextjs.png";
import tailwind from "@/assets/tailwind.png";
import svelte from "@/assets/svelte.png";
import node from "@/assets/node.svg";
import mongo from "@/assets/mongo.svg";
import maps from "@/assets/maps.svg";
import gemini from "@/assets/gemini.svg";
import sheets from "@/assets/sheets.svg";

export default function Projects() {
  const projects = [
    {
      company: "Hackules Inc.",
      year: "2025",
      title: "Opedemy",
      tasks: [
        "Spearheaded frontend development using SvelteKit, building the platform from scratch with TypeScript",
        "Implemented complex calculation logic for course metrics and student progress tracking",
        "Integrated with a backend with 200+ API endpoints including authentication and a payment gateway",
        "Used different rendering methods for 50% faster load times and good SEO performance",
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
        "Integrated with a backend with 100+ API endpoints including authentication and file uploads",
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
        "Integrated MongoDB for CRUD operations and SMS API and Email API to notify teachers about job posts and application updates",
        "Implemented role-based dashboards (teachers/students/guardians) with tailored workflows for posting jobs, applications, and scheduling",
      ],
      link: "https://teacherstoday.org",
      image: tt,
      stack: [next, node, mongo],
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
      stack: [svelte, typescript, sheets],
    },
    {
      company: "Personal",
      year: "2024",
      title: "GoodWill",
      tasks: [
        "Built a full-stack blood donation and volunteer coordination platform from scratch using SvelteKit and TypeScript",
        "Integrated Google Maps API to connect donors/volunteers with nearby requests and display real-time locations",
        "Leveraged Gemini API to implement an AI assistant for medical FAQs, first-aid guidance, and donor eligibility checks",
        "Designed a secure registration system featuring Google OAuth with user roles (donors, volunteers, seekers)",
      ],
      link: "http://goodwillweb.vercel.app",
      image: goodwill,
      stack: [svelte, typescript, tailwind, maps, gemini],
    },
  ];

  return (
    <div
      id="projects"
      className="h-fit font-sans mt-24  max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center  overflow-hidden"
    >
      <SectionHeader
        title="Featured Projects"
        subtitle="A mix of professional work and personal experiments—built to solve
          real problems, streamline workflows, or just explore new tech."
      />
      <div className="flex flex-wrap justify-center w-full gap-6  ">
        {projects.map((project, i) => (
          <Project project={project} key={i} />
        ))}
      </div>
    </div>
  );
}
