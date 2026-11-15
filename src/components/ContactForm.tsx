"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "finance",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError("Please provide your name, valid email address, and message.");
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 bg-slate-900/60 border border-emerald-800/60 rounded-xl space-y-4 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-700/60 flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">Message Prepared</h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
            Thank you, {formData.name}. Since this is an independent static personal site, you can
            also send this directly from your email client to ensure instant delivery.
          </p>
        </div>

        <div className="pt-2">
          <a
            href={`mailto:${siteConfig.author.email}?subject=${encodeURIComponent(
              `[${formData.inquiryType.toUpperCase()}] Inquiry from ${formData.name}`
            )}&body=${encodeURIComponent(
              `Name: ${formData.name}\nOrganization: ${formData.organization}\nType: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
            )}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#d4af37] text-slate-950 font-semibold text-xs transition-colors hover:bg-[#c5a880]"
          >
            <Mail className="w-4 h-4" />
            <span>Launch Email Client Directly</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              organization: "",
              inquiryType: "finance",
              message: "",
            });
          }}
          className="text-xs text-slate-500 hover:text-slate-300 underline block mx-auto pt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-rose-950/40 border border-rose-800/60 rounded-lg flex items-center gap-2 text-xs text-rose-300">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Recruiter / Inquiry Track Selector */}
      <div className="space-y-1.5">
        <label htmlFor="inquiryType" className="block text-xs font-mono uppercase text-slate-300">
          Area of Opportunity / Discussion
        </label>
        <select
          id="inquiryType"
          value={formData.inquiryType}
          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] transition-all"
        >
          <option value="finance">Financial Markets & Bullion Trading Operations</option>
          <option value="quant">Quantitative Analysis & Trading Strategies</option>
          <option value="tech">Software Engineering & Full Stack Development</option>
          <option value="product">Product Management & Workflow Analysis</option>
          <option value="general">General Professional Inquiry</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-mono uppercase text-slate-300">
            Your Name <span className="text-[#d4af37]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Sarah Jenkins"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder:text-slate-600 transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-mono uppercase text-slate-300">
            Your Email <span className="text-[#d4af37]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. sarah@firm.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder:text-slate-600 transition-all"
          />
        </div>
      </div>

      {/* Organization */}
      <div className="space-y-1.5">
        <label htmlFor="organization" className="block text-xs font-mono uppercase text-slate-300">
          Organization / Institution (Optional)
        </label>
        <input
          id="organization"
          type="text"
          value={formData.organization}
          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          placeholder="e.g. Morgan Stanley / FinTech Venture"
          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder:text-slate-600 transition-all"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-mono uppercase text-slate-300">
          Message <span className="text-[#d4af37]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please share details regarding the opportunity, team, or inquiry..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37] placeholder:text-slate-600 transition-all resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d4af37]"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Transmit Message</span>
      </button>
    </form>
  );
}
