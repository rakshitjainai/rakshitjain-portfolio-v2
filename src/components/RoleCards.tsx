import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Layout } from "lucide-react";

export function RoleCards() {
  const roles = [
    {
      title: "Markets & Operations",
      focus: "Bullion Trading · Settlement Workflows · Risk Monitoring",
      icon: TrendingUp,
      skills: [
        "Bullion trading workflows",
        "Exchange order entry terminals",
        "Bullion Depository Receipts (BDRs)",
        "Margin & risk limit monitoring",
        "KYC, GST & IEC documentation checks",
        "Financial market infrastructure",
      ],
      project: {
        title: "Anand Rathi GIFT City Bullion Desk",
        detail: "Institutional internship on IIBX desk; terminal monitoring and jeweller KYC validation.",
        linkText: "Review desk operations",
        href: "/experience#anand-rathi",
      },
      resumeHref: "/resume/finance",
    },
    {
      title: "Quantitative Analysis",
      focus: "Strategy Backtesting · Risk Metrics · Python Modeling",
      icon: Cpu,
      skills: [
        "Python (Pandas, NumPy)",
        "Vectorized strategy backtesting",
        "Moving average crossover rules",
        "Risk metrics (Sharpe, CAGR, Drawdown)",
        "Zero look-ahead position shifting",
        "Historical equity data via yFinance",
      ],
      project: {
        title: "Market Sentiment Analyzer",
        detail: "Halved INFY max drawdown from -36.4% to -18.2% and lowered volatility to 15.3% (Sharpe 0.35).",
        linkText: "Inspect backtest model",
        href: "/projects#market-sentiment-analyzer",
      },
      resumeHref: "/resume/quant",
    },
    {
      title: "Software Engineering",
      focus: "Full-Stack Web · Systems in C · Workflow Architecture",
      icon: Layout,
      skills: [
        "React.js & Next.js",
        "Node.js & Express REST APIs",
        "User workflow mapping",
        "Problem discovery in regulated domains",
        "Criteria-based matchmaking logic",
        "C systems programming & Linux POSIX",
      ],
      project: {
        title: "LawPrix (Buildathon 2nd Runner-Up)",
        detail: "Legal matchmaking platform with Bar Council verification; national award winner.",
        linkText: "View product case study",
        href: "/projects#lawprix",
      },
      resumeHref: "/resume/tech",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Focus
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          Areas of Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {roles.map((role, idx) => {
          const Icon = role.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#111317] border border-[#22262e] flex flex-col justify-between space-y-6 hover:border-[#c8a15a]/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-[#c8a15a]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-[#8b8f97]">0{idx + 1}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#f2efe8] font-sans">
                    {role.title}
                  </h3>
                  <p className="font-mono text-[11px] text-[#c8a15a] leading-tight">
                    {role.focus}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#22262e]">
                  <span className="font-mono text-[10px] uppercase text-[#8b8f97] tracking-wider block">
                    Key Skills
                  </span>
                  <ul className="text-xs text-[#f2efe8] space-y-1 font-sans">
                    {role.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="text-[#c8a15a] font-mono leading-none mt-1">›</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#22262e]">
                <div className="p-3 rounded-lg bg-[#0a0b0d] border border-[#22262e] space-y-1">
                  <span className="font-mono text-[10px] uppercase text-[#c8a15a] font-semibold block">
                    Representative Project
                  </span>
                  <div className="text-xs font-bold text-[#f2efe8]">
                    {role.project.title}
                  </div>
                  <p className="text-[11px] text-[#8b8f97] leading-relaxed">
                    {role.project.detail}
                  </p>
                  <Link
                    href={role.project.href}
                    className="text-[11px] font-mono text-[#c8a15a] hover:underline inline-flex items-center gap-1 pt-1"
                  >
                    <span>{role.project.linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <Link
                  href={role.resumeHref}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#111317] hover:bg-[#181b21] text-xs font-mono text-[#f2efe8] transition-colors"
                >
                  <span>View track resume</span>
                  <ArrowRight className="w-3 h-3 text-[#c8a15a]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
