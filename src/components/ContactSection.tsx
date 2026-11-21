"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, Phone, MessageSquare, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.author.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Contact
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          Contact
        </h2>
        <p className="text-xs sm:text-sm text-[#8b8f97] max-w-2xl font-sans">
          The best way to reach me is email, phone or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Action Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-[#22262e] space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#f2efe8] font-sans">
                Direct Communication
              </h3>
              <p className="text-xs text-[#8b8f97] font-sans">
                Reach out directly via your preferred channel.
              </p>
            </div>

            {/* Three Contact Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
                className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] hover:border-[#c8a15a] transition-all flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#111317] border border-[#22262e] flex items-center justify-center text-[#c8a15a] group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#f2efe8] block">Email Me</span>
                  <span className="text-[10px] font-mono text-[#8b8f97]">Direct inbox</span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.author.phone}`}
                className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] hover:border-[#c8a15a] transition-all flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#111317] border border-[#22262e] flex items-center justify-center text-[#c8a15a] group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#f2efe8] block">Call Me</span>
                  <span className="text-[10px] font-mono text-[#8b8f97]">{siteConfig.author.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={siteConfig.author.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] hover:border-[#22c55e] transition-all flex flex-col items-center justify-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#111317] border border-[#22262e] flex items-center justify-center text-[#22c55e] group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#f2efe8] block">WhatsApp Me</span>
                  <span className="text-[10px] font-mono text-[#8b8f97]">Instant callback request</span>
                </div>
              </a>
            </div>

            {/* Plain text fallback with copy helpers */}
            <div className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#8b8f97] block font-semibold">
                Direct Contact Details
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono pt-1 border-t border-[#22262e]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#c8a15a]" />
                  <span className="text-[#8b8f97]">Email:</span>
                  <span className="text-[#f2efe8] select-all">{siteConfig.author.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-[#c8a15a] hover:underline self-start sm:self-auto cursor-pointer"
                >
                  {copiedEmail ? (
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

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono pt-2 border-t border-[#22262e]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#c8a15a]" />
                  <span className="text-[#8b8f97]">Phone:</span>
                  <span className="text-[#f2efe8] select-all">{siteConfig.author.phoneDisplay}</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-[11px] text-[#c8a15a] hover:underline self-start sm:self-auto cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy phone</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Channels & Location (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-[#22262e] space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#f2efe8] font-sans">
                Profiles &amp; Location
              </h3>
              <p className="text-xs text-[#8b8f97] font-sans">
                Online profiles and base location.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3.5 rounded-xl border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-xs font-mono text-[#f2efe8] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#38bdf8]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8f97] group-hover:text-white" />
              </a>

              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3.5 rounded-xl border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-xs font-mono text-[#f2efe8] transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8b8f97] group-hover:text-white" />
              </a>
            </div>

            <div className="pt-2 border-t border-[#22262e] flex items-start gap-2.5 text-xs font-mono text-[#8b8f97]">
              <MapPin className="w-4 h-4 text-[#c8a15a] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#f2efe8] block">Gandhinagar, Gujarat, India</span>
                <span className="text-[11px]">Pandit Deendayal Energy University (PDEU)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
