import React from "react";

interface EmbeddedStackProps {
  microcontrollers: string[];
  rtos: string[];
  protocols: string[];
  tools: string[];
  specialization: string;
  experience: string;
  contribution?: {
    project: string;
    description: string;
    url: string;
  };
}

export const EmbeddedStack: React.FC<EmbeddedStackProps> = ({
  microcontrollers,
  rtos,
  protocols,
  tools,
  specialization,
  experience,
  contribution,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-neutral-200 text-base">
          Embedded Systems
        </h3>
        <span className="text-xs font-medium text-neutral-400">
          {experience}
        </span>
      </div>

      <div className="mb-3">
        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-sm bg-purple-900/30 text-purple-300 mb-1.5">
          {specialization}
        </span>
        <p className="text-sm text-neutral-300">
          Experienced in low-level programming, real-time systems, and IoT
          development with focus on microcontroller programming and hardware
          integration.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <span className="text-xs font-medium text-neutral-400 block mb-1">
            Microcontrollers
          </span>
          <div className="flex flex-wrap gap-1">
            {microcontrollers.map((mcu, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 text-xs rounded-sm bg-blue-900/30 text-blue-300"
              >
                {mcu}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-neutral-400 block mb-1">
            RTOS & Frameworks
          </span>
          <div className="flex flex-wrap gap-1">
            {rtos.map((os, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 text-xs rounded-sm bg-green-900/30 text-green-300"
              >
                {os}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-neutral-400 block mb-1">
            Protocols & Communication
          </span>
          <div className="flex flex-wrap gap-1">
            {protocols.map((protocol, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 text-xs rounded-sm bg-amber-900/30 text-amber-300"
              >
                {protocol}
              </span>
            ))}
          </div>
        </div>

        <div>
          <span className="text-xs font-medium text-neutral-400 block mb-1">
            Development Tools
          </span>
          <div className="flex flex-wrap gap-1">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-1.5 py-0.5 text-xs rounded-sm bg-neutral-800 text-neutral-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto">
        {contribution && (
          <a
            href={contribution.url}
            className="flex items-center text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-3.5 h-3.5 mr-1"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            ZephyrRTOS Maintainer
          </a>
        )}
      </div>
    </div>
  );
};
