import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Finance & Markets",
    description:
      "Operational understanding of financial market infrastructure, exchange mechanics, and regulated trading workflows.",
    skills: [
      { name: "Financial Markets", context: "Exchange & clearing infrastructure" },
      { name: "Commodity Markets", context: "Physical bullion & metal trade" },
      { name: "Trading Operations", context: "Live terminal order entry & execution" },
      { name: "Exchange Ecosystem", context: "IIBX at GIFT City IFSC" },
      { name: "Settlement Processes", context: "BDR dematerialization & vaulting" },
      { name: "Risk Monitoring", context: "Margin limits & real-time collateral" },
      { name: "Institutional Compliance", context: "KYC, GST, and IEC verification" },
      { name: "Financial Infrastructure", context: "Trading desks & regulatory systems" },
    ],
  },
  {
    title: "Quantitative Analysis",
    description:
      "Mathematical and programmatic analysis of market time-series data, systematic backtesting, and risk-adjusted metrics.",
    skills: [
      { name: "Python", context: "Primary language for data & modeling" },
      { name: "Pandas & NumPy", context: "Vectorized time-series analysis" },
      { name: "Backtesting", context: "20/50 SMA crossover rule evaluation" },
      { name: "Financial Metrics", context: "CAGR, Sharpe Ratio, Max Drawdown" },
      { name: "Technical Analysis", context: "Moving averages & trend filters" },
      { name: "Data Visualization", context: "Matplotlib comparative equity curves" },
      { name: "Market Data Ingestion", context: "Historical price retrieval via yFinance" },
      { name: "Risk Analysis", context: "Quantifying drawdowns & market regimes" },
    ],
  },
  {
    title: "Technology",
    description:
      "Full-stack development, modern component architecture, RESTful backend APIs, and systems programming.",
    skills: [
      { name: "React.js & Next.js", context: "Modern web applications & UI components" },
      { name: "Node.js & Express", context: "Backend REST APIs & middleware" },
      { name: "Python & Java", context: "Application engineering & algorithms" },
      { name: "C & Systems", context: "Processes (fork/exec), IPC, pipes & shell" },
      { name: "SQL & MongoDB", context: "Relational queries & document modeling" },
      { name: "REST APIs", context: "Contract-first endpoints & integrations" },
      { name: "Git & GitHub", context: "Branch workflows, code reviews & PRs" },
      { name: "Debugging & Testing", context: "Cross-stack root cause analysis" },
    ],
  },
  {
    title: "Product Management",
    description:
      "Bridging user workflows, regulatory compliance constraints, and technical feasibility.",
    skills: [
      { name: "Problem Identification", context: "Root cause analysis of user friction" },
      { name: "Product Research", context: "Discovery across legal & compliance domains" },
      { name: "Workflow Analysis", context: "Deconstructing multi-stakeholder handoffs" },
      { name: "Requirements Thinking", context: "Translating business needs to specs" },
      { name: "Technical Feasibility", context: "Evaluating architecture & complexity" },
      { name: "Product Development", context: "MVP execution (Buildathon 2nd Runner-Up)" },
      { name: "Cross-Functional Collaboration", context: "Aligning engineering, ops & domain leads" },
      { name: "Analytical Decision Making", context: "Data-informed prioritization" },
    ],
  },
];
