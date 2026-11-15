"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Research", href: "/research" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#101a27]/90 backdrop-blur-md border-b border-[#22344a]/60 py-3.5 shadow-sm"
          : "bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Editorial Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-sans font-semibold tracking-widest text-sm sm:text-base text-[#f4f1ea] group-hover:text-white transition-colors">
              RAKSHIT JAIN
            </span>
            <span className="font-mono text-[9px] tracking-widest text-slate-400 group-hover:text-[#c28b5e] transition-colors uppercase">
              Finance · Technology · Product
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? "text-[#f4f1ea] font-semibold"
                      : "text-slate-400 hover:text-[#f4f1ea]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c28b5e]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Curated Resume Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#22344a] hover:border-[#c28b5e]/60 bg-[#172536]/80 hover:bg-[#172536] text-xs font-mono tracking-wider text-[#f4f1ea] transition-all"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#c28b5e]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/resume"
              className="px-2.5 py-1 text-[11px] font-mono rounded border border-[#22344a] bg-[#172536] text-[#f4f1ea]"
            >
              Resume
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101a27]/98 border-b border-[#22344a] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-1 ${
                    isActive ? "text-[#c28b5e] font-semibold" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/resume"
              className="pt-2 text-xs font-mono text-[#c28b5e] flex items-center gap-1 border-t border-[#22344a]"
            >
              <span>Curated Resumes</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
