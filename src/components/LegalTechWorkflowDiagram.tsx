import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

export function LegalTechWorkflowDiagram() {
  return (
    <div className="w-full bg-[#111317] border border-[#22262e] rounded-xl p-6 sm:p-8 space-y-6">
      <div className="border-b border-[#22262e] pb-3 space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Product Architecture Comparison
        </span>
        <h4 className="text-base sm:text-lg font-semibold text-[#f2efe8]">
          Traditional Legal Directory vs LawPrix Criteria-Driven Matchmaking
        </h4>
        <p className="text-xs text-[#8b8f97]">
          How structured workflow design eliminates advertising bias and builds institutional trust for retail legal consumers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Legacy Model */}
        <div className="p-5 bg-rose-950/20 border border-rose-900/30 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
              Legacy Legal Directories (Pay-to-Win)
            </h5>
          </div>

          <div className="space-y-3 text-xs text-[#8b8f97]">
            <div className="p-3 bg-[#0a0b0d] border border-[#22262e] rounded-md">
              <span className="text-[10px] font-mono text-rose-400 uppercase block">Step 1: Unfiltered Search</span>
              <p className="text-[#f2efe8] mt-0.5">Consumer enters free-text query; algorithm displays sponsored listings paying the highest bid price.</p>
            </div>
            <div className="p-3 bg-[#0a0b0d] border border-[#22262e] rounded-md">
              <span className="text-[10px] font-mono text-rose-400 uppercase block">Step 2: Unverified Self-Reporting</span>
              <p className="text-[#f2efe8] mt-0.5">No credential checks or Bar Council validation. Opaque fee structures and frequent abandoned cases.</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-rose-400/90 pt-1 flex items-center gap-1.5">
            <span>Result:</span> High information asymmetry, fee disputes, and diminished consumer trust.
          </div>
        </div>

        {/* LawPrix Model */}
        <div className="p-5 bg-[#0a0b0d] border border-[#c8a15a]/40 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-[#c8a15a]">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <h5 className="text-xs font-semibold uppercase tracking-wider font-mono">
              LawPrix Workflow Engine (Criteria-Driven)
            </h5>
          </div>

          <div className="space-y-3 text-xs text-[#8b8f97]">
            <div className="p-3 bg-[#111317] border border-[#22262e] rounded-md">
              <span className="text-[10px] font-mono text-[#c8a15a] uppercase block">Step 1: Structured Intake</span>
              <p className="text-[#f2efe8] mt-0.5">Questionnaire categorizes practice domain (corporate, family, criminal, property), urgency, and jurisdiction.</p>
            </div>
            <div className="p-3 bg-[#111317] border border-[#22262e] rounded-md">
              <span className="text-[10px] font-mono text-emerald-400 uppercase block">Step 2: Credential Verification Layer</span>
              <p className="text-[#f2efe8] mt-0.5">Lawyers verified against State Bar Council enrollments and practice standing prior to platform listing.</p>
            </div>
            <div className="p-3 bg-[#111317] border border-[#22262e] rounded-md">
              <span className="text-[10px] font-mono text-[#c8a15a] uppercase block">Step 3: Neutral Match &amp; Milestone Tracking</span>
              <p className="text-[#f2efe8] mt-0.5">Matched strictly on competence; both parties track case submissions, hearing dates, and documents transparently.</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#c8a15a] pt-1 flex items-center gap-1.5">
            <span>Result:</span> Zero sponsored placement bias; transparent milestones, compliant with Bar Council rules.
          </div>
        </div>
      </div>
    </div>
  );
}
