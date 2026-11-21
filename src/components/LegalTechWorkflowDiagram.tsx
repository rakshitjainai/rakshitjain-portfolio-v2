import React from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

export function LegalTechWorkflowDiagram() {
  return (
    <div className="w-full bg-white border border-[#e3e8ef] rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
      <div className="border-b border-[#e3e8ef] pb-3 space-y-1">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          Product Architecture Comparison
        </span>
        <h3 className="text-base sm:text-lg font-semibold text-[#0f172a]">
          Traditional Legal Directory vs LawPrix Criteria-Driven Matchmaking
        </h3>
        <p className="text-xs text-[#475569]">
          How structured workflow design eliminates advertising bias and builds institutional trust for retail legal consumers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Legacy Model */}
        <div className="p-5 bg-rose-50/50 border border-rose-200/80 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-rose-700">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <h4 className="text-xs font-semibold uppercase tracking-wider font-mono">
              Legacy Legal Directories (Pay-to-Win)
            </h4>
          </div>

          <div className="space-y-3 text-xs text-[#475569]">
            <div className="p-3 bg-white border border-rose-100 rounded-md">
              <span className="text-[10px] font-mono text-rose-600 uppercase block font-semibold">Step 1: Unfiltered Search</span>
              <p className="text-[#0f172a] mt-0.5">Consumer enters free-text query; algorithm displays sponsored listings paying the highest bid price.</p>
            </div>
            <div className="p-3 bg-white border border-rose-100 rounded-md">
              <span className="text-[10px] font-mono text-rose-600 uppercase block font-semibold">Step 2: Unverified Self-Reporting</span>
              <p className="text-[#0f172a] mt-0.5">No credential checks or Bar Council validation. Opaque fee structures and frequent abandoned cases.</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-rose-700 pt-1 flex items-center gap-1.5 font-medium">
            <span>Result:</span> High information asymmetry, fee disputes, and diminished consumer trust.
          </div>
        </div>

        {/* LawPrix Model */}
        <div className="p-5 bg-blue-50/40 border border-blue-200 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-[#1d4ed8]">
            <CheckCircle className="w-4 h-4 shrink-0 text-[#047857]" />
            <h4 className="text-xs font-semibold uppercase tracking-wider font-mono">
              LawPrix Workflow Engine (Criteria-Driven)
            </h4>
          </div>

          <div className="space-y-3 text-xs text-[#475569]">
            <div className="p-3 bg-white border border-blue-100 rounded-md">
              <span className="text-[10px] font-mono text-[#2563eb] uppercase block font-semibold">Step 1: Structured Intake</span>
              <p className="text-[#0f172a] mt-0.5">Questionnaire categorizes practice domain (corporate, family, criminal, property), urgency, and jurisdiction.</p>
            </div>
            <div className="p-3 bg-white border border-blue-100 rounded-md">
              <span className="text-[10px] font-mono text-[#059669] uppercase block font-semibold">Step 2: Credential Verification Layer</span>
              <p className="text-[#0f172a] mt-0.5">Lawyers verified against State Bar Council enrollments and practice standing prior to platform listing.</p>
            </div>
            <div className="p-3 bg-white border border-blue-100 rounded-md">
              <span className="text-[10px] font-mono text-[#2563eb] uppercase block font-semibold">Step 3: Neutral Match &amp; Milestone Tracking</span>
              <p className="text-[#0f172a] mt-0.5">Matched strictly on competence; both parties track case submissions, hearing dates, and documents transparently.</p>
            </div>
          </div>

          <div className="text-[11px] font-mono text-[#047857] pt-1 flex items-center gap-1.5 font-medium">
            <span>Result:</span> Zero sponsored placement bias; transparent milestones, compliant with Bar Council rules.
          </div>
        </div>
      </div>
    </div>
  );
}
