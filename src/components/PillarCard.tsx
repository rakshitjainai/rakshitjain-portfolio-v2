import React from "react";
import Link from "next/link";
import { TrendingUp, Activity, Code2, Compass, ArrowRight } from "lucide-react";

interface PillarProps {
  id: string;
  label: string;
  badge: string;
  icon: string;
  summary: string;
  highlights: string[];
  quickLink: string;
}

export function PillarCard({
  id,
  label,
  badge,
  icon,
  summary,
  highlights,
  quickLink,
}: PillarProps) {
  const getIcon = () => {
    switch (icon) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5 text-[#d4af37]" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#38bdf8]" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-amber-400" />;
      default:
        return <Activity className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <div className="relative group flex flex-col justify-between p-6 sm:p-7 bg-[#0a101f]/90 hover:bg-[#0c1426] border border-slate-800 hover:border-slate-700/80 rounded-xl transition-all duration-200">
      <div className="space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors">
            {getIcon()}
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400 bg-slate-900/80 border border-slate-800 px-2.5 py-0.5 rounded-full">
            {badge}
          </span>
        </div>

        {/* Title & Summary */}
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
            {label}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
            {summary}
          </p>
        </div>

        {/* Highlight Bullets */}
        <div className="pt-2 border-t border-slate-800/80">
          <ul className="space-y-2 text-xs text-slate-300">
            {highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/80 mt-1.5 shrink-0" />
                <span className="leading-snug">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-4 border-t border-slate-800/60">
        <Link
          href={quickLink}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#e2c99a] transition-colors group/link"
        >
          <span>Explore Track & Evidence</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
