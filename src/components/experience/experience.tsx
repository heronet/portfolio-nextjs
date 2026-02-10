import hackules from "@/assets/experience/hackules.png";
import cam from "@/assets/experience/cam.png";
import sust from "@/assets/experience/sust.png";
import lf from "@/assets/experience/lf.png";
import Image from "next/image";
import SectionHeader from "../common/section-header";

const experiences = [
  {
    company: "Linux Foundation - Zephyr RTOS Project",
    logo: lf,
    roles: [
      {
        title: "Biometrics Subsystem Maintainer, Zephyr Maintainers Team",
        period: "Feb. 2026 - Present",
        type: "Full-time",
        location: "Remote",
        details: [
          "Promoted to subsystem maintainer after authoring Zephyr's biometrics subsystem (PR #100139), the first biometric authentication framework in the RTOS, enabling fingerprint-based security for embedded applications",
          "Designed complete subsystem architecture including public API interfaces, device abstractions, driver framework, and Kconfig integration for biometric sensors",
          "Implemented reference drivers for ZFM-x0 & GT-5x optical fingerprint sensors with enrollment, verification, and template management",
          "Establish technical standards and review all community contributions to the biometrics subsystem",
        ],
      },
      {
        title: "Contributor (Triage), Zephyr Contributors Team",
        period: "Jun. 2025 - Present",
        type: "Full-time",
        location: "Remote",
        details: [
          "Accepted into official Zephyr Contributors Team following 15+ merged PRs expanding hardware ecosystem across ARM, RISC-V, and Xtensa platforms",
          "Develop device drivers and board support packages serving 5000+ embedded developers globally",
          "Review community contributions and provide technical guidance on driver architecture and device tree bindings",
          "Maintain official documentation for display subsystems and 9+ board support packages in Zephyr upstream",
        ],
      },
    ],
    technologies: [
      "Zephyr RTOS",
      "Embedded C",
      "Subsystem Architecture",
      "Device Drivers",
      "Device Tree",
      "Git",
      "ARM",
      "RISC-V",
      "Xtensa",
      "Kconfig",
    ],
  },
  {
    company: "Shahjalal University of Science and Technology",
    logo: sust,
    roles: [
      {
        title:
          "Research Assistant - Department of Electrical and Electronic Engineering",
        period: "Mar. 2025 - Present",
        type: "Full-time",
        location: "On-site",
        details: [
          "Developing smart relay control systems for government cost optimization in collaboration with EE faculty.",
          "Research focuses on IoT-enabled power management systems using STM32 and ESP32 microcontrollers.",
          "Implementing MQTT-based data acquisition systems for real-time monitoring and control.",
          "Conducting radar-based occupancy detection research for automated energy optimization in government buildings.",
          "Developing RFID-based attendance management systems for rural educational institutions in Bangladesh.",
        ],
      },
    ],
    technologies: [
      "STM32",
      "ESP32",
      "Embedded C",
      "MQTT",
      "Power Electronics",
      "Smart Relays",
      "IoT Protocols",
      "RD-03D Radar",
      "RFID Modules",
    ],
  },
  {
    company: "Hackules Inc.",
    logo: hackules,
    roles: [
      {
        title: "Software Engineer",
        period: "Jun. 2024 - Jun. 2025",
        type: "Full-time",
        location: "Remote",
        details: [
          "Led full-stack development for educational platforms including Teachers Today (Next.js + Express.js)",
          "Developed Opedemy learning platform with 200+ API integrations and optimized SSR for 50% faster load times",
          "Conducted technical interviews for engineering positions",
        ],
      },
      {
        title: "Software Engineer, Intern",
        period: "Feb. 2024 - Jun. 2024",
        type: "Part-time",
        location: "Remote",
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
        type: "Full-time",
        location: "On-site",
        details: [
          "Built the new official website from ground up using modern technologies like NextJS + Typescript",
          "IT coordinator and Scientific Organizing Committee member of CAM-SUST Summer School on Astronomy 2025",
          "Organized in-person recruitment events and coordinated technical workshops",
        ],
      },
      {
        title: "Assistant IT Secretary",
        period: "Apr. 2024 - Nov. 2024",
        type: "Full-time",
        location: "On-site",
        details: [
          "Managed and maintained the old Wordpress website, configuring packages for various functionalities",
          "Developed educational content and Python programming tutorials for 200+ students",
          "Handled content publishing on the website including blogs, and magazine",
        ],
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

        <div className="mt-16 space-y-10">
          {experiences.map((exp, expIndex) => (
            <div
              key={expIndex}
              className="bg-gray-900/30 border border-gray-800/50 rounded-lg p-6 hover:bg-gray-900/40 transition-colors duration-200"
            >
              {/* Company Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-lg p-2 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {exp.roles.length > 1
                      ? `${exp.roles.length} positions`
                      : "1 position"}
                  </p>
                </div>
              </div>

              {/* Roles Timeline */}
              {exp.roles.length === 1 ? (
                // Single role - no timeline needed
                <div className="ml-4">
                  <div className="mb-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1 max-md:mb-3">
                      <h4 className="text-lg font-medium text-white">
                        {exp.roles[0].title}
                      </h4>
                      <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-md w-fit">
                        {exp.roles[0].period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">
                      {exp.roles[0].type}{" "}
                      {exp.roles[0].location && `- ${exp.roles[0].location}`}
                    </p>
                  </div>

                  {/* Role Details */}
                  <ul className="space-y-2 mb-4">
                    {exp.roles[0].details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                      >
                        <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                // Multiple roles - show timeline
                <div className="ml-4 relative">
                  <div className="space-y-8">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="relative">
                        {/* Timeline line segments - only between dots */}
                        {roleIndex < exp.roles.length - 1 && (
                          <div className="absolute left-[5px] top-[20px] w-0.5 bg-gray-800 h-[calc(100%+20px)]"></div>
                        )}

                        {/* Timeline dot */}
                        <div className="absolute left-0 top-2 w-3 h-3 bg-gray-700 border-2 border-gray-900 rounded-full z-10"></div>

                        {/* Role Content */}
                        <div className="ml-8">
                          {/* Role Header */}
                          <div className="mb-3">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1 max-md:mb-3">
                              <h4 className="text-lg font-medium text-white">
                                {role.title}
                              </h4>
                              <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-md w-fit">
                                {role.period}
                              </span>
                            </div>
                            <p className="text-gray-400 text-sm">
                              {role.type}{" "}
                              {role.location && `- ${role.location}`}
                            </p>
                          </div>

                          {/* Role Details */}
                          <ul className="space-y-2">
                            {role.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed"
                              >
                                <span className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-6 pt-6 border-t border-gray-800/50 ml-4">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs text-gray-400 bg-gray-800/30 border border-gray-800/50 rounded-md hover:bg-gray-800/50 hover:text-gray-300 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
