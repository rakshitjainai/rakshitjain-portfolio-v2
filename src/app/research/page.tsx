import React from "react";
import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ArticlesSection } from "@/components/ArticlesSection";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Analytical research papers on India International Bullion Exchange (IIBX) mechanics, 20/50 SMA backtest friction, and financial workflow product design.",
  alternates: {
    canonical: `${siteConfig.url}/research`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/research`,
    title: "Research | Rakshit Jain",
    description:
      "Analytical research papers on India International Bullion Exchange (IIBX) mechanics, 20/50 SMA backtest friction, and financial workflow product design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research | Rakshit Jain",
    description:
      "Analytical research papers on India International Bullion Exchange (IIBX) mechanics, 20/50 SMA backtest friction, and financial workflow product design.",
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
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="p-4 bg-[#f8fafc] border border-[#e3e8ef] rounded-xl flex items-center justify-between gap-4 text-xs font-mono shadow-sm">
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
