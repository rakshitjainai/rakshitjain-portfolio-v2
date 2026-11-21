import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { articlesData } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";
import { ArticleProgressBar } from "@/components/ArticleProgressBar";
import { ArticleTableOfContents, MobileTableOfContents } from "@/components/ArticleTableOfContents";
import { BullionSettlementDiagram } from "@/components/BullionSettlementDiagram";
import { SmaBacktestChart } from "@/components/SmaBacktestChart";
import { LegalTechWorkflowDiagram } from "@/components/LegalTechWorkflowDiagram";
import { StructuredData } from "@/components/StructuredData";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const metaTitles: Record<string, string> = {
    "iibx-and-indias-bullion-market": "IIBX & India Bullion Market Architecture",
    "sma-strategy-backtesting": "20/50 SMA Crossover Backtest & Strategy Analysis",
    "financial-workflows-and-fintech-products": "Financial Workflows to FinTech Products",
  };

  const metaDescriptions: Record<string, string> = {
    "iibx-and-indias-bullion-market":
      "In-depth analysis of India International Bullion Exchange (IIBX), Bullion Depository Receipts (BDRs), vault custody, and Qualified Jeweller onboarding.",
    "sma-strategy-backtesting":
      "Quantitative evaluation of a 20/50 SMA crossover strategy on INFY and TATAINVEST, analyzing Sharpe ratio, drawdown reduction, and market frictions.",
    "financial-workflows-and-fintech-products":
      "Product engineering analysis on bridging the interface gap in institutional finance, Compliance as Code, and lessons from the LawPrix platform.",
  };

  const metaTitle = metaTitles[slug] || article.title;
  const metaDescription = metaDescriptions[slug] || article.excerpt;

  return {
    title: metaTitle,
    description: metaDescription,
    authors: [{ name: article.author, url: siteConfig.url }],
    alternates: {
      canonical: `${siteConfig.url}/research/${article.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}/research/${article.slug}`,
      title: `${metaTitle} | Rakshit Jain`,
      description: metaDescription,
      publishedTime: article.date,
      modifiedTime: article.updatedDate || article.date,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${metaTitle} — Rakshit Jain`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${metaTitle} | Rakshit Jain`,
      description: metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
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
      jobTitle: "Student, B.Tech ICT",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Pandit Deendayal Energy University (PDEU)",
      },
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 space-y-12 pb-24">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#475569]">
          <Link href="/research" className="hover:text-[#0f172a] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Research Archive</span>
          </Link>
          <span className="text-[#e3e8ef]">/</span>
          <span className="text-[#0f172a] truncate max-w-xs sm:max-w-md">{article.title}</span>
        </div>

        {/* Article Header & Byline */}
        <header className="max-w-4xl space-y-5 border-b border-[#e3e8ef] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-blue-50 border border-blue-200/80 text-[#1d4ed8] uppercase tracking-wider text-[11px] font-mono font-semibold">
              {article.category}
            </span>
            <div className="flex items-center gap-3 text-[#64748b] text-xs font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Published: {article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <span>Updated: {article.updatedDate || article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-[#2563eb] font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] tracking-tight leading-tight font-serif-display">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed">
            {article.subtitle}
          </p>

          {/* Visible Author Byline for Citability */}
          <div className="pt-2 flex items-center gap-3 border-t border-[#e3e8ef]">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
              RJ
            </div>
            <div className="text-xs">
              <div className="font-semibold text-[#0f172a]">{article.author}</div>
              <div className="text-[#64748b] text-[11px] font-mono">
                B.Tech ICT · PDEU (2023–2027) · Gandhinagar, Gujarat
              </div>
            </div>
          </div>

          {/* Single Summary Block */}
          <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-200 text-xs text-[#0f172a] leading-relaxed font-sans space-y-1">
            <span className="font-mono text-[10px] text-[#1d4ed8] uppercase block font-semibold">
              Summary
            </span>
            <p>{article.excerpt}</p>
          </div>

          {/* Mobile Collapsible "On this page" TOC (Visible on < lg screens) */}
          <div className="block lg:hidden pt-2">
            <MobileTableOfContents items={article.tableOfContents} />
          </div>
        </header>

        {/* Main Grid: Content + Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-10">
            {/* In-article Visualizations */}
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

            {/* Content Sections rendered via MarkdownRenderer */}
            <div className="space-y-12">
              {article.contentSections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="space-y-4 scroll-mt-24 border-b border-[#e3e8ef] pb-10"
                >
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight font-sans">
                    {section.title}
                  </h2>
                  <div className="text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                    <MarkdownRenderer content={section.content} />
                  </div>
                </section>
              ))}
            </div>

            {/* Citations & References Section */}
            {article.citations && article.citations.length > 0 && (
              <section id="references" className="pt-6 space-y-4">
                <div className="border-t border-[#e3e8ef] pt-6">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
                    References &amp; Citations
                  </span>
                  <h3 className="text-lg font-bold text-[#0f172a] mt-1 font-sans">
                    Primary Sources &amp; Publications
                  </h3>
                </div>

                <div className="space-y-3">
                  {article.citations.map((cite) => (
                    <div
                      key={cite.id}
                      className="p-4 rounded-lg bg-white border border-[#e3e8ef] text-xs space-y-1 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-bold text-[#0f172a]">{cite.title}</span>
                        {cite.url && (
                          <a
                            href={cite.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#2563eb] hover:underline flex items-center gap-1 shrink-0 font-mono text-[11px] font-medium"
                          >
                            <span>Source</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                      <div className="text-[#64748b] font-mono text-[11px]">
                        {cite.source} ({cite.year})
                      </div>
                      <p className="text-[#475569] text-[11px] pt-1">{cite.note}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sticky Sidebar: Table of Contents */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <ArticleTableOfContents items={article.tableOfContents} />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
