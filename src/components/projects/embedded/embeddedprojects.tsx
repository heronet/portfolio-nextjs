import Project from "./project";
import SectionHeader from "../../common/section-header";
import { cn } from "@/lib/utils";

// Import images
import stm32f4 from "@/assets/projects/stm32f446_core.webp";
import esp32att from "@/assets/projects/esp32att.webp";
import esp32attrfid from "@/assets/projects/esp32attrfid.webp";
import esp32ws from "@/assets/projects/esp32ws.webp";
import esp32radar from "@/assets/projects/esp32radar.webp";
import stm32bme280 from "@/assets/projects/stm32bme280.webp";
import autonomouscar from "@/assets/projects/autonomous-car.webp";
import weact_esp32s3_b from "@/assets/projects/weact_esp32s3_b.webp";
import tm1637zephyr from "@/assets/projects/tm1637zephyr.webp";

export default function EmbeddedProjects() {
  const projects = [
    {
      id: 1,
      title: "Autonomous Vehicle Navigation System",
      description:
        "EEE department-funded autonomous car with 5-member research team. Implementing ROS2-based navigation with LiDAR sensor fusion, OpenCV computer vision, and STM32F4 vehicle control for real-time actuator management.",
      technologies: [
        "Jetson Orin",
        "ROS2",
        "Python",
        "C++",
        "LiDAR",
        "STM32F4",
        "OpenCV",
        "Sensor Fusion",
      ],
      githubUrl: undefined,
      liveUrl: undefined,
      image: autonomouscar,
      category: "Research" as const,
      status: "Ongoing" as const,
      year: "2025",
      impact: "Faculty-funded autonomous vehicle research project",
    },
    {
      id: 2,
      title: "Zephyr RTOS Support for WeAct STM32F446",
      description:
        "Complete board support for WeAct STM32F446RET6 including device tree, GPIO mappings, peripheral initialization, PyOCD, and STM32CubeProgrammer support. Enables Zephyr compatibility for ARM Cortex-M4 development board.",
      technologies: [
        "STM32",
        "ARM Cortex-M4",
        "Zephyr RTOS",
        "C",
        "Device Tree",
        "KConfig",
      ],
      githubUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/91886",
      liveUrl: undefined,
      docsUrl:
        "https://docs.zephyrproject.org/latest/boards/weact/stm32f446_core/doc/index.html",
      image: stm32f4,
      category: "Open Source" as const,
      status: "Published" as const,
      year: "2025",
      impact: "Serves 1000+ embedded developers globally",
    },
    {
      id: 3,
      title: "Zephyr RTOS Support for WeAct ESP32-S3",
      description:
        "Contributed WeAct Studio ESP32-S3 board support with complete device tree, GPIO mappings, WiFi/BLE support, and flash configuration to official Zephyr RTOS project.",
      technologies: [
        "ESP32-S3",
        "Xtensa",
        "Zephyr RTOS",
        "C",
        "Device Tree",
        "WiFi",
        "BLE",
      ],
      githubUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/96687",
      liveUrl: undefined,
      docsUrl:
        "https://docs.zephyrproject.org/latest/boards/weact/weact_esp32s3_b/doc/index.html",
      image: weact_esp32s3_b,
      category: "Open Source" as const,
      status: "Published" as const,
      year: "2025",
      impact: "Expands Zephyr RTOS ESP32-S3 hardware ecosystem",
    },
    {
      id: 4,
      title: "TM1637 Display Driver for Zephyr RTOS",
      description:
        "Contributed TM1637 4-digit 7-segment display driver to official Zephyr auxdisplay subsystem. Complete API for segment control, brightness adjustment, and display management.",
      technologies: ["Zephyr RTOS", "C", "Device Driver", "I2C", "TM1637"],
      githubUrl: "https://github.com/zephyrproject-rtos/zephyr/pull/96510",
      liveUrl: undefined,
      image: tm1637zephyr,
      category: "Open Source" as const,
      status: "Published" as const,
      year: "2025",
      impact: "Driver component in official Zephyr RTOS",
    },
    {
      id: 5,
      title: "STM32 BME280 HAL Driver",
      description:
        "Custom HAL driver for Bosch BME280 environmental sensor on STM32 microcontrollers. Provides temperature, humidity, and pressure readings with I2C communication support.",
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
      category: "Personal" as const,
      year: "2025",
    },
    {
      id: 6,
      title: "Radar-based Occupancy Detection System",
      description:
        "Intelligent occupancy detection using RD-03D mmWave radar for automated lighting and HVAC control. Features ESP32 relay control with Google Sheets data logging for energy analysis.",
      technologies: [
        "ESP32",
        "ESP-IDF",
        "C",
        "RD-03D Radar",
        "Relay",
        "Google Sheets API",
        "IoT",
      ],
      githubUrl: "https://github.com/heronet/esp32_radar_switch",
      liveUrl: undefined,
      docsUrl: "https://components.espressif.com/components/heronet/esp_rd-03d",
      image: esp32radar,
      category: "Research" as const,
      status: "Ongoing" as const,
      year: "2025",
      impact: "Government office energy management research",
    },
    {
      id: 7,
      title: "RFID Attendance System for Rural Education",
      description:
        "Low-cost RFID attendance solution for remote schools and universities in Bangladesh with limited connectivity. Features offline storage with sync capabilities.",
      technologies: [
        "ESP32",
        "RFID",
        "C++",
        "Offline Storage",
        "Database Sync",
        "Web Dashboard",
      ],
      githubUrl: undefined,
      liveUrl: undefined,
      image: esp32attrfid,
      category: "Research" as const,
      status: "Ongoing" as const,
      year: "2025",
      impact: "Educational technology for remote communities in Bangladesh",
    },
    {
      id: 8,
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
      ],
      githubUrl: "https://github.com/heronet/esp32s3-weatherstation",
      liveUrl: undefined,
      image: esp32ws,
      category: "Personal" as const,
      year: "2025",
    },
    {
      id: 9,
      title: "ESP32-S3 Biometric Attendance System",
      description:
        "Portable biometric attendance tracking using fingerprint recognition. Features offline storage with SPIFFS, Google Sheets integration, BLE control, and RGB LED feedback for secure attendance management.",
      technologies: [
        "ESP32-S3",
        "C++",
        "Fingerprint",
        "BLE",
        "SPIFFS",
        "Google Sheets API",
        "NeoPixel",
        "WiFi",
      ],
      githubUrl: "https://github.com/heronet/esp32s3-attendance",
      liveUrl: undefined,
      image: esp32att,
      category: "Personal" as const,
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
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-background"></div>
      <div
        id="embedded-projects"
        className="h-fit font-sans mt-24 max-w-7xl mx-auto rounded-md flex flex-col antialiased p-4 md:p-8 bg-grid-white/[0.05] items-center justify-center overflow-hidden"
      >
        <SectionHeader
          title="Embedded Systems Projects"
          subtitle="Hardware-focused projects spanning microcontroller programming, IoT development, real-time systems, and open-source contributions to Linux Foundation's Zephyr RTOS."
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
