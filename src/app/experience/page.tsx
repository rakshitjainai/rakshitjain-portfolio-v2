import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 pb-20">
        {/* Header */}
        <section className="max-w-3xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Work Experience
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Professional Experience Timeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Verified internships and technical roles. Dates follow official LinkedIn records.
          </p>
        </section>

        {/* Professional Internships Timeline */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Professional Internships</h2>
            <span className="font-mono text-xs text-slate-500">2025–2026</span>
          </div>

          <div className="max-w-4xl pt-2">
            {professionalExperience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* Embedded Bullion Lifecycle Diagram */}
        <section className="space-y-3">
          <BullionSettlementDiagram />
        </section>

        {/* Leadership & Campus Roles */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-lg font-bold text-white">Campus Leadership & Responsibility</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadershipExperience.map((lead) => (
              <div
                key={lead.id}
                className="p-5 bg-[#0a101f] border border-slate-800 rounded-xl space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-white">{lead.role}</h3>
                  <span className="font-mono text-[10px] text-slate-400 shrink-0">
                    {lead.period}
                  </span>
                </div>
                <div className="text-xs text-[#38bdf8] font-medium">{lead.company}</div>

                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside pt-1">
                  {lead.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl flex items-center justify-between gap-4">
          <span className="text-xs text-slate-300">
            Looking for structured PDF copies for your recruitment records?
          </span>
          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c5a880] transition-colors shrink-0"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Curated Resumes</span>
          </Link>
        </section>
      </div>
    </>
  );
}
