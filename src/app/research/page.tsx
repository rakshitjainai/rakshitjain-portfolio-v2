import React from "react";
import type { Metadata } from "next";
import { articlesData } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";
import { ResearchCard } from "@/components/ResearchCard";
import { StructuredData } from "@/components/StructuredData";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Analysis",
  description:
    "Original research papers on India's Bullion Market (IIBX & GIFT City), 20/50 SMA crossover backtesting, and institutional FinTech product workflows.",
};

export default function ResearchPage() {
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
        name: "Research",
        item: `${siteConfig.url}/research`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 pb-20">
        {/* Header */}
        <section className="max-w-3xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
            Original Research
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Research & Analytical Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Rigorous, evidence-based essays exploring capital market infrastructure, quantitative
            trading backtests, and FinTech workflows. All articles cite official regulatory sources.
          </p>
        </section>

        {/* Source Grounding Banner */}
        <section className="p-4 bg-[#0a101f] border border-slate-800 rounded-xl flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              Primary sources include IFSCA, RBI, IIBX Operating Guidelines, and econometric literature.
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20 shrink-0">
            3 Full-Length Papers
          </span>
        </section>

        {/* Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((article) => (
            <ResearchCard key={article.slug} article={article} />
          ))}
        </section>
      </div>
    </>
  );
}
