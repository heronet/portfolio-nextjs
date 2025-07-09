import Project from "./project";
import SectionHeader from "../../common/section-header";
import { cn } from "@/lib/utils";

import stm32f4 from "@/assets/projects/stm32f446_core.webp";
import esp32att from "@/assets/projects/esp32att.webp";
import esp32ws from "@/assets/projects/esp32ws.webp";
import esp32radar from "@/assets/projects/esp32radar.webp";
import stm32bme280 from "@/assets/projects/stm32bme280.webp";

export default function EmbeddedProjects() {
  const projects = [
    {
      id: 1,
      title: "ZephyrRTOS support for WeAct STM32F446RET6",
      description:
        "Added board support for WeAct STM32F446RET6 MCU to ZephyrRTOS. Contributed device tree files, board configuration, and documentation to enable seamless development on this popular development board.",
      technologies: [
        "STM32",
        "ARM Cortex-M4",
        "ZephyrRTOS",
        "C",
        "Device Tree",
      ],
      githubUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/91886",
      liveUrl:
        "https://docs.zephyrproject.org/latest/boards/weact/stm32f446_core/doc/index.html",
      image: stm32f4,
      category: "Open Source Contribution",
      year: "2025",
    },
    {
      id: 2,
      title: "ESP32-S3 Weather Station",
      description:
        "Comprehensive weather monitoring system with multi-sensor environmental data collection. Features OLED display, MQTT connectivity, and measures temperature, humidity, pressure, light intensity, and magnetic field with compass heading.",
      technologies: [
        "ESP32-S3",
        "C++",
        "MQTT",
        "BME280",
        "BH1750",
        "QMC5883L",
        "SSD1306",
        "WiFi",
        "IoT",
        "Arduino",
      ],
      githubUrl: "https://github.com/heronet/esp32s3-weatherstation",
      liveUrl: undefined,
      image: esp32ws, // You can add an image later
      category: "Personal Project",
      year: "2025",
    },
    {
      id: 3,
      title: "ESP32-S3 Biometric Attendance System",
      description:
        "Portable biometric attendance tracking solution using fingerprint recognition. Features offline storage with SPIFFS, Google Sheets integration, BLE control, and RGB LED feedback for secure attendance management.",
      technologies: [
        "ESP32-S3",
        "C++",
        "Fingerprint",
        "BLE",
        "SPIFFS",
        "Google Sheets API",
        "NeoPixel",
        "WiFi",
        "Arduino",
      ],
      githubUrl: "https://github.com/heronet/esp32s3-attendance",
      liveUrl: undefined,
      image: esp32att,
      category: "Personal Project",
      year: "2025",
    },
    {
      id: 4,
      title: "ESP32 Radar Smart Switch",
      description:
        "Smart presence-detection switch built with ESP-IDF and RD-03D 24Ghz mmWave radar. Detects human presence to automate appliances using relays.",
      technologies: ["ESP32", "ESP-IDF", "C", "RD-03D Radar", "Relay"],
      githubUrl: "https://github.com/heronet/esp32_radar_switch",
      liveUrl: undefined,
      image: esp32radar,
      category: "Faculty Project",
      year: "2025",
    },
    {
      id: 5,
      title: "STM32 BME280 HAL Driver",
      description:
        "Custom HAL driver implementation for the Bosch BME280 environmental sensor on STM32 microcontrollers. Provides temperature, humidity, and pressure readings with I2C communication support.",
      technologies: [
        "STM32",
        "BME280",
        "HAL",
        "C",
        "I2C",
        "Environmental Sensing",
      ],
      githubUrl: "https://github.com/heronet/stm32-bme280-hal",
      liveUrl: undefined,
      image: stm32bme280,
      category: "Personal Project",
      year: "2025",
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
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div
        id="embedded-projects"
        className="h-fit font-sans mt-24 max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center overflow-hidden"
      >
        <SectionHeader
          title="Embedded Systems Projects"
          subtitle="Hardware-focused projects spanning microcontroller programming, IoT development, and real-time systems. From contributing to open-source RTOS to building custom automation solutions."
        />
        <div className="flex flex-wrap justify-center w-full gap-6 z-20">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
