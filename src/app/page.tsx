import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Mail,
  TrendingUp,
  Activity,
  Code2,
  Compass,
  Building,
  CheckCircle2,
  Award,
  GraduationCap,
  ExternalLink,
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
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.author.linkedin, siteConfig.author.github],
    jobTitle: "B.Tech ICT Student & Early-Career Candidate",
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
      "GIFT City IFSC",
      "Quantitative Finance",
      "Simple Moving Average Backtesting",
      "Python",
      "Pandas",
      "Software Engineering",
      "React.js",
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
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <StructuredData data={personJsonLd} />
      <StructuredData data={websiteJsonLd} />

      <div className="space-y-24 sm:space-y-32 pb-24">
        {/* ============================================================ */}
        {/* HERO SECTION                                                 */}
        {/* ============================================================ */}
        <section className="relative pt-8 sm:pt-16 pb-6 overflow-hidden">
          {/* Subtle Institutional Background Radial Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#d4af37]/5 blur-[120px] pointer-events-none rounded-full" />
          <div className="absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-[#38bdf8]/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl space-y-6">
              {/* Availability Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-mono text-[11px] text-slate-300">
                  {siteConfig.positioning.statusBadge}
                </span>
              </div>

              {/* Title & Core Positioning */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
                  RAKSHIT JAIN
                </h1>
                <p className="font-mono text-sm sm:text-base tracking-wider text-[#d4af37] uppercase font-semibold">
                  Finance · Quantitative Analysis · Technology · Product
                </p>
              </div>

              {/* Lead Narrative */}
              <p className="text-lg sm:text-xl text-slate-200 font-sans font-light leading-relaxed">
                &ldquo;{siteConfig.positioning.heroIntro}&rdquo;
              </p>

              {/* Supporting Credential Paragraph */}
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
                {siteConfig.positioning.heroParagraph}
              </p>

              {/* Call-to-Action Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/experience"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  <Building className="w-4 h-4 text-[#38bdf8]" />
                  <span>View Experience</span>
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
                >
                  <FileText className="w-4 h-4 text-[#d4af37]" />
                  <span>Download Resumes</span>
                </Link>

                {/* Social Quick Links */}
                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={siteConfig.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                    aria-label="Rakshit Jain LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={siteConfig.author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                    aria-label="Rakshit Jain GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${siteConfig.author.email}`}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                    aria-label="Email Rakshit Jain"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FOUR INTERCONNECTED PILLARS                                  */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
              Professional Matrix
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Four Interconnected Competencies
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  Rather than isolated tracks, these four domains reinforce one another: capital market
                  understanding guides quantitative models, software engineering implements systems, and
                  product thinking grounds them in human workflows.
                </p>
              </div>
              <Link
                href="/about"
                className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Read Full Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {siteConfig.recruiterTracks.map((pillar) => (
              <PillarCard key={pillar.id} {...pillar} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SELECTED EXPERIENCE HIGHLIGHT                                */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
              Institutional Experience
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Practical Exposure Across Finance & Software
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  Grounded in real-world responsibility: operating with bullion trading operations at GIFT City,
                  shipping full-stack production features remotely, and industrial systems at the Department of Atomic Energy.
                </p>
              </div>
              <Link
                href="/experience"
                className="text-xs font-semibold text-[#38bdf8] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Complete Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            {professionalExperience.slice(0, 2).map((exp, idx) => (
              <ExperienceCard key={exp.id} experience={exp} featured={idx === 0} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED PROJECTS WITH QUANT CHART                           */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
              Technical & Analytical Portfolio
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Featured Projects & Quantitative Models
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  Verifiable technical work supported by open source repositories, real market data backtests,
                  and structured workflow products.
                </p>
              </div>
              <Link
                href="/projects"
                className="text-xs font-semibold text-[#d4af37] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="space-y-8">
            {/* Interactive Quantitative Chart Preview */}
            <SmaBacktestChart />

            {/* Featured Project Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projectsData.slice(0, 2).map((proj, idx) => (
                <ProjectCard key={proj.id} project={proj} featured={idx === 0} />
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ORIGINAL RESEARCH ARTICLES                                   */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
              Editorial Research & Insights
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Original Research & Technical Insights
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  Deeply researched, peer-grounded essays exploring bullion market dematerialization,
                  quantitative backtest friction, and engineering FinTech workflows in regulated capital markets.
                </p>
              </div>
              <Link
                href="/research"
                className="text-xs font-semibold text-[#38bdf8] hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Browse Research Archive</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articlesData.map((article) => (
              <ResearchCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EDUCATION & VERIFIED HONORS                                  */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 bg-[#0a101f] border border-slate-800 rounded-2xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
                  Academic Background
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Education & Verified Honors
                </h2>
              </div>
              <div className="text-xs font-mono text-slate-400">
                Pandit Deendayal Energy University (2023–2027)
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Degree & Coursework */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[#d4af37]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {educationData.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">
                      {educationData.degree} — {educationData.major}
                    </p>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">
                      {educationData.period} · {educationData.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Core Engineering Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {educationData.coreCoursework.map((cw, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-900/90 border border-slate-800 text-slate-300"
                      >
                        {cw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Achievements */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Verified Competition & Academic Distinctions:
                </h4>
                <div className="space-y-3">
                  {verifiedAchievements.map((ach) => (
                    <div
                      key={ach.id}
                      className="p-3.5 bg-slate-900/70 border border-slate-800 rounded-lg space-y-1"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-white">{ach.title}</span>
                        <span className="text-[10px] font-mono text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded border border-[#d4af37]/20">
                          {ach.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {ach.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* RECRUITER & CONTACT CTA SECTION                              */}
        {/* ============================================================ */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-8 sm:p-12 bg-gradient-to-br from-[#0c1322] to-[#070b14] border border-slate-800 rounded-2xl overflow-hidden text-center space-y-6">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
                Connect & Inquire
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Interested in Discussing Opportunities?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Open to internships and early-career opportunities across Financial Markets,
                Quantitative Analysis, Full Stack Engineering, and Product Development.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Initiate Contact</span>
              </Link>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs uppercase tracking-wider transition-colors"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                <span>Access Curated Resumes</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
