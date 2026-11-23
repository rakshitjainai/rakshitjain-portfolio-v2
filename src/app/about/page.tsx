import React from "react";
import type { Metadata } from "next";
import {
  TrendingUp,
  Activity,
  Code2,
  Compass,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { educationData } from "@/data/education";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background of Rakshit Jain: B.Tech ICT student at PDEU combining financial market operations at GIFT City with software engineering and quantitative models.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    type: "profile",
    url: `${siteConfig.url}/about`,
    title: "About | Rakshit Jain",
    description:
      "Background of Rakshit Jain: B.Tech ICT student at PDEU combining financial market operations at GIFT City with software engineering and quantitative models.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rakshit Jain",
    description:
      "Background of Rakshit Jain: B.Tech ICT student at PDEU combining financial market operations at GIFT City with software engineering and quantitative models.",
  },
};

export default function AboutPage() {
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
        name: "About",
        item: `${siteConfig.url}/about`,
      },
    ],
  };

  const focusAreas = [
    {
      title: "Financial Market Operations",
      desc: "Bullion trading operations, IIBX exchange mechanics, BDR dematerialization, and institutional onboarding.",
      icon: TrendingUp,
      color: "#2563eb",
    },
    {
      title: "Quantitative Trading Models",
      desc: "Systematic backtesting in Python, dual moving average models, risk metrics (CAGR, Sharpe, Drawdown), and market frictions.",
      icon: Activity,
      color: "#2563eb",
    },
    {
      title: "Full Stack Software Engineering",
      desc: "Production web applications in React.js and Node.js, POSIX systems programming in C, and internal enterprise tools.",
      icon: Code2,
      color: "#2563eb",
    },
    {
      title: "Product Development",
      desc: "Workflow analysis, requirements modeling, criteria-based matchmaking logic, and user friction reduction.",
      icon: Compass,
      color: "#2563eb",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pt-24 sm:pt-28 lg:pt-32 space-y-12 pb-20">
        {/* Header */}
        <section className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
            Background
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#0f172a] tracking-tight">
            Markets, Quantitative Analysis &amp; Software
          </h1>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
            Rakshit Jain is a B.Tech ICT student at Pandit Deendayal Energy University (PDEU, 2023–2027) in Gandhinagar, Gujarat, working across financial markets, quantitative research, and software engineering, with operational internship exposure to bullion trading at GIFT City.
          </p>
        </section>

        {/* Four Key Areas of Focus */}
        <section className="space-y-4">
          <div className="border-b border-[#e3e8ef] pb-2">
            <h2 className="text-lg font-bold text-[#0f172a]">Core Focus Areas</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#e3e8ef] space-y-2.5 shadow-sm hover:border-blue-200 transition-colors"
                >
                  <div
                    className="p-2 rounded-lg bg-blue-50 border border-blue-100 w-fit text-[#2563eb]"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0f172a]">{area.title}</h3>
                  <p className="text-xs text-[#475569] leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Relevant Experience Summary */}
        <section className="space-y-4">
          <div className="border-b border-[#e3e8ef] pb-2">
            <h2 className="text-lg font-bold text-[#0f172a]">Experience Summary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-[#e3e8ef] space-y-2 shadow-sm">
              <span className="font-mono text-[10px] text-[#2563eb] uppercase font-semibold">GIFT City IFSC</span>
              <h3 className="text-sm font-bold text-[#0f172a]">Anand Rathi International Ventures</h3>
              <p className="text-xs text-[#475569]">Financial Markets / Operations Intern (May 2026 – Jul 2026)</p>
              <ul className="text-xs text-[#0f172a] space-y-1 list-disc list-inside pt-1">
                <li>IIBX bullion trading operations</li>
                <li>Live terminal order entry &amp; risk monitoring</li>
                <li>BDR settlement &amp; vault reconciliation</li>
                <li>Institutional KYC, GST &amp; IEC verification</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e3e8ef] space-y-2 shadow-sm">
              <span className="font-mono text-[10px] text-[#2563eb] uppercase font-semibold">Remote</span>
              <h3 className="text-sm font-bold text-[#0f172a]">Certopus Inc.</h3>
              <p className="text-xs text-[#475569]">Full Stack Development Intern (May 2026 – Jul 2026)</p>
              <ul className="text-xs text-[#0f172a] space-y-1 list-disc list-inside pt-1">
                <li>Production React.js and Node.js features</li>
                <li>REST APIs and database integration</li>
                <li>Debugging, testing, and staging releases</li>
                <li>Git branch workflows and code reviews</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white border border-[#e3e8ef] space-y-2 shadow-sm">
              <span className="font-mono text-[10px] text-[#2563eb] uppercase font-semibold">Heavy Water Plant Kota</span>
              <h3 className="text-sm font-bold text-[#0f172a]">Department of Atomic Energy</h3>
              <p className="text-xs text-[#475569]">Summer Trainee (July 2025)</p>
              <ul className="text-xs text-[#0f172a] space-y-1 list-disc list-inside pt-1">
                <li>PHP/MySQL training records portal</li>
                <li>Server and firewall intranet configuration</li>
                <li>Industrial instrumentation exposure</li>
                <li>Rated &apos;Very Good&apos; by plant leadership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Foundation Callout */}
        <section className="p-6 bg-[#f8fafc] border border-[#e3e8ef] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-white border border-[#e3e8ef] text-[#2563eb] shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#2563eb] font-semibold">Formal Education</div>
              <h3 className="text-base font-bold text-[#0f172a]">
                {educationData.institution} — {educationData.degree}
              </h3>
              <p className="text-xs text-[#475569]">
                {educationData.major} · {educationData.period} · {educationData.location}
              </p>
            </div>
          </div>
          <a
            href={siteConfig.resume.primaryPdf}
            download={siteConfig.resume.filename}
            className="btn-primary-gradient min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-white font-bold text-xs uppercase tracking-wider shrink-0 font-mono cursor-pointer shadow-sm"
          >
            <span>Resume (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </section>
      </div>
    </>
  );
}
