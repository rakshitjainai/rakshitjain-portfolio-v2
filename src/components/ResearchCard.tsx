import React from "react";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { ArticleItem } from "@/types";

interface ResearchCardProps {
  article: ArticleItem;
}

export function ResearchCard({ article }: ResearchCardProps) {
  return (
    <article className="group flex flex-col justify-between p-6 sm:p-8 bg-[#0a101f] hover:bg-[#0c1426] border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200">
      <div className="space-y-4">
        {/* Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
          <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[#d4af37] uppercase tracking-wider text-[10px]">
            {article.category}
          </span>
          <div className="flex items-center gap-3 text-slate-500 text-[11px]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#38bdf8]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#f8fafc] transition-colors leading-snug">
            <Link href={`/research/${article.slug}`} className="focus:outline-none focus-visible:underline">
              {article.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            {article.subtitle}
          </p>
        </div>

        {/* Excerpt */}
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>

        {/* Key Takeaways preview */}
        <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block font-semibold">
            Key Research Findings:
          </span>
          <ul className="space-y-1 text-xs text-slate-300">
            {article.keyTakeaways.slice(0, 2).map((k, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
                <span className="leading-snug line-clamp-2">{k}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {article.tags.map((t, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800/80 text-slate-400"
            >
              #{t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-4 border-t border-slate-800/80">
        <Link
          href={`/research/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] group-hover:text-[#e2c99a] transition-colors"
        >
          <span>Read Full Article & Citations</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
