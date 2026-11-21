import React from "react";
import type { Metadata } from "next";
import { ResumeView } from "@/components/ResumeView";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Quantitative Research Resume | Rakshit Jain",
  description:
    "Curriculum Vitae of Rakshit Jain emphasizing quantitative research, Python strategy backtesting, risk metrics evaluation, and data pipelines.",
  alternates: {
    canonical: `${siteConfig.url}/resume/quant`,
  },
};

export default function QuantResumePage() {
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
        name: "Quantitative Analysis Track",
        item: `${siteConfig.url}/resume/quant`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-24">
        <ResumeView track="quant" />
      </div>
    </>
  );
}
