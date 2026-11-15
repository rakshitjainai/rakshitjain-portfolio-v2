export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  division?: string;
  location: string;
  period: string; // Exact LinkedIn dates (e.g., "May 2026 - July 2026")
  durationText?: string;
  type: "Professional Internship" | "Industrial Training" | "Leadership & Service";
  category: "finance" | "tech" | "industry" | "leadership";
  summary: string;
  responsibilities: string[];
  skills: string[];
  verificationHighlights?: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  benchmark?: string;
  context?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  category: "Quantitative Analysis" | "Product Development" | "Systems Engineering" | "FinTech & Compliance";
  period: string;
  featured: boolean;
  summary: string;
  problem: string;
  approach: string;
  contribution: string[];
  techStack: string[];
  metrics?: ProjectMetric[];
  outcome?: string;
  learnings: string;
  githubUrl?: string;
  liveUrl?: string;
  researchLink?: string;
  verifiedBadges: string[];
}

export interface ArticleCitation {
  id: string;
  title: string;
  source: string;
  url?: string;
  year: string;
  note?: string;
}

export interface ArticleSection {
  id: string;
  title: string;
  content: string; // markdown or HTML formatted
  subsections?: {
    id: string;
    title: string;
    content: string;
  }[];
}

export interface ArticleItem {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  updatedDate?: string;
  readTime: string;
  category: "Capital Markets" | "Quantitative Finance" | "FinTech Architecture";
  excerpt: string;
  tags: string[];
  tableOfContents: { id: string; label: string }[];
  keyTakeaways: string[];
  contentSections: ArticleSection[];
  citations: ArticleCitation[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    context: string;
  }[];
}

export interface EducationItem {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  note?: string;
  coreCoursework: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organizer: string;
  date: string;
  description: string;
  badge?: string;
}
