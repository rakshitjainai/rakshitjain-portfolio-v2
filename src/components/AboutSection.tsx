"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Mail, Phone, MessageSquare, Copy, Check } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AboutSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          About
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          About Me
        </h2>
      </div>

      <div className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#22262e] grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Monogram / Profile card (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-[#0a0b0d] border-2 border-[#22262e] flex flex-col items-center justify-center text-center p-4 shadow-inner relative overflow-hidden group">
            <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#c8a15a]">
              RJ
            </span>
            <span className="text-[10px] font-mono text-[#8b8f97] mt-1 uppercase tracking-wider">
              Rakshit Jain
            </span>
            <div className="absolute inset-0 bg-[#c8a15a]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#8b8f97]">
            <MapPin className="w-3.5 h-3.5 text-[#c8a15a]" />
            <span>Gandhinagar, Gujarat</span>
          </div>
        </div>

        {/* Short About Copy & Actions (8 cols) */}
        <div className="md:col-span-8 space-y-6">
          <p className="text-base sm:text-lg text-[#f2efe8] leading-relaxed font-sans font-light">
            I study Information and Communications Technology at PDEU in Gandhinagar (2023–2027). My work focuses on financial market operations, quantitative research, and software engineering. During my internship at GIFT City, I observed how exchange infrastructure and institutional settlement workflows operate in practice. When building software, I focus on reducing manual friction and creating reliable systems. Outside coursework, I coordinate operations for campus technical bodies and test quantitative strategies in Python.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono border-t border-[#22262e] pt-4">
            <span className="text-[#8b8f97]">
              PDEU (2023–2027) · Gandhinagar / Ahmedabad
            </span>
            <Link
              href="/about"
              className="text-[#c8a15a] hover:underline inline-flex items-center gap-1"
            >
              <span>Full background page</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Three Direct Contact Actions */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#8b8f97] font-semibold block">
              Direct Contact
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>

              <a
                href={`tel:${siteConfig.author.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-[#f2efe8] font-mono text-xs font-semibold tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c8a15a]" />
                <span>Call Me ({siteConfig.author.phoneDisplay})</span>
              </a>

              <a
                href={siteConfig.author.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-[#f2efe8] font-mono text-xs font-semibold tracking-wider transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#22c55e]" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* Plain text fallback with copy button */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#8b8f97]">
              <span>Email: <span className="text-[#f2efe8] select-all">{siteConfig.author.email}</span></span>
              <span>•</span>
              <span>Phone: <span className="text-[#f2efe8] select-all">{siteConfig.author.phoneDisplay}</span></span>
              <button
                onClick={handleCopyEmail}
                className="ml-auto inline-flex items-center gap-1 text-[11px] text-[#c8a15a] hover:underline cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
