import sust from "@/assets/education/sust.png";
import ncpsc from "@/assets/education/ncpsc.png";
import kd from "@/assets/education/kd.png";

import Image from "next/image";
import SectionHeader from "../common/section-header";

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
    relevant: ["ESP32", "Arduino", "C++"],
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
    <div className="max-w-7xl mx-auto mt-24 w-full p-4 md:p-8" id="education">
      <SectionHeader
        title="Education"
        subtitle="My degrees and education history"
      />

      <div className="max-lg:flex flex-col ">
        {/* Info */}
        <div className="relative col-span-3 h-full rounded-2xl border border-gray-700  p-2  md:rounded-3xl md:p-3">
          <div className="relative flex  flex-col justify-between gap-6 h-full overflow-hidden rounded-xl border-0.75 px-3 py-6  shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="flex md:gap-6 gap-3 max-sm:p-4 py-4 max-sm:flex-col"
              >
                <div className="shrink-0 w-fit">
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                    <div className="bg-gray-900 rounded-xl p-2">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        className="rounded-lg w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="font-bold text-lg md:text-xl">
                    {edu.institution}
                  </p>
                  <div className="space-y-6">
                    <div className="">
                      <div className="flex flex-wrap justify-between sm:items-center gap-2 mt-1 max-sm:flex-col">
                        <span className="font-medium text-indigo-300">
                          {edu.degree.title}
                        </span>
                        <span className="text-sm w-fit text-neutral-400 bg-gray-800/70 px-3 py-1 rounded-full">
                          {edu.degree.period}
                        </span>
                      </div>

                      <ul className="mt-2 space-y-1 text-neutral-400 max-w-3xl pl-4 list-disc">
                        {edu.degree.details.map((det, index) => (
                          <li key={index}>{det}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {edu.relevant && (
                    <div className="flex flex-wrap gap-1 mt-4">
                      {edu.relevant.map((tech, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 text-xs rounded-sm  bg-neutral-800 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
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
