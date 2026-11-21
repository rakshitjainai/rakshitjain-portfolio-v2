"use client";

import React from "react";
import Link from "next/link";
import { Printer, ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ResumeViewProps {
  track: "finance" | "quant" | "tech";
}

export function ResumeView({ track }: ResumeViewProps) {
  const isFinance = track === "finance";
  const isQuant = track === "quant";

  const handlePrint = () => {
    window.print();
  };

  const trackTitle = isFinance
    ? "Financial Markets Track"
    : isQuant
    ? "Quantitative Analysis Track"
    : "Software Engineering Track";

  const headline = isFinance
    ? "Financial Markets | Trading Operations"
    : isQuant
    ? "Quantitative Research | Backtesting & Data Modeling"
    : "Software Engineering | Full-Stack Development";

  const professionalSummary = isFinance
    ? "B.Tech Information and Communications Technology student at PDEU with direct financial-market exposure at Anand Rathi International Ventures (IFSC), GIFT City, and hands-on quantitative market analysis using Python. Experienced with India International Bullion Exchange (IIBX) operations, live trading terminals, order entry, market watch observation, margin and risk controls, bullion settlement workflows, and institutional client documentation. Backtested a 20/50 SMA strategy on Indian equities, evaluating CAGR, Sharpe Ratio, and Maximum Drawdown."
    : isQuant
    ? "B.Tech Information and Communications Technology student at PDEU specializing in quantitative research, empirical strategy modeling, and data pipelines in Python. Designed and implemented an automated 20/50 Simple Moving Average (SMA) crossover backtesting engine utilizing yFinance, Pandas, and NumPy. Evaluated risk-adjusted metrics including CAGR, annualized volatility, Sharpe Ratio, and Maximum Drawdown on historical Indian equities (INFY and TATAINVEST), enforcing a one-day execution shift to eliminate look-ahead bias. Experienced in systems programming in C, operational exposure to GIFT City bullion market infrastructure, and full-stack web engineering."
    : "B.Tech ICT student at PDEU who builds and ships full-stack web applications and system software using React.js, Node.js, Python, and C. Contributed to production web applications during a remote full-stack internship at Certopus Inc., developed an internal database-backed web application at the Department of Atomic Energy, and built an award-winning legal-tech matching platform (LawPrix, 2nd Runner-Up at Tutedude Buildathon 2025).";

  return (
    <div className="space-y-6">
      {/* Top action bar (hidden during print) */}
      <div className="print:hidden flex flex-wrap items-center justify-between gap-4 p-4 bg-[#0a101f] border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3">
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Resumes</span>
          </Link>
          <span className="text-slate-700">|</span>
          <span className="text-xs font-mono text-[#d4af37]">
            {trackTitle}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c5a880] transition-colors shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* The Printable Resume Paper Container */}
      <div className="bg-white text-slate-900 font-sans p-8 sm:p-12 rounded-xl border border-slate-200 shadow-xl max-w-4xl mx-auto print:p-0 print:border-none print:shadow-none print:max-w-none print:text-black">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-5 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-serif uppercase">
              Rakshit Jain
            </h1>
            <div className="font-mono text-xs font-semibold text-slate-700 uppercase tracking-widest">
              {headline}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-sans">
            <span>Gandhinagar, Gujarat, India</span>
            <span>•</span>
            <a href={`mailto:${siteConfig.author.email}`} className="text-blue-700 hover:underline">
              {siteConfig.author.email}
            </a>
            <span>•</span>
            <a href={`tel:${siteConfig.author.phone}`} className="text-blue-700 hover:underline">
              {siteConfig.author.phoneDisplay}
            </a>
            <span>•</span>
            <a href={siteConfig.author.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              linkedin.com/in/rakshitjainrj
            </a>
            <span>•</span>
            <a href={siteConfig.author.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              github.com/rakshitjainai
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="py-4 border-b border-slate-200 space-y-1.5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700">
            {professionalSummary}
          </p>
        </section>

        {/* Work Experience */}
        <section className="py-4 border-b border-slate-200 space-y-3">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Work Experience
          </h2>

          <div className="space-y-4">
            {/* Anand Rathi */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">
                    Anand Rathi International Ventures (IFSC) Pvt. Ltd.
                  </span>
                  <span className="text-slate-600"> — Financial Markets / Operations Intern</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  May 2026 – July 2026 | GIFT City, Gujarat
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                <li>
                  Gained practical exposure to the India International Bullion Exchange (IIBX) ecosystem, observing live trading terminals, market watch feeds, and order entry workflows.
                </li>
                <li>
                  Mapped the end-to-end bullion trading and settlement workflow from physical vault custody in GIFT SEZ to dematerialized Bullion Depository Receipts (BDRs).
                </li>
                <li>
                  Observed real-time margin and risk limits on active trading terminals.
                </li>
                <li>
                  Reviewed institutional client onboarding documentation (KYC, GST, and IEC) for Qualified Jewellers against IFSCA compliance requirements.
                </li>
              </ul>
            </div>

            {/* Certopus */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">Certopus Inc.</span>
                  <span className="text-slate-600"> — Full Stack Development Intern</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  May 2026 – July 2026 | Remote
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                <li>
                  Developed responsive client features in React.js and REST API endpoints in Node.js for production credential delivery workflows.
                </li>
                <li>
                  Integrated database query handlers and validated payloads across concurrent requests using Git-based team collaboration.
                </li>
                <li>
                  Debugged frontend and backend edge cases through unit testing, improving reliability prior to staging releases.
                </li>
              </ul>
            </div>

            {/* DAE */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">
                    Department of Atomic Energy (DAE), Government of India
                  </span>
                  <span className="text-slate-600"> — Summer Trainee (Vocational Trainee)</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  July 2025 | Heavy Water Plant, Kota
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                <li>
                  Developed an internal training record web application in PHP and MySQL for the plant Training Section, replacing manual log sheets with centralized database storage.
                </li>
                <li>
                  Configured Apache web server parameters and network firewall access rules for secure plant intranet deployment.
                </li>
                <li>
                  Inspected industrial process instrumentation, control valves, actuators, and transmitters across plant units.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="py-4 border-b border-slate-200 space-y-3">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Selected Technical &amp; Quantitative Projects
          </h2>

          <div className="space-y-3">
            {/* Market Sentiment Analyzer */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">Market Sentiment Analyzer &amp; Backtesting Engine</span>
                  <span className="text-slate-600"> | Python, Pandas, NumPy, Matplotlib, yFinance</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  Dec 2025 – Mar 2026
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
                <li>
                  Built an automated Python backtesting script modeling a 20/50 SMA crossover strategy on historical Indian equities (INFY and TATAINVEST).
                </li>
                <li>
                  Shifted signal execution by one day to prevent look-ahead bias; computed CAGR, Sharpe Ratio, and Maximum Drawdown.
                </li>
                <li>
                  Halved maximum drawdown on INFY from -36.4% (buy-and-hold) to -18.2% and lowered volatility to 15.3% (Sharpe Ratio 0.35) by shifting to cash during sustained downtrends.
                </li>
              </ul>
            </div>

            {/* LawPrix */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">LawPrix — Transparent Legal Matchmaking</span>
                  <span className="text-slate-600"> | React.js, Python, REST APIs, Tailwind CSS</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  Aug 2025 – Jul 2026
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
                <li>
                  Developed a client-lawyer matchmaking platform routing inquiries by legal domain, urgency, and verified credentials rather than sponsored ad bidding.
                </li>
                <li>
                  Integrated Bar Council registration checks and milestone-based engagement tracking; secured 2nd Runner-Up at the national Tutedude Buildathon 2025.
                </li>
              </ul>
            </div>

            {/* Custom Shell */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">Custom Unix Command Shell</span>
                  <span className="text-slate-600"> | C, POSIX APIs, Linux, GCC</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  Oct 2025 – Nov 2025
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
                <li>
                  Implemented an interactive command interpreter in C featuring fork-and-execvp process management, signal handling, I/O redirection (&lt;, &gt;), and piping (|).
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Architecture */}
        <section className="py-4 border-b border-slate-200 space-y-2">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Skills Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            <div>
              <span className="font-bold text-slate-950 block">Markets &amp; Quant:</span>
              <span>Python, Pandas, NumPy, Backtesting, Risk Metrics (CAGR, Sharpe, Max Drawdown), IIBX Bullion Operations, BDR Dematerialization, Order Terminals, Risk Limits.</span>
            </div>
            <div>
              <span className="font-bold text-slate-950 block">Software &amp; Systems:</span>
              <span>React.js, Next.js, Node.js, Express, C (POSIX, fork, execvp, pipes), PHP, MySQL, REST APIs, Git, Linux.</span>
            </div>
          </div>
        </section>

        {/* Education & Honors */}
        <section className="py-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-[13px]">
            <div>
              <span className="font-bold text-slate-950">Pandit Deendayal Energy University (PDEU)</span>
              <div className="text-slate-700">Bachelor of Technology (B.Tech) – Information and Communications Technology</div>
            </div>
            <span className="font-mono text-xs text-slate-600 font-medium">
              2023 – 2027 | Gandhinagar, Gujarat
            </span>
          </div>

          <div className="space-y-1 pt-1">
            <span className="font-bold text-xs text-slate-950 uppercase tracking-wider block font-mono">
              Honors &amp; Certifications
            </span>
            <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
              <li>
                <strong>2nd Runner-Up – Tutedude Buildathon 2025:</strong> National hackathon award for LawPrix legal-tech matchmaking application.
              </li>
              <li>
                <strong>1st Rank – IoT with Deep Learning Workshop:</strong> Jointly organized by Dept of CSE PDEU, IEEE Computer Society, and GUJCOST.
              </li>
              <li>
                <strong>NPTEL Elite Certification:</strong> Score 90/100 in Understanding Incubation and Entrepreneurship (Ministry of Education / IIT).
              </li>
            </ul>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-slate-700" />
            <span>Factual, verifiable resume. Verified dates follow official LinkedIn record.</span>
          </div>
          <span>Gandhinagar, Gujarat, India</span>
        </footer>
      </div>
    </div>
  );
}
