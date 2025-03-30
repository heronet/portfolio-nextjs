import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { FrontendStack } from "./frontend";
import { BackendStack } from "./backend";
import { MobileStack } from "./mobile";

export default function Overview() {
  const items = [
    {
      title: "Frontend Stack",
      description: "My prefered frontend stack",
      header: <FrontendStack />,
      col: 1,
      row: 1,
    },
    {
      title: "Backend Stack",
      description: "My favorite backend tools",
      header: <BackendStack />,
      col: 1,
      row: 1,
    },
    {
      title: "Mobile Development",
      description: "Tools I use to develop mobile applications",
      header: <MobileStack />,
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
            header={item.header}
            className={`md:col-span-${item.col}`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
