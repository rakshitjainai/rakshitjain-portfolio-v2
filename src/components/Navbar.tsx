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

  const navItems = [
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Writing", href: "/research" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0a0b0d]/92 backdrop-blur-md border-b border-[#22262e] py-3 shadow-lg"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Identity Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a] rounded"
          >
            <span className="font-sans font-bold tracking-wider text-sm sm:text-base text-[#f2efe8] group-hover:text-white transition-colors">
              RAKSHIT JAIN
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#8b8f97] group-hover:text-[#c8a15a] transition-colors uppercase">
              PDEU (2023–2027) · Markets, Quant &amp; Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-mono tracking-wide">
            {navItems.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href !== "/" &&
                  !item.href.includes("#") &&
                  pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a] rounded ${
                    isActive
                      ? "text-[#c8a15a] font-semibold"
                      : "text-[#8b8f97] hover:text-[#f2efe8]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c8a15a]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Persistent Resume CTA Button (Single button on desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.resume.primaryPdf}
              download={siteConfig.resume.filename}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#c8a15a] bg-[#c8a15a]/10 hover:bg-[#c8a15a] text-[#c8a15a] hover:text-[#0a0b0d] text-xs font-mono font-bold tracking-wider transition-all duration-150 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Trigger (No duplicate resume button side-by-side) */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#8b8f97] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c8a15a]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111317] border-b border-[#22262e] px-6 py-6 space-y-4 animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3 text-sm font-mono">
            {navItems.map((item) => {
              const isActive = item.href === pathname;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 ${
                    isActive ? "text-[#c8a15a] font-bold" : "text-[#8b8f97]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.resume.primaryPdf}
              download={siteConfig.resume.filename}
              onClick={() => setMobileMenuOpen(false)}
              className="pt-3 text-xs font-mono font-bold text-[#c8a15a] flex items-center gap-1.5 border-t border-[#22262e]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
