import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0a0b0d] border-t border-[#22262e] text-[#8b8f97] font-sans text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Identity & Scope */}
          <div className="lg:col-span-2 space-y-3">
            <div className="space-y-1">
              <span className="font-sans font-bold tracking-wider text-base text-[#f2efe8] block">
                RAKSHIT JAIN
              </span>
              <span className="font-mono text-xs tracking-widest text-[#c8a15a] block uppercase">
                Markets · Quantitative Analysis · Software
              </span>
            </div>
            <p className="text-[#8b8f97] text-xs sm:text-sm leading-relaxed max-w-sm">
              B.Tech ICT student at Pandit Deendayal Energy University (2023–2027). Seeking Summer 2027
              internships across trading operations, quantitative research, and software engineering.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#8b8f97] font-mono">
              <Clock className="w-3.5 h-3.5 text-[#c8a15a]" />
              <span>Response guarantee: I reply within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#8b8f97] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#8b8f97]" />
              <span>Gandhinagar / Ahmedabad, Gujarat, India (Open to remote &amp; relocate)</span>
            </div>
          </div>

          {/* Quick Recruiter Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#f2efe8]">
              Recruiter Links
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  href="/Rakshit-Jain-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8a15a] hover:underline flex items-center gap-1"
                >
                  <span>Primary Resume (PDF)</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-white transition-colors">
                  Web Resume &amp; Role Tracks
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Recruiter &amp; AI FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical Projects & Writing */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#f2efe8]">
              Selected Work
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/projects#market-sentiment-analyzer"
                  className="hover:text-[#f2efe8] transition-colors line-clamp-1"
                >
                  Market Sentiment Analyzer (20/50 SMA)
                </Link>
              </li>
              <li>
                <a
                  href="https://lawprix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f2efe8] transition-colors line-clamp-1"
                >
                  LawPrix (Buildathon 2nd Runner-Up)
                </a>
              </li>
              <li>
                <Link
                  href="/research/iibx-and-indias-bullion-market"
                  className="hover:text-[#f2efe8] transition-colors line-clamp-1"
                >
                  IIBX &amp; Indian Bullion Market
                </Link>
              </li>
              <li>
                <Link
                  href="/research/sma-strategy-backtesting"
                  className="hover:text-[#f2efe8] transition-colors line-clamp-1"
                >
                  SMA Crossover Backtesting Analysis
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#f2efe8]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={`mailto:${siteConfig.author.email}?subject=Internship%20Inquiry%20-%20Rakshit%20Jain`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail className="w-3.5 h-3.5 text-[#8b8f97] group-hover:text-[#c8a15a]" />
                <span className="truncate">{siteConfig.author.email}</span>
              </a>
              <a
                href={siteConfig.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#8b8f97] group-hover:text-[#c8a15a]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#8b8f97]" />
              </a>
              <a
                href={siteConfig.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#8b8f97] group-hover:text-white" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3 h-3 text-[#8b8f97]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 mt-8 border-t border-[#22262e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8b8f97]">
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
