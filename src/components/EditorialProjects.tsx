import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SmaBacktestChart } from "@/components/SmaBacktestChart";
import { LegalTechWorkflowDiagram } from "@/components/LegalTechWorkflowDiagram";
import { projectsData } from "@/data/projects";

export function EditorialProjects() {
  const quantProject = projectsData.find((p) => p.id === "market-sentiment-analyzer")!;
  const lawprixProject = projectsData.find((p) => p.id === "lawprix")!;
  const otherProjects = projectsData.filter(
    (p) => p.id !== "market-sentiment-analyzer" && p.id !== "lawprix"
  );

  return (
    <section className="bg-[#f4f1ea] text-[#172536] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#e9e6df]">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e9e6df] pb-8">
          <div className="space-y-2">
            <span className="font-mono text-xs tracking-widest text-[#c28b5e] uppercase font-semibold">
              03 / Selected Case Studies
            </span>
            <h2 className="text-3xl sm:text-5xl font-sans tracking-tight text-[#172536] leading-[1.1]">
              Featured projects and quantitative{" "}
              <span className="font-editorial-italic font-normal text-4xl sm:text-6xl text-[#101a27]">
                models.
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="text-xs font-mono text-[#c28b5e] hover:underline flex items-center gap-1 shrink-0"
          >
            <span>All projects &amp; codebases</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ============================================================ */}
        {/* LEADING CASE STUDY: MARKET SENTIMENT ANALYZER (FULL ASYMMETRIC) */}
        {/* ============================================================ */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Story Column */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#172536] text-[#f4f1ea]">
                    Priority Showcase
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    {quantProject.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#172536] font-sans">
                  {quantProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {quantProject.subtitle}
                </p>
              </div>

              {/* Implementation Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#e9e6df]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#c28b5e] font-semibold block">
                  Methodology &amp; Verification:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c28b5e] mt-1.5 shrink-0" />
                    <span><strong>20/50 SMA crossover:</strong> Systematically generates Golden Cross (buy) and Death Cross (exit) signals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c28b5e] mt-1.5 shrink-0" />
                    <span><strong>Historical data via yFinance:</strong> Cleaned and backtested on daily adjusted close prices for INFY and TATAINVEST.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c28b5e] mt-1.5 shrink-0" />
                    <span><strong>Core Risk Metrics:</strong> Evaluated CAGR, Sharpe Ratio (Rf = 6.5%), and Maximum Drawdown with Pandas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c28b5e] mt-1.5 shrink-0" />
                    <span><strong>Buy-and-Hold benchmark:</strong> Quantified capital preservation benefits and whipsaw friction during consolidation.</span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {quantProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white border border-[#e9e6df] text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#e9e6df]">
                {quantProject.githubUrl && (
                  <a
                    href={quantProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#172536] hover:text-[#c28b5e] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub Repository</span>
                  </a>
                )}
                {quantProject.liveUrl && (
                  <a
                    href={quantProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#c28b5e] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Project</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Interactive Chart Column */}
            <div className="lg:col-span-7">
              <SmaBacktestChart />
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECONDARY CASE STUDY: LAWPRIX (ALTERNATING LAYOUT)           */}
        {/* ============================================================ */}
        <div className="space-y-6 pt-12 border-t border-[#e9e6df]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Diagram */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <LegalTechWorkflowDiagram />
            </div>

            {/* Right Story */}
            <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-white border border-[#e9e6df] text-slate-600">
                  {lawprixProject.category}
                </span>

                <h3 className="text-2xl font-bold text-[#172536] font-sans">
                  {lawprixProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {lawprixProject.subtitle}
                </p>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-[#e9e6df]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                  <span><strong>Criteria-driven routing:</strong> Eliminates paid advertisement bias by matching based on practice domain and urgency.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                  <span><strong>Lawyer verification:</strong> Checked Bar Council credentials to ensure transparency for first-time litigants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                  <span><strong>National Recognition:</strong> Secured 2nd Runner-Up at the national Tutedude Buildathon 2025.</span>
                </li>
              </ul>

              <div className="flex items-center gap-4 pt-3 border-t border-[#e9e6df]">
                <a
                  href={lawprixProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#c28b5e] hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Visit lawprix.com</span>
                </a>
                <Link
                  href="/product-thinking"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#172536] hover:text-[#c28b5e]"
                >
                  <span>Read product analysis</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Row */}
        <div className="pt-8 border-t border-[#e9e6df] space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold block">
            Additional Verified Work
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 rounded-lg bg-white border border-[#e9e6df] space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{p.category}</span>
                    <span>{p.period}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#172536]">{p.title}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{p.subtitle}</p>
                </div>
                {p.githubUrl && (
                  <div className="pt-3 border-t border-[#e9e6df]">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 hover:text-[#172536]"
                    >
                      <GithubIcon className="w-3 h-3" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
