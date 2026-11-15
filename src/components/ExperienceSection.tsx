import React from "react";
import Link from "next/link";
import { ArrowRight, Building, Calendar, MapPin, Wrench } from "lucide-react";

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
          verb: "Operated",
          text: "live trading terminals and market watch feeds on the IIBX bullion desk, tracking intraday bid-ask quotes in USD per troy ounce to assist daily execution monitoring.",
        },
        {
          verb: "Mapped",
          text: "dematerialized Bullion Depository Receipt (BDR) settlement workflows, auditing custodian transfer stages across empanelled vaults to ensure error-free clearing reconciliation.",
        },
        {
          verb: "Audited",
          text: "institutional compliance dossiers (PAN, GSTIN, and IEC) for Qualified Jewellers, flagging documentation discrepancies before regulatory submission to IFSCA.",
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
          text: "responsive client features in React.js and backend REST endpoints in Node.js, delivering production modules on schedule within daily sprint timelines.",
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
          text: "an internal training record web application in PHP and MySQL for the plant Training Section, replacing spreadsheet logs with centralized relational recordkeeping.",
        },
        {
          verb: "Configured",
          text: "local Apache web server parameters and network firewall access rules, securing intranet deployment for plant employees.",
        },
        {
          verb: "Inspected",
          text: "industrial process instrumentation, control valves, and transmitters across operational units, earning a 'Very Good' supervisory evaluation rating.",
        },
      ],
      tools: ["PHP", "MySQL", "Apache Server", "Linux", "Industrial I&C Systems"],
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#22262e] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
            Track Record
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#8b8f97] font-sans">
            Three roles. Three action-oriented proof points each.
          </p>
        </div>

        <Link
          href="/experience"
          className="text-xs font-mono text-[#c8a15a] hover:underline flex items-center gap-1 shrink-0"
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
            className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-[#22262e] space-y-6 hover:border-[#c8a15a]/40 transition-colors"
          >
            {/* Role Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-[#22262e] pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#c8a15a]">
                  {exp.role}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f2efe8] font-sans mt-0.5">
                  {exp.company}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#8b8f97]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8b8f97]" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8b8f97]" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* 3 Bullets: action verb + what + measurable outcome */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase text-[#8b8f97] tracking-wider block">
                Key Contributions &amp; Measurable Outcomes
              </span>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#f2efe8] font-sans leading-relaxed">
                {exp.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="font-mono text-[#c8a15a] font-bold text-xs mt-0.5">
                      [{b.verb}]
                    </span>
                    <span>{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used Strip */}
            <div className="pt-4 border-t border-[#22262e] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono text-[#8b8f97] flex items-center gap-1 mr-2">
                <Wrench className="w-3 h-3 text-[#c8a15a]" />
                <span>Tools used:</span>
              </span>
              {exp.tools.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded bg-[#0a0b0d] border border-[#22262e] text-[11px] font-mono text-[#f2efe8]"
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
