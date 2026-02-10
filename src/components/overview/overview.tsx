import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FrontendStack } from "./items/frontend";
import { BackendStack } from "./items/backend";
import { MobileStack } from "./items/mobile";
import { OSS } from "./items/oss";
import { EmbeddedStack } from "./items/embedded";
import { ArchLinuxContent } from "./items/arch";
import { AstronomyContent } from "./items/astro";
import { PhysicsContent } from "./items/physics";
import { ResearchHighlight } from "./items/research-highlight";
import { OpenSourceMetrics } from "./items/opensource-metrics";
import SectionHeader from "../common/section-header";
import { SparklesCore } from "../ui/sparkles";

export default function Overview() {
  const items = [
    {
      content: (
        <EmbeddedStack
          microcontrollers={[
            "STM32 (H7, H5, F4)",
            "ESP32 (C3, C6, S3)",
            "Jetson Orin",
            "RISC-V",
          ]}
          rtos={["Zephyr RTOS", "FreeRTOS", "ESP-IDF", "Embassy-rs"]}
          protocols={["I2C", "SPI", "UART", "MQTT", "BLE", "WiFi", "LoRa"]}
          tools={["STM32CubeIDE", "PlatformIO", "KiCAD", "ROS2", "CMake"]}
          specialization="IoT & Real-time Systems"
          experience="Zephyr RTOS Maintainer"
          contribution={{
            project: "Linux Foundation Zephyr RTOS",
            description:
              "Biometrics Subsystem Maintainer - Authored first biometric authentication framework for Zephyr RTOS",
            url: "https://github.com/zephyrproject-rtos/zephyr/pulls?q=is%3Apr+author%3Aheronet",
          }}
        />
      ),
      col: 3,
    },
    {
      title: "Recent Open Source Contribution",
      description: "Latest contribution to open source projects",
      content: (
        <OSS
          projectName="zephyrproject-rtos/zephyr"
          technologies={[
            "C",
            "Kconfig",
            "Devicetree",
            "Subsystem Architecture",
          ]}
          contributionType="PR Merged"
          description="RFC: drivers: biometrics: Add driver subsystem, GT5x, and ZFM-X0 fingerprint sensor drivers"
          prNumbers="PR #100139"
          releaseVersion="v4.4.0"
          githubUrl="https://github.com/zephyrproject-rtos/zephyr/pull/100139"
        />
      ),
      col: 2,
    },
    {
      content: (
        <OpenSourceMetrics
          contributions={[
            { count: "15+", label: "Merged PRs", project: "Zephyr RTOS" },
            { count: "5000+", label: "Developers Served", project: "Globally" },
            { count: "2", label: "ESP-IDF Components", project: "Published" },
          ]}
          highlight="Zephyr RTOS Maintainer"
          badgeUrl="https://www.credly.com/badges/f9c1429d-66fc-4437-b363-b82b4bc39114"
        />
      ),
      col: 1,
    },
    {
      title: "Frontend Stack",
      description: "Modern web development tools",
      content: <FrontendStack />,
      col: 1,
    },
    {
      title: "Backend Stack",
      description: "Server-side technologies",
      content: <BackendStack />,
      col: 1,
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps",
      content: <MobileStack />,
      col: 1,
    },
    {
      content: (
        <PhysicsContent
          degree="Bachelor of Science (Hons.) in Physics"
          university="Shahjalal University of Science and Technology"
          period="Aug 2023 - Aug 2027"
          interests={["Embedded Systems", "Applied Physics"]}
          achievement="Bronze Medal, University Physics Competition 2024"
        />
      ),
      col: 1,
    },
    {
      content: (
        <ResearchHighlight
          currentProjects={3}
          publications={1}
          highlight="Radar-based Occupancy Detection"
          description="Government office energy management using mmWave radar and IoT automation"
          award="Bronze Medal - University Physics Competition 2024"
          researchAreas={[
            "IoT Automation",
            "IoT in Education",
            "Energy Systems",
            "Autonomous Vehicles",
          ]}
        />
      ),
      col: 2,
    },

    {
      content: (
        <AstronomyContent
          role="IT Secretary"
          organization="Copernicus Astronomical Memorial of SUST"
          period="Nov 2024 - Present"
          responsibilities={[
            "Built new official website with NextJS + TypeScript",
            "IT coordinator for CAM-SUST Summer School on Astronomy 2025",
            "Organized recruitment events and technical workshops",
          ]}
          technologies={["NextJS", "TypeScript", "Google Sheets API"]}
          astronomyInterests={[
            "Astrophotography",
            "Star Observation",
            "Space Technology",
          ]}
        />
      ),
      col: 2,
    },
    {
      content: (
        <ArchLinuxContent
          yearsOfUse={5}
          favoritePackages={["pacman", "neofetch", "vim"]}
          desktopEnvironment="bspwm + polybar + picom"
          githubUrl="https://github.com/heronet/bspwm-config"
        />
      ),
      col: 1,
    },
  ];

  return (
    <div className="relative py-16">
      <div id="overview" className="max-w-7xl mx-auto w-full p-4 md:p-8">
        <SectionHeader
          title="Overview"
          subtitle="A brief overview of my skills, interests, and contributions"
        />
        <BentoGrid className="max-w-4xl mx-auto z-10 p-4">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              content={item.content}
              className={`${
                item.col === 3
                  ? "md:col-span-3"
                  : item.col === 2
                    ? "md:col-span-2"
                    : "md:col-span-1"
              }`}
            />
          ))}
        </BentoGrid>
      </div>
      <div className="w-full absolute inset-0 -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={10}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
}
