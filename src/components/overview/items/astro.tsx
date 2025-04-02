import { IconTelescope } from "@tabler/icons-react";

interface AstronomyContentProps {
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
  astronomyInterests?: string[];
}

export const AstronomyContent: React.FC<AstronomyContentProps> = ({
  role,
  organization,
  period,
  responsibilities,
  technologies,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative overflow-hidden rounded-lg mb-3 h-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0">
          {/* Stars */}
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const opacity = Math.random() * 0.8 + 0.2;

            return (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  opacity: opacity,
                  animation: `twinkle ${
                    Math.random() * 3 + 0.5
                  }s ease-in-out infinite alternate`,
                }}
              />
            );
          })}
        </div>

        <div className="absolute right-3 bottom-3 text-white opacity-70">
          <IconTelescope />
        </div>
      </div>

      <div className="mb-3">
        <div className="flex justify-between flex-wrap items-start mb-1">
          <div>
            <h4 className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
              {role}
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              {organization}
            </p>
          </div>
          <span className="text-xs font-medium max-sm:mt-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 px-2 py-0.5 rounded-full">
            {period}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <h5 className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
          Key Contributions
        </h5>
        <ul className="text-xs text-neutral-600 dark:text-neutral-400 pl-4 list-disc">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-1">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-1 mb-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-1.5 py-0.5 text-xs rounded-sm bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
