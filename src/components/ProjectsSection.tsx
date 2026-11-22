import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SmaBacktestChart } from "@/components/SmaBacktestChart";

export function ProjectsSection() {
  const caseStudies = [
    {
      id: "market-sentiment-analyzer",
      title: "Market Sentiment Analyzer & Backtesting Engine",
      category: "Quantitative Finance · Trading Strategy",
      problem:
        "Discretionary investors lack objective quantitative tools to evaluate trend-following rules and frequently suffer severe drawdowns during multi-month market downturns.",
      whatIDid:
        "Designed and wrote a Python backtesting engine with a vectorized data pipeline. Shifted execution signals by one day to prevent look-ahead bias and computed CAGR, Sharpe Ratio, and Drawdown.",
      stack: ["Python", "Pandas", "NumPy", "yFinance", "Matplotlib"],
      outcome:
        "Halved maximum drawdown on INFY from -36.4% (buy-and-hold) to -18.2% and lowered annualized volatility to 15.3% (Sharpe Ratio 0.35) by shifting to cash during sustained downtrends.",
      liveUrl: null,
      hasChart: true,
    },
    {
      id: "lawprix",
      title: "LawPrix — Legal Services Matchmaking",
      category: "LegalTech · Product Development",
      problem:
        "Traditional legal directories rank lawyers based on sponsorship bidding rather than domain expertise, creating fee opacity and information asymmetry for clients.",
      whatIDid:
        "Co-developed the client intake workflow and criteria-based routing architecture across 4 legal domains. Integrated Bar Council registration checks and milestone tracking.",
      stack: ["React.js", "Python", "REST APIs", "Tailwind CSS"],
      outcome:
        "Won 2nd Runner-Up at the national Tutedude Buildathon 2025 hackathon. Shipped a responsive web application with verified milestone tracking.",
      liveUrl: "https://lawprix.com/",
      hasChart: false,
    },
    {
      id: "custom-shell-c",
      title: "Custom Unix Command Shell",
      category: "Systems Programming · Operating Systems",
      problem:
        "Standard high-level languages abstract operating system process lifecycles, memory allocation, and kernel input/output streaming mechanisms.",
      whatIDid:
        "Wrote an interactive POSIX command-line interpreter in C implementing process execution, signal handling, and stream redirection.",
      stack: ["C", "Linux", "POSIX APIs", "GCC", "Make"],
      outcome:
        "Implemented fork-and-execvp process management, I/O redirection (<, >), and multi-command piping (|) with zero memory leaks in Valgrind testing.",
      liveUrl: null,
      hasChart: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1280px] mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e3e8ef] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
            Projects
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a] [text-wrap:balance]">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-sans [text-wrap:pretty]">
            Selected projects across quantitative finance, legal-tech product engineering, and systems programming.
          </p>
        </div>

        <Link
          href="/projects"
          className="min-h-[44px] text-xs font-mono text-[#2563eb] hover:underline inline-flex items-center gap-1 shrink-0 font-semibold"
        >
          <span>View all projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-10">
        {caseStudies.map((study) => (
          <article
            key={study.id}
            id={study.id}
            className="group relative p-5 sm:p-8 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200 space-y-6 overflow-hidden max-w-full min-w-0"
          >
            {/* Top gradient accent line that brightens on hover */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2563eb] via-[#0ea5a4] to-[#10b981] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />

            {/* Case Study Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e3e8ef] pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#2563eb]">
                  {study.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] font-sans mt-0.5">
                  {study.title}
                </h3>
              </div>

              {study.liveUrl && (
                <div>
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-blue-200 bg-blue-50/70 hover:bg-[#2563eb] text-[#1d4ed8] hover:text-white text-xs font-mono font-bold transition-all shadow-2xs"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Problem / What I did / Outcome / Stack Matrix: 1 col mobile, 2 col tablet, 4 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-sans">
              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-1.5">
                <span className="font-mono text-xs uppercase text-[#64748b] tracking-wider block font-bold">
                  Problem
                </span>
                <p className="text-[#334155] leading-relaxed [text-wrap:pretty]">
                  {study.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-1.5">
                <span className="font-mono text-xs uppercase text-[#2563eb] tracking-wider block font-bold">
                  What I did
                </span>
                <p className="text-[#334155] leading-relaxed [text-wrap:pretty]">
                  {study.whatIDid}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-1.5">
                <span className="font-mono text-xs uppercase text-[#047857] tracking-wider block font-bold">
                  Outcome
                </span>
                <p className="text-[#334155] leading-relaxed [text-wrap:pretty]">
                  {study.outcome}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-1.5">
                <span className="font-mono text-xs uppercase text-[#64748b] tracking-wider block font-bold">
                  Stack
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {study.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-white border border-[#e3e8ef] text-xs font-mono text-[#0f172a] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Chart for Quantitative Backtesting Engine */}
            {study.hasChart && (
              <div className="pt-2 w-full max-w-full min-w-0 overflow-hidden">
                <SmaBacktestChart />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
