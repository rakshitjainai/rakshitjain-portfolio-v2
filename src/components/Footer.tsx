import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, MapPin, Phone, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-[#0b1220] text-[#94a3b8] font-sans text-sm mt-auto overflow-hidden">
      {/* Brand gradient top hairline (2px) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#0ea5a4] to-[#10b981]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Identity & Scope */}
          <div className="lg:col-span-2 space-y-3">
            <div className="space-y-1">
              <span className="font-sans font-bold tracking-wider text-base text-[#e6edf7] block">
                RAKSHIT JAIN
              </span>
              <span className="font-mono text-xs tracking-widest text-[#38bdf8] block uppercase font-semibold">
                Markets · Quantitative Analysis · Software
              </span>
            </div>
            <p className="text-[#94a3b8] text-xs sm:text-sm leading-relaxed max-w-sm">
              B.Tech ICT student at Pandit Deendayal Energy University (2023–2027) working across financial markets operations, quantitative research, and software engineering.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#94a3b8] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Gandhinagar, Gujarat, India</span>
            </div>
          </div>

          {/* Site Pages */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e6edf7]">
              Pages
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={siteConfig.resume.primaryPdf}
                  download={siteConfig.resume.filename}
                  className="text-[#38bdf8] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors">
                  Resume &amp; Tracks
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/research" className="hover:text-white transition-colors">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Projects & Writing */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e6edf7]">
              Selected Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/projects#market-sentiment-analyzer"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  Market Sentiment Analyzer (20/50 SMA)
                </Link>
              </li>
              <li>
                <a
                  href="https://lawprix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  LawPrix (Buildathon 2nd Runner-Up)
                </a>
              </li>
              <li>
                <Link
                  href="/research/iibx-and-indias-bullion-market"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  IIBX &amp; Indian Bullion Market
                </Link>
              </li>
              <li>
                <Link
                  href="/research/sma-strategy-backtesting"
                  className="hover:text-white transition-colors line-clamp-1"
                >
                  SMA Crossover Backtesting
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#e6edf7]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={`mailto:${siteConfig.author.email}?subject=Hello%20Rakshit`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-[#38bdf8]" />
                <span className="truncate">{siteConfig.author.email}</span>
              </a>
              <a
                href={`tel:${siteConfig.author.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-[#38bdf8]" />
                <span>{siteConfig.author.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.author.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#10b981]" />
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-[#94a3b8]" />
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-[#38bdf8]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#94a3b8]" />
              </a>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#94a3b8] group-hover:text-white" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#94a3b8]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 mt-8 border-t border-[#1e293b] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94a3b8]">
          <div>
            © {currentYear} Rakshit Jain · Gandhinagar, Gujarat, India.
          </div>
          <div>
            Pandit Deendayal Energy University (2023–2027)
          </div>
        </div>
      </div>
    </footer>
  );
}
