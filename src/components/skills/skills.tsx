import { cn } from "@/lib/utils";
import SectionHeader from "../common/section-header";

interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    items: string[];
  }[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Embedded Systems Engineering",
      description:
        "Low-level programming, real-time systems, and hardware integration",
      skills: [
        {
          name: "Languages & Frameworks",
          items: [
            "Embedded C/C++",
            "Rust",
            "STM32 HAL",
            "ESP-IDF",
            "Embassy-rs",
          ],
        },
        {
          name: "Microcontrollers & Processors",
          items: [
            "STM32 (H7, H5, F4)",
            "ESP32 (C3, C6, S3)",
            "Jetson Orin",
            "RISC-V",
          ],
        },
        {
          name: "Real-Time Operating Systems",
          items: ["Zephyr RTOS", "FreeRTOS", "CMSIS-RTOS", "Embedded Linux"],
        },
        {
          name: "Hardware Protocols",
          items: ["GPIO", "I2C", "SPI", "UART", "ADC", "PWM", "DMA"],
        },
        {
          name: "Communication & IoT",
          items: ["MQTT", "Wi-Fi", "BLE", "LoRa", "Smart Relays"],
        },
        {
          name: "Development Tools",
          items: [
            "STM32CubeIDE",
            "CMake",
            "PlatformIO",
            "KiCAD",
            "OpenOCD",
            "GDB",
            "ROS2",
          ],
        },
      ],
    },
    {
      category: "Full-Stack Development",
      description:
        "Modern web technologies for end-to-end IoT and application development",
      skills: [
        {
          name: "Languages",
          items: ["TypeScript", "JavaScript", "Python", "C#", "Dart", "Kotlin"],
        },
        {
          name: "Frontend",
          items: ["SvelteKit", "Next.js", "React", "Flutter", "Tailwind CSS"],
        },
        {
          name: "Backend",
          items: [".NET", "Django", "Express.js", "SQL", "MongoDB"],
        },
        {
          name: "Cloud & DevOps",
          items: ["GCP", "Firebase", "Docker", "Git", "Linux", "Bash"],
        },
      ],
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
        id="skills"
        className="h-fit font-sans mt-24 max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center overflow-hidden"
      >
        <SectionHeader
          title="Technical Skills"
          subtitle="From silicon to cloud - bridging hardware and software for complete IoT solutions"
        />

        <div className="w-full max-w-6xl space-y-8 z-20">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                  {category.category}
                </h3>
                <p className="text-sm text-zinc-400">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skillGroup, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-sm font-medium text-zinc-300 uppercase tracking-wide">
                      {skillGroup.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, j) => (
                        <span
                          key={j}
                          className="px-3 py-1.5 bg-zinc-800/70 hover:bg-zinc-800 text-zinc-200 text-sm rounded border border-zinc-700/50 hover:border-zinc-600 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Focus Areas */}
        <div className="w-full max-w-6xl mt-8 z-20">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-zinc-200 mb-4">
              Research Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-2">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-zinc-300">
                  RISC-V Architecture
                </h4>
                <p className="text-xs text-zinc-500">
                  Processor optimization and open hardware
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-2">
                  <svg
                    className="w-5 h-5 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-zinc-300">
                  Power Electronics
                </h4>
                <p className="text-xs text-zinc-500">
                  Smart grid and energy systems
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-2">
                  <svg
                    className="w-5 h-5 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h4 className="text-sm font-medium text-zinc-300">
                  Industrial IoT
                </h4>
                <p className="text-xs text-zinc-500">
                  Automation and smart systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
