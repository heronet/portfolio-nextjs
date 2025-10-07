interface ResearchHighlightProps {
  currentProjects: number;
  publications: number;
  highlight: string;
  description: string;
  award: string;
  researchAreas: string[];
}

export const ResearchHighlight: React.FC<ResearchHighlightProps> = ({
  currentProjects,
  publications,
  highlight,
  description,
  award,
  researchAreas,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <svg
            className="w-4 h-4 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-neutral-200 text-sm">Research</h3>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="bg-neutral-800/50 rounded-md p-2 text-center">
          <div className="text-xl font-bold text-purple-400">
            {currentProjects}
          </div>
          <div className="text-xs text-neutral-400">Active Projects</div>
        </div>
        <div className="bg-neutral-800/50 rounded-md p-2 text-center">
          <div className="text-xl font-bold text-purple-400">
            {publications}
          </div>
          <div className="text-xs text-neutral-400">Publications</div>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-xs font-medium text-neutral-300 mb-1">
          Current Focus
        </p>
        <p className="text-sm font-semibold text-neutral-200 mb-1">
          {highlight}
        </p>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {researchAreas.map((area, index) => (
          <span
            key={index}
            className="px-1.5 py-0.5 text-xs rounded-sm bg-purple-900/30 text-purple-300"
          >
            {area}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        <div className="bg-amber-900/20 border border-amber-700/30 rounded-md p-2">
          <div className="flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-amber-400 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-amber-300 leading-tight">
              {award}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
