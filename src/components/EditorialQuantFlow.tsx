"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Database, Cpu, Play, BarChart3, ShieldAlert } from "lucide-react";

export function EditorialQuantFlow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Market Data Ingestion",
      tech: "Python · yFinance · Pandas",
      icon: Database,
      summary:
        "Daily historical adjusted close price series for NSE equities (INFY and TATAINVEST) ingested, handling corporate splits, dividend adjustments, and date alignment.",
      formula: "P_adj(t) = P(t) \\times \\text{Adjustment Factor}",
    },
    {
      num: "02",
      title: "Vectorized Signal Generation",
      tech: "Rolling Averages · NumPy",
      icon: Cpu,
      summary:
        "Rolling 20-day (fast) and 50-day (slow) SMAs calculated. Crossover conditions evaluate when fast SMA crosses above (buy) or below (exit) the slow SMA.",
      formula: "\\text{SMA}_t(N) = \\frac{1}{N} \\sum_{i=0}^{N-1} P_{t-i}",
    },
    {
      num: "03",
      title: "Shifted Backtesting Simulation",
      tech: "Pandas Indexing · Zero Look-Ahead",
      icon: Play,
      summary:
        "Crucially shifting strategy position by 1 day [position.shift(1)] so that signals calculated on day t close are executed on day t+1, preventing fatal look-ahead bias.",
      formula: "\\text{Position}_{t+1} = \\text{Signal}_t",
    },
    {
      num: "04",
      title: "Risk-Adjusted Metrics",
      tech: "CAGR · Sharpe · Max Drawdown",
      icon: BarChart3,
      summary:
        "Calculating geometric annualized growth, excess return per unit of volatility against 91-day T-Bill risk-free rate (6.5%), and peak-to-trough capital drawdown.",
      formula: "\\text{Sharpe} = \\frac{R_p - R_f}{\\sigma_p} \\times \\sqrt{252}",
    },
    {
      num: "05",
      title: "Market Friction Evaluation",
      tech: "Regime Analysis · Slippage Realities",
      icon: ShieldAlert,
      summary:
        "Recognizing that while 20/50 SMA protects against prolonged bear cycles, choppy sideways regimes suffer from frequent false breakouts and transaction friction.",
      formula: "\\text{Net Return} = \\text{Gross Return} - \\text{Slippage} - \\text{Costs}",
    },
  ];

  return (
    <section className="bg-[#101a27] text-[#f4f1ea] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#22344a]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#22344a] pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              04 / Quantitative Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#f4f1ea] leading-[1.1]">
              Thinking in data, testing{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#d8a478]">
                ideas.
              </span>
            </h2>
          </div>

          <Link
            href="/research/sma-strategy-backtesting"
            className="text-xs font-mono text-[#c28b5e] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>Read full quantitative paper</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 5-Stage Interactive Pipeline */}
        <div className="space-y-8">
          {/* Top Step Selector Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#172536] border-[#c28b5e] shadow-md -translate-y-0.5"
                      : "bg-[#172536]/40 border-[#22344a] hover:border-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1">
                    <span className={isActive ? "text-[#c28b5e] font-bold" : "text-slate-500"}>
                      {st.num}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#c28b5e]" : "text-slate-500"}`} />
                  </div>
                  <div className="text-xs font-bold text-white truncate">{st.title}</div>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Stage Display */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#172536] border border-[#22344a] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#22344a] pb-4">
              <div>
                <span className="font-mono text-xs text-[#c28b5e] font-semibold">
                  Stage {steps[activeStep].num}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {steps[activeStep].title}
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400 bg-[#101a27] border border-[#22344a] px-3 py-1 rounded-full self-start sm:self-auto">
                {steps[activeStep].tech}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
              {steps[activeStep].summary}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400 border-t border-[#22344a]/80">
              <div className="text-[#38bdf8]">
                <span>Mathematical Logic: </span>
                <code className="text-slate-200 bg-[#101a27] px-2 py-0.5 rounded border border-[#22344a]">
                  {steps[activeStep].formula}
                </code>
              </div>
              <span className="text-slate-500 text-[11px]">
                Implemented in Python backtest engine (Market Sentiment Analyzer)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
