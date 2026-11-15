import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, Printer, ArrowRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Resume | Rakshit Jain",
  description:
    "Official resume of Rakshit Jain: B.Tech ICT at PDEU (2023-27), GIFT City IIBX bullion desk, full-stack React/Node.js development, and Python quant projects.",
  alternates: {
    canonical: `${siteConfig.url}/resume`,
  },
};

export default function ResumePage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resume",
        item: `${siteConfig.url}/resume`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12">
        {/* Header & Primary Download Card */}
        <section className="no-print space-y-6">
          <div className="border-b border-[#22262e] pb-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
              Curriculum Vitae
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#f2efe8]">
              Candidate Resume
            </h1>
            <p className="text-xs sm:text-sm text-[#8b8f97] max-w-2xl font-sans">
              Download the official PDF below, review optional role tracks, or print this document directly.
            </p>
          </div>

          {/* Primary Resume PDF Box (Large and Obvious) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111317] border-2 border-[#c8a15a]/80 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#c8a15a]/10 border border-[#c8a15a]/30 text-xs font-mono text-[#c8a15a] font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>Primary Document (Official)</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#f2efe8] font-sans">
                Rakshit-Jain-Resume.pdf
              </h2>
              <p className="text-xs sm:text-sm text-[#8b8f97]">
                Comprehensive 1-page resume covering Markets, Quantitative Analysis, Engineering, and Campus Leadership.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="/Rakshit-Jain-Resume.pdf"
                download="Rakshit-Jain-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="/Rakshit-Jain-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-[#f2efe8] font-mono text-xs transition-colors"
              >
                <span>Open in Viewer</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8b8f97]" />
              </a>
            </div>
          </div>

          {/* Optional Track Versions as Secondary Links */}
          <div className="p-5 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-3">
            <span className="font-mono text-xs text-[#8b8f97] uppercase tracking-wider block font-semibold">
              Optional Track Versions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/resume/finance"
                id="finance"
                className="p-3.5 rounded-lg bg-[#111317] border border-[#22262e] hover:border-[#c8a15a] transition-colors block space-y-1"
              >
                <div className="text-xs font-bold text-[#f2efe8]">Finance &amp; Markets Track</div>
                <div className="text-[11px] text-[#8b8f97]">IIBX bullion desk &amp; GIFT City focus</div>
              </Link>
              <Link
                href="/resume/finance"
                id="quant"
                className="p-3.5 rounded-lg bg-[#111317] border border-[#22262e] hover:border-[#c8a15a] transition-colors block space-y-1"
              >
                <div className="text-xs font-bold text-[#f2efe8]">Quantitative Analysis Track</div>
                <div className="text-[11px] text-[#8b8f97]">Python backtesting &amp; risk metrics</div>
              </Link>
              <Link
                href="/resume/tech"
                id="tech"
                className="p-3.5 rounded-lg bg-[#111317] border border-[#22262e] hover:border-[#c8a15a] transition-colors block space-y-1"
              >
                <div className="text-xs font-bold text-[#f2efe8]">Software &amp; Product Track</div>
                <div className="text-[11px] text-[#8b8f97]">React, Node.js, and LawPrix case study</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CRAWLABLE HTML RESUME TEXT (Fully accessible to LLMs & print) */}
        {/* ============================================================ */}
        <article className="p-8 sm:p-12 rounded-2xl bg-[#111317] border border-[#22262e] space-y-8 print-card">
          {/* Resume Header */}
          <header className="border-b border-[#22262e] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
                Rakshit Jain
              </h1>
              <span className="font-mono text-xs text-[#c8a15a]">
                PDEU B.Tech ICT (Class of 2027)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8b8f97] pt-1">
              <span>Gandhinagar / Ahmedabad, Gujarat, India</span>
              <span>•</span>
              <a href="mailto:rakshitindia2019@gmail.com" className="hover:text-white underline">
                rakshitindia2019@gmail.com
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/rakshitjainrj/" className="hover:text-white underline">
                linkedin.com/in/rakshitjainrj
              </a>
              <span>•</span>
              <a href="https://github.com/rakshitjainai" className="hover:text-white underline">
                github.com/rakshitjainai
              </a>
            </div>
          </header>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-bold border-b border-[#22262e] pb-1">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#f2efe8]">Pandit Deendayal Energy University (PDEU)</span>
                <span className="text-[#8b8f97]"> — B.Tech in Information and Communication Technology</span>
              </div>
              <span className="font-mono text-xs text-[#8b8f97]">2023 – 2027 · Gandhinagar, Gujarat</span>
            </div>
          </section>

          {/* Work Experience */}
          <section className="space-y-5">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-bold border-b border-[#22262e] pb-1">
              Professional Work Experience
            </h2>

            {/* Anand Rathi */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-[#f2efe8]">Anand Rathi International Ventures (IFSC) Pvt. Ltd.</span>
                  <span className="text-[#8b8f97]"> — Financial Markets / Operations Intern</span>
                </div>
                <span className="font-mono text-xs text-[#8b8f97]">May 2026 – July 2026 · GIFT City</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8b8f97] leading-relaxed">
                <li>Operated live trading terminals and market watch quotes on the IIBX bullion desk, monitoring price spreads in USD per troy ounce.</li>
                <li>Mapped physical-to-digital Bullion Depository Receipt (BDR) issuance and dematerialized settlement workflows across vault facilities.</li>
                <li>Audited institutional KYC, GST, and IEC documentation for Qualified Jeweller onboarding under IFSCA regulatory guidelines.</li>
              </ul>
            </div>

            {/* Certopus */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-[#f2efe8]">Certopus Inc.</span>
                  <span className="text-[#8b8f97]"> — Full Stack Development Intern</span>
                </div>
                <span className="font-mono text-xs text-[#8b8f97]">May 2026 – July 2026 · Remote</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8b8f97] leading-relaxed">
                <li>Engineered responsive React.js interfaces and Node.js REST endpoints for digital credential workflows.</li>
                <li>Integrated database pipelines and performed cross-stack unit testing, resolving production software defects.</li>
                <li>Collaborated in a remote engineering team utilizing Git pull requests, daily reviews, and sprint delivery schedules.</li>
              </ul>
            </div>

            {/* DAE */}
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <span className="font-bold text-[#f2efe8]">Department of Atomic Energy (DAE), Govt. of India</span>
                  <span className="text-[#8b8f97]"> — Summer Trainee</span>
                </div>
                <span className="font-mono text-xs text-[#8b8f97]">July 2025 · Kota, Rajasthan</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#8b8f97] leading-relaxed">
                <li>Developed an internal web application in PHP and MySQL for heavy water plant training records management.</li>
                <li>Configured Apache web server and firewall parameters for secure local intranet deployment.</li>
                <li>Inspected industrial process instrumentation, control valves, and transmitters across plant operations.</li>
              </ul>
            </div>
          </section>

          {/* Key Projects */}
          <section className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-bold border-b border-[#22262e] pb-1">
              Key Technical Projects
            </h2>

            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-[#f2efe8]">Market Sentiment Analyzer &amp; Backtesting Engine</span>
                <span className="font-mono text-xs text-[#c8a15a]">Python · Pandas · yFinance</span>
              </div>
              <p className="text-xs text-[#8b8f97] leading-relaxed">
                Vectorized 20/50 SMA crossover strategy backtested on historical NSE equities (INFY and TATAINVEST). Shifted execution by 1 day to eliminate look-ahead bias; cut INFY maximum drawdown from -36.4% (buy-and-hold) to -18.2% and lowered volatility to 15.3% (Sharpe 0.35).
              </p>
            </div>

            <div className="space-y-1.5 text-xs sm:text-sm">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-[#f2efe8]">LawPrix — Transparent Legal Matchmaking</span>
                <span className="font-mono text-xs text-[#c8a15a]">React.js · Python · REST APIs</span>
              </div>
              <p className="text-xs text-[#8b8f97] leading-relaxed">
                Secured 2nd Runner-Up at the national Tutedude Buildathon 2025. Designed criteria-based routing across 4 legal domains with Bar Council verification and milestone status tracking. Accessible at lawprix.com.
              </p>
            </div>
          </section>

          {/* Campus Leadership */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-bold border-b border-[#22262e] pb-1">
              Campus Leadership Appointments
            </h2>
            <ul className="space-y-1 text-xs text-[#8b8f97] leading-relaxed list-disc list-inside">
              <li><strong className="text-[#f2efe8]">Operations &amp; Logistics Head, CSI PDEU:</strong> Led 25-member squad managing logistics across 5 campus tech events [Oct 2025 – Jul 2026].</li>
              <li><strong className="text-[#f2efe8]">Head of Operations &amp; Logistics, Nucleus Physics Club:</strong> Directed operational planning for 10+ campus events [Jul 2024 – May 2025].</li>
              <li><strong className="text-[#f2efe8]">Training &amp; Placement Cell Representative, PDEU:</strong> Student coordinator assisting campus recruitment drives [Apr 2026 – Present].</li>
              <li><strong className="text-[#f2efe8]">Publicity Assistant, IEEE CS Chapter, PDEU:</strong> Promotional outreach for 15+ student technical workshops [Feb 2024 – May 2025].</li>
            </ul>
          </section>

          {/* Skills Table */}
          <section className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-bold border-b border-[#22262e] pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="font-bold text-[#f2efe8] block font-mono">Markets &amp; Quant:</span>
                <span className="text-[#8b8f97]">Python, Pandas, NumPy, backtesting, Sharpe ratio, max drawdown, bullion trading, IIBX, BDRs, Excel, KYC.</span>
              </div>
              <div>
                <span className="font-bold text-[#f2efe8] block font-mono">Engineering:</span>
                <span className="text-[#8b8f97]">React.js, Node.js, C systems programming, SQL, Git, REST APIs, Linux, HTML5, Tailwind CSS.</span>
              </div>
              <div>
                <span className="font-bold text-[#f2efe8] block font-mono">Product:</span>
                <span className="text-[#8b8f97]">Workflow analysis, problem discovery, requirements specifications, criteria-based routing, prototyping.</span>
              </div>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
