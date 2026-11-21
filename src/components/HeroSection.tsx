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
    <section className="relative min-h-[85svh] flex flex-col justify-between pt-[calc(6rem+env(safe-area-inset-top,0px))] pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#e3e8ef] bg-white overflow-hidden">
      {/* 4. Single ambient background element drifting slowly behind the heading */}
      <div
        aria-hidden="true"
        className="ambient-gradient-blob hidden sm:block absolute -top-32 -left-20 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20 blur-3xl -z-10"
        style={{
          background: "radial-gradient(circle, #2563eb 0%, #0ea5a4 45%, #10b981 80%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto space-y-6 my-auto relative z-10">
        {/* Name Heading with 1. subtle slow gradient shimmer underline */}
        <div className="space-y-3">
          <h1
            className="font-serif-display font-bold text-[#0f172a] tracking-tight leading-[0.92] select-none uppercase"
            style={{ fontSize: "clamp(3rem, 10.5vw, 9.8rem)", textTransform: "uppercase" }}
          >
            Rakshit Jain
          </h1>

          {/* Shimmer Accent Line (8-12s loop, animated background-position) */}
          <div
            aria-hidden="true"
            className="name-gradient-shimmer h-[3px] w-28 sm:w-44 rounded-full"
          />

          {/* Neutral role statement */}
          <p className="text-base sm:text-xl lg:text-2xl text-[#1d4ed8] font-sans font-semibold tracking-tight pt-1">
            B.Tech ICT, PDEU (2023–2027) · Financial Markets, Quantitative Research &amp; Software
          </p>
        </div>

        {/* Action CTAs & Socials */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* 2. Primary Button: gradient fill shifting on hover */}
          <a
            href={siteConfig.resume.primaryPdf}
            download={siteConfig.resume.filename}
            className="btn-primary-gradient inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download resume (PDF)</span>
          </a>

          {/* Secondary CTA */}
          <a
            href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
            className="btn-secondary inline-flex items-center gap-2 px-5 py-3 rounded-lg font-mono text-xs font-semibold tracking-wider"
          >
            <Mail className="w-4 h-4 text-[#2563eb]" />
            <span>Email me</span>
          </a>

          {/* Copy Email Helper */}
          <button
            onClick={handleCopyEmail}
            className="btn-secondary inline-flex items-center gap-1.5 px-3.5 py-3 rounded-lg text-xs font-mono text-[#475569] hover:text-[#0f172a] cursor-pointer"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-bold">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#64748b]" />
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
              className="btn-secondary p-3 rounded-lg text-[#475569] hover:text-[#0f172a]"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-3 rounded-lg text-[#475569] hover:text-[#0f172a]"
              aria-label="GitHub profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Proof Strip: 4 Factual Cards */}
      <div className="max-w-7xl w-full mx-auto pt-8 border-t border-[#e3e8ef] relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {proofFacts.map((fact, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-white border border-[#e3e8ef] shadow-2xs hover:shadow-sm hover:border-blue-300 transition-all space-y-1.5"
            >
              <div className="font-mono-num font-bold text-base sm:text-lg text-[#2563eb]">
                {fact.num}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#0f172a]">
                {fact.label}
              </div>
              <p className="text-[11px] sm:text-xs text-[#475569] leading-relaxed">
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
