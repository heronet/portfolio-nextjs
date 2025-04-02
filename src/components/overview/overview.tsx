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
      title: "Open Source",
      description: "I contribute to open source",
      content: <OSS />,
      col: 2,
      row: 1,
    },
    {
      title: "Open Source",
      description: "I use to develop mobile applications",
      content: <OSS />,
      col: 1,
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
