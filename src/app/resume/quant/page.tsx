import React from "react";
import type { Metadata } from "next";
import { ResumeView } from "@/components/ResumeView";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Quantitative Analysis Resume",
  description:
    "Quantitative research resume of Rakshit Jain: 20/50 SMA crossover strategy backtesting in Python, Sharpe ratio analysis, and maximum drawdown reduction.",
  alternates: {
    canonical: `${siteConfig.url}/resume/quant`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/resume/quant`,
    title: "Quantitative Analysis Resume | Rakshit Jain",
    description:
      "Quantitative research resume of Rakshit Jain: 20/50 SMA crossover strategy backtesting in Python, Sharpe ratio analysis, and maximum drawdown reduction.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantitative Analysis Resume | Rakshit Jain",
    description:
      "Quantitative research resume of Rakshit Jain: 20/50 SMA crossover strategy backtesting in Python, Sharpe ratio analysis, and maximum drawdown reduction.",
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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 lg:pt-32 pb-24">
        <ResumeView track="quant" />
      </div>
    </>
  );
}
