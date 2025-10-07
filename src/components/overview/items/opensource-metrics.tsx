interface OpenSourceMetricsProps {
  contributions: {
    count: string;
    label: string;
    project: string;
  }[];
  highlight: string;
  badgeUrl?: string;
}

export const OpenSourceMetrics: React.FC<OpenSourceMetricsProps> = ({
  contributions,
  highlight,
  badgeUrl,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <svg
            className="w-4 h-4 text-emerald-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-neutral-200 text-sm">
            Open Source
          </h3>
          <p className="text-xs text-neutral-400">Contributions</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {contributions.map((contribution, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-1">
              {contribution.count}
            </div>
            <div className="text-xs text-neutral-300 font-medium leading-tight">
              {contribution.label}
            </div>
            <div className="text-xs text-neutral-500 mt-0.5">
              {contribution.project}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-md p-3">
          <div className="flex items-center gap-2 mb-2">
            <svg
              className="w-4 h-4 text-emerald-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            <span className="text-xs font-medium text-emerald-300">
              {highlight}
            </span>
          </div>
          {badgeUrl && (
            <a
              href={badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-400 hover:text-neutral-200 transition-colors flex items-center gap-1"
            >
              View Badge
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
