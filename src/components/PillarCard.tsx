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
        return <TrendingUp className="w-4 h-4 text-[#d4af37]" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-[#38bdf8]" />;
      case "Code2":
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case "Compass":
        return <Compass className="w-4 h-4 text-amber-400" />;
      default:
        return <Activity className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <div className="group relative p-5 sm:p-6 bg-[#0a101f] hover:bg-[#0c1426] border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 flex flex-col justify-between hover:-translate-y-0.5">
      <div className="space-y-3">
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
            {getIcon()}
          </div>
          <span className="font-mono text-[10px] uppercase text-slate-500">
            {badge}
          </span>
        </div>

        {/* Title & Short Summary */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-white">
            {label}
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mt-1 line-clamp-2">
            {summary}
          </p>
        </div>

        {/* 2-3 Clean Highlights */}
        <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
          {highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
              <span className="leading-tight text-slate-300">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-3 border-t border-slate-800/60">
        <Link
          href={quickLink}
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] group-hover:text-[#e2c99a] transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
