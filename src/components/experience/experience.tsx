"use client";
import hackules from "@/assets/experience/hackules.png";
import cam from "@/assets/experience/cam.png";
import Image from "next/image";
import { GlowingEffect } from "../ui/glowing-effect";
import { GithubGlobe } from "./github-globe";
import { IconCircleCheck } from "@tabler/icons-react";

const experiences = [
  {
    company: "Hackules Inc.",
    logo: hackules,
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
    logo: cam,
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

export default function Experience() {
  return (
    <div
      className="max-w-7xl mx-auto mt-24 w-full p-8 font-sans"
      id="experience"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Work Experience
        </h2>
        <p className="text-neutral-300 text-sm md:text-base ">
          Companies and organizations I have worked with
        </p>
      </div>
      {/*  */}

      <div className="max-lg:flex flex-col grid grid-cols-5 gap-4">
        {/* Globe */}
        <div className="relative col-span-2 h-full rounded-2xl border border-gray-700  p-2  md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex  flex-col justify-center items-center gap-3 h-full overflow-hidden rounded-xl border-0.75  shadow-[0px_0px_27px_0px_#2D2D2D] ">
            <GithubGlobe />
          </div>
        </div>

        {/* Info */}
        <div className="relative col-span-3 h-full rounded-2xl border border-gray-700  p-2  md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex  flex-col justify-between gap-6 h-full overflow-hidden rounded-xl border-0.75 px-3 py-6  shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="flex md:gap-6 gap-3 max-sm:p-4 py-4 max-sm:flex-col"
              >
                <div className="">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    className="rounded-3xl min-w-16 min-h-16 w-16 h-16 p-2 bg-gray-900 object-contain"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-bold text-lg md:text-xl">{exp.company}</p>
                  <div className="space-y-6">
                    {exp.roles.map((role, j) => (
                      <div key={j} className="">
                        <p className="flex max-sm:text-sm mt-1 max-sm:flex-col gap-1 justify-between">
                          <span>{role.title}</span> <span>{role.period}</span>
                        </p>
                        <ul className="space-y-1 text-neutral-400  mt-3  max-w-3xl">
                          {role.details.map((det, i) => (
                            <li key={i} className="flex  gap-2">
                              <IconCircleCheck className="min-w-4 mni-h-4 w-4 h-4 mt-1" />
                              <span>{det}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
