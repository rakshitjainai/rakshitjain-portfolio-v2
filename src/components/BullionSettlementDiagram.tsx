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
    <div className="w-full bg-[#111317] border border-[#22262e] rounded-xl p-5 sm:p-6 space-y-4">
      <div className="border-b border-[#22262e] pb-3">
        <h4 className="text-sm sm:text-base font-bold text-[#f2efe8] font-sans">
          End-to-End Bullion Lifecycle: Vault to Electronic Settlement
        </h4>
        <p className="text-xs text-[#8b8f97] font-sans mt-0.5">
          Five structured stages connecting physical vault custody to dematerialized exchange settlement.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs font-sans">
          <thead>
            <tr className="bg-[#0a0b0d] border-b border-[#22262e]">
              <th className="p-3 font-mono font-bold text-[#c8a15a] uppercase text-[11px] w-12">#</th>
              <th className="p-3 font-mono font-bold text-[#f2efe8] uppercase text-[11px] w-48">Stage</th>
              <th className="p-3 font-mono font-bold text-[#f2efe8] uppercase text-[11px] w-56">Entity Responsible</th>
              <th className="p-3 font-mono font-bold text-[#f2efe8] uppercase text-[11px]">Workflow Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#22262e]">
            {stages.map((st) => {
              const Icon = st.icon;
              return (
                <tr key={st.num} className="hover:bg-[#0a0b0d]/50 transition-colors">
                  <td className="p-3 font-mono font-bold text-[#c8a15a]">{st.num}</td>
                  <td className="p-3 font-semibold text-[#f2efe8]">
                    <div className="flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#c8a15a] shrink-0" />
                      <span>{st.stage}</span>
                    </div>
                  </td>
                  <td className="p-3 font-mono text-xs text-[#8b8f97]">{st.entity}</td>
                  <td className="p-3 text-xs text-[#8b8f97] leading-relaxed">{st.action}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
