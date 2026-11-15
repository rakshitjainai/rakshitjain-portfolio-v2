import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  Activity,
  Code2,
  Compass,
  ArrowRight,
  GraduationCap,
  Award,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { educationData } from "@/data/education";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "About Rakshit Jain | Candidate Background",
  description:
    "Candidate overview of Rakshit Jain: B.Tech ICT student at PDEU, GIFT City bullion desk operations intern, full-stack software engineer, and quant analyst.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
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
      color: "#c8a15a",
    },
    {
      title: "Quantitative Trading Models",
      desc: "Systematic backtesting in Python, dual moving average models, risk metrics (CAGR, Sharpe, Drawdown), and market frictions.",
      icon: Activity,
      color: "#c8a15a",
    },
    {
      title: "Full Stack Software Engineering",
      desc: "Production web applications in React.js and Node.js, POSIX systems programming in C, and internal enterprise tools.",
      icon: Code2,
      color: "#c8a15a",
    },
    {
      title: "Product Management",
      desc: "Workflow analysis, requirements modeling, criteria-based matchmaking logic, and user friction reduction.",
      icon: Compass,
      color: "#c8a15a",
    },
  ];

  return (
    <>
      <StructuredData data={breadcrumbJsonLd} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 space-y-12 pb-20">
        {/* Header */}
        <section className="max-w-3xl space-y-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
            Candidate Profile
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif-display font-bold text-[#f2efe8] tracking-tight">
            Markets, Quantitative Analysis &amp; Software
          </h1>
          <p className="text-sm sm:text-base text-[#8b8f97] leading-relaxed font-sans">
            I am a B.Tech ICT student at Pandit Deendayal Energy University (2023–2027).
            My work combines operational exposure to bullion trading at GIFT City with hands-on
            software development and Python-based quantitative backtesting.
          </p>
        </section>

        {/* Four Key Areas of Focus */}
        <section className="space-y-4">
          <div className="border-b border-[#22262e] pb-2">
            <h2 className="text-lg font-bold text-[#f2efe8]">Core Focus Areas</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#111317] border border-[#22262e] space-y-2.5"
                >
                  <div
                    className="p-2 rounded-lg bg-[#0a0b0d] border border-[#22262e] w-fit text-[#c8a15a]"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#f2efe8]">{area.title}</h3>
                  <p className="text-xs text-[#8b8f97] leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Short Summary of Relevant Experience */}
        <section className="space-y-4">
          <div className="border-b border-[#22262e] pb-2">
            <h2 className="text-lg font-bold text-[#f2efe8]">Relevant Experience Summary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[#111317] border border-[#22262e] space-y-2">
              <span className="font-mono text-[10px] text-[#c8a15a] uppercase font-semibold">GIFT City IFSC</span>
              <h3 className="text-sm font-bold text-[#f2efe8]">Anand Rathi International Ventures</h3>
              <p className="text-xs text-[#8b8f97]">Financial Markets / Operations Intern (May 2026 – Jul 2026)</p>
              <ul className="text-xs text-[#f2efe8] space-y-1 list-disc list-inside pt-1">
                <li>IIBX bullion trading operations</li>
                <li>Live terminal order entry &amp; risk monitoring</li>
                <li>BDR settlement &amp; vault reconciliation</li>
                <li>Institutional KYC, GST &amp; IEC verification</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#111317] border border-[#22262e] space-y-2">
              <span className="font-mono text-[10px] text-[#c8a15a] uppercase font-semibold">Remote</span>
              <h3 className="text-sm font-bold text-[#f2efe8]">Certopus Inc.</h3>
              <p className="text-xs text-[#8b8f97]">Full Stack Development Intern (May 2026 – Jul 2026)</p>
              <ul className="text-xs text-[#f2efe8] space-y-1 list-disc list-inside pt-1">
                <li>Production React.js and Node.js features</li>
                <li>REST APIs and database integration</li>
                <li>Debugging, testing, and staging releases</li>
                <li>Git branch workflows and code reviews</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#111317] border border-[#22262e] space-y-2">
              <span className="font-mono text-[10px] text-[#c8a15a] uppercase font-semibold">Heavy Water Plant Kota</span>
              <h3 className="text-sm font-bold text-[#f2efe8]">Department of Atomic Energy</h3>
              <p className="text-xs text-[#8b8f97]">Summer Trainee (July 2025)</p>
              <ul className="text-xs text-[#f2efe8] space-y-1 list-disc list-inside pt-1">
                <li>PHP/MySQL training records portal</li>
                <li>Server and firewall intranet configuration</li>
                <li>Industrial instrumentation exposure</li>
                <li>Rated &apos;Very Good&apos; by plant leadership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Foundation Callout */}
        <section className="p-6 bg-[#111317] border border-[#22262e] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-[#c8a15a]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-[#c8a15a]">Formal Education</div>
              <h3 className="text-base font-bold text-[#f2efe8]">
                {educationData.institution} — {educationData.degree}
              </h3>
              <p className="text-xs text-[#8b8f97]">
                {educationData.major} · {educationData.period} · {educationData.location}
              </p>
            </div>
          </div>
          <Link
            href="/Rakshit-Jain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#c8a15a] text-[#0a0b0d] font-bold text-xs uppercase tracking-wider hover:bg-[#dbb36c] transition-colors shrink-0 font-mono"
          >
            <span>Resume (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </section>
      </div>
    </>
  );
}
