import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, LayoutGrid } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-white border border-[#e3e8ef] shadow-md">
        <div className="font-mono-num text-5xl font-bold text-[#2563eb]">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-bold text-[#0f172a]">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
            The requested route does not exist. Use the links below to navigate the site.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <a
            href={siteConfig.resume.primaryPdf}
            download={siteConfig.resume.filename}
            className="btn-primary-gradient w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider shadow-sm cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume (PDF)</span>
          </a>

          <Link
            href="/projects"
            className="btn-secondary w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono"
          >
            <LayoutGrid className="w-4 h-4 text-[#2563eb]" />
            <span>View Projects</span>
          </Link>

          <Link
            href="/"
            className="pt-2 inline-flex items-center justify-center gap-1.5 text-xs font-mono text-[#475569] hover:text-[#0f172a] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
