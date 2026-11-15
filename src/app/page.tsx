import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";
import { RecruiterHero } from "@/components/RecruiterHero";
import { RoleCards } from "@/components/RoleCards";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { LeadershipSection } from "@/components/LeadershipSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ArticlesSection } from "@/components/ArticlesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Rakshit Jain | Finance, Quant and Software Intern Candidate | PDEU",
  description:
    "B.Tech ICT student at PDEU seeking Summer 2027 internships across Markets, Quant and Product. GIFT City bullion desk & full-stack experience.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rakshit Jain",
    jobTitle: "Student, B.Tech ICT",
    url: siteConfig.url,
    email: `mailto:${siteConfig.author.email}`,
    sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    knowsAbout: [
      "quantitative analysis",
      "backtesting",
      "Python",
      "financial markets",
      "bullion trading",
      "IIBX",
      "GIFT City",
      "product management",
      "full-stack development",
      "risk metrics",
      "Sharpe ratio",
      "maximum drawdown",
      "React.js",
      "Node.js",
      "C systems programming",
    ],
  };

  const profilePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personJsonLd,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rakshit Jain Portfolio",
    url: siteConfig.url,
    description:
      "Recruiter-aligned candidate portfolio of Rakshit Jain, B.Tech ICT student at PDEU seeking Summer 2027 internships in Markets, Quant and Product.",
  };

  const organizationsJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Anand Rathi International Ventures (IFSC) Pvt. Ltd.",
        url: "https://rathi.com",
        location: "GIFT City, Gujarat, India",
      },
      {
        "@type": "Organization",
        name: "Certopus Inc.",
        url: "https://certopus.com",
      },
      {
        "@type": "Organization",
        name: "Department of Atomic Energy, Government of India",
        location: "Kota, Rajasthan, India",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Pandit Deendayal Energy University (PDEU)",
        location: "Gandhinagar, Gujarat, India",
      },
    ],
  };

  return (
    <>
      <StructuredData data={personJsonLd} />
      <StructuredData data={profilePageJsonLd} />
      <StructuredData data={websiteJsonLd} />
      <StructuredData data={organizationsJsonLd} />

      <div className="w-full flex flex-col bg-[#0a0b0d]">
        {/* 1. Recruiter-First Hero (Above the fold 30-sec test) */}
        <RecruiterHero />

        {/* 2. What I can do for your team (3 role cards) */}
        <RoleCards />

        {/* 3. Experience (3 roles, 3 bullets each) */}
        <ExperienceSection />

        {/* 4. Selected Projects (3 case studies + chart) */}
        <ProjectsSection />

        {/* 5. Leadership (4 role cards with scope) */}
        <LeadershipSection />

        {/* 6. Skills Matrix (Plain scannable table grouped by 3 categories) */}
        <SkillsSection />

        {/* 7. Education & Recognition (PDEU + honors) */}
        <EducationSection />

        {/* 8. Writing & Research (3 articles with read times) */}
        <ArticlesSection />

        {/* 9. Short About (Max 90 words + photo placeholder) */}
        <AboutSection />

        {/* 10. Contact Section (Form, copy email, Cal placeholder, 24h reply) */}
        <ContactSection />
      </div>
    </>
  );
}
