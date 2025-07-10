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
    <section className="py-20" id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education"
          subtitle="My degrees and education history"
        />

        <div className="mt-16 space-y-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-900/70 transition-all duration-300 hover:border-gray-600/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Institution Logo */}
                <div className="shrink-0">
                  <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 p-0.5">
                    <div className="w-full h-full bg-gray-900 rounded-xl p-2 flex items-center justify-center">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Institution Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {edu.institution}
                  </h3>

                  {/* Degree Info */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h4 className="text-lg font-medium text-indigo-300">
                        {edu.degree.title}
                      </h4>
                      <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full w-fit">
                        {edu.degree.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-gray-300">
                      {edu.degree.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 shrink-0"></span>
                          <span className="text-sm leading-relaxed">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Technologies */}
                  {edu.relevant && (
                    <div className="mt-6 pt-6 border-t border-gray-700/50">
                      <div className="flex flex-wrap gap-2">
                        {edu.relevant.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50 hover:bg-gray-700/50 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
