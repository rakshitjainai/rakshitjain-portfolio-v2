import React from "react";
import type { Metadata } from "next";
import { ResumeView } from "@/components/ResumeView";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Software Engineering Resume",
  description:
    "Software engineering resume of Rakshit Jain: full-stack web applications with React.js and Node.js, REST APIs, and POSIX systems programming in C.",
  alternates: {
    canonical: `${siteConfig.url}/resume/tech`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/resume/tech`,
    title: "Software Engineering Resume | Rakshit Jain",
    description:
      "Software engineering resume of Rakshit Jain: full-stack web applications with React.js and Node.js, REST APIs, and POSIX systems programming in C.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineering Resume | Rakshit Jain",
    description:
      "Software engineering resume of Rakshit Jain: full-stack web applications with React.js and Node.js, REST APIs, and POSIX systems programming in C.",
  },
};

export default function TechResumePage() {
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
        name: "Software Engineering Track",
        item: `${siteConfig.url}/resume/tech`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pb-24">
        <ResumeView track="tech" />
      </div>
    </>
  );
}
