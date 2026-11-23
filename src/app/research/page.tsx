import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, BookOpen } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ArticlesSection } from "@/components/ArticlesSection";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Analytical research papers by Rakshit Jain (PDEU ICT) on India International Bullion Exchange (IIBX) mechanics, 20/50 SMA backtest friction, and financial workflow product design.",
  alternates: {
    canonical: `${siteConfig.url}/research`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/research`,
    title: "Research | Rakshit Jain",
    description:
      "Analytical research papers by Rakshit Jain (PDEU ICT) on India International Bullion Exchange (IIBX) mechanics, 20/50 SMA backtest friction, and financial workflow product design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Rakshit Jain",
    description:
      "Analytical research papers by Rakshit Jain (PDEU ICT) on India International Bullion Exchange (IIBX) mechanics, 20/50 SMA backtest friction, and financial workflow product design.",
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
        {/* Research Archive Header & Context */}
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1d4ed8] text-xs font-mono font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Research &amp; Writing Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#0f172a] tracking-tight">
            Independent Research &amp; Market Analysis
          </h1>
          <p className="text-sm sm:text-base text-[#475569] font-sans max-w-3xl leading-relaxed">
            These papers document empirical research, institutional market structure analysis, and software engineering workflows written by Rakshit Jain during his studies at Pandit Deendayal Energy University (PDEU) and operational training at GIFT City IFSC. Each study is grounded in primary regulatory circulars, market microstructure data, or reproducible backtesting scripts.
          </p>
        </section>

        {/* Source Grounding Banner */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="p-4 bg-[#f8fafc] border border-[#e3e8ef] rounded-xl flex items-center justify-between gap-4 text-xs font-mono shadow-xs">
            <div className="flex items-center gap-2 text-[#475569]">
              <ShieldCheck className="w-4 h-4 text-[#059669] shrink-0" />
              <span>
                All papers cite primary regulatory authorities (IFSCA, RBI, DGFT, World Gold Council) and empirical backtest datasets.
              </span>
            </div>
            <span className="text-[10px] text-[#047857] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 shrink-0 font-semibold">
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
