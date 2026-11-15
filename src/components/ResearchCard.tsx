import React from "react";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { ArticleItem } from "@/types";

interface ResearchCardProps {
  article: ArticleItem;
}

export function ResearchCard({ article }: ResearchCardProps) {
  return (
    <article className="group flex flex-col justify-between p-6 bg-[#0a101f] hover:bg-[#0c1426] border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 hover:-translate-y-0.5">
      <div className="space-y-3">
        {/* Meta Header */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[#d4af37] text-[10px] uppercase tracking-wider">
            {article.category}
          </span>
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <span>{article.date}</span>
            <span>•</span>
            <span className="text-[#38bdf8]">{article.readTime}</span>
          </div>
        </div>

        {/* Title & One-line Summary */}
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#f8fafc] transition-colors leading-snug">
            <Link href={`/research/${article.slug}`} className="focus:outline-none">
              {article.title}
            </Link>
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
            {article.subtitle}
          </p>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-4 mt-4 border-t border-slate-800/80">
        <Link
          href={`/research/${article.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] group-hover:text-[#e2c99a] transition-colors"
        >
          <span>Read Paper</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
