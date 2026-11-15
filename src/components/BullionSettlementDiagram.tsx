import React from "react";
import { ArrowRight, Vault, FileCheck, RefreshCw, Landmark, Truck } from "lucide-react";

export function BullionSettlementDiagram() {
  const steps = [
    {
      step: "01",
      title: "Physical Ingress & Assaying",
      entity: "Empanelled Vault Manager",
      badge: "GIFT SEZ Vault",
      description: "LBMA/BIS accredited bars enter bonded vaults (Sequel/Brink's). Weights, serials & assay certificates verified.",
      icon: Vault,
    },
    {
      step: "02",
      title: "BDR Dematerialization",
      entity: "CDSL IFSC Depository",
      badge: "Title Tokenization",
      description: "Electronic Bullion Depository Receipt (BDR) issued against physical bar serial, creating a tradeable digital receipt.",
      icon: FileCheck,
    },
    {
      step: "03",
      title: "Order Matching & Trade",
      entity: "IIBX Central Order Book",
      badge: "USD Denominated",
      description: "Qualified Jewellers and suppliers match on price-time priority in USD with real-time pre-trade risk controls.",
      icon: RefreshCw,
    },
    {
      step: "04",
      title: "Clearing & Settlement",
      entity: "ICCL IFSC Clearing Corp",
      badge: "T+0 / T+1 DvP",
      description: "Novation and counterparty guarantee. BDR ownership transferred against instant USD funds debit on DvP settlement.",
      icon: Landmark,
    },
    {
      step: "05",
      title: "Rematerialization / Delivery",
      entity: "Customs & Domestic Intake",
      badge: "Final Delivery",
      description: "BDR extinguished upon physical withdrawal. Customs duty assessed and bullion dispatched to domestic fabricators.",
      icon: Truck,
    },
  ];

  return (
    <div className="w-full bg-[#111317] border border-[#22262e] rounded-xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#22262e] pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
            Market Infrastructure Workflow
          </span>
          <h4 className="text-base sm:text-lg font-semibold text-[#f2efe8] mt-1">
            End-to-End Bullion Lifecycle: From Physical Vault to Electronic BDR
          </h4>
        </div>
        <span className="text-xs font-mono text-[#8b8f97] bg-[#0a0b0d] border border-[#22262e] px-3 py-1 rounded-full self-start sm:self-auto">
          IFSCA Regulatory Architecture
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.step}
              className="relative flex flex-col justify-between p-4 bg-[#0a0b0d] border border-[#22262e] hover:border-[#c8a15a]/40 rounded-lg transition-colors group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#c8a15a]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono tracking-tight text-[#8b8f97] bg-[#111317] px-2 py-0.5 rounded border border-[#22262e]">
                    {item.badge}
                  </span>
                </div>
                <div className="p-2 w-fit rounded-md bg-[#111317] border border-[#22262e] text-[#c8a15a] group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-[#f2efe8] leading-snug">
                    {item.title}
                  </h5>
                  <div className="text-[11px] font-mono text-[#8b8f97] mt-0.5">
                    {item.entity}
                  </div>
                </div>
                <p className="text-[11px] text-[#8b8f97] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#8b8f97]">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-[#0a0b0d] border border-[#22262e] rounded-lg p-3.5 text-xs text-[#8b8f97] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#c8a15a] inline-block shrink-0"></span>
          <span>
            Observed during Anand Rathi Bullion Desk internship: Institutional KYC, GST, and IEC
            documentation must align with 100% precision before QJ trading accounts are activated.
          </span>
        </div>
        <span className="font-mono text-[11px] text-[#8b8f97] shrink-0">
          Source: IFSCA Bullion Exchange Regulations, 2020
        </span>
      </div>
    </div>
  );
}
