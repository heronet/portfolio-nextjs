import { cn } from "@/lib/utils";
import SectionHeader from "../common/section-header";

interface ResearchProject {
  title: string;
  description: string;
  status: "Published" | "Ongoing";
  year: string;
  authors?: string;
  venue?: string;
  link?: string;
  technologies: string[];
  impact?: string;
}

export default function Research() {
  const research: ResearchProject[] = [
    {
      title:
        "Air Evacuation Time for Holes of Variable Diameters in a Space Station",
      description:
        "Mathematical modeling of air leak in space stations using Poiseuille's law and Ideal Gas Law. Calculated evacuation times for various hole diameters under pressure differentials.",
      status: "Published",
      year: "2024",
      authors: "Siratul Islam, Ibrahim Hossain, Rimon Acharjee Sumon",
      venue: "University Physics Competition 2024 (Team 750, Problem A)",
      link: "https://www.researchgate.net/publication/388081375_Air_evacuation_time_for_holes_of_variable_diameters_in_a_Space_Station_Team_750_Problem_A",
      technologies: [
        "Mathematical Modeling",
        "Fluid Dynamics",
        "Thermodynamics",
      ],
      impact: "Bronze Medal",
    },
    {
      title:
        "Radar-based Occupancy Detection and Automated Relay System for Energy Saving",
      description:
        "Intelligent occupancy detection using RD-03D mmWave radar for automated lighting and HVAC control in government buildings. Real-time data logging and analysis for energy consumption optimization.",
      status: "Ongoing",
      year: "2025",
      technologies: [
        "ESP32",
        "mmWave Radar",
        "IoT",
        "Energy Management",
        "Google Sheets API",
      ],
      impact: "Government office buildings energy management initiative",
    },
    {
      title:
        "RFID-based Attendance Management System for Rural Educational Institutions",
      description:
        "Low-cost RFID attendance solution designed for remote schools and universities in Bangladesh with limited internet connectivity. Features offline storage with sync capabilities.",
      status: "Ongoing",
      year: "2025",
      technologies: [
        "RFID",
        "ESP32",
        "Offline-First Architecture",
        "Database Sync",
      ],
      impact:
        "Addressing educational infrastructure challenges in rural Bangladesh",
    },
    {
      title: "Autonomous Vehicle Navigation System",
      description:
        "Department-funded autonomous vehicle project implementing ROS2-based navigation with LiDAR sensor fusion, OpenCV computer vision, and STM32F4 vehicle control systems.",
      status: "Ongoing",
      year: "2025",
      technologies: [
        "Jetson Orin",
        "ROS2",
        "LiDAR",
        "OpenCV",
        "STM32F4",
        "Sensor Fusion",
      ],
      impact: "5-member research team, EEE department-funded project",
    },
  ];

  return (
    <div className="relative py-2">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div
        id="research"
        className="h-fit font-sans mt-24 max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center overflow-hidden"
      >
        <SectionHeader
          title="Research"
          subtitle="Applied physics and embedded systems research focusing on IoT-enabled automation, energy optimization, and autonomous systems development."
        />

        <div className="w-full max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8 z-20">
          {research.map((project, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      {project.title}
                    </h3>
                    <span
                      className={cn(
                        "px-2 py-0.5 text-xs rounded-full",
                        project.status === "Published"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      )}
                    >
                      {project.status}
                    </span>
                  </div>
                  {project.authors && (
                    <p className="text-sm text-zinc-400 mb-2">
                      {project.authors}
                    </p>
                  )}
                  {project.venue && (
                    <p className="text-sm text-zinc-500 italic mb-3">
                      {project.venue}
                    </p>
                  )}
                </div>
                <span className="text-sm text-zinc-500 shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="text-zinc-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {project.impact && (
                <div className="bg-zinc-800/50 border border-zinc-700/50 rounded px-3 py-2 mb-4">
                  <p className="text-sm text-zinc-400">
                    <span className="text-zinc-500">Impact:</span>{" "}
                    {project.impact}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-zinc-800/50 text-zinc-300 text-xs rounded border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>View Publication</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
