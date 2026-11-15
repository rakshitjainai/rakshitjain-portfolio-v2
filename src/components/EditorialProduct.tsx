import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Scale, Cpu } from "lucide-react";

export function EditorialProduct() {
  const pillars = [
    {
      num: "01",
      title: "Problem Identification",
      desc: "Uncovering user pain points across regulated services rather than rushing into feature implementation.",
      icon: Scale,
    },
    {
      num: "02",
      title: "User & Workflow Research",
      desc: "Interviewed clients and verified attorneys across four practice areas to map discovery friction and fee opacity.",
      icon: CheckCircle2,
    },
    {
      num: "03",
      title: "Structural Architecture",
      desc: "Replaced pay-to-win directory bidding with objective criteria-based matchmaking and verified credentials.",
      icon: ShieldCheck,
    },
    {
      num: "04",
      title: "Engineering Feasibility",
      desc: "Engineered responsive React.js interfaces backed by Python services, securing 2nd Runner-Up at Tutedude Buildathon 2025.",
      icon: Cpu,
    },
  ];

  return (
    <section className="bg-[#f4f1ea] text-[#172536] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e9e6df] transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Section Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline border-b border-[#e9e6df] pb-10">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              05 / Product Management
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#172536] leading-[1.1]">
              Technology is useful when it solves the right{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#101a27]">
                problem.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            <p>
              I enjoy understanding a problem before thinking about the solution. Bridging technical
              feasibility with user workflows turns raw code into lasting products.
            </p>
          </div>
        </div>

        {/* 4-Pillar Product Framework */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="p-6 rounded-lg bg-white/70 border border-[#e9e6df] space-y-3 hover:bg-white transition-all shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c28b5e]">
                    {item.num}
                  </span>
                  <Icon className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="text-sm font-bold text-[#172536]">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Case Study Callout: LawPrix */}
        <div className="p-8 rounded-xl bg-white border border-[#e9e6df] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#c28b5e] bg-[#c28b5e]/10 px-2 py-0.5 rounded font-semibold">
                  Case Study · LegalTech Product
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  National Hackathon Award Winner
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#172536] font-sans">
                LawPrix — Redesigning Legal Matchmaking Around Trust
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Traditional legal directories prioritize attorneys who spend the most on sponsored ads.
                LawPrix redesigned this dynamic into an objective, criteria-driven intake workflow with
                Bar Council verification and transparent milestone progression.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/product-thinking"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#101a27] text-white hover:bg-[#172536] text-xs font-mono font-medium transition-colors"
                >
                  <span>Read Product Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c28b5e]" />
                </Link>

                <a
                  href="https://lawprix.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 text-xs font-mono text-slate-600 hover:text-[#172536] transition-colors"
                >
                  <span>Visit Live Product (lawprix.com)</span>
                  <ArrowRight className="w-3 h-3 -rotate-45" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#f4f1ea] p-5 rounded-lg border border-[#e9e6df] space-y-3 font-mono text-xs">
              <span className="text-[10px] uppercase text-slate-400 block font-semibold">
                Validated Product Metrics
              </span>
              <div className="space-y-2 text-[#172536]">
                <div className="flex justify-between border-b border-[#e9e6df] pb-1.5">
                  <span className="text-slate-500">Distinction</span>
                  <span className="font-bold text-[#c28b5e]">2nd Runner-Up (Tutedude 2025)</span>
                </div>
                <div className="flex justify-between border-b border-[#e9e6df] pb-1.5">
                  <span className="text-slate-500">Domains Handled</span>
                  <span className="font-bold">Corporate, Criminal, Family, Property</span>
                </div>
                <div className="flex justify-between border-b border-[#e9e6df] pb-1.5">
                  <span className="text-slate-500">Verification</span>
                  <span className="font-bold">Bar Council of India Verification</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Architecture</span>
                  <span className="font-bold">React Client + Python REST Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
