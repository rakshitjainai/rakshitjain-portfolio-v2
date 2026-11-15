import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Building, ShieldCheck, ArrowRight, Award } from "lucide-react";
import { professionalExperience, leadershipExperience } from "@/data/experience";
import { siteConfig } from "@/data/siteConfig";
import { ExperienceCard } from "@/components/ExperienceCard";
import { BullionSettlementDiagram } from "@/components/BullionSettlementDiagram";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Institutional internships and technical experience across Anand Rathi at GIFT City, full-stack development at Certopus Inc., and industrial systems at the Department of Atomic Energy.",
};

export default function ExperiencePage() {
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
        name: "Experience",
        item: `${siteConfig.url}/experience`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 pb-24">
        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Work History & Training
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sans">
            Professional Experience & Operational Exposure
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
            A chronological timeline of professional internships, technical deliverables, and
            institutional leadership roles. All employment and internship dates strictly adhere to
            verified LinkedIn records.
          </p>
        </section>

        {/* ============================================================ */}
        {/* PROFESSIONAL INTERNSHIPS                                     */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Professional Internships & Industrial Training
            </h2>
            <span className="text-xs font-mono text-slate-400">
              Primary Professional Record
            </span>
          </div>

          <div className="space-y-8">
            {professionalExperience.map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} featured={idx === 0} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EMBEDDED MARKET INFRASTRUCTURE DIAGRAM                       */}
        {/* ============================================================ */}
        <section className="space-y-4">
          <BullionSettlementDiagram />
        </section>

        {/* ============================================================ */}
        {/* STUDENT LEADERSHIP & CAMPUS INITIATIVES                      */}
        {/* ============================================================ */}
        <section className="space-y-6 pt-6">
          <div className="space-y-1 border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Institutional Leadership & Campus Responsibility
            </h2>
            <p className="text-xs text-slate-400">
              Co-curricular leadership positions held across university student chapters and academic clubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadershipExperience.map((lead) => (
              <div
                key={lead.id}
                className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-slate-800 text-[#d4af37] border border-slate-700">
                      {lead.type}
                    </span>
                    <span className="font-mono text-xs text-slate-400">{lead.period}</span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{lead.role}</h3>
                    <div className="text-xs font-medium text-[#38bdf8] mt-0.5">
                      {lead.company}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {lead.summary}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-400 pt-1">
                    {lead.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {lead.skills.map((s, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Bar */}
        <section className="p-6 sm:p-8 bg-slate-900/60 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">
              Need a Formal PDF Resume for Your Recruitment Pipeline?
            </h3>
            <p className="text-xs text-slate-400">
              Download curated, print-ready CVs customized for Financial Markets & Quantitative Analysis or Full Stack Engineering.
            </p>
          </div>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Access Resumes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
