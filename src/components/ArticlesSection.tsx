import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { articlesData } from "@/data/articles";

export function ArticlesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#22262e] pb-6">
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
            Writing
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
            Writing
          </h2>
          <p className="text-xs sm:text-sm text-[#8b8f97] font-sans">
            Three articles on market structure, a quantitative strategy and fintech workflows.
          </p>
        </div>

        <Link
          href="/research"
          className="text-xs font-mono text-[#c8a15a] hover:underline flex items-center gap-1 shrink-0"
        >
          <span>View all articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {articlesData.map((article) => (
          <article
            key={article.slug}
            className="p-6 sm:p-7 rounded-2xl bg-[#111317] border border-[#22262e] flex flex-col justify-between space-y-5 hover:border-[#c8a15a]/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8b8f97]">
                <span className="text-[#c8a15a] font-semibold uppercase">{article.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#f2efe8] font-sans leading-snug">
                <Link
                  href={`/research/${article.slug}`}
                  className="hover:text-[#c8a15a] transition-colors"
                >
                  {article.title}
                </Link>
              </h3>

              {/* Summary Block */}
              <div className="p-3 rounded-lg bg-[#0a0b0d] border border-[#22262e] text-xs text-[#8b8f97] leading-relaxed font-sans">
                <span className="font-mono text-[10px] text-[#c8a15a] uppercase block font-semibold mb-1">
                  Summary
                </span>
                {article.excerpt}
              </div>
            </div>

            <div className="pt-3 border-t border-[#22262e] flex items-center justify-between text-xs font-mono text-[#8b8f97]">
              <span>By {article.author} · {article.date}</span>
              <Link
                href={`/research/${article.slug}`}
                className="text-[#c8a15a] hover:underline inline-flex items-center gap-1"
              >
                <span>Read article</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
