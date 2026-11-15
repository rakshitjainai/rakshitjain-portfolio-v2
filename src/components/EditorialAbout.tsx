import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EditorialAbout() {
  const areas = [
    {
      num: "01",
      title: "Financial Markets",
      subtitle: "Capital Market Infrastructure",
      desc: "Exposure to bullion trading operations, exchange infrastructure, Bullion Depository Receipts (BDRs), and institutional onboarding workflows at GIFT City IFSC.",
      href: "/experience#anand-rathi",
    },
    {
      num: "02",
      title: "Quantitative Analysis",
      subtitle: "Empirical Testing & Metrics",
      desc: "Python-based analysis, 20/50 SMA crossover strategy backtesting, Sharpe Ratio, Maximum Drawdown, and market regime evaluation using real NSE data.",
      href: "/projects#market-sentiment-analyzer",
    },
    {
      num: "03",
      title: "Technology & Systems",
      subtitle: "Full-Stack & Systems Engineering",
      desc: "Production web features with React and Node.js at Certopus Inc., Unix systems programming in C, and internal enterprise portal development at DAE.",
      href: "/projects",
    },
    {
      num: "04",
      title: "Product Thinking",
      subtitle: "Workflow & Credential Architecture",
      desc: "Deconstructing problems before writing code: criteria-based case routing for legal services (LawPrix) and structured regulatory assessment tools.",
      href: "/product-thinking",
    },
  ];

  return (
    <section className="bg-[#f4f1ea] text-[#172536] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-[#e9e6df] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline border-b border-[#e9e6df] pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              01 / Perspective &amp; Foundation
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#172536] leading-[1.1]">
              A little about how I think and{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#101a27]">
                work.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            <p>
              I believe software and models gain real value when applied to complex, high-consequence
              systems. My background links computational thinking with financial market mechanics.
            </p>
          </div>
        </div>

        {/* Asymmetrical 4 Areas Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area) => (
            <Link
              key={area.num}
              href={area.href}
              className="group relative flex flex-col justify-between p-6 rounded-lg bg-white/70 hover:bg-white border border-[#e9e6df] hover:border-[#c28b5e] transition-all duration-200 hover:-translate-y-1 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#e9e6df] pb-3">
                  <span className="font-mono text-sm font-bold text-[#c28b5e]">
                    {area.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase text-slate-400">
                    {area.subtitle}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#172536] group-hover:text-[#101a27] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between text-xs font-mono text-[#c28b5e] group-hover:text-[#172536] transition-colors border-t border-[#e9e6df]/60">
                <span>Explore Domain</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Minimal Editorial Quote Line */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500 font-mono border-t border-[#e9e6df]">
          <span>Pandit Deendayal Energy University · ICT (2023–2027)</span>
          <Link
            href="/about"
            className="text-[#172536] hover:text-[#c28b5e] font-semibold flex items-center gap-1 transition-colors"
          >
            <span>Read full background &amp; philosophy</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
