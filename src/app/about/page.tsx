import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Activity,
  Code2,
  Compass,
  ArrowRight,
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

  const focusAreas = [
    {
      title: "Financial Market Infrastructure",
      desc: "Bullion trading operations, IIBX exchange mechanics, BDR dematerialization, and institutional onboarding.",
      icon: TrendingUp,
      color: "#d4af37",
    },
    {
      title: "Quantitative Trading Strategies",
      desc: "Empirical backtesting with Python, dual moving average models, risk metrics (CAGR, Sharpe, Drawdown), and market frictions.",
      icon: Activity,
      color: "#38bdf8",
    },
    {
      title: "Full-Stack Software Engineering",
      desc: "Developing web applications, REST APIs, database integrations, and systems programming in C and Python.",
      icon: Code2,
      color: "#10b981",
    },
    {
      title: "Product Thinking & Workflows",
      desc: "Workflow analysis, user research, and credential verification models in regulated environments.",
      icon: Compass,
      color: "#e2c99a",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 space-y-12 pb-20">
        {/* ============================================================ */}
        {/* CONCISE PROFESSIONAL INTRODUCTION                            */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Professional Overview
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Finance, Technology & Product
          </h1>
          {/* Paragraph kept strictly to 2-3 lines */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            I am a B.Tech ICT student at Pandit Deendayal Energy University (2023–2027).
            My work combines operational exposure to bullion trading at GIFT City with hands-on
            software development and Python-based quantitative backtesting.
          </p>
        </section>

        {/* ============================================================ */}
        {/* FOUR KEY AREAS OF INTEREST                                   */}
        {/* ============================================================ */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-lg font-bold text-white">Core Focus Areas</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 hover:border-slate-700 transition-all space-y-2.5"
                >
                  <div
                    className="p-2 rounded-lg bg-slate-900 border border-slate-800 w-fit"
                    style={{ color: area.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{area.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SHORT SUMMARY OF RELEVANT EXPERIENCE (BULLET-BASED)          */}
        {/* ============================================================ */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-lg font-bold text-white">Relevant Experience Summary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-2">
              <span className="font-mono text-[10px] text-[#d4af37] uppercase">GIFT City IFSC</span>
              <h3 className="text-sm font-bold text-white">Anand Rathi International Ventures</h3>
              <p className="text-xs text-slate-400">Financial Markets / Operations Intern (May 2026 – Jul 2026)</p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside pt-1">
                <li>IIBX bullion trading operations</li>
                <li>Live terminal order entry & risk monitoring</li>
                <li>Institutional KYC/GST/IEC compliance</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-2">
              <span className="font-mono text-[10px] text-[#38bdf8] uppercase">Full Stack</span>
              <h3 className="text-sm font-bold text-white">Certopus Inc.</h3>
              <p className="text-xs text-slate-400">Full Stack Development Intern (May 2026 – Jul 2026)</p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside pt-1">
                <li>Production web features with React & Node</li>
                <li>REST API development & DB integration</li>
                <li>Git branch workflows & team sync</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#0a101f] border border-slate-800 space-y-2">
              <span className="font-mono text-[10px] text-emerald-400 uppercase">Industrial Systems</span>
              <h3 className="text-sm font-bold text-white">Department of Atomic Energy</h3>
              <p className="text-xs text-slate-400">Summer Trainee (July 2025)</p>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside pt-1">
                <li>PHP-based internal training application</li>
                <li>Server & firewall configuration</li>
                <li>Industrial I&C instrumentation exposure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SKILLS ARCHITECTURE (CLEAN 4 GROUPS)                         */}
        {/* ============================================================ */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2">
            <h2 className="text-lg font-bold text-white">Technical & Domain Skills</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3"
              >
                <div>
                  <h3 className="text-sm font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1 border-t border-slate-800/80">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EDUCATION (COMPACT)                                          */}
        {/* ============================================================ */}
        <section className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[#d4af37]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                {educationData.institution}
              </h3>
              <p className="text-xs text-slate-300">
                {educationData.degree} — {educationData.major}
              </p>
              <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                {educationData.period} · {educationData.location}
              </p>
            </div>
          </div>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c5a880] transition-colors shrink-0"
          >
            <span>View Resumes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
