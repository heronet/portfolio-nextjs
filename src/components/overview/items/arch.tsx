import arch from "@/assets/arch.svg";
import Image from "next/image";

interface ArchLinuxContentProps {
  yearsOfUse?: number;
  favoritePackages?: string[];
  desktopEnvironment?: string;
  githubUrl?: string;
}

export const ArchLinuxContent: React.FC<ArchLinuxContentProps> = ({
  yearsOfUse = 5,
  favoritePackages = ["pacman", "neofetch", "vim"],
  desktopEnvironment = "bspwm",
  githubUrl,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center mb-3">
        <Image src={arch} alt="Arch" className="w-14 h-14" />
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className="text-base font-mono flex items-center gap-2 text-neutral-200">
          <span className="opacity-70">$ </span>
          <span className="typing-text">I use Arch btw</span>
          <span className="animate-pulse">_</span>
        </p>
      </div>

      <div className="terminal-output bg-neutral-800 rounded-md p-2 font-mono text-xs text-neutral-300 mb-3">
        <div className="flex justify-between">
          <span className="text-green-400">OS</span>
          <span>Arch Linux</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-400">DE</span>
          <span>{desktopEnvironment}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-400">Experience</span>
          <span>{yearsOfUse} years</span>
        </div>
        <div className="flex justify-between">
          <span className="text-green-400">Packages</span>
          <span>{favoritePackages.join(", ")}</span>
        </div>
      </div>

      <div className="mt-auto text-center">
        {githubUrl && (
          <a
            href={githubUrl}
            className="inline-flex items-center text-xs font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
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
            dotfiles
          </a>
        )}
      </div>
    </div>
  );
};
