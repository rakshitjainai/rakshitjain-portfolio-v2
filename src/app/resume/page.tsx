import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Resume | Rakshit Jain",
  description:
    "Resume of Rakshit Jain: B.Tech ICT at PDEU (2023–2027), GIFT City IIBX bullion desk, full-stack React/Node.js development, and Python quantitative backtesting.",
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
          <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
              Resume
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#0f172a]">
              Resume
            </h1>
            <p className="text-xs sm:text-sm text-[#475569] max-w-2xl font-sans">
              Download the PDF below or review web track overviews for specific roles.
            </p>
          </div>

          {/* Primary Resume PDF Box (Large and Obvious) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-blue-500/80 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200 text-xs font-mono text-[#1d4ed8] font-bold">
                <FileText className="w-3.5 h-3.5" />
                <span>General Resume</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] font-sans">
                {siteConfig.resume.filename}
              </h2>
              <p className="text-xs sm:text-sm text-[#475569]">
                One-page overview covering financial markets operations, quantitative research, software engineering, and campus leadership.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={siteConfig.resume.primaryPdf}
                download={siteConfig.resume.filename}
                className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={siteConfig.resume.primaryPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2 px-4 py-3 rounded-lg font-mono text-xs"
              >
                <span>Open in Viewer</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#64748b]" />
              </a>
            </div>
          </div>

          {/* Optional Track Versions as Secondary Links */}
          <div className="p-5 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-3">
            <span className="font-mono text-xs text-[#475569] uppercase tracking-wider block font-semibold">
              Role Track Overviews
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link
                href="/resume/finance"
                id="finance"
                className="p-3.5 rounded-lg bg-white border border-[#e3e8ef] hover:border-blue-400 hover:shadow-sm transition-all block space-y-1"
              >
                <div className="text-xs font-bold text-[#0f172a]">Finance &amp; Markets Track</div>
                <div className="text-[11px] text-[#475569]">IIBX bullion desk &amp; GIFT City operations</div>
              </Link>
              <Link
                href="/resume/quant"
                id="quant"
                className="p-3.5 rounded-lg bg-white border border-[#e3e8ef] hover:border-blue-400 hover:shadow-sm transition-all block space-y-1"
              >
                <div className="text-xs font-bold text-[#0f172a]">Quantitative Analysis Track</div>
                <div className="text-[11px] text-[#475569]">Python backtesting &amp; risk metrics</div>
              </Link>
              <Link
                href="/resume/tech"
                id="tech"
                className="p-3.5 rounded-lg bg-white border border-[#e3e8ef] hover:border-blue-400 hover:shadow-sm transition-all block space-y-1"
              >
                <div className="text-xs font-bold text-[#0f172a]">Software Engineering Track</div>
                <div className="text-[11px] text-[#475569]">React, Node.js, and C systems programming</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CRAWLABLE HTML RESUME TEXT (Fully accessible to LLMs & print) */}
        {/* ============================================================ */}
        <article className="p-8 sm:p-12 rounded-2xl bg-white border border-[#e3e8ef] space-y-8 print-card shadow-sm">
          {/* Header */}
          <header className="border-b border-[#e3e8ef] pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-display text-[#0f172a] uppercase">
                Rakshit Jain
              </h2>
              <span className="font-mono text-xs text-[#2563eb] uppercase font-semibold">
                Markets · Quant · Software
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#475569]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#64748b]" />
                <span>Gandhinagar, Gujarat, India</span>
              </span>
              <span>•</span>
              <a href={`mailto:${siteConfig.author.email}`} className="text-[#2563eb] hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                <span>{siteConfig.author.email}</span>
              </a>
              <span>•</span>
              <a href={`tel:${siteConfig.author.phone}`} className="text-[#2563eb] hover:underline flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.author.phoneDisplay}</span>
              </a>
              <span>•</span>
              <a href={siteConfig.author.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#0f172a] text-[#475569]">
                LinkedIn
              </a>
              <span>•</span>
              <a href={siteConfig.author.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#0f172a] text-[#475569]">
                GitHub
              </a>
            </div>
          </header>

          {/* Education */}
          <section className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold block">
              Education
            </span>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs sm:text-sm">
              <div>
                <span className="font-bold text-[#0f172a]">Pandit Deendayal Energy University (PDEU)</span>
                <div className="text-[#475569]">B.Tech in Information and Communication Technology (ICT)</div>
              </div>
              <span className="font-mono text-xs text-[#64748b]">2023 – 2027</span>
            </div>
          </section>

          {/* Work Experience */}
          <section className="space-y-4 pt-4 border-t border-[#e3e8ef]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold block">
              Experience
            </span>

            <div className="space-y-5 text-xs sm:text-sm font-sans">
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div className="font-bold text-[#0f172a]">
                    Anand Rathi International Ventures (IFSC) Pvt. Ltd. — Financial Markets / Operations Intern
                  </div>
                  <div className="font-mono text-[#64748b]">May 2026 – July 2026 | GIFT City, Gujarat</div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#475569]">
                  <li>
                    Observed live trading terminals and market watch feeds on the IIBX bullion desk, tracking bid-ask quotes to monitor order execution.
                  </li>
                  <li>
                    Mapped dematerialized Bullion Depository Receipt (BDR) settlement workflows from empanelled vaults to depository accounts.
                  </li>
                  <li>
                    Reviewed institutional client onboarding documentation (PAN, GSTIN, IEC) for Qualified Jewellers against IFSCA compliance requirements.
                  </li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div className="font-bold text-[#0f172a]">
                    Certopus Inc. — Full Stack Development Intern
                  </div>
                  <div className="font-mono text-[#64748b]">May 2026 – July 2026 | Remote</div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#475569]">
                  <li>
                    Developed responsive client features in React.js and backend REST API endpoints in Node.js for production credential delivery.
                  </li>
                  <li>
                    Integrated database query handlers and validated request payloads across concurrent user actions.
                  </li>
                  <li>
                    Debugged frontend edge cases and performed unit testing in a Git-based remote development team.
                  </li>
                </ul>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                  <div className="font-bold text-[#0f172a]">
                    Department of Atomic Energy (DAE), Government of India — Summer Trainee (Vocational)
                  </div>
                  <div className="font-mono text-[#64748b]">July 2025 | Heavy Water Plant, Kota</div>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[#475569]">
                  <li>
                    Developed an internal training record web application in PHP and MySQL for the plant Training Section.
                  </li>
                  <li>
                    Configured local Apache web server parameters and network firewall access rules for plant intranet deployment.
                  </li>
                  <li>
                    Inspected industrial process instrumentation, control valves, actuators, and transmitters across plant units.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section className="space-y-4 pt-4 border-t border-[#e3e8ef]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold block">
              Selected Projects
            </span>

            <div className="space-y-4 text-xs sm:text-sm font-sans">
              <div className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-[#0f172a]">Market Sentiment Analyzer &amp; Backtesting Engine</span>
                  <span className="font-mono text-[#64748b]">Python, Pandas, NumPy, yFinance</span>
                </div>
                <p className="text-[#475569]">
                  Built a 20/50 SMA crossover strategy backtesting engine in Python. Shifted execution by one day to prevent look-ahead bias; halved maximum drawdown on INFY from -36.4% to -18.2% and lowered volatility to 15.3% (Sharpe Ratio 0.35).
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-[#0f172a]">LawPrix — Legal Services Matchmaking</span>
                  <span className="font-mono text-[#64748b]">React.js, Python, REST APIs</span>
                </div>
                <p className="text-[#475569]">
                  Developed a client-lawyer matching platform routing inquiries by legal specialization and verified Bar Council credentials. Won 2nd Runner-Up at the national Tutedude Buildathon 2025.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-[#0f172a]">Custom Unix Command Shell</span>
                  <span className="font-mono text-[#64748b]">C, Linux, POSIX</span>
                </div>
                <p className="text-[#475569]">
                  Implemented an interactive POSIX command shell in C featuring fork-and-execvp process management, signal handling, I/O redirection (&lt;, &gt;), and piping (|).
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-3 pt-4 border-t border-[#e3e8ef]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold block">
              Technical Skills
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-[#475569]">
              <div>
                <span className="font-bold text-[#0f172a] block">Markets &amp; Quant:</span>
                <span>Python (Pandas, NumPy), Backtesting, Risk Metrics (CAGR, Sharpe, MDD), IIBX Operations, BDR Settlement, Risk Monitoring.</span>
              </div>
              <div>
                <span className="font-bold text-[#0f172a] block">Software &amp; Systems:</span>
                <span>React.js, Next.js, Node.js, Express, C (POSIX, fork, execvp), PHP, MySQL, REST APIs, Git, Linux.</span>
              </div>
            </div>
          </section>

          {/* Leadership & Awards */}
          <section className="space-y-3 pt-4 border-t border-[#e3e8ef]">
            <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold block">
              Awards &amp; Leadership
            </span>
            <ul className="list-disc pl-4 space-y-1 text-xs text-[#475569]">
              <li>
                <strong className="text-[#0f172a]">2nd Runner-Up:</strong> Tutedude Buildathon 2025 (LawPrix).
              </li>
              <li>
                <strong className="text-[#0f172a]">1st Rank:</strong> IoT + Deep Learning Workshop (PDEU / IEEE / GUJCOST).
              </li>
              <li>
                <strong className="text-[#0f172a]">NPTEL Elite Certificate:</strong> Score 90/100 in Incubation and Entrepreneurship.
              </li>
              <li>
                <strong className="text-[#0f172a]">Campus Leadership:</strong> Operations &amp; Logistics Head at CSI PDEU (25 members); Head of Operations at Nucleus Physics Club (9 members); Training &amp; Placement Cell Representative.
              </li>
            </ul>
          </section>
        </article>
      </div>
    </>
  );
}
