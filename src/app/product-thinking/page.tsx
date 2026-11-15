import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { LegalTechWorkflowDiagram } from "@/components/LegalTechWorkflowDiagram";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Product Thinking & Development",
  description:
    "Problem identification, user research, workflow analysis, and case study on LawPrix legal-tech matchmaking.",
};

export default function ProductThinkingPage() {
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
        name: "Product Thinking",
        item: `${siteConfig.url}/product-thinking`,
      },
    ],
  };

  const capabilities = [
    {
      title: "Problem Identification",
      bullet: "Uncovering user pain points across legal services and compliance processes rather than jumping to features.",
    },
    {
      title: "Product Research",
      bullet: "Interviewing users across 4 legal practice areas to understand discovery barriers and trust deficits.",
    },
    {
      title: "Workflow Analysis",
      bullet: "Mapping multi-stakeholder handoffs between clients, verified lawyers, and institutional compliance desks.",
    },
    {
      title: "Requirements Thinking",
      bullet: "Translating regulatory constraints (Bar Council of India rules) and user needs into engineering specs.",
    },
    {
      title: "Technical Feasibility",
      bullet: "Balancing implementation complexity with maintainability using React.js and Python.",
    },
    {
      title: "Product Development",
      bullet: "Rapid MVP execution: secured 2nd Runner-Up at the national Tutedude Buildathon 2025.",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 pb-20">
        {/* Header & Product Perspective */}
        <section className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Product Perspective
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Product Thinking & Development
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            &ldquo;My interest in product management comes from working across technical development
            and real-world workflows. I enjoy understanding a problem before thinking about the solution,
            and exploring how technology can make a process more useful and accessible.&rdquo;
          </p>
        </section>

        {/* Transferable Capabilities (Bullet-based) */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-lg font-bold text-white">Transferable Product Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((c, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#d4af37]">0{i + 1}</span>
                  <h3 className="text-sm font-bold text-white">{c.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{c.bullet}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study: LawPrix */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#38bdf8] block font-semibold">
                Supporting Case Study
              </span>
              <h2 className="text-xl font-bold text-white mt-0.5">
                LawPrix — Transparent Legal Matchmaking
              </h2>
            </div>
            <a
              href="https://lawprix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-mono text-[#38bdf8] hover:underline"
            >
              <span>lawprix.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-2">
              <span className="font-mono text-[10px] uppercase text-rose-400 block font-semibold">
                Problem in Legal Services
              </span>
              <p className="text-slate-300 leading-relaxed">
                Most directories rank lawyers based on who pays the highest sponsorship fees, rather
                than actual case expertise. First-time users face extreme information asymmetry and opaque fees.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-2">
              <span className="font-mono text-[10px] uppercase text-sky-400 block font-semibold">
                Product Architecture
              </span>
              <p className="text-slate-300 leading-relaxed">
                Replaced paid bidding with a criteria-driven matching system: case categorization across
                4 domains, Bar Council lawyer verification, and milestone progress tracking.
              </p>
            </div>
          </div>

          {/* Workflow Diagram */}
          <LegalTechWorkflowDiagram />

          {/* Summary Bullets */}
          <div className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white">Product Decisions & Learning</h3>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li><strong>Case Categorization:</strong> Designed structured intake across corporate, criminal, family, and real estate law.</li>
              <li><strong>Lawyer Verification:</strong> Checked Bar Council enrollment numbers to eliminate unverified representations.</li>
              <li><strong>Milestone Tracking:</strong> Built transparent status tracking for filings, hearings, and documents.</li>
              <li><strong>Technical Implementation:</strong> Built responsive client interfaces in React.js with Python backend endpoints.</li>
              <li><strong>Core Learning:</strong> Good product design in regulated spaces requires building trust directly into the workflow.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
