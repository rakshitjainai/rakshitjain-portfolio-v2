import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowRight, TrendingUp, Code2, ShieldCheck, Printer } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Curated Resumes",
  description:
    "Institutional curriculum vitae tailored for Financial Markets / Quantitative Trading and Software Engineering / Product Development.",
};

export default function ResumeIndexPage() {
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
    ],
  };

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 space-y-12 pb-20">
        {/* ============================================================ */}
        {/* HEADER                                                       */}
        {/* ============================================================ */}
        <section className="max-w-3xl space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Recruiter Resumes
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
            Curated Professional Resumes
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-sans">
            Tailored curriculum vitae for viewing and PDF download, customized for Capital Markets or Software Engineering.
          </p>
        </section>

        {/* ============================================================ */}
        {/* DUAL CV CARDS                                                */}
        {/* ============================================================ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Track 1: Financial Markets & Quantitative Analysis */}
          <div className="p-8 bg-[#0a101f] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#d4af37]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-[#d4af37] border border-slate-700">
                  Capital Markets Track
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Financial Markets & Quantitative Analysis CV
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Tailored for Investment Banking, Global Markets, Commodity Desks, Trading Operations,
                  and Quantitative Research roles.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="font-mono text-[11px] text-slate-400 uppercase">
                  Featured Credentials:
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                  <li>Anand Rathi GIFT City Bullion Desk & IIBX Ecosystem</li>
                  <li>Order entry terminal operations, margin & risk monitoring</li>
                  <li>Institutional onboarding (KYC, GST, IEC) for Qualified Jewellers</li>
                  <li>Python 20/50 SMA crossover backtesting engine & risk metrics</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <Link
                href="/resume/finance"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View & Print PDF</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Track 2: Software Engineering & Full Stack */}
          <div className="p-8 bg-[#0a101f] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[#38bdf8]">
                  <Code2 className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-800 text-[#38bdf8] border border-slate-700">
                  Software Engineering Track
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Software Engineering & Full Stack Developer CV
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Tailored for Software Engineering, Full Stack Web Development, Systems Programming,
                  and Technical Product Development roles.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="font-mono text-[11px] text-slate-400 uppercase">
                  Featured Credentials:
                </div>
                <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                  <li>Certopus Inc. Remote Full Stack Internship (React, REST APIs)</li>
                  <li>LawPrix LegalTech application build (React, Python, Bar Council verification)</li>
                  <li>Custom Unix Shell in C (fork, execvp, pipes, file redirection)</li>
                  <li>Heavy Water Plant DAE internal portal & network configurations</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <Link
                href="/resume/tech"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#38bdf8] hover:bg-[#0284c7] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View & Print PDF</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Privacy & Verification Guarantee */}
        <section className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl flex items-start gap-3 text-xs text-slate-400">
          <ShieldCheck className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-slate-300 block">
              Privacy & Institutional Standards Compliance
            </span>
            <p className="leading-relaxed">
              In accordance with privacy standards, personal residential addresses, dates of birth,
              and confidential referee direct contact numbers are omitted from public web documents.
              Formal institutional reference letters and placement verification can be coordinated
              directly through Pandit Deendayal Energy University (PDEU) or Anand Rathi upon request.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
