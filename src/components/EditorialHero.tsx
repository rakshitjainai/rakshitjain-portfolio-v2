"use client";

import React from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function EditorialHero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-32 pb-12 overflow-hidden bg-[#101a27] text-[#f4f1ea]">
      {/* Subtle Coordinate Grid / Financial Line Structure */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="editorialGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f4f1ea" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#editorialGrid)" />
        </svg>
      </div>

      {/* Atmospheric Subtle Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#c28b5e]/5 blur-[120px] rounded-full pointer-events-none animate-atmosphere" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#4a7c9b]/5 blur-[100px] rounded-full pointer-events-none animate-atmosphere" />

      {/* Top Meta Line: Coordinates & Availability */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono tracking-widest text-slate-400 uppercase border-b border-[#22344a]/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-300">Gandhinagar, GJ · PDEU ICT &apos;27</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>Bullion Operations · Quant Backtest · Full-Stack · Product</span>
          </div>
          <div>
            <span className="text-[#c28b5e]">Open to Early-Career &amp; Internships</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Headline */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 my-auto py-12 relative z-10">
        <div className="max-w-4xl space-y-8">
          {/* Subtitle tag */}
          <div className="space-y-1.5">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-medium">
              Finance · Technology · Quantitative Analysis · Product
            </span>
          </div>

          {/* Expressive Editorial Typography */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans tracking-tight text-[#f4f1ea] leading-[1.08]">
            Exploring the intersection of markets, technology and{" "}
            <span className="font-editorial-italic font-normal text-5xl sm:text-7xl lg:text-8xl text-[#d8a478]">
              ideas.
            </span>
          </h1>

          {/* Concise Supporting Copy (2 lines) */}
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-2xl font-light">
            B.Tech ICT student at PDEU, with operational exposure to financial-market infrastructure
            at GIFT City, full-stack software development, and Python-based quantitative analysis.
          </p>

          {/* Minimal Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f4f1ea] hover:bg-white text-[#101a27] font-semibold text-xs tracking-wider uppercase transition-all duration-150 hover:-translate-y-0.5"
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#22344a] hover:border-slate-500 bg-[#172536]/60 text-[#f4f1ea] text-xs font-mono tracking-wider transition-all duration-150 hover:-translate-y-0.5"
            >
              <span>View Experience</span>
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#c28b5e]" />
              <span>Download Resumes</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Social & Navigation Indicator */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-t border-[#22344a]/60 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-5 font-mono">
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#4a7c9b]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-slate-600" />
            </a>
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-slate-600" />
            </a>
            <a
              href={`mailto:${siteConfig.author.email}`}
              className="hover:text-white transition-colors font-sans text-slate-400"
            >
              {siteConfig.author.email}
            </a>
          </div>

          <div className="font-mono text-[11px] text-slate-500">
            Scroll to explore perspective &darr;
          </div>
        </div>
      </div>
    </section>
  );
}
