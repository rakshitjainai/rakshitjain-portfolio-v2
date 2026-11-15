"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Clock, MapPin, Copy, Check, Send, Calendar, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    role: "",
    message: "",
    honeypot: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.author.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.honeypot) {
      // Spam detected
      return;
    }
    setSubmitting(true);

    // Direct mailto link fallback with prefilled form values
    const subject = encodeURIComponent(`Internship / Role Inquiry: ${formState.role || "General"} at ${formState.company || "Company"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nCompany: ${formState.company}\nTarget Role: ${formState.role}\n\nMessage:\n${formState.message}`
    );

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      window.location.href = `mailto:${siteConfig.author.email}?subject=${subject}&body=${body}`;
    }, 400);
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Initiate Contact
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          Let&apos;s Discuss an Opportunity
        </h2>
        <p className="text-xs sm:text-sm text-[#8b8f97] max-w-2xl font-sans">
          Actively interviewing for Summer 2027 internships across Markets/Trading Operations, Quantitative Analysis, and Software Engineering/Product.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info & Conveniences (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#111317] border border-[#22262e] space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#c8a15a] uppercase font-semibold">
                <Clock className="w-4 h-4" />
                <span>Response Guarantee</span>
              </div>
              <p className="text-sm font-bold text-[#f2efe8] font-sans">
                I reply to all recruiter and hiring manager messages within 24 hours.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#8b8f97]">
                <MapPin className="w-3.5 h-3.5 text-[#8b8f97]" />
                <span>Gandhinagar / Ahmedabad, Gujarat, India (Open to Relocate &amp; Remote)</span>
              </div>
            </div>

            {/* Email Box with Copy Button */}
            <div className="p-4 rounded-xl bg-[#0a0b0d] border border-[#22262e] space-y-2">
              <span className="font-mono text-[10px] uppercase text-[#8b8f97] block">
                Direct Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${siteConfig.author.email}?subject=Internship%20Inquiry%20-%20Rakshit%20Jain`}
                  className="text-xs sm:text-sm font-mono text-[#f2efe8] hover:text-[#c8a15a] transition-colors truncate"
                >
                  {siteConfig.author.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded bg-[#111317] border border-[#22262e] hover:border-slate-400 text-[11px] font-mono text-[#c8a15a] flex items-center gap-1 shrink-0 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Cal Placeholder */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-xs font-mono text-[#f2efe8] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8b8f97]" />
                </a>

                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-[#22262e] hover:border-slate-400 bg-[#0a0b0d] text-xs font-mono text-[#f2efe8] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-[#8b8f97]" />
                </a>
              </div>

              {/* Calendly / Cal.com Placeholder */}
              <div className="p-3 rounded-lg bg-[#0a0b0d] border border-[#22262e] flex items-center justify-between text-xs font-mono text-[#8b8f97]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#c8a15a]" />
                  <span>Schedule Call:</span>
                </span>
                <span className="text-[#c8a15a]">[TODO: link Calendly / Cal.com]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recruiter Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111317] border border-[#22262e] space-y-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-[#f2efe8] font-sans">
                Recruiter Direct Message
              </h3>
              <p className="text-xs text-[#8b8f97]">
                Fill out the role details below to initiate contact directly.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-[#0a0b0d] border border-emerald-500/40 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-[#f2efe8]">Message Draft Prepared</h4>
                <p className="text-xs text-[#8b8f97]">
                  Your email client has been opened with your inquiry pre-filled. I will review and reply within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-[#c8a15a] underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot Spam Protection (Hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formState.honeypot}
                  onChange={(e) => setFormState({ ...formState, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-xs text-[#8b8f97] block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-xs text-[#f2efe8] placeholder-[#8b8f97]/50 focus:outline-none focus:border-[#c8a15a]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-xs text-[#8b8f97] block">Company / Fund *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Rathi, Morgan Stanley"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-xs text-[#f2efe8] placeholder-[#8b8f97]/50 focus:outline-none focus:border-[#c8a15a]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs text-[#8b8f97] block">Target Role / Program</label>
                  <input
                    type="text"
                    placeholder="e.g. Trading Operations Intern / Quant Analyst Summer 2027"
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-xs text-[#f2efe8] placeholder-[#8b8f97]/50 focus:outline-none focus:border-[#c8a15a]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs text-[#8b8f97] block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Briefly state opportunity details, timelines, or location requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-xs text-[#f2efe8] placeholder-[#8b8f97]/50 focus:outline-none focus:border-[#c8a15a]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 px-4 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] font-mono font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? "Preparing..." : "Send Message to Rakshit"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
