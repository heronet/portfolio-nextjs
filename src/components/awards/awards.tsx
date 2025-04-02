import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import upc from "@/assets/certs/upc.jpeg";
import cs50x from "@/assets/certs/cs50x.png";
import ndc from "@/assets/certs/ndc.jpeg";
import cit from "@/assets/certs/cit.jpeg";
import nsc from "@/assets/certs/nsc.jpeg";
import hackjsi from "@/assets/certs/hackjsi.jpeg";
import SectionHeader from "../common/section-header";

export default function Awards() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            University Physics Competition
          </p>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl">
              Awarded the
              <span className="text-amber-600 font-bold"> Bronze Medal</span> in
              University Physics Competition 2024
            </p>
            <Image
              src={upc}
              alt="hero template"
              className="rounded-lg object-cover max-w-xl  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Harvard University
          </p>
          <div className="flex flex-col gap-4">
            Awarded the Harvard CS50x Certificate on Course Completion
            <Image
              src={cs50x}
              alt="hero template"
              className="rounded-lg object-cover max-w-xl  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            HackerRank Certifications
          </p>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl">
              Obtained HackerRank Angular, C#, JavaScript (Basic & Advanced),
              Java, and Python certifications{" "}
            </p>
            <Image
              src={hackjsi}
              alt="hero template"
              className="rounded-lg object-cover max-w-xl  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Notre Dame Science Fest - Third Prize
          </p>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl">
              Awarded
              <span className="text-amber-600 font-bold"> Third prize</span> for
              a social media website project, out of more than 200 projects
            </p>
            <Image
              src={ndc}
              alt="hero template"
              className="rounded-lg object-cover max-w-xl  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Inter Cantonment IT Fest - First Prize
          </p>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl">
              Recognized with
              <span className="text-yellow-400 font-bold"> First Prize</span>
              for a social media and e-commerce platform
            </p>
            <Image
              src={cit}
              alt="hero template"
              className="rounded-lg object-cover max-w-xl  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Nirjhor Cantonment Public School and College IT Fest - First Prize
          </p>
          <div className="flex flex-col gap-4">
            <p className="max-w-xl">
              Recognized with
              <span className="text-yellow-400 font-bold"> First Prize </span>
              for a social media and e-commerce platform
            </p>
            <Image
              src={nsc}
              alt="hero template"
              className="rounded-lg object-cover max-w-xl  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-24 md:pt-20 w-full" id="awards">
      <SectionHeader
        title="Achievements and awards"
        subtitle="I've achieved several recognitions throughout the years I've
          been working. Here are some of them."
      />
      <Timeline data={data} />
    </div>
  );
}
