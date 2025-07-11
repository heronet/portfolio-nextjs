import { FloatingNav } from "../ui/floating-navbar";
import {
  IconAward,
  IconBriefcase,
  IconCpu,
  IconHammer,
  IconHome,
  IconSchool,
  IconTarget,
  IconUserCheck,
} from "@tabler/icons-react";

export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Overview",
      link: "#overview",
      icon: <IconTarget className="h-4 w-4 text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: <IconBriefcase className="h-4 w-4 text-white" />,
    },
    {
      name: "Web Projects",
      link: "#web-projects",
      icon: <IconHammer className="h-4 w-4 text-white" />,
    },
    {
      name: "Embedded Projects",
      link: "#embedded-projects",
      icon: <IconCpu className="h-4 w-4 text-white" />,
    },
    {
      name: "Education",
      link: "#education",
      icon: <IconSchool className="h-4 w-4 text-white" />,
    },
    {
      name: "Awards",
      link: "#awards",
      icon: <IconAward className="h-4 w-4 text-white" />,
    },
    {
      name: "Recommendations",
      link: "#recommendations",
      icon: <IconUserCheck className="h-4 w-4 text-white" />,
    },
  ];
  return <FloatingNav navItems={navItems} />;
}
