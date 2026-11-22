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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1280px] mx-auto space-y-10">
      <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          Contact
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a]">
          Contact
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] max-w-2xl font-sans">
          The best way to reach me is email, phone or WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Direct Action Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#0f172a] font-sans">
                Direct Communication
              </h3>
              <p className="text-xs text-[#475569] font-sans">
                Reach out directly via your preferred channel.
              </p>
            </div>

            {/* Three Contact Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
                className="w-full min-h-[48px] p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] hover:border-[#2563eb]/60 hover:bg-blue-50/40 transition-all flex sm:flex-col items-center justify-start sm:justify-center gap-3 text-left sm:text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0f172a] block">Email Me</span>
                  <span className="text-[10px] font-mono text-[#64748b]">Direct inbox</span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.author.phone}`}
                className="w-full min-h-[48px] p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] hover:border-[#2563eb]/60 hover:bg-blue-50/40 transition-all flex sm:flex-col items-center justify-start sm:justify-center gap-3 text-left sm:text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#2563eb] group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0f172a] block">Call Me</span>
                  <span className="text-[10px] font-mono text-[#64748b]">{siteConfig.author.phoneDisplay}</span>
                </div>
              </a>

              <a
                href={siteConfig.author.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] p-3.5 sm:p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] hover:border-emerald-400/70 hover:bg-emerald-50/40 transition-all flex sm:flex-col items-center justify-start sm:justify-center gap-3 text-left sm:text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#059669] group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#0f172a] block">WhatsApp Me</span>
                  <span className="text-[10px] font-mono text-[#64748b]">Message on WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Plain text fallback with copy helpers */}
            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#64748b] block font-bold">
                Direct Contact Details
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono pt-1 border-t border-[#e3e8ef]">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span className="text-[#64748b]">Email:</span>
                  <span className="text-[#0f172a] font-semibold select-all">{siteConfig.author.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#1d4ed8] hover:bg-blue-50 self-start sm:self-auto cursor-pointer font-semibold transition-colors"
                  aria-label="Copy email address to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold" aria-live="polite">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono pt-2 border-t border-[#e3e8ef]">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#2563eb]" />
                  <span className="text-[#64748b]">Phone:</span>
                  <span className="text-[#0f172a] font-semibold select-all">{siteConfig.author.phoneDisplay}</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-[#1d4ed8] hover:bg-blue-50 self-start sm:self-auto cursor-pointer font-semibold transition-colors"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold" aria-live="polite">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
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
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#0f172a] font-sans">
                Profiles &amp; Location
              </h3>
              <p className="text-xs text-[#475569] font-sans">
                Online profiles and base location.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3.5 rounded-xl border border-[#e3e8ef] hover:border-[#2563eb]/50 bg-[#f8fafc] text-xs font-mono font-medium text-[#0f172a] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0284c7]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#2563eb] transition-colors" />
              </a>

              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between p-3.5 rounded-xl border border-[#e3e8ef] hover:border-[#2563eb]/50 bg-[#f8fafc] text-xs font-mono font-medium text-[#0f172a] transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-[#0f172a]" />
                  <span>GitHub Profile</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#2563eb] transition-colors" />
              </a>
            </div>

            <div className="pt-2 border-t border-[#e3e8ef] flex items-start gap-2.5 text-xs font-mono text-[#475569]">
              <MapPin className="w-4 h-4 text-[#2563eb] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#0f172a] block">Gandhinagar, Gujarat, India</span>
                <span className="text-[11px] text-[#64748b]">Pandit Deendayal Energy University (PDEU)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
