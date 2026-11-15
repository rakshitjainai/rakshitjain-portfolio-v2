"use client";

import React, { useState } from "react";
import { TrendingUp, Activity, Code2, Compass } from "lucide-react";

export function HeroVisual() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    {
      id: 0,
      label: "Financial Markets",
      sub: "IIBX Bullion Operations",
      icon: TrendingUp,
      color: "#d4af37",
      x: 18,
      y: 35,
    },
    {
      id: 1,
      label: "Quantitative Analysis",
      sub: "SMA Backtest & Risk",
      icon: Activity,
      color: "#38bdf8",
      x: 50,
      y: 18,
    },
    {
      id: 2,
      label: "Software Engineering",
      sub: "Full Stack & Systems",
      icon: Code2,
      color: "#10b981",
      x: 82,
      y: 35,
    },
    {
      id: 3,
      label: "Product Thinking",
      sub: "Workflow Architecture",
      icon: Compass,
      color: "#e2c99a",
      x: 50,
      y: 72,
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto py-4 select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 via-[#38bdf8]/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative p-6 sm:p-7 rounded-2xl bg-[#090e1b]/80 border border-slate-800/80 backdrop-blur-sm shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></span>
            <span className="font-mono text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
              Interconnected Domains
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-500">
            Hover to explore synergy
          </span>
        </div>

        {/* Constellation Network */}
        <div className="grid grid-cols-2 gap-3.5 relative">
          {nodes.map((node) => {
            const Icon = node.icon;
            const isActive = activeNode === node.id;
            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-slate-800/90 border-[#d4af37]/60 shadow-lg -translate-y-0.5"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0"
                    style={{ color: node.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-white truncate">
                      {node.label}
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 truncate mt-0.5">
                      {node.sub}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Core Caption */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <span>Core Synergy:</span>
          <span className="text-slate-300">
            {activeNode === 0 && "Operational market liquidity informs engineering."}
            {activeNode === 1 && "Mathematical rules replace emotional discretion."}
            {activeNode === 2 && "Production-grade execution from frontend to POSIX."}
            {activeNode === 3 && "Empathy for real-world user & regulatory friction."}
            {activeNode === null && "Capital markets · Quant analysis · Engineering · Product"}
          </span>
        </div>
      </div>
    </div>
  );
}
