import github from "@/assets/github.svg";
import Image from "next/image";

interface OSSProps {
  projectName: string;
  technologies: string[];
  contributionType: string;
  description: string;
  prNumbers: string;
  releaseVersion: string;
  githubUrl?: string;
}

export const OSS: React.FC<OSSProps> = ({
  projectName,
  technologies,
  contributionType,
  description,
  prNumbers,
  releaseVersion,
  githubUrl,
}) => {
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
            <Image src={github} alt="Github" className="w-3.5 h-3.5 mr-1" />
            View PR
          </a>
        )}
      </div>
    </div>
  );
};
