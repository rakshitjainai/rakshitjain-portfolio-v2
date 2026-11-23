import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";
import { HeroSection } from "@/components/HeroSection";
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
  title: "Rakshit Jain | B.Tech ICT, PDEU",
  description:
    "Rakshit Jain: B.Tech ICT student at PDEU working across financial markets operations, quantitative research, and full-stack software development.",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Rakshit Jain | B.Tech ICT, PDEU",
    description:
      "Rakshit Jain: B.Tech ICT student at PDEU working across financial markets operations, quantitative research, and full-stack software development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakshit Jain | B.Tech ICT, PDEU",
    description:
      "Rakshit Jain: B.Tech ICT student at PDEU working across financial markets operations, quantitative research, and full-stack software development.",
  },
};

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: "Rakshit Jain",
    alternateName: ["rakshitjainrj", "rakshitjainai"],
    jobTitle: "Student, B.Tech ICT",
    url: siteConfig.url,
    email: `mailto:${siteConfig.author.email}`,
    telephone: siteConfig.author.phone,
    description: siteConfig.description,
    sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    homeLocation: {
      "@type": "Place",
      name: "Gandhinagar, Gujarat, India",
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
    "@id": `${siteConfig.url}/#profilepage`,
    mainEntity: {
      "@id": `${siteConfig.url}/#person`,
    },
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
    "@id": `${siteConfig.url}/#website`,
    name: "Rakshit Jain",
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
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

      <div className="w-full flex flex-col bg-white min-w-0 max-w-full overflow-x-clip">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Areas of Experience */}
        <RoleCards />

        {/* 3. Experience */}
        <ExperienceSection />

        {/* 4. Selected Projects */}
        <ProjectsSection />

        {/* 5. Leadership */}
        <LeadershipSection />

        {/* 6. Skills */}
        <SkillsSection />

        {/* 7. Education */}
        <EducationSection />

        {/* 8. Writing */}
        <ArticlesSection />

        {/* 9. About */}
        <AboutSection />

        {/* 10. Contact */}
        <ContactSection />
      </div>
    </>
  );
}
