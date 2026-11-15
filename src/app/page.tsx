import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  Building,
  GraduationCap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";
import { professionalExperience } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { articlesData } from "@/data/articles";
import { educationData, verifiedAchievements } from "@/data/education";
import { PillarCard } from "@/components/PillarCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ResearchCard } from "@/components/ResearchCard";
import { SmaBacktestChart } from "@/components/SmaBacktestChart";
import { HeroVisual } from "@/components/HeroVisual";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
    jobTitle: "B.Tech ICT Student (Class of 2027)",
    worksFor: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pandit Deendayal Energy University (PDEU)",
    },
    knowsAbout: [
      "Financial Markets",
      "Bullion Trading Operations",
      "IIBX (India International Bullion Exchange)",
      "Quantitative Finance",
      "Python Backtesting",
      "Full Stack Development",
      "Product Management",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  };

  return (
    <>
      <StructuredData data={personJsonLd} />
      <StructuredData data={websiteJsonLd} />

      <div className="space-y-20 sm:space-y-28 pb-20">
        {/* ============================================================ */}
        {/* HERO SECTION                                                 */}
        {/* ============================================================ */}
        <section className="relative pt-6 sm:pt-14 pb-4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Heading, Positioning & Actions */}
              <div className="lg:col-span-7 space-y-5 animate-slide-up">
                {/* Status Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-300">
                    {siteConfig.positioning.statusBadge}
                  </span>
                </div>

                {/* Identity & Subtitle */}
                <div className="space-y-1.5">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                    RAKSHIT JAIN
                  </h1>
                  <p className="font-mono text-xs sm:text-sm tracking-wider text-[#d4af37] uppercase font-semibold">
                    Finance · Quantitative Analysis · Technology · Product
                  </p>
                </div>

                {/* Concise Lead Narrative (2 lines) */}
                <p className="text-base sm:text-lg text-slate-200 font-sans font-light leading-snug">
                  &ldquo;{siteConfig.positioning.heroIntro}&rdquo;
                </p>

                {/* Supporting Credentials (2 lines) */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans max-w-xl">
                  {siteConfig.positioning.heroParagraph}
                </p>

                {/* Action Bar */}
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow hover:-translate-y-0.5"
                  >
                    <span>Explore Work</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-all hover:-translate-y-0.5"
                  >
                    <Building className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Experience</span>
                  </Link>

                  <Link
                    href="/resume"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-all"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Resumes</span>
                  </Link>

                  {/* Quick Socials */}
                  <div className="flex items-center gap-1.5 pl-1">
                    <a
                      href={siteConfig.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={siteConfig.author.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${siteConfig.author.email}`}
                      className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Restrained Visual Connecting Finance & Technology */}
              <div className="lg:col-span-5 animate-fade-in delay-200">
                <HeroVisual />
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOUR INTERCONNECTED PILLARS                                  */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#d4af37]">
                Core Competencies
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Four Interconnected Areas
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Philosophy</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {siteConfig.recruiterTracks.map((pillar) => (
              <PillarCard key={pillar.id} {...pillar} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXPERIENCE TIMELINE                                          */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#38bdf8]">
                Professional Background
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Selected Work Experience
              </h2>
            </div>
            <Link
              href="/experience"
              className="text-xs font-semibold text-[#38bdf8] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Full Timeline</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="max-w-4xl space-y-2">
            {professionalExperience.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED PROJECTS WITH QUANT BACKTEST CHART                  */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#d4af37]">
                Technical Work
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>All Projects</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="space-y-6">
            <SmaBacktestChart />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {projectsData.slice(0, 2).map((proj, idx) => (
                <ProjectCard key={proj.id} project={proj} featured={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* EDITORIAL RESEARCH HIGHLIGHTS                                */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#38bdf8]">
                Editorial & Analysis
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                Original Research Papers
              </h2>
            </div>
            <Link
              href="/research"
              className="text-xs font-semibold text-[#38bdf8] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Archive</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articlesData.map((article) => (
              <ResearchCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EDUCATION & HONORS (COMPACT)                                 */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-7 bg-[#0a101f] border border-slate-800 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left: Degree */}
              <div className="lg:col-span-5 space-y-1.5">
                <span className="font-mono text-[10px] uppercase text-[#d4af37] block font-semibold">
                  Education
                </span>
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[#d4af37] shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {educationData.institution}
                    </h3>
                    <p className="text-xs text-slate-300">
                      {educationData.degree} — {educationData.major}
                    </p>
                    <p className="font-mono text-[11px] text-slate-500 mt-0.5">
                      {educationData.period} · {educationData.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Verified Distinctions */}
              <div className="lg:col-span-7 space-y-2 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6">
                <span className="font-mono text-[10px] uppercase text-slate-400 block font-semibold">
                  Verified Distinctions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {verifiedAchievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 space-y-1"
                    >
                      <span className="text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-1.5 py-0.5 rounded block w-fit">
                        {ach.badge}
                      </span>
                      <div className="text-xs font-semibold text-white line-clamp-1">
                        {ach.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* QUICK RECRUITER CONTACT CALLOUT                              */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 bg-[#090e1b] border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-white">
                Exploring Early-Career & Internship Opportunities
              </h2>
              <p className="text-xs text-slate-400">
                Open to discussions across Financial Markets, Quantitative Analysis, Software Engineering, and Product.
              </p>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                Get in Touch
              </Link>
              <Link
                href="/resume"
                className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white text-xs font-medium transition-colors"
              >
                Curated Resumes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
