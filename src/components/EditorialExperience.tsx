"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building, Calendar, MapPin } from "lucide-react";
import { professionalExperience, leadershipExperience } from "@/data/experience";

export function EditorialExperience() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeExp = professionalExperience[selectedIndex];

  return (
    <section className="bg-[#172536] text-[#f4f1ea] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#22344a]/60">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#22344a] pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              02 / Track Record &amp; Operations
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#f4f1ea] leading-[1.1]">
              Operational experience in{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#d8a478]">
                finance
              </span>{" "}
              and technology.
            </h2>
          </div>

          <Link
            href="/experience"
            className="text-xs font-mono text-[#c28b5e] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Complete verified history</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Interactive Split Layout: Master / Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Experience Selector */}
          <div className="lg:col-span-5 space-y-3">
            <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider block mb-2">
              Select Experience to Review:
            </span>

            {professionalExperience.map((exp, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#101a27] border-[#c28b5e] shadow-md -translate-x-0.5"
                      : "bg-[#101a27]/40 border-[#22344a] hover:border-slate-500 hover:bg-[#101a27]/70"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                    <span className="text-[#c28b5e] font-semibold">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    {exp.company}
                  </h3>

                  <div className="text-xs text-slate-300 font-medium mt-0.5">
                    {exp.role}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Content Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#101a27] border border-[#22344a] space-y-6">
            {/* Header */}
            <div className="border-b border-[#22344a] pb-5 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#c28b5e] px-2.5 py-0.5 rounded bg-[#c28b5e]/10 border border-[#c28b5e]/30">
                  {activeExp.type}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  {activeExp.period}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                {activeExp.role}
              </h3>

              <div className="text-sm text-slate-300 font-medium flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-400" />
                <span>{activeExp.company}</span>
                {activeExp.division && (
                  <span className="text-[#38bdf8] font-mono text-xs">
                    · {activeExp.division}
                  </span>
                )}
              </div>
            </div>

            {/* Concise Bullet Points */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block font-semibold">
                Responsibilities &amp; Operational Exposure:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {activeExp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c28b5e] mt-2 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Tags */}
            <div className="pt-4 border-t border-[#22344a] flex flex-wrap gap-1.5">
              {activeExp.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-mono rounded bg-[#172536] border border-[#22344a] text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Secondary Leadership Strip (Compact) */}
        <div className="pt-6 border-t border-[#22344a] space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Institutional Leadership &amp; Student Bodies (PDEU)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {leadershipExperience.map((lead) => (
              <div
                key={lead.id}
                className="p-4 rounded-lg bg-[#101a27]/60 border border-[#22344a] space-y-1 text-xs"
              >
                <div className="font-mono text-[10px] text-[#c28b5e]">{lead.period}</div>
                <div className="font-bold text-white">{lead.role}</div>
                <div className="text-slate-400 text-[11px]">{lead.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
