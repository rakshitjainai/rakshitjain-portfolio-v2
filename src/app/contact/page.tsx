import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { ContactSection } from "@/components/ContactSection";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rakshit Jain via email, phone, or WhatsApp. Student at PDEU working across financial markets operations and full-stack development.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/contact`,
    title: "Contact | Rakshit Jain",
    description:
      "Get in touch with Rakshit Jain via email, phone, or WhatsApp. Student at PDEU working across financial markets operations and full-stack development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rakshit Jain",
    description:
      "Get in touch with Rakshit Jain via email, phone, or WhatsApp. Student at PDEU working across financial markets operations and full-stack development.",
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
