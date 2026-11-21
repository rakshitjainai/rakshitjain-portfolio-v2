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
      stack: ["React.js", "Python", "REST APIs", "CSS3"],
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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#22262e] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
            Projects
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
            Projects
          </h2>
          <p className="text-xs sm:text-sm text-[#8b8f97] font-sans">
            Selected projects across quantitative finance, legal-tech product engineering, and systems programming.
          </p>
        </div>

        <Link
          href="/projects"
          className="text-xs font-mono text-[#c8a15a] hover:underline flex items-center gap-1 shrink-0"
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
            className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-[#22262e] space-y-6 hover:border-[#c8a15a]/40 transition-colors"
          >
            {/* Case Study Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#22262e] pb-4">
              <div>
                <span className="font-mono text-xs font-semibold text-[#c8a15a]">
                  {study.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f2efe8] font-sans mt-0.5">
                  {study.title}
                </h3>
              </div>

              {study.liveUrl && (
                <div>
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#c8a15a] bg-[#c8a15a]/10 hover:bg-[#c8a15a] text-[#c8a15a] hover:text-[#0a0b0d] text-xs font-mono font-bold transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Problem / What I did / Outcome / Stack Matrix */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
              <div className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-1.5">
                <span className="font-mono text-[10px] uppercase text-[#8b8f97] tracking-wider block font-semibold">
                  Problem
                </span>
                <p className="text-[#f2efe8] leading-relaxed">
                  {study.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-1.5">
                <span className="font-mono text-[10px] uppercase text-[#c8a15a] tracking-wider block font-semibold">
                  What I did
                </span>
                <p className="text-[#f2efe8] leading-relaxed">
                  {study.whatIDid}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-1.5">
                <span className="font-mono text-[10px] uppercase text-emerald-400 tracking-wider block font-semibold">
                  Outcome
                </span>
                <p className="text-[#f2efe8] leading-relaxed">
                  {study.outcome}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-2">
                <span className="font-mono text-[10px] uppercase text-[#8b8f97] tracking-wider block font-semibold">
                  Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {study.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-[#111317] border border-[#22262e] text-[11px] font-mono text-[#f2efe8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Embedded Chart for Backtest */}
            {study.hasChart && (
              <div className="pt-2">
                <SmaBacktestChart />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
