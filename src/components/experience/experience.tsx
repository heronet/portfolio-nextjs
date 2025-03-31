"use client";
import { IconBriefcase } from "@tabler/icons-react";
import { motion } from "motion/react";

const experiences = [
  {
    company: "Hackules Inc.",
    roles: [
      {
        title: "Software Engineer, Junior",
        period: "Jun. 2024 - Present",
        details: [
          "Led the frontend development of Opedemy, an AI-focused education technology platform.",
          "Handled the full-stack development of Teachers Today, a tuition matching platform.",
          "Interviewed candidates for fellow engineering roles.",
        ],
      },
      {
        title: "Software Engineer, Intern",
        period: "Feb. 2024 - Jun. 2024",
        details: [
          "Developed an AI marketing tool with interactive graphs, deep data exploration, and integration with Facebook Graph API.",
          "Built a Mobile CRM app using Flutter for the Job matching company MyJobs (1000+ customers).",
        ],
      },
    ],
    technologies:
      "SvelteKit, Next.Js, Django, Express, Typescript, Flutter, Facebook Graph API, LinkedIn API, Firebase, Dart",
  },
  {
    company: "Copernicus Astronomical Memorial of SUST",
    roles: [
      {
        title: "IT Secretary",
        period: "Nov. 2024 - Present",
        details: [
          "Organized the in-person member recruitment event in 2024 as a member of the organizing committee.",
          "Created the online recruitment form and user management system.",
        ],
      },
      {
        title: "Assistant IT Secretary",
        period: "Apr. 2024 - Nov. 2024",
        details: ["Created tutorials on Python for beginners."],
      },
    ],
    technologies: "SvelteKit, Typescript, Google Sheets API, Wordpress",
  },
];

export default function ExperienceTimeline() {
  return <div className="max-w-4xl mx-auto p-6"></div>;
}
