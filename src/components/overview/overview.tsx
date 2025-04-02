import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FrontendStack } from "./frontend";
import { BackendStack } from "./backend";
import { MobileStack } from "./mobile";
import OSS from "./oss";

export default function Overview() {
  const items = [
    {
      title: "Frontend Stack",
      description: "My prefered frontend stack",
      content: <FrontendStack />,
      col: 1,
      row: 1,
    },
    {
      title: "Backend Stack",
      description: "My favorite backend tools",
      content: <BackendStack />,
      col: 1,
      row: 1,
    },
    {
      title: "Mobile Development",
      description: "Tools I use to develop mobile applications",
      content: <MobileStack />,
      col: 1,
      row: 1,
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
      row: 1,
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
