"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";
import { ProjectCard } from "@/components/ProjectCard";
import { SmaBacktestChart } from "@/components/SmaBacktestChart";
import { StructuredData } from "@/components/StructuredData";
import { Filter, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Quantitative Analysis",
    "Product Development",
    "Systems Engineering",
    "FinTech & Compliance",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

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
        name: "Projects",
        item: `${siteConfig.url}/projects`,
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
            Technical Portfolio & Codebases
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sans">
            Projects & Quantitative Models
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
            A curated showcase of engineering builds, quantitative backtesting engines, and workflow
            applications. Every project is anchored in actual problem solving and verifiable
            code repositories.
          </p>
        </section>

        {/* ============================================================ */}
        {/* FEATURED QUANTITATIVE BACKTEST SECTION                       */}
        {/* ============================================================ */}
        <section className="space-y-6">
          <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
                Featured Quantitative Analysis Engine
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Market Sentiment Analyzer & SMA Crossover Engine
              </h2>
            </div>
            <Link
              href="/research/sma-strategy-backtesting"
              className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Read Strategy Research Paper</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <SmaBacktestChart />

          <div className="p-4 bg-slate-900/40 border border-slate-800 rounded-lg text-xs text-slate-400">
            <strong className="text-slate-300">Disclaimer & Methodology Note:</strong> This is an
            independent academic and analytical project exploring quantitative time-series modeling.
            Backtested metrics reflect historical daily data from the National Stock Exchange (NSE)
            and do not constitute an investment recommendation or financial solicitation.
          </div>
        </section>

        {/* ============================================================ */}
        {/* FILTERABLE PROJECTS DIRECTORY                                */}
        {/* ============================================================ */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Filter by Technical Domain:</span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono rounded-md transition-colors ${
                    selectedCategory === cat
                      ? "bg-[#d4af37] text-slate-950 font-bold"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} featured={idx === 0} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
