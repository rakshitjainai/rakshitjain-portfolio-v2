import React from "react";
import Link from "next/link";
import { ArrowRight, GraduationCap, Mail, FileText, ArrowUpRight, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";
import { educationData, verifiedAchievements } from "@/data/education";

export function EditorialClosing() {
  return (
    <section className="bg-[#101a27] text-[#f4f1ea] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline border-b border-[#22344a] pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              07 / Collaboration &amp; Career
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#f4f1ea] leading-[1.1]">
              Let&apos;s discuss opportunities at the{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#d8a478]">
                intersection.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            <p>
              Available for internship and early-career opportunities across Financial Markets,
              Quantitative Finance, Software Engineering, and Product Management.
            </p>
          </div>
        </div>

        {/* Academic Foundation & Verified Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Education Card (5 Cols) */}
          <div className="lg:col-span-5 p-7 rounded-xl bg-[#172536] border border-[#22344a] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#c28b5e] uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Foundation</span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">
                {educationData.institution}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {educationData.degree} — {educationData.major}
              </p>
              <p className="font-mono text-xs text-slate-400 mt-0.5">
                {educationData.period} · {educationData.location}
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed font-sans pt-2 border-t border-[#22344a]">
              Rigorous coursework combining computer science fundamentals, data structures, algorithms,
              operating systems, and communication networks.
            </p>
          </div>

          {/* Verified Achievements & Distinctions (7 Cols) */}
          <div className="lg:col-span-7 p-7 rounded-xl bg-[#172536] border border-[#22344a] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
              <Award className="w-4 h-4 text-[#c28b5e]" />
              <span>Verified Institutional Track Record</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {verifiedAchievements.map((ach) => (
                <div
                  key={ach.id}
                  className="p-3.5 rounded-lg bg-[#101a27] border border-[#22344a] space-y-1.5"
                >
                  <span className="text-[10px] font-mono text-[#c28b5e] bg-[#c28b5e]/10 px-1.5 py-0.5 rounded block w-fit font-medium">
                    {ach.badge}
                  </span>
                  <h4 className="text-xs font-bold text-white leading-snug line-clamp-1">
                    {ach.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Panel: Curated Resumes & Direct Connect */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#172536] to-[#101a27] border border-[#22344a] space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-wider text-[#c28b5e]">
                Tailored Candidate Documentation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                Curated Resumes for Specific Hiring Tracks
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Review targeted resumes aligned to your team&apos;s evaluation criteria, complete with
                verified repository code, operational summaries, and downloadable PDFs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f1ea] hover:bg-white text-[#101a27] font-semibold text-xs tracking-wider uppercase transition-all duration-150 hover:-translate-y-0.5"
              >
                <span>View Curated Resumes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#22344a] hover:border-slate-400 bg-[#172536] text-white text-xs font-mono tracking-wider transition-all duration-150 hover:-translate-y-0.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#c28b5e]" />
                <span>Contact Directly</span>
              </Link>
            </div>
          </div>

          {/* Direct Contact & Social Links Bar */}
          <div className="pt-6 border-t border-[#22344a] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#c28b5e]" />
                <span>{siteConfig.author.email}</span>
              </a>

              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#4a7c9b]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </a>

              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-600" />
              </a>
            </div>

            <span className="text-slate-500 text-[11px]">
              Location: Gandhinagar, Gujarat, India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
