import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { ProjectItem } from "@/types";

interface ProjectCardProps {
  project: ProjectItem;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  // Category badge colors
  const getCategoryColor = () => {
    switch (project.category) {
      case "Quantitative Analysis":
        return "text-[#d4af37] border-[#d4af37]/30 bg-[#d4af37]/10";
      case "Product Development":
        return "text-[#38bdf8] border-[#38bdf8]/30 bg-[#38bdf8]/10";
      case "FinTech & Compliance":
        return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      default:
        return "text-slate-300 border-slate-700 bg-slate-800";
    }
  };

  return (
    <article
      id={project.slug}
      className={`group relative p-6 sm:p-7 rounded-xl border transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl ${
        featured
          ? "bg-[#0a101f] border-slate-700/80 hover:border-[#d4af37]/60"
          : "bg-[#090e1c]/80 border-slate-800 hover:border-slate-700"
      }`}
    >
      <div className="space-y-4">
        {/* Top: Category & Period */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-mono text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded border ${getCategoryColor()}`}
          >
            {project.category}
          </span>
          <span className="font-mono text-xs text-slate-500">{project.period}</span>
        </div>

        {/* Title & One-line Description */}
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white group-hover:text-[#f8fafc] transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-snug">
            {project.subtitle}
          </p>
        </div>

        {/* 3-5 Implementation Bullets */}
        <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
          <ul className="space-y-1.5 text-xs text-slate-300">
            {project.contribution.slice(0, 4).map((c, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-[#d4af37] mt-1.5 shrink-0 transition-colors" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-slate-300 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-800/80 text-xs">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-slate-300 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Live</span>
            </a>
          )}
        </div>

        {project.researchLink && (
          <Link
            href={project.researchLink}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#d4af37] group-hover:text-[#e2c99a] transition-colors"
          >
            <span>Analysis</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </div>
    </article>
  );
}
