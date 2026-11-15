import React from "react";
import Link from "next/link";
import { ArrowRight, UserCheck, MapPin } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Background
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          About Me
        </h2>
      </div>

      <div className="p-8 sm:p-10 rounded-2xl bg-[#111317] border border-[#22262e] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Photo Placeholder (4 cols) */}
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

        {/* Short About Copy: Exactly 73 words (Strictly under 90 words) */}
        <div className="md:col-span-8 space-y-4">
          <p className="text-base sm:text-lg text-[#f2efe8] leading-relaxed font-sans font-light">
            I am a third-year ICT student at PDEU in Gandhinagar. My focus is on the operational and
            quantitative mechanics of financial markets, combined with full-stack software development.
            During my internship at GIFT City, I saw how exchange infrastructure and compliance workflows
            function in practice. When building software, I care about reducing manual friction and
            creating reliable systems. Outside coursework, I run operations for campus technical bodies
            and test quantitative strategies in Python.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
            <span className="text-[#8b8f97]">
              PDEU Class of 2027 · Gandhinagar / Ahmedabad
            </span>
            <Link
              href="/about"
              className="text-[#c8a15a] hover:underline inline-flex items-center gap-1"
            >
              <span>Full background page</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
