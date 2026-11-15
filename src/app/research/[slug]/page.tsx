import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Share2,
} from "lucide-react";
import { articlesData } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";
import { ArticleProgressBar } from "@/components/ArticleProgressBar";
import { ArticleTableOfContents } from "@/components/ArticleTableOfContents";
import { SmaBacktestChart } from "@/components/SmaBacktestChart";
import { BullionSettlementDiagram } from "@/components/BullionSettlementDiagram";
import { LegalTechWorkflowDiagram } from "@/components/LegalTechWorkflowDiagram";
import { StructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: `${article.title} | Rakshit Jain`,
      description: article.excerpt,
      url: `${siteConfig.url}/research/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
    },
    datePublished: article.date,
    dateModified: article.updatedDate || article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/research/${article.slug}`,
    },
    keywords: article.tags.join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Research",
        item: `${siteConfig.url}/research`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${siteConfig.url}/research/${article.slug}`,
      },
    ],
  };

  return (
    <>
      <StructuredData data={articleJsonLd} />
      <StructuredData data={breadcrumbJsonLd} />
      <ArticleProgressBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 space-y-12 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/research" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Research Archive</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-300 truncate max-w-xs sm:max-w-md">{article.title}</span>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl space-y-5 border-b border-slate-800 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-[#d4af37] uppercase tracking-wider text-[11px] font-mono">
              {article.category}
            </span>
            <div className="flex items-center gap-3 text-slate-400 text-xs font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published {article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-sans">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {article.subtitle}
          </p>

          <div className="pt-2 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-[#d4af37]">
              RJ
            </div>
            <div className="text-xs">
              <div className="font-semibold text-white">{article.author}</div>
              <div className="text-slate-400 text-[11px] font-mono">
                B.Tech ICT Student · PDEU (2023–2027)
              </div>
            </div>
          </div>
        </header>

        {/* Main Grid: Content + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-10">
            {/* Key Takeaways Callout */}
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#d4af37]">
                <BookOpen className="w-4 h-4" />
                <span>Executive Summary & Key Takeaways</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {article.keyTakeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* In-article Interactive Visualizations */}
            {slug === "iibx-and-indias-bullion-market" && (
              <div className="space-y-2">
                <BullionSettlementDiagram />
              </div>
            )}

            {slug === "sma-strategy-backtesting" && (
              <div className="space-y-2">
                <SmaBacktestChart />
              </div>
            )}

            {slug === "financial-workflows-and-fintech-products" && (
              <div className="space-y-2">
                <LegalTechWorkflowDiagram />
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-12">
              {article.contentSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="space-y-4 scroll-mt-24 border-b border-slate-800/60 pb-10"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                    {section.title}
                  </h2>
                  <div className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans space-y-4 whitespace-pre-line">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Citations & References Section */}
            {article.citations && article.citations.length > 0 && (
              <section id="references" className="pt-6 space-y-4">
                <div className="border-t border-slate-800 pt-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
                    Bibliography & Statutory Citations
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Primary Sources & Referenced Publications
                  </h3>
                </div>

                <div className="space-y-3">
                  {article.citations.map((cite) => (
                    <div
                      key={cite.id}
                      className="p-4 bg-slate-900/40 border border-slate-800 rounded-lg space-y-1 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <span className="font-semibold text-white">{cite.title}</span>
                        <span className="font-mono text-[11px] text-slate-500">
                          {cite.source} ({cite.year})
                        </span>
                      </div>
                      {cite.note && (
                        <p className="text-slate-400 text-[11px] leading-relaxed">{cite.note}</p>
                      )}
                      {cite.url && (
                        <a
                          href={cite.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-[#38bdf8] hover:underline pt-1 font-mono"
                        >
                          <span>Official Repository / Document Link</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Author Footer Card */}
            <div className="p-6 bg-[#0a101f] border border-slate-800 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="font-bold text-white text-sm">Author: Rakshit Jain</div>
                <p className="text-xs text-slate-400">
                  B.Tech ICT Student at PDEU interested in financial markets, quantitative analysis,
                  and software product development.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg bg-[#d4af37] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#c5a880] transition-colors shrink-0"
              >
                Discuss Article
              </Link>
            </div>
          </article>

          {/* Sticky Sidebar on Desktop */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              <ArticleTableOfContents items={article.tableOfContents} />

              {/* Related Articles Box */}
              <div className="p-5 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300">
                  Other Research Papers
                </h4>
                <div className="space-y-2.5 text-xs">
                  {articlesData
                    .filter((a) => a.slug !== article.slug)
                    .map((other) => (
                      <Link
                        key={other.slug}
                        href={`/research/${other.slug}`}
                        className="block p-2.5 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group"
                      >
                        <span className="font-mono text-[10px] text-[#d4af37] block">
                          {other.category}
                        </span>
                        <span className="font-medium text-slate-200 group-hover:text-white line-clamp-2 mt-0.5">
                          {other.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
