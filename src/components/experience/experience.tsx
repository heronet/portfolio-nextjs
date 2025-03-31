"use client";
import hackules from "@/assets/experience/hackules.png";
import cam from "@/assets/experience/cam.png";
import Image from "next/image";

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
    <div className="max-w-7xl mx-auto mt-24 w-full p-8" id="experience">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Work Experience
        </h2>
        <p className="text-neutral-300 text-sm md:text-base ">
          Companies and organizations I have worked with
        </p>
      </div>
      {/*  */}
      <div className="p-4 space-y-8 w-full">
        {experiences.map((exp, i) => (
          <div key={i} className="flex gap-3">
            <div className="">
              <Image
                src={exp.logo}
                alt={exp.company}
                className="rounded-3xl w-16 h-16 p-2 bg-gray-900 object-contain"
              />
            </div>
            <div className="flex flex-col w-full">
              <p className="font-bold text-lg">{exp.company}</p>
              {exp.roles.map((role, j) => (
                <div key={j} className="">
                  <p className="flex justify-between">
                    <span>{role.title}</span> <span>{role.period}</span>
                  </p>
                  <ul className="list-disc text-neutral-400 mb-6 mt-1 px-4 max-w-3xl">
                    {role.details.map((det) => (
                      <li key={det}>{det}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
