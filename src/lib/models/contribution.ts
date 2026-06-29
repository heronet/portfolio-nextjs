export interface Contribution {
  project: string;
  organization: string;
  contributions: {
    title: string;
    description: string;
    prNumber?: string;
    prUrl?: string;
    loreUrl?: string;
    docsUrl?: string;
    status: "Merged" | "Published" | "Patch Accepted";
  }[];
  impact: string;
  fallbackCount?: number;
  logo?: string;
  viewAllUrl?: string;
  viewAllLabel?: string;
  githubRepo?: string;
}
