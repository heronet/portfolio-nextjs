import React from "react";

interface OSSProps {
  projectName: string;
  technologies: string[];
  contributionType: string;
  description: string;
  prNumbers: string;
  releaseVersion: string;
  githubUrl?: string;
}

export default function OSS({
  projectName,
  technologies,
  contributionType,
  description,
  prNumbers,
  releaseVersion,
  githubUrl,
}: OSSProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-neutral-800 dark:text-neutral-200 text-base">
          {projectName}
        </h3>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {releaseVersion}
        </span>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-1.5 py-0.5 text-xs rounded-sm bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-3">
        <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-sm bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-300 mb-1.5">
          {contributionType}
        </span>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          {description}
          <span className="ml-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            ({prNumbers})
          </span>
        </p>
      </div>

      <div className="mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            className="flex items-center text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-3.5 h-3.5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            View PR
          </a>
        )}
      </div>
    </div>
  );
}
