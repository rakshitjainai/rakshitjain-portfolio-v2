"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Scroll listener for sticky condensing
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle ESC key, body scroll lock, and focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Focus trap inside drawer
      if (e.key === "Tab" && mobileMenuOpen && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Handle outside tap to close
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 flex items-center ${
        scrolled
          ? "h-14 bg-white/95 backdrop-blur-md border-b border-[#e3e8ef] shadow-xs"
          : "h-14 sm:h-16 bg-white/85 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full">
        <div className="flex items-center justify-between">
          {/* Identity Wordmark */}
          <Link
            href="/"
            className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded max-w-[220px] xs:max-w-none"
          >
            <span className="font-sans font-bold tracking-wider text-sm sm:text-base text-[#0f172a] group-hover:text-[#2563eb] transition-colors leading-tight">
              RAKSHIT JAIN
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#475569] group-hover:text-[#0ea5a4] transition-colors uppercase truncate max-w-full">
              PDEU (2023–2027) · Markets &amp; Software
            </span>
          </Link>

          {/* Desktop Navigation (>= 1024px) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-mono tracking-wide" aria-label="Main Navigation">
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

          {/* Desktop Resume Button (>= 1024px) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.resume.primaryPdf}
              download={siteConfig.resume.filename}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 min-h-[44px] rounded-lg border border-[#e3e8ef] bg-white hover:border-[#2563eb]/50 hover:bg-[#f8fafc] text-[#0f172a] text-xs font-mono font-semibold tracking-wider transition-all duration-150 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#2563eb]" />
              <span>Resume (PDF)</span>
            </a>
          </div>

          {/* Mobile/Tablet Actions (< 1024px): Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] p-2.5 rounded-lg text-[#0f172a] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] flex items-center justify-center cursor-pointer transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Full-Screen Navigation Drawer (< 1024px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 top-14 sm:top-16 bg-white z-50 overflow-y-auto px-6 py-6 pb-12 flex flex-col justify-between border-t border-[#e3e8ef] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col space-y-2 text-base font-mono" aria-label="Mobile Navigation Links">
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
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[48px] px-4 py-3 rounded-xl flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-[#2563eb] bg-blue-50/80 font-bold border border-blue-200/60"
                      : "text-[#1e293b] hover:text-[#0f172a] hover:bg-slate-50 font-medium border border-transparent"
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? "text-[#2563eb]" : "text-slate-300"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-[#e3e8ef] space-y-3 mt-6">
            <span className="font-mono text-xs uppercase tracking-wider text-[#64748b] block font-semibold">
              Quick Action
            </span>
            <a
              href={siteConfig.resume.primaryPdf}
              download={siteConfig.resume.filename}
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[48px] w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-bold text-white btn-primary-gradient uppercase tracking-wider shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Full Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
