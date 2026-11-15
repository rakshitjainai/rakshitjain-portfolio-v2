import React from "react";
import { Briefcase, Building, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { ExperienceItem } from "@/types";

interface ExperienceCardProps {
  experience: ExperienceItem;
  featured?: boolean;
}

export function ExperienceCard({ experience, featured = false }: ExperienceCardProps) {
  return (
    <article
      id={experience.id}
      className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-200 ${
        featured
          ? "bg-[#0a101f] border-slate-700/80 shadow-md"
          : "bg-[#090e1c]/80 border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className="space-y-5">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-100">
                {experience.role}
              </h3>
              <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-slate-800 text-[#d4af37] border border-slate-700">
                {experience.type}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5 font-medium text-white">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                <span>{experience.company}</span>
              </div>
              {experience.division && (
                <span className="font-mono text-xs text-[#38bdf8]">
                  ({experience.division})
                </span>
              )}
            </div>
          </div>

          {/* Timeline & Location */}
          <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400 shrink-0">
            <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded">
              <Calendar className="w-3 h-3 text-[#d4af37]" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <MapPin className="w-3 h-3" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {experience.summary}
        </p>

        {/* Responsibilities list */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Core Responsibilities & Technical Exposure:
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {experience.responsibilities.map((resp, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verification callout if available */}
        {experience.verificationHighlights && experience.verificationHighlights.length > 0 && (
          <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-lg space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#d4af37]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider">Verifiable Evidence Highlights</span>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
              {experience.verificationHighlights.map((vh, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-slate-800/70 border border-slate-700/60 text-slate-300"
                >
                  {vh}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Skills pill tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
