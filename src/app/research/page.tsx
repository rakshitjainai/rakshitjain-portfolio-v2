import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { articlesData } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";
import { ResearchCard } from "@/components/ResearchCard";
import { StructuredData } from "@/components/StructuredData";
import { BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Analysis",
  description:
    "Original research papers and technical essays on India's Bullion Market (IIBX & GIFT City), 20/50 SMA crossover strategy backtesting, and institutional FinTech product workflows.",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 pb-24">
        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
            Original Technical & Domain Research
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-sans">
            Research & Analytical Insights
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans pt-2">
            Rigorous, evidence-based essays exploring capital market infrastructure, quantitative
            trading backtest mechanics, and software engineering in regulated financial environments.
            All articles cite primary regulatory publications and academic texts.
          </p>
        </section>

        {/* ============================================================ */}
        {/* EDITORIAL STANDARDS CALLOUT                                  */}
        {/* ============================================================ */}
        <section className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[#d4af37] shrink-0 mt-0.5 sm:mt-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-0.5">
              <h3 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                Research Methodology & Source Grounding
              </h3>
              <p className="text-xs text-slate-400">
                Primary sources include statutory notifications from IFSCA, Reserve Bank of India (RBI),
                IIBX Operating Guidelines, and seminal financial econometrics literature.
              </p>
            </div>
          </div>
          <span className="font-mono text-xs text-[#d4af37] bg-[#d4af37]/10 px-3 py-1 rounded border border-[#d4af37]/20 shrink-0 self-start sm:self-auto">
            3 Peer-Referenced Essays
          </span>
        </section>

        {/* ============================================================ */}
        {/* ARTICLES LIST                                                */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <ResearchCard key={article.slug} article={article} />
          ))}
        </section>

        {/* Bottom Context Banner */}
        <section className="p-8 bg-gradient-to-br from-[#0c1322] to-[#070b14] border border-slate-800 rounded-xl space-y-4">
          <h3 className="text-base font-bold text-white">
            Observations from Operational Exposure
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
            Where indicated, articles incorporate practical reflections from my operational internship
            at Anand Rathi International Ventures on the Bullion Desk at GIFT City IFSC, clearly
            distinguishing between personal operational observations and public regulatory frameworks.
          </p>
        </section>
      </div>
    </>
  );
}
