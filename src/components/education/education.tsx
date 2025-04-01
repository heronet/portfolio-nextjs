import sust from "@/assets/education/sust.png";
import ncpsc from "@/assets/education/ncpsc.png";
import kd from "@/assets/education/kd.png";

import Image from "next/image";
import { GlowingEffect } from "../ui/glowing-effect";

import { IconCircleCheck } from "@tabler/icons-react";

const education = [
  {
    institution: "Shahjalal University of Science & Technology",
    logo: sust,
    degree: {
      title: "BSc (Hons) in Physics",
      period: "2023 - Present",
      details: [
        "Coursework: Thermodynamics, Classical Mechanics, Mathematical Physics, Quantum Mechanics,  Electrodynamics, Statistical Physics",
        "IT Secretary of CAM-SUST, an Astronomy research organization",
        "Participated in and won Bronze Medal in University Physics Competition 2024",
        "Developed a Fingerprint Attendance System with ESP8266, SSD1306 OLED Display, and Fingerprint sensor",
      ],
    },
    relevant: ["ESP32, Arduino, C++"],
  },
  {
    institution: "Nirjhor Cantonement Public School and College, Dhaka",
    logo: ncpsc,
    degree: {
      title: "Higher Secondary Certificate (HSC)",
      period: "2020 - 2022",
      details: [
        "GPA: 5.00/5.00 in Science",
        "Participated and won in Inter cantonment Science Fest, Notre Dame Science Fest, NCPSC Science Fest.",
        "Coordinator of IT Club",
      ],
    },
  },
  {
    institution: "Naogaon K.D Government High School, Naogaon",
    logo: kd,
    degree: {
      title: "Secondary School Certificate (SSC)",
      period: "2012 - 2020",
      details: [
        "GPA: 5.00/5.00 in Science",
        "Active member of the English Language Club",
      ],
    },
  },
];

export default function Education() {
  return (
    <div
      className="max-w-7xl mx-auto mt-24 w-full p-8 font-sans"
      id="education"
    >
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center  py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">
          Education
        </h2>
        <p className="text-neutral-300 text-sm md:text-base ">
          My degrees and education history
        </p>
      </div>
      {/*  */}

      <div className="max-lg:flex flex-col ">
        {/* Info */}
        <div className="relative col-span-3 h-full rounded-2xl border border-gray-700  p-2  md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="relative flex  flex-col justify-between gap-6 h-full overflow-hidden rounded-xl border-0.75 px-3 py-6  shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="flex md:gap-6 gap-3 max-sm:p-4 py-4 max-sm:flex-col"
              >
                <div className="">
                  <Image
                    src={edu.logo}
                    alt={edu.institution}
                    className="rounded-3xl min-w-16 min-h-16 w-16 h-16 p-2 bg-gray-900 object-contain"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-bold text-lg md:text-xl">
                    {edu.institution}
                  </p>
                  <div className="space-y-6">
                    <div className="">
                      <p className="flex max-sm:text-sm mt-1 max-sm:flex-col gap-1 justify-between">
                        <span>{edu.degree.title}</span>{" "}
                        <span>{edu.degree.period}</span>
                      </p>
                      <ul className="space-y-1 text-neutral-400  mt-3  max-w-3xl">
                        {edu.degree.details.map((det, i) => (
                          <li key={i} className="flex  gap-2">
                            <IconCircleCheck className="min-w-4 mni-h-4 w-4 h-4 mt-1" />
                            <span>{det}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {edu.relevant && (
                    <div className="mt-3">
                      <p className="text-sm text-neutral-500">
                        <span className="font-medium">Relevant: </span>
                        {edu.relevant}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
