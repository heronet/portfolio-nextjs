interface PhysicsContentProps {
  degree: string;
  university: string;
  period: string;
  interests: string[];
  achievement?: string;
}

export const PhysicsContent: React.FC<PhysicsContentProps> = ({
  degree,
  university,
  period,
  interests,
  achievement,
}) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center mb-3">
        <div className="relative w-12 h-12">
          {/* Atom illustration */}
          <div
            className="absolute inset-0 rounded-full border-2  border-x-amber-400 border-y-red-500 animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute inset-2 rounded-full border-2 border-x-blue-400 border-y-red-500 animate-spin"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute inset-4 rounded-full border-2  border-red-400 animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="text-center mb-3">
        <h4 className="font-medium text-neutral-800 dark:text-neutral-200 text-sm">
          {degree}
        </h4>
        <p className="text-xs text-neutral-600 dark:text-neutral-400">
          {university}
        </p>
        {/* <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {period}
        </span> */}
      </div>

      <div className="mb-3">
        <h5 className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-2 text-center">
          Areas of Interest
        </h5>
        <div className="flex flex-wrap justify-center gap-1.5">
          {interests.map((interest, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>

      {achievement && (
        <div className="mt-auto bg-amber-50 dark:bg-amber-900/20 rounded-md p-2 text-center">
          <span className="text-xs font-medium text-amber-700 dark:text-amber-300">
            {achievement}
          </span>
        </div>
      )}
    </div>
  );
};
