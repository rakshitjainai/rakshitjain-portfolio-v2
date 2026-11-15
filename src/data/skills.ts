import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Finance & Capital Markets",
    description:
      "Operational understanding of financial market infrastructure, exchange mechanics, and regulated trading workflows.",
    skills: [
      {
        name: "Financial Market Infrastructure",
        context: "Exchanges, clearing corporations, and depositories architecture",
      },
      {
        name: "India International Bullion Exchange (IIBX)",
        context: "GIFT City IFSC bullion ecosystem and trading rules",
      },
      {
        name: "Bullion Depository Receipts (BDRs)",
        context: "Physical assaying, vaulting, and dematerialized receipt creation",
      },
      {
        name: "Trading Operations & Order Entry",
        context: "Live terminal operations, market watch, and order matching basics",
      },
      {
        name: "Margin & Risk Monitoring",
        context: "Real-time collateral oversight and exposure parameters",
      },
      {
        name: "Clearing & Settlement Mechanics",
        context: "T+0/T+1 settlement lifecycles and physical delivery flows",
      },
      {
        name: "Institutional Client Onboarding",
        context: "Qualified Jewellers verification, KYC, GST, and IEC validation",
      },
      {
        name: "Regulatory Frameworks (IFSCA & SEBI)",
        context: "Statutory compliance, circulars, and institutional documentation",
      },
    ],
  },
  {
    title: "Quantitative & Analytical",
    description:
      "Mathematical and programmatic analysis of market data, systematic backtesting, and risk-adjusted metrics.",
    skills: [
      {
        name: "Python for Finance",
        context: "Core language for market data manipulation, analysis, and backtesting",
      },
      {
        name: "Pandas & NumPy",
        context: "Vectorized time-series analysis, rolling calculations, and data cleaning",
      },
      {
        name: "Trading Strategy Backtesting",
        context: "SMA crossover rule design, signal generation, and historical simulation",
      },
      {
        name: "Financial Risk Metrics",
        context: "CAGR, Sharpe Ratio, Maximum Drawdown, and return distributions",
      },
      {
        name: "Data Visualization (Matplotlib)",
        context: "Comparative equity curves, drawdown underwater charts, and price overlays",
      },
      {
        name: "Historical Data Ingestion (yFinance)",
        context: "Automated extraction and reconciliation of daily equity price series",
      },
      {
        name: "Quantitative Bias Awareness",
        context: "Identifying and mitigating look-ahead bias, survivorship bias, and curve fitting",
      },
      {
        name: "Mathematical Foundations",
        context: "Probability, discrete mathematics, linear algebra, and statistics",
      },
    ],
  },
  {
    title: "Software Engineering & Systems",
    description:
      "Full-stack development, modern component architecture, RESTful backend APIs, and systems programming.",
    skills: [
      {
        name: "React.js & Next.js",
        context: "Modern web applications, Server Components, SSR, and dynamic interfaces",
      },
      {
        name: "Node.js & Express",
        context: "Scalable backend services, RESTful API architecture, and middleware",
      },
      {
        name: "Languages: Python, Java, JavaScript, C",
        context: "Polyglot programming across web, algorithms, and systems layers",
      },
      {
        name: "Relational & NoSQL Databases",
        context: "SQL querying, schema design, MongoDB document modeling, and index tuning",
      },
      {
        name: "REST API Design & Integration",
        context: "Contract-first API endpoints, authentication, and error handling",
      },
      {
        name: "Git & Version Control",
        context: "Branching strategies, code reviews, PRs, and collaborative remote workflows",
      },
      {
        name: "Systems Programming (C / POSIX)",
        context: "Process lifecycles (fork/exec), IPC pipes, redirection, and memory safety",
      },
      {
        name: "Debugging & Automated Testing",
        context: "Cross-stack root cause analysis, unit testing, and release stabilization",
      },
    ],
  },
  {
    title: "Product Thinking & Development",
    description:
      "Bridging real-world user friction, regulatory compliance constraints, and technical feasibility.",
    skills: [
      {
        name: "Problem Discovery & Research",
        context: "Uncovering user pain points across legal services and compliance processes",
      },
      {
        name: "User & Workflow Analysis",
        context: "Mapping multi-stakeholder workflows and identifying operational friction",
      },
      {
        name: "Requirements & Specification Thinking",
        context: "Translating business needs and compliance rules into engineering specs",
      },
      {
        name: "Technical Feasibility Assessment",
        context: "Evaluating architectural trade-offs between speed, cost, and maintainability",
      },
      {
        name: "Trust & Credential Architecture",
        context: "Designing verification steps that protect users without excessive friction",
      },
      {
        name: "Rapid Prototyping & MVP Execution",
        context: "Validated Vakaalat/LawPrix in 2-week competitive sprint (Buildathon 2025)",
      },
      {
        name: "Cross-Functional Alignment",
        context: "Collaborating seamlessly across developers, designers, and domain specialists",
      },
      {
        name: "Analytical Decision Making",
        context: "Grounding product choices in empirical data rather than speculative assumptions",
      },
    ],
  },
];
