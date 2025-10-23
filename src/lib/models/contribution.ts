export interface Contribution {
  project: string;
  organization: string;
  contributions: {
    title: string;
    description: string;
    prNumber?: string;
    prUrl?: string;
    docsUrl?: string;
    status: "Merged" | "Published";
  }[];
  impact: string;
  fallbackCount?: number;
  logo?: string;
  viewAllUrl?: string;
  viewAllLabel?: string;
  githubRepo?: string;
}
