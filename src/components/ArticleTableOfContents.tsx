"use client";

import React, { useState, useEffect } from "react";
import { List } from "lucide-react";

interface TOCProps {
  items: { id: string; label: string }[];
}

export function ArticleTableOfContents({ items }: TOCProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = items.length - 1; i >= 0; i--) {
        const element = document.getElementById(items[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  return (
    <nav className="p-4 bg-[#0a101f] border border-slate-800 rounded-xl space-y-3" aria-label="Table of contents">
      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#d4af37]">
        <List className="w-3.5 h-3.5" />
        <span>Table of Contents</span>
      </div>

      <ul className="space-y-1 text-xs">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1 px-2 rounded transition-colors text-left ${
                  isActive
                    ? "text-[#d4af37] bg-slate-900 font-medium"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
