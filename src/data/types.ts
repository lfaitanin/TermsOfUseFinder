export type Severity = "critical" | "high" | "medium" | "low";

export type CategorySlug =
  | "data-collection"
  | "location-tracking"
  | "content-rights"
  | "third-party-sharing"
  | "surveillance"
  | "automated-decisions"
  | "data-retention"
  | "implicit-consent"
  | "forced-arbitration"
  | "silent-changes";

export interface Category {
  slug: CategorySlug;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface ConcerningClause {
  id: string;
  title: string;
  originalText: string;
  explanation: string;
  implications: string[];
  severity: Severity;
  categories: CategorySlug[];
  tosSection?: string;
}

export interface AnalyzedApp {
  slug: string;
  name: string;
  company: string;
  icon: string;
  description: string;
  tosUrl: string;
  tosLastUpdated: string;
  analysisDate: string;
  overallSeverity: Severity;
  summary: string;
  clauses: ConcerningClause[];
  tags: string[];
}
