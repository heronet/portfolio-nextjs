import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FrontendStack } from "./items/frontend";
import { BackendStack } from "./items/backend";
import { MobileStack } from "./items/mobile";
import { OSS } from "./items/oss";
import { ArchLinuxContent } from "./items/arch";
import { AstronomyContent } from "./items/astro";
import { PhysicsContent } from "./items/physics";

export default function Overview() {
  const items = [
    {
      title: "Frontend Stack",
      description: "My prefered frontend stack",
      content: <FrontendStack />,
      col: 1,
    },
    {
      title: "Backend Stack",
      description: "My favorite backend tools",
      content: <BackendStack />,
      col: 1,
    },
    {
      title: "Mobile Development",
      description: "Tools I use to develop mobile applications",
      content: <MobileStack />,
      col: 1,
    },
    {
      title: "Recent Open Source Contribution",
      description: "My most recent open source contribution",
      content: (
        <OSS
          projectName="svelte-cloudinary"
          technologies={["Svelte", "TypeScript", "npm"]}
          contributionType="Pull Request"
          description="Fixed CldVideoPlayer aspect ratio jump on load in the Cloudinary library for Svelte"
          prNumbers="PR 108/109"
          releaseVersion="1.3.2"
          githubUrl="https://github.com/cloudinary-community/svelte-cloudinary/pull/108"
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
    {
      content: (
        <PhysicsContent
          degree="Bachelor of Science (Hons.) in Physics"
          university="Shahjalal University of Science and Technology"
          period="Aug 2023 - Aug 2027"
          interests={["Quantum Mechanics", "Astrophysics"]}
          achievement="Bronze Medal, University Physics Competition 2024"
        />
      ),
      col: 1,
    },
    {
      content: (
        <AstronomyContent
          role="IT Secretary"
          organization="Copernicus Astronomical Memorial of SUST"
          period="Nov 2024 - Present"
          responsibilities={[
            "Organized in-person member recruitment event",
            "Created online recruitment form and user management system",
            "Managed digital presence and technical resources",
          ]}
          technologies={[
            "SvelteKit",
            "TypeScript",
            "Google Sheets API",
            "WordPress",
          ]}
          astronomyInterests={[
            "Astrophotography",
            "Star Observation",
            "Space Technology",
          ]}
        />
      ),
      col: 2,
    },
  ];

  return (
    <div id="overview">
      <BentoGrid className="max-w-4xl mx-auto p-4">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            content={item.content}
            className={`${item.col === 2 ? "md:col-span-2" : "md:col-span-1"}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
