"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconAward, IconHome, IconTarget } from "@tabler/icons-react";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Overview",
      link: "#overview",
      icon: <IconTarget className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Awards",
      link: "#awards",
      icon: <IconAward className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
