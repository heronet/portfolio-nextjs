import hackules from "@/assets/experience/hackules.png";
import cam from "@/assets/experience/cam.png";
import Image from "next/image";
import SectionHeader from "../common/section-header";

const experiences = [
  {
    company: "Hackules Inc.",
    logo: hackules,
    roles: [
      {
        title: "Software Engineer",
        period: "Jun. 2024 - Jun. 2025",
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
    technologies: [
      "SvelteKit",
      "Next.Js",
      "Django",
      "Express",
      "Typescript",
      "Flutter",
      "Facebook Graph API",
      "LinkedIn API",
      "Firebase",
      "Dart",
    ],
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
    technologies: ["SvelteKit", "Typescript", "Google Sheets API", "Wordpress"],
  },
];

export default function Experience() {
  return (
    <section className="py-20" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Work Experience"
          subtitle="Companies and organizations I have worked with"
        />

        <div className="mt-16 space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-600/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Company Logo */}
                <div className="shrink-0">
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-0.5">
                    <div className="w-full h-full bg-gray-900 rounded-xl p-2 flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {exp.company}
                  </h3>

                  {/* Roles */}
                  <div className="space-y-6">
                    {exp.roles.map((role, j) => (
                      <div key={j} className="relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="text-lg font-medium text-indigo-300">
                            {role.title}
                          </h4>
                          <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full w-fit">
                            {role.period}
                          </span>
                        </div>

                        <ul className="space-y-2 text-gray-300">
                          {role.details.map((detail, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 shrink-0"></span>
                              <span className="text-sm leading-relaxed">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 pt-6 border-t border-gray-700/50">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:bg-gray-700/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
