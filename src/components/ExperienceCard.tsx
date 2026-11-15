import React from "react";
import { Building, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { ExperienceItem } from "@/types";

interface ExperienceCardProps {
  experience: ExperienceItem;
  featured?: boolean;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div
      id={experience.id}
      className="group relative pl-6 sm:pl-8 border-l-2 border-slate-800 hover:border-[#d4af37] transition-all duration-200 pb-10 last:pb-0"
    >
      {/* Timeline Node Dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#070b14] border-2 border-slate-700 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] transition-all duration-200" />

      <div className="space-y-3">
        {/* Header: Role, Dates, Company */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
          <div>
            <span className="font-bold text-white text-base sm:text-lg block sm:inline">
              {experience.role}
            </span>
            <span className="text-slate-400 sm:ml-2">
              — <strong className="text-slate-200">{experience.company}</strong>
            </span>
            {experience.division && (
              <span className="font-mono text-xs text-[#38bdf8] ml-2">
                ({experience.division})
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400 shrink-0">
            <span className="text-[#d4af37]">{experience.period}</span>
            <span>•</span>
            <span className="text-slate-500">{experience.location}</span>
          </div>
        </div>

        {/* Crisp Bullet Points */}
        <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 pt-1">
          {experience.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="leading-relaxed">{resp}</span>
            </li>
          ))}
        </ul>

        {/* Skills Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          {experience.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900/80 border border-slate-800 text-slate-400 group-hover:text-slate-300 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
