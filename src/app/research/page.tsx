import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ArticlesSection } from "@/components/ArticlesSection";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Research & Analytical Papers | Rakshit Jain",
  description:
    "Original research papers examining India's bullion market architecture (IIBX), quantitative SMA backtests, and financial workflow engineering.",
  alternates: {
    canonical: `${siteConfig.url}/research`,
  },
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

      <div className="pt-24 sm:pt-32 pb-20 space-y-8">
        {/* Source Grounding Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 bg-[#111317] border border-[#22262e] rounded-xl flex items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#8b8f97]">
              <ShieldCheck className="w-4 h-4 text-[#c8a15a] shrink-0" />
              <span>
                All papers cite primary regulatory authorities (IFSCA, RBI, DGFT, World Gold Council) and empirical backtest datasets.
              </span>
            </div>
            <span className="text-[10px] text-[#c8a15a] bg-[#c8a15a]/10 px-2 py-0.5 rounded border border-[#c8a15a]/20 shrink-0">
              Citations Included
            </span>
          </div>
        </div>

        {/* Articles List */}
        <ArticlesSection />
      </div>
    </>
  );
}
