import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articlesData } from "@/data/articles";

export function ArticlesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1280px] mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e3e8ef] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
            Writing
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a]">
            Writing
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] font-sans">
            Three articles on market structure, a quantitative strategy and fintech workflows.
          </p>
        </div>

        <Link
          href="/research"
          className="text-xs font-mono text-[#2563eb] hover:underline flex items-center gap-1 shrink-0 font-semibold"
        >
          <span>View all articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <article
            key={article.slug}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs flex flex-col justify-between space-y-5 hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#64748b]">
                <span className="text-[#2563eb] font-bold uppercase">{article.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0ea5a4]" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] font-sans leading-snug">
                <Link
                  href={`/research/${article.slug}`}
                  className="hover:text-[#2563eb] transition-colors"
                >
                  {article.title}
                </Link>
              </h3>

              {/* Summary Block */}
              <div className="p-3.5 rounded-lg bg-[#f8fafc] border border-[#e3e8ef] text-xs text-[#475569] leading-relaxed font-sans">
                <span className="font-mono text-[10px] text-[#2563eb] uppercase block font-bold mb-1">
                  Summary
                </span>
                {article.excerpt}
              </div>
            </div>

            <div className="pt-2 border-t border-[#e3e8ef]">
              <Link
                href={`/research/${article.slug}`}
                className="text-xs font-mono font-bold text-[#1d4ed8] hover:underline inline-flex items-center gap-1 group min-h-[44px]"
              >
                <span>Read article</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
