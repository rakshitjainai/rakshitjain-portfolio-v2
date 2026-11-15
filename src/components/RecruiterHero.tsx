"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FileText, Mail, Copy, Check, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function RecruiterHero() {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const proofFacts = [
    {
      num: "GIFT City",
      label: "Bullion Desk",
      desc: "Anand Rathi IFSC terminal operations & BDR workflows",
    },
    {
      num: "2 Internships",
      label: "Completed in 2026",
      desc: "Capital markets operations + remote full-stack engineering",
    },
    {
      num: "2nd Runner-Up",
      label: "Buildathon Podium",
      desc: "National hackathon award for LawPrix legal-tech platform",
    },
    {
      num: "4 Leadership Roles",
      label: "Campus Scope",
      desc: "Operations & logistics head for CSI PDEU, Nucleus, Placement Cell",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#22262e] bg-[#0a0b0d]">
      <div className="max-w-7xl w-full mx-auto space-y-8 my-auto">
        {/* Availability Pill */}
        <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111317] border border-[#22262e] text-xs font-mono text-[#8b8f97]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[#c8a15a] font-semibold">Available from [TODO: date]</span>
          <span className="text-[#8b8f97]">|</span>
          <span className="text-[#f2efe8]">Gandhinagar / Ahmedabad, open to relocate and remote</span>
        </div>

        {/* 1. Huge Name: clamp(4rem, 14vw, 13rem) */}
        <div className="space-y-3">
          <h1
            className="font-serif-display font-bold text-[#f2efe8] tracking-tight leading-[0.92] select-none uppercase"
            style={{ fontSize: "clamp(3.8rem, 13.5vw, 12.5rem)" }}
          >
            RAKSHIT JAIN
          </h1>

          {/* 2. One-line role statement */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#c8a15a] font-sans font-medium tracking-tight">
            B.Tech ICT student at PDEU | Markets, Quant and Product | Seeking Summer 2027 internships
          </p>
        </div>

        {/* 4. Action CTAs & Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Primary CTA */}
          <Link
            href="/Rakshit-Jain-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
          >
            <FileText className="w-4 h-4" />
            <span>Download resume (PDF)</span>
          </Link>

          {/* Secondary CTA */}
          <a
            href={`mailto:${siteConfig.author.email}?subject=Internship%20Inquiry%20-%20Rakshit%20Jain`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#111317] hover:bg-[#181b21] text-[#f2efe8] font-mono text-xs font-semibold tracking-wider transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
          >
            <Mail className="w-4 h-4 text-[#c8a15a]" />
            <span>Email me</span>
          </a>

          {/* Copy Email Helper */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#111317] text-[#8b8f97] hover:text-[#f2efe8] text-xs font-mono transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#8b8f97]" />
                <span>Copy email</span>
              </>
            )}
          </button>

          {/* Social Profiles */}
          <div className="flex items-center gap-2 pl-2">
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#111317] text-[#8b8f97] hover:text-[#f2efe8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#111317] text-[#8b8f97] hover:text-[#f2efe8] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 5. Proof Strip: 4 Hard Facts */}
      <div className="max-w-7xl w-full mx-auto pt-10 border-t border-[#22262e]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {proofFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-[#111317] border border-[#22262e] space-y-1.5"
            >
              <div className="font-mono-num font-bold text-base sm:text-lg text-[#c8a15a]">
                {fact.num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#f2efe8]">
                {fact.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#8b8f97] leading-relaxed">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Scan Hint */}
        <div className="pt-4 flex items-center justify-between text-[11px] font-mono text-[#8b8f97]">
          <span>Designed for a 30-second recruiter decision</span>
          <span className="flex items-center gap-1">
            <span>Scroll for role breakdown &amp; proof</span>
            <ArrowDown className="w-3 h-3 text-[#c8a15a]" />
          </span>
        </div>
      </div>
    </section>
  );
}
