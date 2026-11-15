export const siteConfig = {
  name: "Rakshit Jain",
  title: "Rakshit Jain | Finance, Technology & Product",
  shortTitle: "Rakshit Jain",
  description:
    "Portfolio of Rakshit Jain, B.Tech ICT student at PDEU combining financial market exposure at GIFT City, quantitative strategy backtesting with Python, and hands-on full-stack product engineering.",
  url: "https://www.rakshitjain.in",
  author: {
    name: "Rakshit Jain",
    role: "B.Tech ICT Student (2023–2027)",
    university: "Pandit Deendayal Energy University (PDEU)",
    location: "Gandhinagar, Gujarat, India",
    email: "rakshitindia2019@gmail.com",
    github: "https://github.com/rakshitjainai",
    linkedin: "https://www.linkedin.com/in/rakshitjainrj/",
  },
  positioning: {
    headline: "Finance | Quantitative Analysis | Technology | Product",
    heroIntro:
      "I'm interested in how financial markets work, how technology can improve them, and how data-driven thinking can help build useful products.",
    heroParagraph:
      "B.Tech ICT student at PDEU with internship exposure to financial-market operations at GIFT City, experience in full-stack development, and hands-on projects involving Python-based quantitative analysis.",
    statusBadge: "Open to relevant internships & early-career opportunities",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Product Thinking", href: "/product-thinking" },
    { label: "Research", href: "/research" },
    { label: "Contact", href: "/contact" },
  ],
  recruiterTracks: [
    {
      id: "finance",
      label: "Finance & Capital Markets",
      badge: "Institutional Focus",
      icon: "TrendingUp",
      summary:
        "Practical exposure to bullion trading operations, Bullion Depository Receipts (BDRs), order execution terminals, and institutional onboarding at GIFT City IFSC.",
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
      label: "Quantitative Analysis & Trading",
      badge: "Analytical Engine",
      icon: "Activity",
      summary:
        "Building Python-driven backtesting systems, computing risk-adjusted performance metrics, and empirically testing trend-following models on real market data.",
      highlights: [
        "20/50 SMA crossover strategy engine in Python & Pandas",
        "Historical equity backtests on INFY & TATAINVEST via yFinance",
        "Risk metrics: CAGR, Sharpe Ratio, Maximum Drawdown analysis",
        "Critical evaluation of market friction, slippage & regime shifts",
      ],
      quickLink: "/projects#market-sentiment-analyzer",
    },
    {
      id: "tech",
      label: "Software Engineering & Full Stack",
      badge: "Production Builder",
      icon: "Code2",
      summary:
        "End-to-end full stack development with modern React, Next.js, Node.js, Python, and C systems programming, tested in production environments.",
      highlights: [
        "Certopus Inc. (Full Stack Development Intern - Remote)",
        "REST API development, database integration & bug debugging",
        "Heavy Water Plant, Department of Atomic Energy (PHP application & IT)",
        "Custom Unix shell in C implementing fork, execvp, pipes & redirects",
      ],
      quickLink: "/projects",
    },
    {
      id: "product",
      label: "Product Thinking & Development",
      badge: "Problem First",
      icon: "Compass",
      summary:
        "Translating complex user workflows and regulatory constraints into structured, transparent software solutions that prioritize trust and clarity.",
      highlights: [
        "LawPrix: LegalTech case routing platform based on specialization",
        "Credential verification framework & client-lawyer milestone tracking",
        "RegMate: GIFT City regulatory compliance & assessment workflow",
        "Workflow deconstruction, requirements modeling & technical feasibility",
      ],
      quickLink: "/product-thinking",
    },
  ],
};
