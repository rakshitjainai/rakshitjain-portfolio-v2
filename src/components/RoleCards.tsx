import React from "react";
import Link from "next/link";
import { ArrowRight, TrendingUp, Cpu, Layout } from "lucide-react";

export function RoleCards() {
  const roles = [
    {
      title: "Markets & Operations",
      focus: "Bullion Trading · Settlement Workflows · Risk Monitoring",
      icon: TrendingUp,
      accentColor: "#1d4ed8",
      badgeClass: "bg-blue-50 border-blue-200 text-[#1d4ed8]",
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
      accentColor: "#0f766e",
      badgeClass: "bg-teal-50 border-teal-200 text-[#0f766e]",
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
      accentColor: "#047857",
      badgeClass: "bg-emerald-50 border-emerald-200 text-[#047857]",
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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1280px] mx-auto space-y-10">
      <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          Focus
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a] [text-wrap:balance]">
          Areas of Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role, idx) => {
          const Icon = role.icon;
          return (
            <div
              key={idx}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs hover:shadow-md hover:border-[#2563eb]/40 transition-all duration-200 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2.5 rounded-lg border ${role.badgeClass}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Numbered label whose color transitions blue → teal → green across the 3 cards */}
                  <span
                    className="font-mono text-xs font-bold px-2.5 py-1 rounded-full border"
                    style={{
                      color: role.accentColor,
                      borderColor: `${role.accentColor}30`,
                      backgroundColor: `${role.accentColor}0D`,
                    }}
                  >
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] font-sans">
                    {role.title}
                  </h3>
                  <p className="font-mono text-xs font-semibold leading-tight" style={{ color: role.accentColor }}>
                    {role.focus}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#e3e8ef]">
                  <span className="font-mono text-[10px] uppercase text-[#64748b] tracking-wider block font-semibold">
                    Key Skills
                  </span>
                  <ul className="text-xs sm:text-sm text-[#334155] space-y-1.5 font-sans">
                    {role.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-1.5">
                        <span className="font-mono leading-none mt-1" style={{ color: role.accentColor }}>›</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#e3e8ef]">
                <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-1.5">
                  <span className="font-mono text-[10px] uppercase font-bold block" style={{ color: role.accentColor }}>
                    Representative Project
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-[#0f172a]">
                    {role.project.title}
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed [text-wrap:pretty]">
                    {role.project.detail}
                  </p>
                  <Link
                    href={role.project.href}
                    className="min-h-[44px] text-xs font-mono hover:underline inline-flex items-center gap-1 font-semibold group/link"
                    style={{ color: role.accentColor }}
                  >
                    <span>{role.project.linkText}</span>
                    <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <Link
                  href={role.resumeHref}
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#e3e8ef] hover:border-[#2563eb]/50 bg-white hover:bg-[#f8fafc] text-xs font-mono font-semibold text-[#0f172a] transition-all shadow-2xs"
                >
                  <span>View track resume</span>
                  <ArrowRight className="w-3 h-3 text-[#2563eb] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
