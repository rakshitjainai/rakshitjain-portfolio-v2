import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, LayoutGrid } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-[#111317] border border-[#22262e]">
        <div className="font-mono-num text-5xl font-bold text-[#c8a15a]">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-[#f2efe8]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#8b8f97] leading-relaxed">
            The requested route does not exist. Use the links below to navigate the site.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <a
            href={siteConfig.resume.primaryPdf}
            download={siteConfig.resume.filename}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#c8a15a] hover:bg-[#dbb36c] text-[#0a0b0d] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <Link
            href="/projects"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#22262e] hover:border-slate-500 bg-[#0a0b0d] text-[#f2efe8] text-xs font-mono transition-colors"
          >
            <LayoutGrid className="w-4 h-4 text-[#c8a15a]" />
            <span>View Projects</span>
          </Link>

          <Link
            href="/"
            className="pt-2 inline-flex items-center justify-center gap-1.5 text-xs font-mono text-[#8b8f97] hover:text-[#f2efe8] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
