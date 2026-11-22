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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1280px] mx-auto space-y-10">
      <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          About
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a] [text-wrap:balance]">
          About Me
        </h2>
      </div>

      <div className="p-6 sm:p-10 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Monogram / Profile card (4 cols) */}
        <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3">
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-[#f8fafc] border-2 border-[#e3e8ef] flex flex-col items-center justify-center text-center p-4 shadow-2xs relative overflow-hidden group">
            <span className="font-serif-display text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#2563eb] via-[#0ea5a4] to-[#059669]">
              RJ
            </span>
            <span className="text-[10px] font-mono text-[#64748b] mt-1 uppercase tracking-wider font-semibold">
              Rakshit Jain
            </span>
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#475569]">
            <MapPin className="w-3.5 h-3.5 text-[#2563eb]" />
            <span>Gandhinagar, Gujarat</span>
          </div>
        </div>

        {/* Short About Copy & Actions (8 cols) */}
        <div className="md:col-span-8 space-y-6">
          <p className="text-base sm:text-lg text-[#0f172a] leading-relaxed font-sans font-normal [text-wrap:pretty]">
            I study Information and Communications Technology at PDEU in Gandhinagar (2023–2027). My work focuses on financial market operations, quantitative research, and software engineering. During my internship at GIFT City, I observed how exchange infrastructure and institutional settlement workflows operate in practice. When building software, I focus on reducing manual friction and creating reliable systems. Outside coursework, I coordinate operations for campus technical bodies and test quantitative strategies in Python.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono border-t border-[#e3e8ef] pt-4">
            <span className="text-[#475569]">
              PDEU (2023–2027) · Gandhinagar / Ahmedabad
            </span>
            <Link
              href="/about"
              className="min-h-[44px] text-[#2563eb] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>Full background page</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Three Direct Contact Actions: full-width stacked on mobile, inline on tablet+ */}
          <div className="space-y-3 pt-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#64748b] font-bold block">
              Direct Contact
            </span>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
                className="btn-primary-gradient min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Me</span>
              </a>

              <a
                href={`tel:${siteConfig.author.phone}`}
                className="btn-secondary min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wider"
              >
                <Phone className="w-3.5 h-3.5 text-[#2563eb]" />
                <span>Call Me ({siteConfig.author.phoneDisplay})</span>
              </a>

              <a
                href={siteConfig.author.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs font-semibold tracking-wider hover:border-emerald-300"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#059669]" />
                <span className="text-[#047857]">WhatsApp Me</span>
              </a>
            </div>

            {/* Plain text fallback with copy button */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#64748b]">
              <div className="flex flex-wrap items-center gap-2">
                <span>Email: <span className="text-[#0f172a] font-semibold select-all break-all">{siteConfig.author.email}</span></span>
                <span>•</span>
                <span>Phone: <span className="text-[#0f172a] font-semibold select-all">{siteConfig.author.phoneDisplay}</span></span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="min-h-[44px] inline-flex items-center gap-1 text-xs text-[#1d4ed8] hover:underline cursor-pointer font-semibold"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
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
