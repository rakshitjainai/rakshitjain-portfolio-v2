import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";
import { EditorialHero } from "@/components/EditorialHero";
import { EditorialAbout } from "@/components/EditorialAbout";
import { EditorialExperience } from "@/components/EditorialExperience";
import { EditorialProjects } from "@/components/EditorialProjects";
import { EditorialQuantFlow } from "@/components/EditorialQuantFlow";
import { EditorialProduct } from "@/components/EditorialProduct";
import { EditorialResearch } from "@/components/EditorialResearch";
import { EditorialClosing } from "@/components/EditorialClosing";

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
    jobTitle: "B.Tech ICT Student (Class of 2027)",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    knowsAbout: [
      "Financial Markets",
      "Bullion Trading Operations",
      "IIBX (India International Bullion Exchange)",
      "Quantitative Finance",
      "Python Backtesting",
      "Full Stack Development",
      "Product Management",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <StructuredData data={personJsonLd} />
      <StructuredData data={websiteJsonLd} />

      <div className="w-full flex flex-col">
        {/* 00 / Editorial Hero — Midnight Navy */}
        <EditorialHero />

        {/* 01 / Perspective & Foundation — Warm Ivory */}
        <EditorialAbout />

        {/* 02 / Operational Track Record — Deep Charcoal Navy */}
        <EditorialExperience />

        {/* 03 / Engineering & Systems — Warm Ivory */}
        <EditorialProjects />

        {/* 04 / Quantitative Methodology — Midnight Navy */}
        <EditorialQuantFlow />

        {/* 05 / Product Management — Warm Ivory */}
        <EditorialProduct />

        {/* 06 / Editorial Publications — Deep Charcoal Navy */}
        <EditorialResearch />

        {/* 07 / Collaboration & Career Closing — Midnight Navy */}
        <EditorialClosing />
      </div>
    </>
  );
}
