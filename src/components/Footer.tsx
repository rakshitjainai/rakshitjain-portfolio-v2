import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#050811] border-t border-white/[0.08] text-slate-400 font-sans text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-sans font-semibold tracking-wider text-base text-slate-100 block">
                RAKSHIT JAIN
              </span>
              <span className="font-mono text-xs tracking-widest text-[#d4af37] block uppercase">
                Finance · Technology · Product
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              B.Tech ICT student at Pandit Deendayal Energy University (PDEU) interested in financial
              market infrastructure, quantitative analysis, software engineering, and data-informed
              product development.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Available for relevant internships & early-career roles</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/resume"
                  className="text-[#d4af37] hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Curated Resumes</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Case Studies */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Research & Articles
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/research/iibx-and-indias-bullion-market"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  IIBX & India&apos;s Bullion Market
                </Link>
              </li>
              <li>
                <Link
                  href="/research/sma-strategy-backtesting"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  20/50 SMA Crossover Backtest
                </Link>
              </li>
              <li>
                <Link
                  href="/research/financial-workflows-and-fintech-products"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  Financial Workflows & FinTech
                </Link>
              </li>
              <li>
                <Link
                  href="/product-thinking"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  Product Thinking: LawPrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Connect & Verify
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#d4af37]" />
                <span className="truncate">{siteConfig.author.email}</span>
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#38bdf8]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Authenticity & Disclaimers */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              All professional internships, dates, and projects are authentic, verified against
              official institutional records and GitHub code repositories.
            </span>
          </div>
          <div className="shrink-0 text-center sm:text-right">
            © {currentYear} Rakshit Jain. Built with Next.js & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
}
