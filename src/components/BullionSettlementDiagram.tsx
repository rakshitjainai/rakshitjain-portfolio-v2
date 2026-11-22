import React from "react";
import { Vault, FileCheck, RefreshCw, Landmark, Truck } from "lucide-react";

export function BullionSettlementDiagram() {
  const stages = [
    {
      num: "1",
      stage: "Physical Ingress & Vaulting",
      entity: "Empanelled Vault Manager (Sequel / Brink's)",
      action: "LBMA/BIS accredited bullion bars enter GIFT SEZ bonded vaults; weights, serial numbers, and assay certificates are verified.",
      icon: Vault,
    },
    {
      num: "2",
      stage: "BDR Dematerialization",
      entity: "CDSL IFSC Depository",
      action: "Electronic Bullion Depository Receipt (BDR) is credited against the physical bar serial, creating a fungible, tradeable instrument.",
      icon: FileCheck,
    },
    {
      num: "3",
      stage: "Order Matching",
      entity: "IIBX Central Order Book",
      action: "Qualified Jewellers and suppliers match on price-time priority in USD per troy ounce with real-time pre-trade risk checks.",
      icon: RefreshCw,
    },
    {
      num: "4",
      stage: "Clearing & Settlement",
      entity: "Indian Clearing Corporation Ltd (ICCL) IFSC",
      action: "Central counterparty novation and settlement. BDR ownership transfers against instant USD funds debit on Delivery versus Payment (DvP).",
      icon: Landmark,
    },
    {
      num: "5",
      stage: "Rematerialization & Delivery",
      entity: "Customs & Empanelled Vault",
      action: "BDR is extinguished upon physical withdrawal request; customs duties are assessed and physical gold is dispatched to domestic fabricators.",
      icon: Truck,
    },
  ];

  return (
    <div className="w-full bg-white border border-[#e3e8ef] rounded-xl p-5 sm:p-6 space-y-5 shadow-xs">
      <div className="border-b border-[#e3e8ef] pb-3">
        <h2 className="text-sm sm:text-base font-bold text-[#0f172a] font-sans [text-wrap:balance]">
          End-to-End Bullion Lifecycle: Vault to Electronic Settlement
        </h2>
        <p className="text-xs text-[#475569] font-sans mt-0.5 [text-wrap:pretty]">
          Five structured stages connecting physical vault custody to dematerialized exchange settlement.
        </p>
      </div>

      {/* Mobile Phone View (< 640px): Stacked Stage Cards */}
      <div className="block sm:hidden space-y-3">
        {stages.map((st) => {
          const Icon = st.icon;
          return (
            <div
              key={st.num}
              className="p-4 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-[#2563eb] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {st.num}
                  </span>
                  <div className="flex items-center gap-1.5 font-bold text-xs text-[#0f172a]">
                    <Icon className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                    <span>{st.stage}</span>
                  </div>
                </div>
              </div>

              <div className="inline-block px-2 py-0.5 rounded bg-white border border-[#e3e8ef] text-[10px] font-mono font-semibold text-[#1d4ed8]">
                {st.entity}
              </div>

              <p className="text-xs text-[#475569] leading-relaxed [text-wrap:pretty]">
                {st.action}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tablet & Desktop View (>= 640px): Full Structured Table */}
      <div className="hidden sm:block overflow-x-auto rounded-lg border border-[#e3e8ef]">
        <table className="w-full text-left border-collapse text-xs font-sans">
          <thead>
            <tr className="bg-[#f6f8fb] border-b border-[#e3e8ef]">
              <th className="p-3.5 font-mono font-bold text-[#2563eb] uppercase text-[11px] w-12">#</th>
              <th className="p-3.5 font-mono font-bold text-[#0f172a] uppercase text-[11px] w-48">Stage</th>
              <th className="p-3.5 font-mono font-bold text-[#0f172a] uppercase text-[11px] w-56">Entity Responsible</th>
              <th className="p-3.5 font-mono font-bold text-[#0f172a] uppercase text-[11px]">Workflow Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e3e8ef]">
            {stages.map((st, sIdx) => {
              const Icon = st.icon;
              const isEven = sIdx % 2 === 1;
              return (
                <tr
                  key={st.num}
                  className={`${isEven ? "bg-[#f8fafc]" : "bg-white"} hover:bg-blue-50/30 transition-colors`}
                >
                  <td className="p-3.5 font-mono font-bold text-[#2563eb]">{st.num}</td>
                  <td className="p-3.5 font-semibold text-[#0f172a]">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#2563eb] shrink-0" />
                      <span>{st.stage}</span>
                    </div>
                  </td>
                  <td className="p-3.5 font-mono text-xs text-[#475569] font-medium">{st.entity}</td>
                  <td className="p-3.5 text-xs text-[#475569] leading-relaxed">{st.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
