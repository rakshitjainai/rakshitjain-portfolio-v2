"use client";

import React, { useState } from "react";
import { FileText, Mail, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const proofFacts = [
    {
      num: "GIFT City",
      label: "Bullion Desk Exposure",
      desc: "Anand Rathi IFSC terminal monitoring and BDR settlement workflows",
    },
    {
      num: "3 Roles",
      label: "Technical Experience",
      desc: "Capital markets desk, remote full-stack engineering, and DAE training portal",
    },
    {
      num: "Podium",
      label: "Tutedude Buildathon",
      desc: "2nd Runner-Up for LawPrix legal-tech platform",
    },
    {
      num: "4 Positions",
      label: "Campus Leadership",
      desc: "Logistics and operations head across CSI, Nucleus, and placement liaison",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#22262e] bg-[#0a0b0d]">
      <div className="max-w-7xl w-full mx-auto space-y-6 my-auto">
        {/* Name Heading (Reduced 15-20% for clean responsive scaling) */}
        <div className="space-y-3">
          <h1
            className="font-serif-display font-bold text-[#f2efe8] tracking-tight leading-[0.92] select-none uppercase"
            style={{ fontSize: "clamp(3rem, 10.5vw, 9.8rem)" }}
          >
            RAKSHIT JAIN
          </h1>

          {/* Neutral role statement (no "seeking", no year-of-study claim) */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#c8a15a] font-sans font-medium tracking-tight">
            B.Tech ICT, PDEU (2023–2027) · Financial Markets, Quantitative Research &amp; Software
          </p>
        </div>

        {/* Action CTAs & Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Primary CTA */}
          <a
            href={siteConfig.resume.primaryPdf}
            download={siteConfig.resume.filename}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] font-mono font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-md hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a] cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download resume (PDF)</span>
          </a>

          {/* Secondary CTA */}
          <a
            href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#111317] hover:bg-[#181b21] text-[#f2efe8] font-mono text-xs font-semibold tracking-wider transition-all duration-150 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
          >
            <Mail className="w-4 h-4 text-[#c8a15a]" />
            <span>Email me</span>
          </a>

          {/* Copy Email Helper */}
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#111317] text-[#8b8f97] hover:text-[#f2efe8] text-xs font-mono transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a] cursor-pointer"
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

      {/* Proof Strip: 4 Factual Cards */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-[#22262e]">
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
      </div>
    </section>
  );
}

// Keep Hero export alias
export { HeroSection as Hero };
