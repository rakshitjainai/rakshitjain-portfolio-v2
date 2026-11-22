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
    <section className="relative min-h-[85dvh] flex flex-col justify-between pt-[calc(5rem+env(safe-area-inset-top,0px))] pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 xl:px-16 border-b border-[#e3e8ef] bg-white overflow-hidden max-w-[1440px] mx-auto w-full">
      {/* Ambient background element drifting slowly behind the heading */}
      <div
        aria-hidden="true"
        className="ambient-gradient-blob hidden sm:block absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl -z-10"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, #0ea5a4 45%, #10b981 80%, transparent 100%)",
        }}
      />

      <div className="w-full space-y-6 my-auto relative z-10 pt-4 sm:pt-6">
        {/* Name Heading with subtle slow gradient shimmer underline */}
        <div className="space-y-3">
          <h1
            className="font-serif-display font-bold text-[#0f172a] tracking-tight leading-[0.92] select-none uppercase break-words"
            style={{ fontSize: "clamp(3rem, 13vw, 13rem)", textTransform: "uppercase" }}
          >
            <span className="inline-block">Rakshit</span>{" "}
            <span className="inline-block">Jain</span>
          </h1>

          {/* Shimmer Accent Line (8-12s loop, animated background-position) */}
          <div
            aria-hidden="true"
            className="name-gradient-shimmer h-[3px] w-28 sm:w-44 rounded-full"
          />

          {/* Neutral role statement */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#1d4ed8] font-sans font-semibold tracking-tight pt-1 max-w-3xl leading-snug [text-wrap:balance]">
            B.Tech ICT, PDEU (2023–2027) · Financial Markets, Quantitative Research &amp; Software
          </p>
        </div>

        {/* Action CTAs & Socials: Full-width stacked on mobile (< 480px), inline from 480px up */}
        <div className="flex flex-col xs:flex-row flex-wrap items-stretch xs:items-center gap-3 pt-2 w-full xs:w-auto">
          {/* Primary Button: Resume (PDF) */}
          <a
            href={siteConfig.resume.primaryPdf}
            download={siteConfig.resume.filename}
            className="btn-primary-gradient w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-lg font-mono font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs"
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Download resume (PDF)</span>
          </a>

          {/* Secondary CTA: Email */}
          <a
            href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
            className="btn-secondary w-full xs:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[48px] rounded-lg font-mono text-xs font-semibold tracking-wider"
          >
            <Mail className="w-4 h-4 text-[#2563eb] shrink-0" />
            <span>Email me</span>
          </a>

          {/* Copy Email Helper */}
          <button
            onClick={handleCopyEmail}
            className="btn-secondary w-full xs:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 min-h-[48px] text-xs font-mono text-[#475569] hover:text-[#0f172a] cursor-pointer"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-emerald-700 font-bold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#64748b] shrink-0" />
                <span>Copy email</span>
              </>
            )}
          </button>

          {/* Social Profiles */}
          <div className="flex items-center justify-center xs:justify-start gap-2 pt-1 xs:pt-0 xs:pl-2">
            <a
              href={siteConfig.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-3 rounded-lg text-[#475569] hover:text-[#0f172a]"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary min-h-[44px] min-w-[44px] inline-flex items-center justify-center p-3 rounded-lg text-[#475569] hover:text-[#0f172a]"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Proof Strip: 2x2 grid on mobile, 4 across from 768px (md) up */}
      <div className="w-full pt-8 border-t border-[#e3e8ef] relative z-10 mt-6 sm:mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
          {proofFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-5 rounded-xl bg-white border border-[#e3e8ef] shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all space-y-1.5"
            >
              <div className="font-mono-num font-bold text-base sm:text-lg text-[#2563eb]">
                {fact.num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0f172a] leading-tight">
                {fact.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed line-clamp-2">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { HeroSection as Hero };
