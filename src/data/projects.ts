import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "market-sentiment-analyzer",
    title: "Market Sentiment Analyzer & SMA Crossover Engine",
    slug: "market-sentiment-analyzer",
    subtitle:
      "A systematic quantitative backtesting engine built with Python, evaluating a 20/50 Simple Moving Average crossover strategy against a Buy & Hold benchmark on Indian equities.",
    category: "Quantitative Analysis",
    period: "Dec 2025 – Mar 2026",
    featured: true,
    summary:
      "Built an empirical backtesting framework to test trend-following trading signals using historical stock data, calculating risk-adjusted returns (CAGR, Sharpe Ratio) and drawdown metrics.",
    problem:
      "Retail traders often trade on sentiment, rumors, or unverified intuition without empirically validating whether a systematic rule holds up against market cycles or accounts for downside risk.",
    approach:
      "Developed a modular Python backtester that pulls historical daily adjusted close prices via yFinance, computes 20-day and 50-day Simple Moving Averages (SMAs), generates systematic buy (golden cross) and sell (death cross) signals, benchmarks returns against Buy & Hold, and plots equity curves with Matplotlib.",
    contribution: [
      "Engineered automated data ingestion and cleaning pipeline using yFinance and Pandas, handling missing ticks, dividend adjustments, and date alignment.",
      "Implemented vectorised SMA signal generation logic in Pandas, calculating rolling averages and identifying crossover trigger dates without look-ahead bias in price indexing.",
      "Calculated core risk and performance metrics: Compound Annual Growth Rate (CAGR), Sharpe Ratio (using risk-free rate benchmarks), and Maximum Drawdown (peak-to-trough equity decline).",
      "Tested and compared results across two distinct equities on the National Stock Exchange: INFY (large-cap technology) and TATAINVEST (holding/investment company).",
      "Visualized comparative equity curves and drawdown periods using Matplotlib to demonstrate the impact of market regimes on trend-following returns.",
    ],
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "yFinance", "Backtesting"],
    metrics: [
      {
        label: "Strategy Architecture",
        value: "20 / 50 SMA",
        benchmark: "Dual Moving Average",
        context: "Short-term trend crossing medium-term trend",
      },
      {
        label: "Risk Metrics Tracked",
        value: "CAGR & Sharpe",
        benchmark: "Max Drawdown",
        context: "Assessing risk-adjusted return vs capital preservation",
      },
      {
        label: "Equities Evaluated",
        value: "INFY & TATAINVEST",
        benchmark: "NSE Daily Data",
        context: "Comparing defensive tech vs cyclical holding company",
      },
      {
        label: "Benchmark",
        value: "Buy & Hold",
        benchmark: "100% Invested",
        context: "Standard equity market baseline",
      },
    ],
    outcome:
      "Demonstrated that while the 20/50 SMA crossover can mitigate deep drawdown in prolonged downward bear markets, frequent false crossovers during sideways consolidating regimes cause whipsaws and frictional drag that underline the necessity of risk management filters.",
    learnings:
      "Reinforced the difference between theoretical backtests and real market realities: historical moving average strategies suffer from trade friction, execution slippage, lag, and regime changes. Gained practical understanding of why quantitative analysts prioritize drawdown control over headline returns.",
    githubUrl: "https://github.com/rakshitjainai/Market-Sentiment-Analyzer-Python-ML-",
    liveUrl: "https://rakshitjainai.github.io/Market-Sentiment-Analyzer-Python-ML-/",
    researchLink: "/research/sma-strategy-backtesting",
    verifiedBadges: ["Quantitative Codebase", "Real Market Data", "Verifiable GitHub Repo"],
  },
  {
    id: "lawprix",
    title: "LawPrix — Transparent Case Routing & Lawyer Verification",
    slug: "lawprix",
    subtitle:
      "An AI-assisted legal-tech platform designed to route clients to verified lawyers based on practice specialization, jurisdiction, and urgency rather than paid placement.",
    category: "Product Development",
    period: "Aug 2025 – Jul 2026",
    featured: true,
    summary:
      "Co-founded and developed LawPrix at Triscaleon Technologies to solve transparency and credential opacity in Indian legal services through structured workflow matching.",
    problem:
      "Most existing legal directories in India rank lawyers by advertising spend or subscription tiers rather than their actual case expertise. First-time litigants face severe information asymmetry, uncertain fee structures, and no verified credentials.",
    approach:
      "Researched common legal friction points across corporate, family, criminal, and property law. Designed a neutral routing algorithm that collects user requirements through a structured intake questionnaire and matches them with credentialed advocates whose verified practice matches the matter.",
    contribution: [
      "Led end-to-end product discovery: interviewed users and advocates to map pain points in legal discovery, document sharing, and status tracking.",
      "Architected the lawyer verification pipeline requiring Bar Council enrollment number validation and jurisdiction checks to eliminate uncredentialed profiles.",
      "Built client-side user experience with React.js and responsive UI components, focusing on reassuring, accessible design for stressed users.",
      "Designed case milestone tracking dashboard enabling clients and advocates to track hearing dates, submissions, and documentation status transparently.",
      "Navigated regulatory constraints in legal technology, ensuring zero infringement on Bar Council of India regulations prohibiting commercial advocate solicitation.",
    ],
    techStack: ["React.js", "Python", "Tailwind CSS", "REST APIs", "Product Discovery", "Workflow Design"],
    metrics: [
      {
        label: "Legal Practice Areas",
        value: "4 Core Domains",
        benchmark: "Corporate, Criminal, Family, Real Estate",
        context: "Covering 80%+ of early retail legal queries",
      },
      {
        label: "Matching Model",
        value: "Criteria-Driven",
        benchmark: "Zero Ad Bidding",
        context: "Eliminated paid sponsorship bias in lawyer selection",
      },
      {
        label: "Credential Layer",
        value: "Verified Profiles",
        benchmark: "Bar Council Checked",
        context: "Trust framework for first-time legal consumers",
      },
    ],
    outcome:
      "Secured 2nd Runner-Up at the Tutedude Buildathon 2025 during an intensive product sprint for Vakaalat/LawPrix, proving user demand for transparent legal matchmaking.",
    learnings:
      "Learned that product management in regulated or sensitive spaces requires aligning technology with strict ethical boundaries. Great UI cannot overcome user distrust; trust must be engineered into every step of the verification workflow.",
    liveUrl: "https://lawprix.com/",
    researchLink: "/product-thinking",
    verifiedBadges: ["Live Product Link", "Buildathon Award Winner", "Real User Discovery"],
  },
  {
    id: "regmate",
    title: "RegMate — GIFT City Regulatory Framework & Compliance Engine",
    slug: "regmate",
    subtitle:
      "A structured compliance reference and mock assessment platform built for entities navigating International Financial Services Centres Authority (IFSCA) regulations.",
    category: "FinTech & Compliance",
    period: "May 2026 – Aug 2026",
    featured: true,
    summary:
      "Created an interactive full-stack compliance guide and readiness test engine for GIFT City IFSC regulations covering Fund Management Entities (FMEs), Bullion participants, and intermediaries.",
    problem:
      "GIFT City's regulatory architecture under IFSCA evolves rapidly through dense gazette notifications and circulars. Early-stage applicants and finance professionals struggle to navigate mandatory capital thresholds, governance requirements, and documentation checklists.",
    approach:
      "Deconstructed official IFSCA circulars into structured JSON data models and decision trees. Built a full-stack web application with client-side quiz/readiness modules, categorized regulatory lookup, and institutional readiness reports.",
    contribution: [
      "Extracted and synthesized complex regulatory clauses across IFSCA Fund Management Regulations, Bullion Exchange rules, and Finance Company regulations.",
      "Engineered backend REST APIs with Node.js and Express to serve structured regulatory requirements, eligibility thresholds, and mock questions.",
      "Built responsive client interface with React and Vite, featuring searchable regulatory clauses, compliance checklists, and instant scoring feedback.",
      "Implemented structured validation for institutional onboarding requirements, echoing procedures observed during bullion desk operations.",
    ],
    techStack: ["React", "Vite", "Node.js", "Express", "MongoDB", "REST APIs", "Regulatory Analysis"],
    metrics: [
      {
        label: "Regulatory Domains",
        value: "IFSCA FME & Bullion",
        benchmark: "Official Guidelines",
        context: "Structured guidelines for IFSC entities",
      },
      {
        label: "Architecture",
        value: "Full-Stack Decoupled",
        benchmark: "Client + REST API",
        context: "Fast, cached compliance lookups",
      },
    ],
    outcome:
      "Provided an organized educational and assessment repository for students and professionals preparing for IFSC regulatory examinations and institutional compliance setups.",
    learnings:
      "Reinforced the concept of 'Compliance as Code' — how complex financial regulation can be systematically mapped to programmatic validation rules to save hours of manual review.",
    githubUrl: "https://github.com/rakshitjainai/demogiftcity",
    researchLink: "/research/financial-workflows-and-fintech-products",
    verifiedBadges: ["Full Stack Project", "IFSCA Frameworks", "GitHub Verified"],
  },
  {
    id: "custom-shell-in-c",
    title: "Custom Unix Shell Implementation in C",
    slug: "custom-shell-in-c",
    subtitle:
      "A lightweight, modular command-line shell built from scratch in C for systems-level operating system resource and process management.",
    category: "Systems Engineering",
    period: "Oct 2025 – Nov 2025",
    featured: false,
    summary:
      "Implemented a Unix-like interactive shell in C supporting process forking, command execution, piping, I/O file redirection, and built-in system routines.",
    problem:
      "Understanding how higher-level software interacts with the operating system kernel requires exploring process lifecycles, memory isolation, and system call boundaries.",
    approach:
      "Implemented a read-eval-print loop (REPL) that parses user command strings, tokenizes arguments, identifies control operators (pipes `|`, redirection `<`, `>`), and invokes low-level POSIX system calls.",
    contribution: [
      "Implemented process creation and lifecycle management using `fork()`, `execvp()`, and `waitpid()` system calls.",
      "Built multi-stage command pipeline chaining using Unix pipes (`pipe()`) and standard file descriptor duplication (`dup2()`).",
      "Handled input/output file redirection (`<`, `>`) with proper file permission masking and descriptor restoration.",
      "Authored internal shell built-ins including directory navigation (`cd`), path inspection (`pwd`), help documentation, and clean process termination (`exit`).",
    ],
    techStack: ["C Language", "POSIX API", "Systems Programming", "Linux / Unix", "Process Management"],
    outcome:
      "Deepened foundational understanding of operating systems, process boundaries, memory layouts, and IPC — critical fundamentals for high-performance computing and low-latency trading infrastructure.",
    learnings:
      "Operating close to the hardware teaches rigorous memory safety, error handling, and the exact mechanics of execution threads, which directly informs how backend servers handle concurrent I/O.",
    githubUrl: "https://github.com/rakshitjainai/Custom-Shell-in-C",
    verifiedBadges: ["Low-Level C", "POSIX Systems", "GitHub Verified"],
  },
  {
    id: "dae-training-system",
    title: "DAE Heavy Water Plant Training & Records System",
    slug: "dae-training-system",
    subtitle:
      "An internal web application and server deployment developed during vocational training at Heavy Water Plant, Kota (Department of Atomic Energy).",
    category: "Systems Engineering",
    period: "Jul 2025 – Jul 2025",
    featured: false,
    summary:
      "Engineered a dedicated PHP-based internal management portal to automate technical training course records, scheduling, and trainee evaluations for the plant's Training Section.",
    problem:
      "Industrial facility training sections require reliable internal logging of employee technical certifications and safety modules without relying on external public cloud systems.",
    approach:
      "Developed a lightweight, self-hosted PHP portal with relational database tables to manage employee records, course completions, and assessment metrics, while configuring local server firewall parameters.",
    contribution: [
      "Constructed relational data schemas and CRUD interfaces for managing employee rosters, course curricula, and completion certificates.",
      "Configured internal intranet server environment and host firewall rules to restrict access to authorized plant subnets.",
      "Collaborated with Training Section supervisors to ensure operational workflows matched plant documentation standards.",
    ],
    techStack: ["PHP", "MySQL", "Server Administration", "Firewall Configuration", "Internal Enterprise Systems"],
    outcome:
      "Successfully deployed on the local training intranet, earning a 'Very Good' formal performance appraisal from facility mentors.",
    learnings:
      "Gained firsthand experience with the rigorous operational standards of high-consequence government industrial infrastructure, where security, simplicity, and reliability supersede unnecessary complexity.",
    verifiedBadges: ["Government Facility", "Industrial Training", "DAE Kota"],
  },
];
