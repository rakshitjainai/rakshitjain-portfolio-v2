import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Scale,
  FileCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { LegalTechWorkflowDiagram } from "@/components/LegalTechWorkflowDiagram";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Product Thinking & Development",
  description:
    "Deconstructing complex workflows, user research, regulatory compliance constraints, and translating business needs into technical solutions.",
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
      title: "Problem Discovery & Root Cause Analysis",
      description:
        "Focusing on the user's unarticulated friction rather than rushing to premature technical features. Deconstructing multi-stakeholder workflows to identify systemic bottlenecks.",
    },
    {
      title: "User & Workflow Analysis",
      description:
        "Mapping asynchronous handoffs between parties—such as client intake to advocate assignment, or institutional applicant to exchange compliance desk.",
    },
    {
      title: "Requirements & Specification Modeling",
      description:
        "Translating ambiguous business requirements and regulatory circulars into concrete technical specifications, data schemas, and state transition logic.",
    },
    {
      title: "Technical Feasibility & Architecture Trade-offs",
      description:
        "Evaluating engineering costs, latency constraints, database normalization, and third-party API dependencies before committing development bandwidth.",
    },
    {
      title: "Trust & Credential Architecture",
      description:
        "Designing verification layers that protect consumers and institutions without creating overwhelming onboarding drop-off.",
    },
    {
      title: "Cross-Functional Alignment",
      description:
        "Communicating fluently across developers, legal compliance officers, business operations, and end users to maintain project velocity.",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 pb-24">
        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Product Methodology & Case Studies
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sans">
            Product Thinking & Development
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
            My interest in product management comes from working across technical development and
            real-world workflows. I enjoy understanding a problem before thinking about the solution,
            and exploring how technology can make a process more useful, transparent, and accessible.
          </p>
        </section>

        {/* ============================================================ */}
        {/* PERSONAL PERSPECTIVE BANNER                                  */}
        {/* ============================================================ */}
        <section className="p-6 sm:p-8 bg-[#0a101f] border-l-4 border-[#d4af37] border-y border-r border-slate-800 rounded-r-xl">
          <blockquote className="space-y-2">
            <p className="text-base sm:text-lg text-slate-200 font-serif italic leading-relaxed">
              &ldquo;In early-stage engineering, the instinct is often to write code immediately. But
              the most expensive mistake in software is building something efficiently that should
              never have been built at all. Product thinking is the discipline of asking whether the
              underlying workflow has been correctly understood.&rdquo;
            </p>
            <footer className="text-xs font-mono text-[#d4af37] uppercase tracking-wider pt-2">
              — Rakshit Jain · Engineering & Product Perspective
            </footer>
          </blockquote>
        </section>

        {/* ============================================================ */}
        {/* TRANSFERABLE PRODUCT CAPABILITIES                            */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Transferable Product Competencies
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Practical capabilities applied across legal-tech prototyping and regulatory compliance engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#d4af37]">0{i + 1}</span>
                  <h3 className="text-sm font-bold text-white leading-snug">{cap.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* CASE STUDY 1: LAWPRIX (DETAILED)                             */}
        {/* ============================================================ */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
                Product Case Study 01
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                LawPrix: Eliminating Opacity in Legal Services Matchmaking
              </h2>
            </div>
            <a
              href="https://lawprix.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#38bdf8] hover:underline shrink-0"
            >
              <span>lawprix.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Context & Background */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                The Core Insight
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Legal problems are uniquely stressful, yet finding counsel in India is an opaque lottery.
                Most platforms operate as advertising boards where visibility is purchased by highest ad spend.
              </p>
            </div>

            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                The Product Intervention
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Replaced paid sponsorship with a criteria-driven matching model based on practice area,
                urgency tier, and Bar Council verification, ensuring client needs dictate the match.
              </p>
            </div>

            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                Validation & Recognition
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Built and validated during a 2-week intensive product sprint, securing 2nd Runner-Up
                distinction at the national Tutedude Buildathon 2025.
              </p>
            </div>
          </div>

          {/* Workflow Diagram */}
          <LegalTechWorkflowDiagram />

          {/* Product Deep Dive Narrative */}
          <div className="p-6 sm:p-8 bg-[#0a101f] border border-slate-800 rounded-xl space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <h3 className="text-base sm:text-lg font-bold text-white">
              Product Decisions & Implementation Realities
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
                  1. Deconstructing Legal Practice Domains
                </h4>
                <p className="mt-1 text-slate-400">
                  Early user discussions revealed that laypersons cannot describe their issue in legal terms.
                  A landlord-tenant conflict might be framed as criminal harassment or civil breach.
                  We created a structured, accessible questionnaire that translated common situations
                  into 4 core practice classifications: Corporate/Commercial, Criminal Law, Family/Matrimonial,
                  and Property/Real Estate.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
                  2. Designing the Lawyer Credential Verification Pipeline
                </h4>
                <p className="mt-1 text-slate-400">
                  Trust is the primary bottleneck in legal services. We designed an intake verification
                  step requiring advocates to supply their State Bar Council enrollment number, year of
                  call, and active jurisdiction. This eliminated fraudulent claims and gave first-time
                  litigants psychological safety.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
                  3. Case Milestone Tracking
                </h4>
                <p className="mt-1 text-slate-400">
                  Once engaged, the biggest user grievance is radio silence between court dates. We
                  prototyped a shared milestone dashboard allowing clients and lawyers to view filed
                  submissions, upcoming hearing dates, and required documentation in a clear timeline.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-white text-xs uppercase font-mono tracking-wider">
                  4. Navigating Regulatory Boundaries
                </h4>
                <p className="mt-1 text-slate-400">
                  Crucially, Rule 36 of the Bar Council of India prohibits advocates from advertising or
                  soliciting work. We ensured LawPrix was engineered as a neutral information and workflow
                  utility rather than a promotional bidding marketplace, keeping the platform ethically
                  and legally sound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* CASE STUDY 2: REGMATE (FINTECH COMPLIANCE WORKFLOW)          */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
              Product Case Study 02
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              RegMate: Transforming Regulatory Circulars into Structured Logic
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Applying product thinking to International Financial Services Centres Authority (IFSCA) regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-white">The Compliance Complexity Problem</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Entities setting up in GIFT City IFSC navigate hundreds of pages of evolving regulatory
                frameworks covering Fund Management Entities (FMEs), Bullion Exchange members, and Capital
                Market Intermediaries. Aspiring professionals and applicants face high cognitive overload
                trying to determine exact capital thresholds, track record requirements, and governance structures.
              </p>
            </div>

            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-white">The Engineered Solution: &quot;Compliance as Code&quot;</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We decomposed IFSCA statutory notifications into structured JSON data schemas and
                deterministic decision trees. By building an interactive mock assessment and requirements
                lookup portal, users can quickly diagnose compliance readiness, turning intimidating legal
                circulars into clear, actionable checklists.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/research/financial-workflows-and-fintech-products"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
            >
              <span>Read in-depth essay: &ldquo;From Financial Workflows to FinTech Products&rdquo;</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
