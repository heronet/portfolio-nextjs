"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SectionHeader from "../common/section-header";
import { Contribution } from "@/lib/models/contribution";
import { fetchPRCounts } from "@/lib/api";

export default function OpenSource() {
  const [prCounts, setPrCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const [contributions] = useState<Contribution[]>([
    {
      project: "Zephyr RTOS",
      organization: "Linux Foundation",
      impact: "merged PRs serving 5000+ embedded developers globally",
      fallbackCount: 13,
      viewAllUrl: "https://github.com/zephyrproject-rtos/zephyr/pulls/heronet",
      viewAllLabel: "View All PRs",
      githubRepo: "zephyrproject-rtos/zephyr",
      contributions: [
        {
          title: "Subsystem Development - Biometrics Subsystem",
          description:
            "RFC: drivers: biometrics: Add driver subsystem, GT5x, and ZFM-X0 fingerprint sensor drivers - First biometric authentication framework in Zephyr RTOS with complete subsystem architecture, public API interfaces, and reference drivers for optical fingerprint sensors.",
          prNumber: "#100139",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/100139",
          docsUrl:
            "https://docs.zephyrproject.org/latest/hardware/peripherals/biometrics/index.html",
          status: "Merged",
        },
        {
          title: "Driver Development - HUB12 LED Matrix Display",
          description:
            "Added HUB12 interface driver for 32x16 monochrome LED matrix displays with SPI-based data transfer, configurable brightness, and thread-safe framebuffer access implementing standard Zephyr display API.",
          prNumber: "#97921",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/97921",
          docsUrl:
            "https://docs.zephyrproject.org/latest/hardware/peripherals/display/index.html",
          status: "Merged",
        },
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
          title: "Board Support - WeAct STM32WB55 Core",
          description:
            "Added STM32WB55 dual-core (Cortex-M4 + M0+) board support with USART console, DFU flashing, SWD debugging, and verified Bluetooth HCI Layer wireless coprocessor compatibility.",
          prNumber: "#97435",
          prUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/97435",
          docsUrl:
            "https://docs.zephyrproject.org/latest/boards/weact/stm32wb55_core/doc/index.html",
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
      ],
    },
    {
      project: "ESP-IDF Ecosystem",
      organization: "Espressif Systems",
      impact: "Published production-ready components on official registry",
      viewAllUrl: "https://components.espressif.com/components?q=heronet",
      viewAllLabel: "View Component Registry",
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
      fallbackCount: 1,
      viewAllUrl:
        "https://github.com/cloudinary-community/svelte-cloudinary/pulls?q=is%3Apr+author%3Aheronet",
      viewAllLabel: "View All PRs",
      githubRepo: "cloudinary-community/svelte-cloudinary",
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
  ]);

  useEffect(() => {
    fetchPRCounts(contributions).then((counts) => {
      setPrCounts(counts);
      setLoading(false);
    });
  }, [contributions]);

  const getImpactText = (contrib: Contribution) => {
    if (contrib.githubRepo && prCounts[contrib.githubRepo] !== undefined) {
      return `${prCounts[contrib.githubRepo]} ${contrib.impact}`;
    }
    return contrib.fallbackCount
      ? `${contrib.fallbackCount} ${contrib.impact}`
      : contrib.impact;
  };

  return (
    <div className="relative py-2">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#404040_1px,transparent_1px)]",
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
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="bg-zinc-800/50 border border-zinc-700/50 rounded px-3 py-2 inline-block">
                    <p className="text-sm text-zinc-400">
                      {loading && contrib.githubRepo ? (
                        <span className="inline-flex items-center gap-2">
                          <svg
                            className="animate-spin h-3 w-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Loading...
                        </span>
                      ) : (
                        getImpactText(contrib)
                      )}
                    </p>
                  </div>
                  {contrib.viewAllUrl && (
                    <a
                      href={contrib.viewAllUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-300 bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 rounded transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                      </svg>
                      {contrib.viewAllLabel}
                    </a>
                  )}
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
                      {item.status === "Merged" ? (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0 inline-flex items-center gap-1.5">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                          >
                            <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                          </svg>
                          Merged
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20 shrink-0">
                          {item.status}
                        </span>
                      )}
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
