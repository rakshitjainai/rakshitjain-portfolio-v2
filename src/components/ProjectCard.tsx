import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, BookOpen, CheckCircle, BarChart2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      id={project.slug}
      className={`relative p-6 sm:p-8 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
        featured
          ? "bg-[#0a101f] border-slate-700/80 shadow-lg"
          : "bg-[#090e1c]/80 border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className="space-y-5">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded bg-slate-800 text-[#d4af37] border border-slate-700">
              {project.category}
            </span>
            {featured && (
              <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-[#d4af37]/10 text-[#d4af37] border border-[#d4af37]/30">
                Priority Showcase
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-slate-500">{project.period}</span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.subtitle}
          </p>
        </div>

        {/* Problem vs Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-lg text-xs">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-rose-400 block font-semibold">
              The Real Problem
            </span>
            <p className="text-slate-300 leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-sky-400 block font-semibold">
              Engineered Approach
            </span>
            <p className="text-slate-300 leading-relaxed">{project.approach}</p>
          </div>
        </div>

        {/* Key Metrics if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="p-2.5 bg-slate-900/80 border border-slate-800 rounded-md"
              >
                <div className="text-[10px] font-mono text-slate-400 uppercase truncate">
                  {m.label}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white font-mono mt-0.5">
                  {m.value}
                </div>
                {m.benchmark && (
                  <div className="text-[10px] text-slate-500 truncate mt-0.5">
                    {m.benchmark}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Key Technical Contributions */}
        <div className="space-y-2 pt-2 border-t border-slate-800/80">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Implementation & Technical Contributions:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.contribution.slice(0, 4).map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] mt-1.5 shrink-0" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Honest Learning Takeaway */}
        <div className="p-3 bg-slate-900/40 border border-slate-800 rounded-lg text-xs text-slate-400 space-y-1">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#d4af37] block font-semibold">
            Analytical Insight & Limitations:
          </span>
          <p className="leading-relaxed">{project.learnings}</p>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-6 mt-6 border-t border-slate-800/80">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Live Application</span>
            </a>
          )}
        </div>

        {project.researchLink && (
          <Link
            href={project.researchLink}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4af37] hover:text-[#e2c99a] transition-colors group/link"
          >
            <span>Read Deep Dive</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
}
