import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Projects & Quantitative Models | Rakshit Jain",
  description:
    "Technical case studies including the 20/50 SMA backtest engine, LawPrix legal-tech matchmaking, and custom Unix shell in C.",
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
};

export default function ProjectsPage() {
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

  const softwareProjectsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        name: "Market Sentiment Analyzer & Backtesting Engine",
        programmingLanguage: "Python",
        codeRepository: "https://github.com/rakshitjainai/market-sentiment-analyzer",
        author: {
          "@type": "Person",
          name: "Rakshit Jain",
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "LawPrix",
        applicationCategory: "LegalTech Application",
        url: "https://lawprix.com/",
        operatingSystem: "Web",
        author: {
          "@type": "Person",
          name: "Rakshit Jain",
        },
      },
      {
        "@type": "SoftwareSourceCode",
        name: "Custom Unix Shell in C",
        programmingLanguage: "C",
        codeRepository: "https://github.com/rakshitjainai/custom-shell-c",
        author: {
          "@type": "Person",
          name: "Rakshit Jain",
        },
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />
      <StructuredData data={softwareProjectsJsonLd} />

      <div className="pt-24 sm:pt-32 pb-20">
        <ProjectsSection />
      </div>
    </>
  );
}
