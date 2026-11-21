"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText } from "lucide-react";
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
          ? "bg-white/92 backdrop-blur-md border-b border-[#e3e8ef] py-3 shadow-xs"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Identity Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
          >
            <span className="font-sans font-bold tracking-wider text-sm sm:text-base text-[#0f172a] group-hover:text-[#2563eb] transition-colors">
              RAKSHIT JAIN
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[#475569] group-hover:text-[#0ea5a4] transition-colors uppercase">
              PDEU (2023–2027) · Markets, Quant &amp; Software
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
                  className={`transition-colors py-1 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded ${
                    isActive
                      ? "text-[#2563eb] font-semibold"
                      : "text-[#475569] hover:text-[#0f172a]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#0ea5a4] to-[#10b981]" />
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#e3e8ef] bg-white hover:border-[#2563eb]/50 hover:bg-[#f8fafc] text-[#0f172a] text-xs font-mono font-semibold tracking-wider transition-all duration-150 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#475569] hover:text-[#0f172a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e3e8ef] px-6 py-6 space-y-4 shadow-lg animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-3 text-sm font-mono">
            {navItems.map((item) => {
              const isActive = item.href === pathname;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1.5 ${
                    isActive ? "text-[#2563eb] font-bold" : "text-[#475569]"
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
              className="pt-3 text-xs font-mono font-bold text-[#2563eb] flex items-center gap-1.5 border-t border-[#e3e8ef]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
