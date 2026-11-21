import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Wrench } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      id: "anand-rathi",
      role: "Financial Markets / Operations Intern",
      company: "Anand Rathi International Ventures (IFSC) Pvt. Ltd.",
      location: "GIFT City, Gujarat, India",
      period: "May 2026 – July 2026",
      summary: "Bullion trading desk operations on the India International Bullion Exchange (IIBX) at GIFT City IFSC.",
      bullets: [
        {
          verb: "Observed",
          text: "live trading terminals and market watch feeds on the IIBX bullion desk, tracking intraday bid-ask quotes in USD per troy ounce to monitor order execution.",
        },
        {
          verb: "Mapped",
          text: "dematerialized Bullion Depository Receipt (BDR) settlement workflows across custodian transfer stages in empanelled vaults to understand clearing reconciliation.",
        },
        {
          verb: "Reviewed",
          text: "institutional client onboarding documentation (PAN, GSTIN, and IEC) for Qualified Jewellers against IFSCA compliance requirements.",
        },
      ],
      tools: ["Trading Terminals", "BDR Registry", "IFSCA Bullion Regulations", "Excel", "Compliance Trackers"],
    },
    {
      id: "certopus",
      role: "Full Stack Development Intern",
      company: "Certopus Inc.",
      location: "Remote",
      period: "May 2026 – July 2026",
      summary: "Production web engineering across user-facing credential generation and verification workflows.",
      bullets: [
        {
          verb: "Engineered",
          text: "responsive client features in React.js and backend REST endpoints in Node.js, delivering production modules within daily sprint timelines.",
        },
        {
          verb: "Integrated",
          text: "database query handlers and credential validation pipelines, reducing payload errors and ensuring data consistency across concurrent requests.",
        },
        {
          verb: "Debugged",
          text: "frontend edge cases and executed cross-stack unit testing, eliminating software defects prior to staging releases in a Git-based remote team.",
        },
      ],
      tools: ["React.js", "Node.js", "Express", "REST APIs", "Git", "GitHub"],
    },
    {
      id: "heavy-water-plant",
      role: "Summer Trainee (Vocational Trainee)",
      company: "Department of Atomic Energy (DAE), Government of India",
      location: "Kota, Rajasthan, India",
      period: "July 2025",
      summary: "Vocational engineering training in industrial instrumentation and internal application development.",
      bullets: [
        {
          verb: "Developed",
          text: "an internal training record web application in PHP and MySQL for the plant Training Section, replacing manual spreadsheet logs with centralized relational recordkeeping.",
        },
        {
          verb: "Configured",
          text: "local Apache web server parameters and network firewall access rules, securing intranet deployment for plant employees.",
        },
        {
          verb: "Inspected",
          text: "industrial process instrumentation, control valves, actuators, and transmitters across operational units.",
        },
      ],
      tools: ["PHP", "MySQL", "Apache Server", "Linux", "Industrial I&C Systems"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e3e8ef] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
            Experience
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a]">
            Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] font-sans">
            Internships in financial market operations, full-stack engineering, and internal web applications.
          </p>
        </div>

        <Link
          href="/experience"
          className="text-xs font-mono text-[#2563eb] hover:underline flex items-center gap-1 shrink-0 font-semibold"
        >
          <span>View full experience archive</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <article
            key={exp.id}
            id={exp.id}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs hover:border-[#2563eb]/40 hover:shadow-md transition-all space-y-6"
          >
            {/* Role Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-[#e3e8ef] pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#2563eb]">
                  {exp.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] font-sans mt-0.5">
                  {exp.company}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#475569]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0ea5a4]" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Bullets: What I worked on */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase text-[#64748b] tracking-wider block font-semibold">
                What I worked on
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155] font-sans leading-relaxed">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="font-mono text-[#2563eb] font-bold text-xs mt-0.5">
                      ›
                    </span>
                    <span>
                      <strong className="text-[#0f172a] font-semibold">{b.verb}</strong> {b.text.slice(b.verb.length).trimStart()}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used Strip */}
            <div className="pt-4 border-t border-[#e3e8ef] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#64748b] flex items-center gap-1 mr-2 font-semibold">
                <Wrench className="w-3 h-3 text-[#2563eb]" />
                <span>Tools:</span>
              </span>
              {exp.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-[#f8fafc] border border-[#e3e8ef] text-[11px] font-mono text-[#334155] font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
