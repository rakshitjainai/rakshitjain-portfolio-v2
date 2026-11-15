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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 space-y-12 pb-20">
        {/* Header */}
        <section className="max-w-3xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Technical Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Projects & Quantitative Models
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Verified technical implementations, quantitative backtesting engines, and workflow systems.
          </p>
        </section>

        {/* Featured Quantitative Engine & Interactive Chart */}
        <section className="space-y-4">
          <div className="border-b border-slate-800 pb-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">
              Quantitative Backtest: 20/50 SMA Crossover
            </h2>
            <Link
              href="/research/sma-strategy-backtesting"
              className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1"
            >
              <span>Read Strategy Paper</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <SmaBacktestChart />
        </section>

        {/* Filterable Projects Showcase */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Filter className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Filter:</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs font-mono rounded-md transition-colors ${
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} featured={idx === 0} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
