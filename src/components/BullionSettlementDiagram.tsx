import React from "react";
import { ArrowRight, Building2, Database, ShieldCheck, Landmark, CheckCircle2 } from "lucide-react";

export function BullionSettlementDiagram() {
  const steps = [
    {
      step: "01",
      title: "Physical Vaulting & Assaying",
      entity: "Empanelled Vault Managers",
      description:
        "Physical gold/silver bars arrive from accredited refiners into bonded vaults at GIFT IFSC. Serial numbers, bar fineness, and assay stamps are verified.",
      badge: "Custody Layer",
      icon: Building2,
    },
    {
      step: "02",
      title: "BDR Dematerialization",
      entity: "CDSL IFSC Depository",
      description:
        "Physical bars are immobilized. An electronic Bullion Depository Receipt (BDR) is inscribed with bar serials, refiner marks, and net fine weight.",
      badge: "Title Registry",
      icon: Database,
    },
    {
      step: "03",
      title: "Exchange Trading (CLOB)",
      entity: "IIBX Electronic Engine",
      description:
        "Global suppliers and domestic Qualified Jewellers submit orders. The matching engine executes trades anonymously in USD on price-time priority.",
      badge: "Price Discovery",
      icon: Landmark,
    },
    {
      step: "04",
      title: "Clearing & DvP Settlement",
      entity: "Clearing Corp (ICCL IFSC)",
      description:
        "Trades are novated through the central counterparty. Delivery vs Payment (DvP) transfers electronic BDRs to the buyer's demat account.",
      badge: "Guarantee & Risk",
      icon: ShieldCheck,
    },
    {
      step: "05",
      title: "DTA Import or Storage",
      entity: "Qualified Jeweller (QJ)",
      description:
        "The jeweller either holds the BDR in depository custody or extinguishes the receipt to physically transport duty-paid bullion to their domestic unit.",
      badge: "Delivery / Ingress",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="w-full bg-[#0a101f] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#d4af37]">
            Market Infrastructure Workflow
          </span>
          <h4 className="text-base sm:text-lg font-semibold text-white mt-1">
            End-to-End Bullion Lifecycle: From Physical Vault to Electronic BDR
          </h4>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full self-start sm:self-auto">
          IFSCA Regulatory Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative flex flex-col justify-between p-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#d4af37]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-tight text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>
                <div className="p-2 w-fit rounded-md bg-slate-800/60 border border-slate-700 text-[#38bdf8] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white leading-snug">
                    {item.title}
                  </h5>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {item.entity}
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-slate-900/40 border border-slate-800/80 rounded-lg p-3.5 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#d4af37] inline-block shrink-0"></span>
          <span>
            Observed during Anand Rathi Bullion Desk internship: Institutional KYC, GST, and IEC
            documentation must align with 100% precision before QJ trading accounts are activated.
          </span>
        </div>
        <span className="font-mono text-[11px] text-slate-500 shrink-0">
          Source: IIBX Operating Guidelines & IFSCA Regulations
        </span>
      </div>
    </div>
  );
}
