import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Compass,
  Code2,
  TrendingUp,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { skillCategories } from "@/data/skills";
import { educationData } from "@/data/education";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, educational journey at PDEU, core principles, and the intersection of finance, technology, quantitative analysis, and product thinking.",
};

export default function AboutPage() {
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
        name: "About",
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 pb-24">
        {/* ============================================================ */}
        {/* HEADER & POSITIONING                                         */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Professional Biography
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sans">
            Bridging Financial Markets, Systems Engineering & Product Thinking
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
            I am pursuing a B.Tech in Information and Communications Technology at Pandit
            Deendayal Energy University (2023–2027). My professional interests lie at the
            intersection of financial markets, quantitative analysis, technology, and product
            development.
          </p>
        </section>

        {/* ============================================================ */}
        {/* AUTHENTIC EDITORIAL NARRATIVE                                */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-sans">
              The Journey Across Technology and Capital Markets
            </h2>

            <p>
              My academic foundation in Information and Communications Technology trained me to
              think in terms of computational structures, data protocols, and systems engineering.
              However, I quickly recognized that pure software gains its greatest value when applied
              to complex, high-consequence domains—and nowhere is this more evident than in
              financial market infrastructure.
            </p>

            <p>
              My internship experience at Anand Rathi International Ventures (IFSC) Pvt. Ltd. at
              GIFT City provided direct exposure to how a modern international exchange operates in
              practice. Working alongside the Bullion Desk on the India International Bullion
              Exchange (IIBX) ecosystem gave me firsthand insight into trading terminals, margin
              and risk monitoring, and the dematerialization lifecycle turning physical gold into
              digital Bullion Depository Receipts (BDRs). Equally important was the operational
              rigor of institutional compliance: verifying KYC, GST, and IEC documentation for
              Qualified Jewellers taught me that in financial systems, precision is not a luxury—it
              is a statutory prerequisite.
            </p>

            <p>
              Alongside financial operations, I have consistently built hands-on software. During a
              remote full-stack development internship at Certopus Inc., I contributed to
              production web applications, developing front-end interfaces, RESTful API endpoints,
              and debugging defects in a collaborative Git-based workflow. Earlier vocational
              training at the Heavy Water Plant (Department of Atomic Energy) exposed me to industrial
              instrumentation, process control valves, and internal portal development.
            </p>

            <p>
              My quantitative projects—such as engineering an empirical 20/50 SMA crossover
              backtester in Python—stem from a desire to ground market intuition in mathematical
              rigor. Testing strategies against live historical price series taught me to prioritize
              capital preservation, measure drawdowns, and respect the harsh realities of
              transaction friction, slippage, and regime changes.
            </p>

            <p>
              Today, I am actively seeking early-career opportunities and internships where I can
              apply this unique combination of financial market awareness, programmatic modeling,
              and structured product thinking.
            </p>
          </div>

          {/* Quick Profile Summary Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-4">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#d4af37] block">
                Profile at a Glance
              </span>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-mono block">Status:</span>
                  <span className="text-white font-medium">
                    B.Tech ICT Student (Class of 2027)
                  </span>
                </div>

                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-mono block">Institution:</span>
                  <span className="text-white font-medium">
                    Pandit Deendayal Energy University (PDEU)
                  </span>
                </div>

                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-mono block">Location:</span>
                  <span className="text-white font-medium">Gandhinagar, Gujarat, India</span>
                </div>

                <div className="border-b border-slate-800/80 pb-2">
                  <span className="text-slate-500 font-mono block">Key Internships:</span>
                  <span className="text-white font-medium">
                    Anand Rathi (GIFT City IFSC) · Certopus Inc.
                  </span>
                </div>

                <div>
                  <span className="text-slate-500 font-mono block">Core Languages:</span>
                  <span className="text-white font-mono">Python, JavaScript, Java, C, SQL</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/resume"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c5a880] transition-colors"
                >
                  <span>View Curated Resumes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Guiding Principles */}
            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#38bdf8] block">
                Professional Principles
              </span>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] mt-0.5 shrink-0" />
                  <span>
                    <strong>Evidence Over Assertion:</strong> Back claims with verifiable code,
                    empirical data, and authentic operational experience.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] mt-0.5 shrink-0" />
                  <span>
                    <strong>Respect Regulatory Guardrails:</strong> Recognize that in capital
                    markets, compliance and risk management are foundational architecture.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8] mt-0.5 shrink-0" />
                  <span>
                    <strong>Understand First, Build Second:</strong> Investigate user and
                    operational bottlenecks thoroughly before committing to code.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SKILLS ARCHITECTURE (NO PERCENTAGE BARS)                      */}
        {/* ============================================================ */}
        <section className="space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
              Technical & Domain Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Skills Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              Categorized competencies supported by academic coursework, production internship
              deliverables, and verifiable GitHub projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl space-y-4"
              >
                <div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{cat.description}</p>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-2.5 bg-slate-900/60 border border-slate-800/70 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                    >
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.context}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* ACADEMIC FOUNDATION & PERSONAL INTERESTS                     */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 sm:p-8 bg-[#0a101f] border border-slate-800 rounded-xl space-y-4">
            <div className="flex items-center gap-3 text-white">
              <GraduationCap className="w-5 h-5 text-[#d4af37]" />
              <h3 className="text-lg font-bold">Academic Education & Institution</h3>
            </div>
            <div className="text-xs sm:text-sm text-slate-300 space-y-1">
              <div className="font-bold text-white text-base">
                Pandit Deendayal Energy University (PDEU)
              </div>
              <div>Bachelor of Technology (B.Tech) – Information and Communications Technology</div>
              <div className="font-mono text-xs text-slate-500">
                July 2023 – June 2027 · Gandhinagar, Gujarat, India
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Representative Coursework
              </span>
              <div className="flex flex-wrap gap-1.5">
                {educationData.coreCoursework.map((c, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-[#0a101f] border border-slate-800 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-white">Personal Interests</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Beyond engineering and quantitative projects, I stay actively engaged with:
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Financial Markets & Macroeconomics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Geopolitics & Energy Economics</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Emerging AI & Systems Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Table Tennis & Badminton</span>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800/80">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
              >
                <span>Get in touch for conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
