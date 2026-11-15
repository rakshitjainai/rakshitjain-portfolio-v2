import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ExternalLink,
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm } from "@/components/ContactForm";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact channels, recruiter inquiry form, and professional links for Rakshit Jain.",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12 pb-20">
        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Recruiter & Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Get in Touch
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Open to early-career and internship opportunities across Financial Markets, Quantitative Analysis,
            Software Engineering, and Product Development.
          </p>
        </section>

        {/* ============================================================ */}
        {/* CONTACT GRID                                                 */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-[#0a101f] border border-slate-800 rounded-2xl space-y-6">
              <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                Direct Channels
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="flex items-center gap-2 font-semibold text-white hover:text-[#d4af37] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#d4af37]" />
                    <span className="truncate">{siteConfig.author.email}</span>
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    LinkedIn Network
                  </span>
                  <a
                    href={siteConfig.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between font-semibold text-white hover:text-[#38bdf8] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                      <span>linkedin.com/in/rakshitjainrj</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>

                {/* GitHub */}
                <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    GitHub Codebases
                  </span>
                  <a
                    href={siteConfig.author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between font-semibold text-white hover:text-white transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-slate-300" />
                      <span>github.com/rakshitjainai</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                  </a>
                </div>

                {/* Location */}
                <div className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-xl space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    Current Location
                  </span>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>Gandhinagar, Gujarat, India (PDEU Campus)</span>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-2 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="font-mono">{siteConfig.positioning.statusBadge}</span>
                </div>
              </div>
            </div>

            {/* Resume Quick Access Card */}
            <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                Formal Documentation
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Review tailored resumes customized for Financial Markets or Software Engineering roles.
              </p>
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:underline"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Go to Curated Resumes Page</span>
              </Link>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-[#0a101f] border border-slate-800 rounded-2xl space-y-6">
              <div className="space-y-1 border-b border-slate-800 pb-4">
                <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono">
                  Direct Inquiries & Opportunity Discussion
                </h2>
                <p className="text-xs text-slate-400">
                  Select your area of interest to send a structured inquiry directly to Rakshit Jain.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
