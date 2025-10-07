import { cn } from "@/lib/utils";
import SectionHeader from "../common/section-header";

interface Contribution {
  project: string;
  organization: string;
  contributions: {
    title: string;
    description: string;
    prNumber?: string;
    prUrl?: string;
    docsUrl?: string;
    status: "Merged" | "Published";
  }[];
  impact: string;
  logo?: string;
}

export default function OpenSource() {
  const contributions: Contribution[] = [
    {
      project: "Zephyr RTOS",
      organization: "Linux Foundation",
      impact: "4 merged PRs serving 1000+ embedded developers globally",
      contributions: [
        {
          title: "Driver Development - TM1637 Auxdisplay",
          description:
            "Contributed TM1637 4-digit 7-segment display driver to official auxdisplay subsystem. Complete driver with API for segment control and brightness adjustment.",
          prNumber: "#96510",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/96510",
          docsUrl:
            "https://docs.zephyrproject.org/latest/doxygen/html/group__auxdisplay__interface.html",
          status: "Merged",
        },
        {
          title: "Board Support - WeAct ESP32-S3-B",
          description:
            "Added WeAct Studio ESP32-S3 board support with complete device tree, peripheral configuration, GPIO mappings, WiFi/BLE support, and flash configuration.",
          prNumber: "#96687",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/96687",
          docsUrl:
            "https://docs.zephyrproject.org/latest/boards/weact/weact_esp32s3_b/doc/index.html",
          status: "Merged",
        },
        {
          title: "Board Support - WeAct STM32F446RET6",
          description:
            "Complete board support with device tree, GPIO mappings, and peripheral initialization for STM32F446. Enables Zephyr RTOS compatibility for ARM Cortex-M4 development board.",
          prNumber: "#91886",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/91886",
          docsUrl:
            "https://docs.zephyrproject.org/latest/boards/weact/stm32f446_core/doc/index.html",
          status: "Merged",
        },
        {
          title: "Development Tools - PyOCD & STM32CubeProgrammer",
          description:
            "Added PyOCD and STM32CubeProgrammer support for WeAct STM32F405/F446 boards, improving toolchain flexibility and debugging options.",
          prNumber: "#92985",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/92985",
          status: "Merged",
        },
      ],
    },
    {
      project: "ESP-IDF Ecosystem",
      organization: "Espressif Systems",
      impact: "Published production-ready components on official registry",
      contributions: [
        {
          title: "RD-03D mmWave Radar Sensor Component",
          description:
            "ESP-IDF component for AI-Thinker RD-03D radar with intelligent filtering algorithms and real-time coordinate tracking. Published on official registry.",
          docsUrl:
            "https://components.espressif.com/components/heronet/esp_rd-03d",
          status: "Published",
        },
        {
          title: "TM1637 4-Digit Display Component",
          description:
            "Display driver component with comprehensive API for display control, brightness management, and segment manipulation for ESP32-based IoT projects.",
          docsUrl: "https://components.espressif.com/components/heronet/tm1637",
          status: "Published",
        },
      ],
    },
    {
      project: "STM32 HAL Ecosystem",
      organization: "Independent Development",
      impact: "Portable sensor libraries for rapid prototyping",
      contributions: [
        {
          title: "BME280 Environmental Sensor HAL Driver",
          description:
            "Custom HAL driver for Bosch BME280 with optimized I2C communication, enabling rapid prototyping for environmental monitoring systems.",
          docsUrl: "https://github.com/heronet/stm32-bme280-hal",
          status: "Published",
        },
      ],
    },
    {
      project: "svelte-cloudinary",
      organization: "Web Development Library",
      impact: "Fixed critical bug affecting 800+ developers",
      contributions: [
        {
          title: "Video Player Aspect Ratio Fix",
          description:
            "Fixed critical video player aspect ratio bug affecting production deployments across multiple projects.",
          prNumber: "#108/#109",
          prUrl: "https://github.com/cloudinary-community/svelte-cloudinary",
          status: "Merged",
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
        id="opensource"
        className="h-fit font-sans mt-24 max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center overflow-hidden"
      >
        <SectionHeader
          title="Open Source Contributions"
          subtitle="Contributing to embedded systems infrastructure and developer tooling across major open-source projects."
        />

        <div className="w-full max-w-5xl space-y-8 z-20">
          {contributions.map((contrib, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-zinc-100">
                    {contrib.project}
                  </h3>
                  <span className="text-sm text-zinc-500">
                    {contrib.organization}
                  </span>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-700/50 rounded px-3 py-2 inline-block">
                  <p className="text-sm text-zinc-400">{contrib.impact}</p>
                </div>
              </div>

              <div className="space-y-4">
                {contrib.contributions.map((item, i) => (
                  <div
                    key={i}
                    className="bg-zinc-800/30 border border-zinc-700/30 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base font-medium text-zinc-200">
                        {item.title}
                      </h4>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-400 mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {item.prUrl && (
                        <a
                          href={item.prUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {item.prNumber && <span>{item.prNumber}</span>}
                          <span>View PR</span>
                          <svg
                            className="w-3 h-3"
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
                      {item.docsUrl && (
                        <a
                          href={item.docsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          <span>Documentation</span>
                          <svg
                            className="w-3 h-3"
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
