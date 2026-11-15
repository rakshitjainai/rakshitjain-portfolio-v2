import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { faqItems } from "@/data/faq";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Recruiter & AI FAQ | Rakshit Jain",
  description:
    "Direct factual answers to core questions about Rakshit Jain's background, roles sought, availability, GIFT City experience, and key projects.",
  alternates: {
    canonical: `${siteConfig.url}/faq`,
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: "FAQ",
        item: `${siteConfig.url}/faq`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24 space-y-12">
        {/* Header */}
        <section className="space-y-4 border-b border-[#22262e] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111317] border border-[#22262e] text-xs font-mono text-[#c8a15a]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Factual Q&amp;A for Recruiters &amp; AI Engines</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#f2efe8] tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-[#8b8f97] leading-relaxed max-w-2xl">
            Direct, factual answers regarding my candidate profile, targeted internships, technical
            background, and verified project outcomes.
          </p>
        </section>

        {/* Q&A List */}
        <div className="space-y-6">
          {faqItems.map((item, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-[#111317] border border-[#22262e] space-y-3"
            >
              <h2 className="text-lg sm:text-xl font-bold text-[#f2efe8] font-sans">
                {item.question}
              </h2>
              <p className="text-sm text-[#8b8f97] leading-relaxed font-sans">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        {/* Additional Questions Callout */}
        <div className="p-7 rounded-xl bg-gradient-to-r from-[#111317] to-[#0a0b0d] border border-[#22262e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#f2efe8]">
              Have a specific question for your hiring committee?
            </h3>
            <p className="text-xs text-[#8b8f97]">
              I respond to all recruiter inquiries within 24 hours.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#111317] text-[#f2efe8] text-xs font-mono transition-colors"
            >
              <span>View Resume</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
