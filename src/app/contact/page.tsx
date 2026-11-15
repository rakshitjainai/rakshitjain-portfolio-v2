import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactSection } from "@/components/ContactSection";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact & Recruiter Inquiries | Rakshit Jain",
  description:
    "Direct contact channel for recruiters and hiring managers. Email rakshitindia2019@gmail.com with guaranteed 24-hour response time.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="pt-24 sm:pt-32 pb-20">
        <ContactSection />
      </div>
    </>
  );
}
