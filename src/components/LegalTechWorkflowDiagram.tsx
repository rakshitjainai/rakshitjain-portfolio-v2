import React from "react";
import { AlertCircle, CheckCircle, Scale, ShieldCheck, UserCheck, ArrowRight } from "lucide-react";

export function LegalTechWorkflowDiagram() {
  return (
    <div className="w-full bg-[#0a101f] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <span className="font-mono text-xs uppercase tracking-wider text-[#38bdf8]">
          Product Workflow Architecture
        </span>
        <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
          Deconstructing Legal Matchmaking: Traditional Directory vs. LawPrix Criteria Engine
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          How thoughtful workflow design eliminates advertising bias and builds institutional trust for retail legal consumers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Legacy / Broken Model */}
        <div className="p-5 bg-rose-950/20 border border-rose-900/40 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
              Traditional Directory Model (Ad-Driven)
            </h5>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Step 1: User Search</span>
              <p className="text-slate-300 mt-0.5">User types general search query or location with high anxiety and urgency.</p>
            </div>
            <div className="p-3 bg-rose-900/20 border border-rose-800/40 rounded-md">
              <span className="text-[10px] font-mono text-rose-400 uppercase block">Step 2: Biased Ranking (Ad Spend)</span>
              <p className="text-rose-200 mt-0.5">Platform prioritizes lawyers who paid highest advertising subscriptions, regardless of specific case fit.</p>
            </div>
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-md">
              <span className="text-[10px] font-mono text-slate-500 uppercase block">Step 3: Unverified Outreach</span>
              <p className="text-slate-300 mt-0.5">No credential checks or Bar Council validation. Opaque fee structures and frequent abandoned cases.</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-rose-400/90 pt-1 flex items-center gap-1.5">
            <span>Result:</span> High information asymmetry, fee disputes, and diminished consumer trust.
          </div>
        </div>

        {/* LawPrix Model */}
        <div className="p-5 bg-sky-950/20 border border-sky-900/40 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-[#38bdf8]">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
              LawPrix Workflow Engine (Criteria-Driven)
            </h5>
          </div>

          <div className="space-y-3 text-xs text-slate-300">
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-md">
              <span className="text-[10px] font-mono text-[#38bdf8] uppercase block">Step 1: Structured Intake</span>
              <p className="text-slate-300 mt-0.5">Questionnaire categorizes practice domain (corporate, family, criminal, property), urgency, and jurisdiction.</p>
            </div>
            <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-md">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Step 2: Credential Verification Layer</span>
              <p className="text-emerald-200 mt-0.5">Lawyers verified against State Bar Council enrollments and practice standing prior to platform listing.</p>
            </div>
            <div className="p-3 bg-slate-900/60 border border-slate-800/80 rounded-md">
              <span className="text-[10px] font-mono text-[#d4af37] uppercase block">Step 3: Neutral Match & Milestone Tracking</span>
              <p className="text-slate-300 mt-0.5">Matched strictly on competence; both parties track case submissions, hearing dates, and documents transparently.</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-sky-400/90 pt-1 flex items-center gap-1.5">
            <span>Result:</span> Zero sponsored placement bias; transparent milestones, compliant with Bar Council rules.
          </div>
        </div>
      </div>
    </div>
  );
}
