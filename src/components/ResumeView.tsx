"use client";

import React from "react";
import Link from "next/link";
import { Printer, ArrowLeft, Download, Mail, ExternalLink, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface ResumeViewProps {
  track: "finance" | "tech";
}

export function ResumeView({ track }: ResumeViewProps) {
  const isFinance = track === "finance";

  const handlePrint = () => {
    window.print();
  };

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
            {isFinance ? "Financial Markets & Quantitative CV" : "Software Engineering & Tech CV"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c5a880] transition-colors shadow-sm"
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
              {isFinance
                ? "Financial Markets | Quantitative Analysis"
                : "Full Stack Developer | AI & Web Applications"}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-sans">
            <span>Gandhinagar, Gujarat, India</span>
            <span>•</span>
            <a href={`mailto:${siteConfig.author.email}`} className="text-blue-700 hover:underline">
              {siteConfig.author.email}
            </a>
            <span>•</span>
            <a href={siteConfig.author.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              linkedin.com/in/rakshitjainrj
            </a>
            <span>•</span>
            <a href={siteConfig.author.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              github.com/rakshitjainai
            </a>
            <span>•</span>
            <a href={siteConfig.url} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
              rakshitjain.in
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="py-4 border-b border-slate-200 space-y-1.5">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-[13px] leading-relaxed text-slate-700">
            {isFinance
              ? "B.Tech Information and Communications Technology student at PDEU with direct financial-market exposure at Anand Rathi International Ventures (IFSC), GIFT City, and hands-on quantitative market analysis using Python. Experienced with India International Bullion Exchange (IIBX) operations, live trading terminals, order entry, market watch observation, margin and risk controls, bullion settlement workflows, and institutional client documentation. Engineered and backtested a 20/50 SMA strategy on real market equities, evaluating CAGR, Sharpe Ratio, and Maximum Drawdown."
              : "Final-year B.Tech (ICT) student at PDEU who builds and ships full-stack web applications end to end using React.js, Node.js, MongoDB, and Python, with a strong base in data structures, algorithms, and systems engineering. Contributed to production web applications during a remote full-stack internship at Certopus Inc. and developed an AI-assisted legal-tech platform from problem research through MVP launch."}
          </p>
        </section>

        {/* Experience Section */}
        <section className="py-4 border-b border-slate-200 space-y-3">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Work Experience
          </h2>

          {isFinance ? (
            /* Finance order */
            <div className="space-y-4">
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
                    Worked on the Bullion Desk with the India International Bullion Exchange (IIBX) ecosystem, gaining practical exposure to commodity markets, exchange mechanics, and technology-enabled operations.
                  </li>
                  <li>
                    Operated alongside the desk on live trading terminals for order entry and market watch while observing margin and risk controls in a real-time trading environment.
                  </li>
                  <li>
                    Mapped the end-to-end bullion trading and settlement workflow from physical bullion vaulting to digital Bullion Depository Receipts (BDRs), connecting exchange, clearing, and custody processes.
                  </li>
                  <li>
                    Verified institutional client onboarding documentation across three critical regulatory categories: KYC, GST, and IEC, following up on rejected applications to support timely compliance.
                  </li>
                  <li>
                    Maintained real-time client account trackers to ensure high operational accuracy in a fast-moving regulatory compliance environment.
                  </li>
                </ul>
              </div>

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
                    Developed and debugged production web applications across front-end and back-end components, strengthening structured problem solving and analytical debugging.
                  </li>
                  <li>
                    Built REST API-backed functionality and integrated databases using Git-based development workflows in a distributed remote team setup.
                  </li>
                </ul>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                  <div>
                    <span className="font-bold text-slate-950">
                      Department of Atomic Energy, Government of India
                    </span>
                    <span className="text-slate-600"> — Summer Trainee (Vocational)</span>
                  </div>
                  <span className="font-mono text-xs text-slate-600 font-medium">
                    July 2025 | Heavy Water Plant, Kota
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                  <li>
                    Built a PHP-based web application for the Training Section; configured server and firewall settings; gained exposure to industrial instrumentation, control valves, actuators, and transmitters.
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            /* Tech order */
            <div className="space-y-4">
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
                    Built responsive front-end user features and REST API-backed backend services for production web applications alongside development and design teams.
                  </li>
                  <li>
                    Diagnosed and fixed defects across the stack through systematic debugging and automated testing, tightening code quality ahead of releases.
                  </li>
                  <li>
                    Managed feature branches independently using Git-based workflows and synchronized with a fully remote team on daily delivery timelines.
                  </li>
                </ul>
              </div>

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
                    Gained operational exposure to the India International Bullion Exchange (IIBX) ecosystem, live trading terminals, order entry, and margin and risk controls.
                  </li>
                  <li>
                    Onboarded institutional clients by verifying KYC, GST, and IEC documentation, and followed up directly on rejected applications to speed up approvals.
                  </li>
                  <li>
                    Maintained real-time client account trackers to support a fast-moving, high-accuracy compliance environment.
                  </li>
                </ul>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                  <div>
                    <span className="font-bold text-slate-950">
                      Department of Atomic Energy, Government of India
                    </span>
                    <span className="text-slate-600"> — Summer Trainee</span>
                  </div>
                  <span className="font-mono text-xs text-slate-600 font-medium">
                    July 2025 | Heavy Water Plant, Kota
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                  <li>
                    Built a PHP-based web application for the Heavy Water Plant&apos;s Training Section at Kota.
                  </li>
                  <li>
                    Configured server and firewall settings and gained hands-on exposure to industrial instrumentation, control valves, and transmitters.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* Selected Projects */}
        <section className="py-4 border-b border-slate-200 space-y-3">
          <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950">
            Selected Technical & Quantitative Projects
          </h2>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">Market Sentiment Analyzer & Backtesting Engine</span>
                  <span className="text-slate-600"> | Python, Pandas, Matplotlib, yFinance</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  Dec 2025 – Mar 2026
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
                <li>
                  Engineered a Python backtesting engine implementing a 20/50 SMA crossover strategy and benchmarked it against a Buy & Hold baseline on live INFY and TATAINVEST daily data.
                </li>
                <li>
                  Computed CAGR, Sharpe Ratio, and Maximum Drawdown with Pandas and visualized equity curves in Matplotlib to quantify risk-adjusted returns and capital preservation.
                </li>
              </ul>
            </div>

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
                  Designed and developed an AI-assisted legal-tech platform that routes clients to lawyers by case type, urgency, and specialization rather than sponsored ad bidding.
                </li>
                <li>
                  Built a lawyer credential verification framework and case milestone tracking system across corporate, family, criminal, and property law.
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-[13px]">
                <div>
                  <span className="font-bold text-slate-950">Custom Shell in C</span>
                  <span className="text-slate-600"> | C, POSIX Systems, Processes & IPC</span>
                </div>
                <span className="font-mono text-xs text-slate-600 font-medium">
                  Oct 2025 – Nov 2025
                </span>
              </div>
              <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
                <li>
                  Implemented an interactive Unix shell supporting process creation (fork/execvp), piping, file descriptor redirection, and built-in navigation routines.
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
              <span className="font-bold text-slate-950 block">Finance & Markets:</span>
              <span>Bullion Trading Operations, IIBX Ecosystem, BDR Dematerialization, Order Entry & Market Watch, Margin & Risk Monitoring, Institutional Client Onboarding (KYC/GST/IEC).</span>
            </div>
            <div>
              <span className="font-bold text-slate-950 block">Quantitative & Data:</span>
              <span>Python, Pandas, NumPy, Backtesting, Risk Metrics (CAGR, Sharpe, Max Drawdown), Matplotlib, yFinance, Statistics & Algorithms.</span>
            </div>
            <div>
              <span className="font-bold text-slate-950 block">Software & Systems:</span>
              <span>React.js, Next.js, Node.js, Express, JavaScript, Java, C, PHP, MongoDB, SQL, REST APIs, Git, Linux.</span>
            </div>
            <div>
              <span className="font-bold text-slate-950 block">Product Thinking:</span>
              <span>Problem Identification, Workflow Analysis, Requirements Specification, Technical Feasibility, Credential Verification Models, Cross-Functional Collaboration.</span>
            </div>
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="py-4 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-[13px]">
            <div>
              <span className="font-bold text-slate-950">Pandit Deendayal Energy University (PDEU)</span>
              <div className="text-slate-700">Bachelor of Technology (B.Tech) – Information and Communications Technology</div>
            </div>
            <span className="font-mono text-xs text-slate-600 font-medium">
              July 2023 – June 2027 | Gandhinagar, Gujarat
            </span>
          </div>

          <div className="space-y-1 pt-1">
            <span className="font-bold text-xs text-slate-950 uppercase tracking-wider block font-mono">
              Honors & Certifications
            </span>
            <ul className="list-disc list-outside pl-4 space-y-0.5 text-xs text-slate-700">
              <li>
                <strong>2nd Runner-Up – Tutedude Buildathon 2025:</strong> Built and validated legal-tech SaaS &quot;Vakaalat&quot; in a national 2-week product development sprint.
              </li>
              <li>
                <strong>1st Rank – Industry Approach to IoT with Deep Learning Workshop:</strong> Jointly organized by Department of CSE PDEU, IEEE Computer Society, and GUJCOST.
              </li>
              <li>
                <strong>NPTEL Elite Certification:</strong> Scored 90/100 in Understanding Incubation and Entrepreneurship.
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
          <span>rakshitjain.in</span>
        </footer>
      </div>
    </div>
  );
}
