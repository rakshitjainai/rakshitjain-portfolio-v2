export const siteConfig = {
  name: "Rakshit Jain",
  title: "Rakshit Jain | B.Tech ICT, PDEU",
  shortTitle: "Rakshit Jain",
  description:
    "Personal website of Rakshit Jain, B.Tech ICT student at PDEU working across financial markets, quantitative analysis, and software engineering.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rakshitjain-portfolio-v2.vercel.app",
  author: {
    name: "Rakshit Jain",
    role: "B.Tech ICT Student (2023–2027)",
    university: "Pandit Deendayal Energy University (PDEU)",
    location: "Gandhinagar, Gujarat, India",
    email: "rakshitindia2019@gmail.com",
    phone: "+919521084089",
    phoneDisplay: "+91 95210 84089",
    whatsappUrl: "https://wa.me/919521084089?text=Hi%2C%20I%20want%20a%20callback%20from%20you.",
    github: "https://github.com/rakshitjainai",
    linkedin: "https://www.linkedin.com/in/rakshitjainrj/",
  },
  resume: {
    primaryPdf: "/Rakshit-Jain-Resume.pdf",
    filename: "Rakshit-Jain-Resume.pdf",
  },
  resumeTracks: {
    finance: {
      id: "finance",
      label: "Financial Markets",
      badge: "Market Operations",
      trackPage: "/resume/finance",
      pdf: null, // Dropping public/resumes/finance.pdf later switches this card automatically
      summary:
        "Exposure to bullion trading operations, Bullion Depository Receipts (BDRs), order execution terminals, and institutional onboarding at GIFT City IFSC.",
    },
    quant: {
      id: "quant",
      label: "Quantitative Analysis",
      badge: "Strategy Backtesting",
      trackPage: "/resume/quant",
      pdf: null, // Dropping public/resumes/quant.pdf later switches this card automatically
      summary:
        "Python backtesting systems, evaluating risk-adjusted metrics (CAGR, Sharpe Ratio, Maximum Drawdown), and trend-following models on Indian equity data.",
    },
    tech: {
      id: "tech",
      label: "Software Engineering",
      badge: "Full-Stack & Systems",
      trackPage: "/resume/tech",
      pdf: null, // Dropping public/resumes/tech.pdf later switches this card automatically
      summary:
        "Full-stack web applications with React, Next.js, Node.js, and systems programming in C (Unix shell with fork, execvp, pipes, redirects).",
    },
  },
  positioning: {
    headline: "Financial Markets · Quantitative Analysis · Software Engineering",
    heroIntro:
      "B.Tech ICT student at PDEU working across financial markets, quantitative research, and software development.",
    heroParagraph:
      "B.Tech ICT student at PDEU with internship exposure to bullion market operations at GIFT City, experience in full-stack development, and hands-on projects involving Python-based quantitative analysis.",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "Product Thinking", href: "/product-thinking" },
    { label: "Contact", href: "/contact" },
  ],
  areasOfExperience: [
    {
      id: "finance",
      label: "Markets & Trading Operations",
      badge: "Market Operations",
      icon: "TrendingUp",
      summary:
        "Exposure to bullion trading operations, Bullion Depository Receipts (BDRs), order execution terminals, and institutional onboarding at GIFT City IFSC.",
      highlights: [
        "Anand Rathi International Ventures (GIFT City Bullion Desk)",
        "India International Bullion Exchange (IIBX) ecosystem",
        "KYC, GST & IEC verification workflows for Qualified Jewellers",
        "Bullion trading, clearing & physical-to-digital settlement flows",
      ],
      quickLink: "/experience#anand-rathi",
    },
    {
      id: "quant",
      label: "Quantitative Analysis",
      badge: "Strategy Backtesting",
      icon: "Activity",
      summary:
        "Python backtesting engines, computing risk-adjusted performance metrics, and testing trend-following models on historical market data.",
      highlights: [
        "20/50 SMA crossover strategy engine in Python & Pandas",
        "Historical equity backtests on INFY & TATAINVEST via yFinance",
        "Risk metrics: CAGR, Sharpe Ratio, Maximum Drawdown analysis",
        "Accounting for market friction, slippage & regime shifts",
      ],
      quickLink: "/projects#market-sentiment-analyzer",
    },
    {
      id: "tech",
      label: "Software Engineering",
      badge: "Systems & Web",
      icon: "Code2",
      summary:
        "Full-stack development with React, Node.js, and C systems programming, tested in production environments.",
      highlights: [
        "Certopus Inc. (Full Stack Development Intern - Remote)",
        "REST API development, database integration & debugging",
        "Department of Atomic Energy (Web application & IT)",
        "Custom Unix shell in C implementing fork, execvp, pipes & redirects",
      ],
      quickLink: "/projects",
    },
    {
      id: "product",
      label: "Product Development",
      badge: "Workflows & Products",
      icon: "Compass",
      summary:
        "Translating user workflows and operational requirements into structured software solutions.",
      highlights: [
        "LawPrix: LegalTech case routing platform based on specialization",
        "Credential verification framework & milestone tracking",
        "RegMate: GIFT City regulatory compliance & assessment workflow",
        "Workflow deconstruction, requirements modeling & technical feasibility",
      ],
      quickLink: "/product-thinking",
    },
  ],
};
