import Image, { StaticImageData } from "next/image";
import { IconCircleCheck, IconExternalLink } from "@tabler/icons-react";

interface ProjectProps {
  project: {
    company: string;
    year: string;
    title: string;
    tasks: string[];
    stack: StaticImageData[];
    link: string;
    image: StaticImageData;
  };
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="relative bg-background sm:w-96  rounded-2xl border border-gray-700  p-2 transition-all duration-300 hover:scale-103  md:rounded-3xl md:p-3">
      <div className="p-4 md:gap-8 relative justify-between flex-col flex  items-center  h-full overflow-hidden rounded-2xl border-0.75  shadow-[0px_0px_27px_0px_#2D2D2D] ">
        <div className="flex gap-3  flex-col">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full max-w-xl rounded-xl transition-all duration-500 hover:scale-105 sm:h-56"
          />

          <div className="flex flex-col gap-3 ">
            <div>
              <p className="text-sm font-medium text-gray-400">
                {project.company} · {project.year}
              </p>
              <h3 className="text-2xl mt-1 font-bold text-white flex items-center justify-between">
                {project.title}

                <div className="flex gap-2">
                  {project.stack.map((img, ii) => (
                    <Image
                      src={img}
                      alt={ii.toString()}
                      key={ii}
                      className="h-7 w-auto rounded-md bg-gray-800 p-1 transition-all hover:bg-gray-700"
                    />
                  ))}
                </div>
              </h3>
            </div>

            <ul className="space-y-2 text-sm text-neutral-400 mt-2">
              {project.tasks.map((task, i) => (
                <li key={i} className="flex  gap-2">
                  <IconCircleCheck className="min-w-4 mni-h-4 w-4 h-4 mt-1" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-800 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-gray-700"
        >
          View Project <IconExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
