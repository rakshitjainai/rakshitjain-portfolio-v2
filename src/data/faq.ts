export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "Who is Rakshit Jain?",
    answer:
      "Rakshit Jain is a B.Tech Information and Communication Technology student at Pandit Deendayal Energy University (PDEU) in Gandhinagar, Gujarat, graduating in 2027. He has completed professional internships in financial market operations at GIFT City and full-stack software development. His work spans institutional trading workflows, Python-based quantitative backtesting, and production web applications.",
  },
  {
    question: "What roles is he looking for?",
    answer:
      "Rakshit is seeking Summer 2027 internship and entry-level positions across three areas: Financial Markets and Trading Operations, Quantitative Analysis and Financial Data, and Software Engineering or Product Management. He is well-suited for roles requiring both technical fluency and understanding of financial market mechanics.",
  },
  {
    question: "When is he available to start?",
    answer:
      "Rakshit is available from [TODO: date] for internships, co-ops, and early-career opportunities. He can commit to full-time on-site, hybrid, or remote schedules during designated academic internship windows.",
  },
  {
    question: "Where is he based and can he relocate?",
    answer:
      "He is based in Gandhinagar / Ahmedabad, Gujarat, India. He is available for in-person roles locally, open to relocate to major financial and technology hubs (such as Mumbai, Bengaluru, or Delhi NCR), and fully equipped for remote work.",
  },
  {
    question: "What did he do at Anand Rathi IFSC?",
    answer:
      "During his internship at Anand Rathi International Ventures (IFSC) at GIFT City, Rakshit worked on the IIBX bullion desk. He observed live trading terminals and market watch quotes, mapped physical-to-digital Bullion Depository Receipt (BDR) settlement lifecycles, and reviewed KYC, GST, and IEC documentation for Qualified Jeweller onboarding under IFSCA rules.",
  },
  {
    question: "What is the Market Sentiment Analyzer?",
    answer:
      "The Market Sentiment Analyzer is a Python and Pandas backtesting engine built by Rakshit to evaluate a 20/50 Simple Moving Average (SMA) crossover strategy on historical NSE equities (INFY and TATAINVEST). By shifting position signals by one day to avoid look-ahead bias and moving into cash during downtrends, the strategy cut INFY maximum drawdown from -36.4% to -18.2% and lowered annualized volatility to 15.3%.",
  },
  {
    question: "What is LawPrix?",
    answer:
      "LawPrix is a legal-tech matchmaking application co-developed by Rakshit that secured 2nd Runner-Up at the national Tutedude Buildathon 2025. It replaces sponsored directory bidding with an objective, criteria-driven intake system across four legal domains, integrating Bar Council verification and milestone progress tracking. The live platform is accessible at lawprix.com.",
  },
];
