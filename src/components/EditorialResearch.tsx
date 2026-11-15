import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { articlesData } from "@/data/articles";

export function EditorialResearch() {
  return (
    <section className="bg-[#172536] text-[#f4f1ea] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#22344a] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Introduction */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#22344a] pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              06 / Editorial Publications
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#f4f1ea] leading-[1.1]">
              Original analysis, published{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#d8a478]">
                thought.
              </span>
            </h2>
          </div>

          <Link
            href="/research"
            className="text-xs font-mono text-[#c28b5e] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Browse research archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Magazine-Inspired Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Lead Article (Left 7 Cols) */}
          <div className="lg:col-span-7">
            {articlesData.slice(0, 1).map((article) => (
              <article
                key={article.slug}
                className="group p-8 rounded-xl bg-[#101a27] border border-[#22344a] hover:border-[#c28b5e]/60 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#c28b5e] uppercase font-semibold tracking-wider">
                      Featured Publication · {article.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#d8a478] transition-colors font-sans leading-snug">
                    <Link href={`/research/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {article.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-[#172536] text-slate-300 border border-[#22344a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#22344a] flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    {article.date} · Peer Citations Included
                  </span>
                  <Link
                    href={`/research/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#c28b5e] group-hover:text-white transition-colors"
                  >
                    <span>Read Full Paper</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Secondary Stacked Papers (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {articlesData.slice(1, 3).map((article) => (
              <article
                key={article.slug}
                className="group p-6 rounded-xl bg-[#101a27] border border-[#22344a] hover:border-[#c28b5e]/60 transition-all duration-300 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#38bdf8] uppercase font-semibold">
                    {article.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#d8a478] transition-colors leading-snug">
                  <Link href={`/research/${article.slug}`}>
                    {article.title}
                  </Link>
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="pt-3 border-t border-[#22344a] flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 text-[11px]">{article.date}</span>
                  <Link
                    href={`/research/${article.slug}`}
                    className="text-[#c28b5e] group-hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Read Paper</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
