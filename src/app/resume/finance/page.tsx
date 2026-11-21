import React from "react";
import type { Metadata } from "next";
import { ResumeView } from "@/components/ResumeView";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Financial Markets Resume | Rakshit Jain",
  description:
    "Resume of Rakshit Jain emphasizing financial market exposure, Anand Rathi IIBX operations, and Python quantitative strategy backtesting.",
  alternates: {
    canonical: `${siteConfig.url}/resume/finance`,
  },
};

export default function FinanceResumePage() {
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
        name: "Resume",
        item: `${siteConfig.url}/resume`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Financial Markets Track",
        item: `${siteConfig.url}/resume/finance`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-24">
        <ResumeView track="finance" />
      </div>
    </>
  );
}
