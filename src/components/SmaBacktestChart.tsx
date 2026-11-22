"use client";

import React, { useState } from "react";
import { Activity } from "lucide-react";

interface EquityDataPoint {
  date: string;
  price: number;
  sma20: number;
  sma50: number;
  signal?: "BUY" | "SELL";
}

const infyData: EquityDataPoint[] = [
  { date: "M1", price: 1420, sma20: 1410, sma50: 1400 },
  { date: "M2", price: 1445, sma20: 1425, sma50: 1408, signal: "BUY" },
  { date: "M3", price: 1490, sma20: 1450, sma50: 1420 },
  { date: "M4", price: 1530, sma20: 1485, sma50: 1440 },
  { date: "M5", price: 1580, sma20: 1525, sma50: 1470 },
  { date: "M6", price: 1540, sma20: 1545, sma50: 1500 },
  { date: "M7", price: 1480, sma20: 1530, sma50: 1520 },
  { date: "M8", price: 1420, sma20: 1490, sma50: 1515, signal: "SELL" },
  { date: "M9", price: 1390, sma20: 1440, sma50: 1490 },
  { date: "M10", price: 1370, sma20: 1400, sma50: 1460 },
  { date: "M11", price: 1410, sma20: 1395, sma50: 1435 },
  { date: "M12", price: 1460, sma20: 1415, sma50: 1410, signal: "BUY" },
  { date: "M13", price: 1510, sma20: 1445, sma50: 1418 },
  { date: "M14", price: 1570, sma20: 1485, sma50: 1430 },
  { date: "M15", price: 1620, sma20: 1530, sma50: 1455 },
];

const tataInvestData: EquityDataPoint[] = [
  { date: "M1", price: 2100, sma20: 2080, sma50: 2050 },
  { date: "M2", price: 2240, sma20: 2140, sma50: 2080, signal: "BUY" },
  { date: "M3", price: 2450, sma20: 2260, sma50: 2130 },
  { date: "M4", price: 2680, sma20: 2420, sma50: 2210 },
  { date: "M5", price: 2950, sma20: 2630, sma50: 2320 },
  { date: "M6", price: 2800, sma20: 2750, sma50: 2450 },
  { date: "M7", price: 2550, sma20: 2710, sma50: 2540 },
  { date: "M8", price: 2380, sma20: 2580, sma50: 2600, signal: "SELL" },
  { date: "M9", price: 2210, sma20: 2420, sma50: 2570 },
  { date: "M10", price: 2180, sma20: 2310, sma50: 2500 },
  { date: "M11", price: 2300, sma20: 2270, sma50: 2420 },
  { date: "M12", price: 2480, sma20: 2320, sma50: 2360, signal: "BUY" },
  { date: "M13", price: 2720, sma20: 2430, sma50: 2370 },
  { date: "M14", price: 3010, sma20: 2600, sma50: 2420 },
  { date: "M15", price: 3250, sma20: 2800, sma50: 2510 },
];

const stockMetrics = {
  INFY: [
    { label: "Max Drawdown", value: "-18.2%", baseline: "-36.4% B&H", context: "Preserved capital" },
    { label: "Sharpe Ratio", value: "0.35", baseline: "0.32 B&H", context: "Rf = 6.5%" },
    { label: "Volatility", value: "15.3%", baseline: "24.1% B&H", context: "Annualized stdev" },
    { label: "Market Exposure", value: "~58%", baseline: "100% B&H", context: "Time invested" },
  ],
  TATAINVEST: [
    { label: "Max Drawdown", value: "-24.8%", baseline: "-52.1% B&H", context: "Cyclical protection" },
    { label: "Sharpe Ratio", value: "0.60", baseline: "0.51 B&H", context: "Rf = 6.5%" },
    { label: "Volatility", value: "19.7%", baseline: "31.8% B&H", context: "Annualized stdev" },
    { label: "Market Exposure", value: "~62%", baseline: "100% B&H", context: "Time invested" },
  ],
};

export function SmaBacktestChart() {
  const [selectedStock, setSelectedStock] = useState<"INFY" | "TATAINVEST">("INFY");
  const [selectedPoint, setSelectedPoint] = useState<EquityDataPoint | null>(null);

  const data = selectedStock === "INFY" ? infyData : tataInvestData;
  const metrics = stockMetrics[selectedStock];

  const width = 850;
  const height = 300;
  const padding = { top: 25, right: 30, bottom: 35, left: 55 };

  const prices = data.flatMap((d) => [d.price, d.sma20, d.sma50]);
  const minVal = Math.min(...prices) * 0.96;
  const maxVal = Math.max(...prices) * 1.04;

  const getX = (index: number) =>
    padding.left + (index / (data.length - 1)) * (width - padding.left - padding.right);

  const getY = (val: number) =>
    height - padding.bottom - ((val - minVal) / (maxVal - minVal)) * (height - padding.top - padding.bottom);

  const makePath = (accessor: (d: EquityDataPoint) => number) => {
    return data
      .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i).toFixed(1)} ${getY(accessor(d)).toFixed(1)}`)
      .join(" ");
  };

  const pricePath = makePath((d) => d.price);
  const sma20Path = makePath((d) => d.sma20);
  const sma50Path = makePath((d) => d.sma50);

  return (
    <div className="w-full max-w-full min-w-0 bg-white border border-[#e3e8ef] rounded-xl p-4 sm:p-6 space-y-6 shadow-xs overflow-hidden">
      {/* Chart Header & Ticker Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e3e8ef] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#2563eb]" />
            <h2 className="text-base font-bold text-[#0f172a]">
              20/50 SMA Crossover Strategy Simulation
            </h2>
            <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[10px] font-mono text-[#1d4ed8] uppercase tracking-wider font-bold">
              Simulation
            </span>
          </div>
          <p className="text-xs text-[#475569] mt-1">
            Historical simulation showing Golden Cross (Buy) and Death Cross (Exit to Cash) signals over a 15-interval sample cycle.
          </p>
        </div>

        {/* INFY / TATAINVEST Large Tap Target Toggle (>= 44px) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#f8fafc] border border-[#e3e8ef] rounded-lg shrink-0">
          <button
            onClick={() => {
              setSelectedStock("INFY");
              setSelectedPoint(null);
            }}
            className={`min-h-[44px] min-w-[80px] px-4 py-2 text-xs font-mono rounded-md transition-all cursor-pointer flex items-center justify-center font-bold ${
              selectedStock === "INFY"
                ? "bg-[#2563eb] text-white shadow-xs"
                : "text-[#475569] hover:text-[#0f172a]"
            }`}
          >
            INFY
          </button>
          <button
            onClick={() => {
              setSelectedStock("TATAINVEST");
              setSelectedPoint(null);
            }}
            className={`min-h-[44px] min-w-[80px] px-4 py-2 text-xs font-mono rounded-md transition-all cursor-pointer flex items-center justify-center font-bold ${
              selectedStock === "TATAINVEST"
                ? "bg-[#2563eb] text-white shadow-xs"
                : "text-[#475569] hover:text-[#0f172a]"
            }`}
          >
            TATAINVEST
          </button>
        </div>
      </div>

      {/* 2x2 Metric Grid on phones (grid-cols-2 lg:grid-cols-4) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-3.5 rounded-xl bg-[#f8fafc] border border-[#e3e8ef] space-y-1 text-center sm:text-left"
          >
            <span className="font-mono text-[10px] uppercase text-[#64748b] tracking-wider block font-semibold">
              {m.label}
            </span>
            <div className="text-base sm:text-lg font-bold font-mono text-[#0f172a]">
              {m.value}
            </div>
            <div className="text-[11px] font-mono text-[#2563eb] font-semibold">
              vs {m.baseline}
            </div>
          </div>
        ))}
      </div>

      {/* Responsive SVG Container with horizontal scroll affordance and visible mobile hint */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#64748b] sm:hidden px-1">
          <span>← Swipe horizontally to explore all intervals →</span>
          <span>15 intervals</span>
        </div>

        <div className="w-full max-w-full min-w-0 overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] rounded-lg border border-[#e3e8ef]/60 p-1 bg-white">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full min-w-[580px] h-[240px] sm:h-[300px] min-h-[220px] overflow-visible"
          >
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
              const val = minVal + pct * (maxVal - minVal);
              const y = getY(val);
              return (
                <g key={idx}>
                  <line
                    x1={padding.left}
                    y1={y}
                    x2={width - padding.right}
                    y2={y}
                    stroke="#e3e8ef"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                  <text
                    x={padding.left - 10}
                    y={y + 4}
                    fill="#64748b"
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="end"
                  >
                    ₹{val.toFixed(0)}
                  </text>
                </g>
              );
            })}

            {/* X Axis Labels */}
            {data.map((d, i) => (
              <text
                key={i}
                x={getX(i)}
                y={height - 10}
                fill="#64748b"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {d.date}
              </text>
            ))}

            {/* Paths with draw-in animation */}
            <path
              d={pricePath}
              fill="none"
              stroke="#0f172a"
              strokeWidth="2"
              className="draw-stroke-path"
            />
            <path
              d={sma20Path}
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              className="draw-stroke-path"
            />
            <path
              d={sma50Path}
              fill="none"
              stroke="#047857"
              strokeWidth="2"
              strokeDasharray="5 4"
              className="draw-stroke-path"
            />

            {/* Interactive Tap / Hover points with large 28px hit-target */}
            {data.map((d, i) => {
              const x = getX(i);
              const y = getY(d.price);
              return (
                <g
                  key={`point-${i}`}
                  className="cursor-pointer"
                  onClick={() => setSelectedPoint(d)}
                >
                  <circle
                    cx={x}
                    cy={y}
                    r="14"
                    fill="transparent"
                    className="hover:fill-blue-500/15 transition-colors"
                  />
                  <circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#0f172a"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                </g>
              );
            })}

            {/* Signal Markers */}
            {data.map((d, i) => {
              if (!d.signal) return null;
              const x = getX(i);
              const y = getY(d.price);
              const isBuy = d.signal === "BUY";
              return (
                <g key={`sig-${i}`}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill={isBuy ? "#059669" : "#dc2626"}
                    stroke="#ffffff"
                    strokeWidth="2"
                    className="shadow-sm"
                  />
                  <text
                    x={x}
                    y={isBuy ? y - 12 : y + 18}
                    fill={isBuy ? "#047857" : "#b91c1c"}
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {isBuy ? "BUY (Golden Cross)" : "EXIT (Death Cross)"}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Data Point Detail (Tap Support) */}
      {selectedPoint && (
        <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200 text-xs font-mono flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-100">
          <div>
            <span className="font-bold text-[#0f172a]">{selectedPoint.date}: </span>
            <span className="text-[#334155]">Price: ₹{selectedPoint.price}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-[#2563eb]">SMA 20: ₹{selectedPoint.sma20}</span>
            <span className="mx-2 text-slate-300">|</span>
            <span className="text-[#047857]">SMA 50: ₹{selectedPoint.sma50}</span>
          </div>
          {selectedPoint.signal && (
            <span className="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-slate-900">
              Signal: {selectedPoint.signal}
            </span>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#e3e8ef] text-xs font-mono">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#0f172a]" />
            <span className="text-[#0f172a] font-semibold">Price</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#2563eb]" />
            <span className="text-[#2563eb] font-semibold">20-Day SMA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#047857] border-t border-dashed border-[#047857]" />
            <span className="text-[#047857] font-semibold">50-Day SMA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
            <span className="text-[#047857] font-semibold">Golden Cross (Long)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626]" />
            <span className="text-[#b91c1c] font-semibold">Death Cross (Cash)</span>
          </div>
        </div>

        <span className="text-[#64748b] text-[11px]">
          Sample Simulation Cycle
        </span>
      </div>
    </div>
  );
}
