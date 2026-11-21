import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "market-sentiment-analyzer",
    title: "Market Sentiment Analyzer & Backtesting Engine",
    slug: "market-sentiment-analyzer",
    subtitle:
      "Python-based systematic backtesting engine implementing a 20/50 SMA crossover strategy benchmarked against Buy & Hold on Indian equities.",
    category: "Quantitative Analysis",
    featured: true,
    summary:
      "Engineered a Python backtesting system to test dual moving average crossover signals on real market data, evaluating risk-adjusted returns and drawdown control.",
    problem:
      "Retail traders often trade on discretionary intuition without testing systematic rules against historical drawdowns and market cycles.",
    approach:
      "Built a modular Python engine fetching historical prices via yFinance, computing 20/50 SMAs, executing systematic buy/sell signals, and benchmarking against Buy & Hold.",
    contribution: [
      "20/50 SMA crossover strategy: Generated automated Golden Cross (buy) and Death Cross (exit) signals.",
      "Historical stock data via yFinance: Ingested and cleaned daily adjusted close prices for INFY and TATAINVEST.",
      "Performance & Risk Metrics: Calculated CAGR, Sharpe Ratio (Rf = 6.5%), and Maximum Drawdown with Pandas.",
      "Buy-and-Hold comparison: Benchmarked risk-adjusted return and equity curves to quantify capital preservation.",
      "Data Visualization: Plotted comparative equity curves and drawdown periods in Matplotlib.",
    ],
    techStack: ["Python", "Pandas", "Matplotlib", "yFinance", "NumPy", "Backtesting"],
    metrics: [
      {
        label: "Strategy Architecture",
        value: "20 / 50 SMA",
        benchmark: "Dual Moving Average",
        context: "Trend-following crossover",
      },
      {
        label: "Risk Metrics",
        value: "CAGR & Sharpe",
        benchmark: "Max Drawdown",
        context: "Risk-adjusted performance",
      },
      {
        label: "Equities Tested",
        value: "INFY & TATAINVEST",
        benchmark: "NSE Daily Data",
        context: "Large-cap tech vs holding co",
      },
      {
        label: "Benchmark",
        value: "Buy & Hold",
        benchmark: "100% Invested",
        context: "Comparative baseline",
      },
    ],
    outcome:
      "Proved that while 20/50 SMA mitigates large drawdowns in prolonged downtrends, sideways consolidating regimes suffer from whipsaw friction.",
    learnings:
      "Real-world strategy returns must account for slippage, statutory transaction costs, and look-ahead bias in data indexing.",
    githubUrl: "https://github.com/rakshitjainai/Market-Sentiment-Analyzer-Python-ML-",
    liveUrl: "https://rakshitjainai.github.io/Market-Sentiment-Analyzer-Python-ML-/",
    researchLink: "/research/sma-strategy-backtesting",
    verifiedBadges: ["Quantitative Python Engine", "Real Market Data", "GitHub Verified"],
  },
  {
    id: "lawprix",
    title: "LawPrix — Transparent Case Routing Platform",
    slug: "lawprix",
    subtitle:
      "Legal-tech web application matching clients with verified advocates based on specialization and urgency rather than paid promotion.",
    category: "Product Development",
    featured: true,
    summary:
      "Designed an AI-assisted legal-tech platform addressing credential opacity and sponsored ranking bias in Indian legal services.",
    problem:
      "Traditional legal directories rank lawyers by advertising spend rather than case expertise, leaving clients facing high information asymmetry.",
    approach:
      "Designed a neutral criteria-driven routing flow categorizing case requirements and matching verified advocates.",
    contribution: [
      "Structured case intake: Categorized inquiries across corporate, family, criminal, and property law.",
      "Lawyer verification pipeline: Designed credential checks utilizing Bar Council registration data.",
      "Case tracking system: Built milestone dashboards enabling clients and advocates to track progress.",
      "Frontend & API implementation: Built responsive user interface with React.js and Python backend endpoints.",
      "Award-winning prototype: Won 2nd Runner-Up at the national Tutedude Buildathon 2025.",
    ],
    techStack: ["React.js", "Python", "REST APIs", "Tailwind CSS", "Workflow Design"],
    metrics: [
      {
        label: "Practice Areas",
        value: "4 Core Domains",
        benchmark: "Corporate, Criminal, Family, Real Estate",
        context: "Structured intake",
      },
      {
        label: "Matching Model",
        value: "Criteria-Driven",
        benchmark: "Zero Ad Bidding",
        context: "Unbiased selection",
      },
      {
        label: "Credential Check",
        value: "Bar Council Verified",
        benchmark: "Identity Checked",
        context: "Trust framework",
      },
    ],
    outcome:
      "Validated user demand for transparent legal matchmaking during a 2-week competitive product sprint.",
    learnings:
      "In sensitive and regulated spaces, user trust must be engineered into every verification checkpoint.",
    liveUrl: "https://lawprix.com/",
    researchLink: "/product-thinking",
    verifiedBadges: ["Live Product", "Buildathon Award Winner", "User Tested"],
  },
  {
    id: "custom-shell-in-c",
    title: "Custom Unix Shell in C",
    slug: "custom-shell-in-c",
    subtitle:
      "Interactive command-line interpreter in C implementing process control, piping, and I/O redirection.",
    category: "Systems Engineering",
    featured: false,
    summary:
      "Systems programming project implementing core POSIX operating system operations.",
    problem:
      "Understanding kernel-level process management, memory separation, and I/O descriptors.",
    approach:
      "Built a REPL that parses commands, manages child process execution, and configures IPC pipes.",
    contribution: [
      "Process management: Implemented fork(), execvp(), and waitpid() execution lifecycles.",
      "Piping & Redirection: Built multi-stage command pipelines using pipe() and dup2() file descriptor handling.",
      "Built-in commands: Implemented directory navigation (cd, pwd), help, and clean process exits.",
    ],
    techStack: ["C Language", "POSIX API", "Systems Programming", "Linux / Unix", "Process Control"],
    outcome:
      "Gained deep foundational knowledge of low-level systems programming and operating system architecture.",
    learnings:
      "Operating close to hardware reinforces rigorous memory management and error handling.",
    githubUrl: "https://github.com/rakshitjainai/Custom-Shell-in-C",
    verifiedBadges: ["Low-Level C", "POSIX Systems", "GitHub Verified"],
  },
  {
    id: "dae-training-system",
    title: "DAE Heavy Water Plant Training Portal",
    slug: "dae-training-system",
    subtitle:
      "Internal training administration and technical certification tracking portal for plant personnel.",
    category: "Systems Engineering",
    period: "Jul 2025 – Jul 2025",
    featured: false,
    summary:
      "Internal web application developed during vocational training at Heavy Water Plant Kota (Department of Atomic Energy).",
    problem:
      "Internal logging and certification of technical training records required secure, on-premise infrastructure.",
    approach:
      "Built an internal PHP web portal with relational database storage and configured server firewall settings.",
    contribution: [
      "Developed course management and certification tracking interfaces for the Training Section.",
      "Configured intranet server environment and network firewall rules for authorized subnet access.",
      "Earned 'Very Good' formal performance appraisal from plant mentors.",
    ],
    techStack: ["PHP", "MySQL", "Server Config", "Firewalls", "Internal Systems"],
    outcome:
      "Successfully deployed on plant intranet, streamlining employee course tracking.",
    learnings:
      "Appreciated the reliability, security, and stability requirements of government industrial facilities.",
    verifiedBadges: ["Government Facility", "Industrial Training", "DAE Kota"],
  },
];
