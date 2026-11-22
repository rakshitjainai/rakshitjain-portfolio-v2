import React from "react";
import type { Metadata } from "next";
import { ResumeView } from "@/components/ResumeView";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Financial Markets Resume",
  description:
    "Financial markets resume of Rakshit Jain: Anand Rathi GIFT City bullion desk, IIBX order execution, BDR settlement, and client onboarding compliance.",
  alternates: {
    canonical: `${siteConfig.url}/resume/finance`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/resume/finance`,
    title: "Financial Markets Resume | Rakshit Jain",
    description:
      "Financial markets resume of Rakshit Jain: Anand Rathi GIFT City bullion desk, IIBX order execution, BDR settlement, and client onboarding compliance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Markets Resume | Rakshit Jain",
    description:
      "Financial markets resume of Rakshit Jain: Anand Rathi GIFT City bullion desk, IIBX order execution, BDR settlement, and client onboarding compliance.",
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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 lg:pt-32 pb-24">
        <ResumeView track="finance" />
      </div>
    </>
  );
}
