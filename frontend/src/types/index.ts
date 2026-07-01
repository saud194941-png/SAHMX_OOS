export type Role = "Owner" | "Admin" | "Analyst" | "Viewer";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type Metric = {
  label: string;
  value: string;
  trend: string;
  tone?: "good" | "warn" | "danger" | "neutral";
};

export type TableRow = Record<string, string | number>;

export type PageSection = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  metrics: Metric[];
  tableTitle?: string;
  table?: TableRow[];
  insights?: string[];
  actions?: string[];
};

export type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};
