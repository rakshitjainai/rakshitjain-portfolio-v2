"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#070b14]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <span className="font-sans font-semibold tracking-wider text-base sm:text-lg text-slate-100 group-hover:text-white transition-colors">
              RAKSHIT JAIN
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#94a3b8] group-hover:text-[#d4af37] transition-colors uppercase">
              Finance · Tech · Product
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] ${
                    isActive
                      ? "text-[#f8fafc] bg-white/[0.08] font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Resume & Quick Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-700 hover:border-[#d4af37]/60 bg-slate-900/60 hover:bg-slate-800/80 text-xs font-medium text-slate-200 hover:text-[#f8fafc] transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <FileText className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Resume</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-md bg-[#d4af37] hover:bg-[#c5a880] text-slate-950 font-semibold text-xs transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#d4af37]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-700 bg-slate-900/60 text-[11px] font-medium text-slate-200"
            >
              <FileText className="w-3 h-3 text-[#d4af37]" />
              <span>CV</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b14]/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.08] font-semibold"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <Link
              href="/resume"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-slate-700 bg-slate-900 text-sm font-medium text-slate-200 hover:text-white"
            >
              <FileText className="w-4 h-4 text-[#d4af37]" />
              <span>View & Download Resumes</span>
            </Link>
            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#d4af37] text-slate-950 font-semibold text-sm"
            >
              <span>Contact Rakshit</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
