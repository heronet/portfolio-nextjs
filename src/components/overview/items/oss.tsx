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
        <h3 className="font-medium text-neutral-200 text-base">
          {projectName}
        </h3>
        <span className="text-xs font-medium text-neutral-400">
          {releaseVersion}
        </span>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-1.5 py-0.5 text-xs rounded-sm  bg-neutral-800 text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mb-3">
        {contributionType === "PR Merged" ? (
          <span className="px-2 py-0.5 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/20 shrink-0 inline-flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
            </svg>
            Merged
          </span>
        ) : (
          <span className="inline-block px-2 py-0.5 text-xs font-medium rounded-sm bg-green-900/30 text-green-300 mb-1.5">
            {contributionType}
          </span>
        )}

        <p className="text-sm text-neutral-300">
          {description}
          <span className="ml-1 text-xs font-medium text-neutral-400">
            ({prNumbers})
          </span>
        </p>
      </div>

      <div className="mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            className="flex items-center text-xs font-medium  text-neutral-400 hover:text-neutral-200 transition-colors"
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
