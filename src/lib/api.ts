import { Contribution } from "./models/contribution";

export const fetchPRCounts = async (contributions: Contribution[]) => {
  const counts: Record<string, number> = {};

  for (const contrib of contributions) {
    if (contrib.githubRepo) {
      try {
        const response = await fetch(
          `https://api.github.com/search/issues?q=repo:${contrib.githubRepo}+type:pr+author:heronet+is:merged`
        );

        if (response.ok) {
          const data = await response.json();
          counts[contrib.githubRepo] = data.total_count;
        }
      } catch (error) {
        console.error(
          `Error fetching PR count for ${contrib.githubRepo}:`,
          error
        );
      }
    }
  }

  return counts;
};
