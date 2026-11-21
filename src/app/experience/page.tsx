import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ExperienceSection } from "@/components/ExperienceSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { BullionSettlementDiagram } from "@/components/BullionSettlementDiagram";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internship experience across Anand Rathi at GIFT City IIBX bullion desk, full-stack engineering at Certopus, and industrial systems at Atomic Energy.",
  alternates: {
    canonical: `${siteConfig.url}/experience`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/experience`,
    title: "Experience | Rakshit Jain",
    description:
      "Internship experience across Anand Rathi at GIFT City IIBX bullion desk, full-stack engineering at Certopus, and industrial systems at Atomic Energy.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Rakshit Jain",
    description:
      "Internship experience across Anand Rathi at GIFT City IIBX bullion desk, full-stack engineering at Certopus, and industrial systems at Atomic Energy.",
  },
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

      <div className="pt-24 sm:pt-32 pb-20 space-y-12">
        {/* Work Experience Section */}
        <ExperienceSection />

        {/* Operational Workflow Visual: IIBX Bullion Settlement */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="border-b border-[#e3e8ef] pb-3 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase text-[#2563eb] block font-semibold">
                Operational Workflow
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] font-sans mt-0.5">
                IIBX Bullion Depository Receipt (BDR) Settlement Lifecycle
              </h2>
            </div>
            <Link
              href="/research/iibx-and-indias-bullion-market"
              className="text-xs font-mono text-[#2563eb] hover:underline flex items-center gap-1 shrink-0 font-medium"
            >
              <span>Read article</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <BullionSettlementDiagram />
        </section>

        {/* Leadership Section */}
        <LeadershipSection />

        {/* Resume Download Card */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 bg-[#f8fafc] border border-[#e3e8ef] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-[#0f172a]">
                Resume Download
              </h3>
              <p className="text-xs text-[#475569]">
                Download the one-page resume summary ({siteConfig.resume.filename}).
              </p>
            </div>
            <a
              href={siteConfig.resume.primaryPdf}
              download={siteConfig.resume.filename}
              className="btn-primary-gradient inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white font-bold text-xs uppercase tracking-wider shrink-0 font-mono cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
