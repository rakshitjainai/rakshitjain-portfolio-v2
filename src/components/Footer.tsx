import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0b121c] border-t border-[#22344a] text-slate-400 font-sans text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Identity & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-1">
              <span className="font-sans font-semibold tracking-wider text-base text-[#f4f1ea] block">
                RAKSHIT JAIN
              </span>
              <span className="font-mono text-xs tracking-widest text-[#c28b5e] block uppercase">
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
              <span>Available for relevant internships &amp; early-career roles</span>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f4f1ea]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-mono">
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
                  className="text-[#c28b5e] hover:underline transition-colors flex items-center gap-1"
                >
                  <span>Curated Resumes</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Case Studies */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f4f1ea]">
              Research &amp; Papers
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/research/iibx-and-indias-bullion-market"
                  className="hover:text-[#f4f1ea] transition-colors line-clamp-1"
                >
                  IIBX &amp; India&apos;s Bullion Market
                </Link>
              </li>
              <li>
                <Link
                  href="/research/sma-strategy-backtesting"
                  className="hover:text-[#f4f1ea] transition-colors line-clamp-1"
                >
                  20/50 SMA Crossover Backtest
                </Link>
              </li>
              <li>
                <Link
                  href="/research/financial-workflows-and-fintech-products"
                  className="hover:text-[#f4f1ea] transition-colors line-clamp-1"
                >
                  Financial Workflows &amp; FinTech
                </Link>
              </li>
              <li>
                <Link
                  href="/product-thinking"
                  className="hover:text-[#f4f1ea] transition-colors line-clamp-1"
                >
                  Product Thinking: LawPrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#f4f1ea]">
              Connect &amp; Verify
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm font-mono">
              <a
                href={`mailto:${siteConfig.author.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#c28b5e]" />
                <span className="truncate">{siteConfig.author.email}</span>
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#4a7c9b]" />
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
        <div className="pt-8 mt-8 border-t border-[#22344a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-[#c28b5e] shrink-0" />
            <span>
              All professional internships, dates, and projects are authentic, verified against
              official institutional records and GitHub code repositories.
            </span>
          </div>
          <div className="shrink-0 text-center sm:text-right font-mono text-[11px]">
            © {currentYear} Rakshit Jain. Designed with Editorial Craft.
          </div>
        </div>
      </div>
    </footer>
  );
}
