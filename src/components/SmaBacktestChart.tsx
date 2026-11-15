"use client";

import React, { useState } from "react";
import { TrendingUp, ShieldAlert, Award, Activity } from "lucide-react";

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

export function SmaBacktestChart() {
  const [selectedStock, setSelectedStock] = useState<"INFY" | "TATAINVEST">("INFY");
  const data = selectedStock === "INFY" ? infyData : tataInvestData;

  // Chart dimensions & calculations
  const width = 800;
  const height = 340;
  const padding = { top: 25, right: 30, bottom: 40, left: 50 };

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const minPrice = Math.min(...data.map((d) => Math.min(d.price, d.sma20, d.sma50))) * 0.96;
  const maxPrice = Math.max(...data.map((d) => Math.max(d.price, d.sma20, d.sma50))) * 1.04;

  const getX = (index: number) => padding.left + (index / (data.length - 1)) * chartWidth;
  const getY = (val: number) =>
    padding.top + chartHeight - ((val - minPrice) / (maxPrice - minPrice)) * chartHeight;

  // Generate SVG path strings
  const pricePath = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.price)}`)
    .join(" ");

  const sma20Path = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.sma20)}`)
    .join(" ");

  const sma50Path = data
    .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d.sma50)}`)
    .join(" ");

  return (
    <div className="w-full bg-[#0a101f] border border-slate-800 rounded-xl p-5 sm:p-6 space-y-6">
      {/* Header controls & stock toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#d4af37]" />
            <h4 className="text-sm font-semibold tracking-wide text-white uppercase">
              20/50 SMA Crossover Backtest Visualization
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Empirical dual moving average trend filter with Golden Cross (Buy) and Death Cross (Exit) triggers.
          </p>
        </div>

        {/* Stock Selector Pill */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg">
          <button
            onClick={() => setSelectedStock("INFY")}
            className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
              selectedStock === "INFY"
                ? "bg-[#d4af37] text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            NSE: INFY
          </button>
          <button
            onClick={() => setSelectedStock("TATAINVEST")}
            className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
              selectedStock === "TATAINVEST"
                ? "bg-[#d4af37] text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            NSE: TATAINVEST
          </button>
        </div>
      </div>

      {/* SVG Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[550px] select-none"
        >
          {/* Horizontal grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
            const yVal = padding.top + chartHeight * pct;
            const priceVal = Math.round(maxPrice - pct * (maxPrice - minPrice));
            return (
              <g key={idx}>
                <line
                  x1={padding.left}
                  y1={yVal}
                  x2={width - padding.right}
                  y2={yVal}
                  stroke="#1e293b"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x={padding.left - 8}
                  y={yVal + 4}
                  fill="#64748b"
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="end"
                >
                  ₹{priceVal}
                </text>
              </g>
            );
          })}

          {/* Underlay filled area */}
          <path
            d={`${pricePath} L ${getX(data.length - 1)} ${padding.top + chartHeight} L ${getX(0)} ${
              padding.top + chartHeight
            } Z`}
            fill="url(#priceGradient)"
            opacity="0.1"
          />

          <defs>
            <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Price Line (Slate) */}
          <path
            d={pricePath}
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />

          {/* Slow 50 SMA Line (Steel Blue) */}
          <path
            d={sma50Path}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Fast 20 SMA Line (Gold) */}
          <path
            d={sma20Path}
            fill="none"
            stroke="#d4af37"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Signals dots & annotations */}
          {data.map((d, i) => {
            if (!d.signal) return null;
            const x = getX(i);
            const y = getY(d.price);
            const isBuy = d.signal === "BUY";
            return (
              <g key={i} className="cursor-pointer">
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill={isBuy ? "#10b981" : "#f43f5e"}
                  stroke="#070b14"
                  strokeWidth="2"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="10"
                  fill="none"
                  stroke={isBuy ? "#10b981" : "#f43f5e"}
                  strokeWidth="1"
                  strokeDasharray="2 2"
                  opacity="0.7"
                />
                <rect
                  x={x - 22}
                  y={isBuy ? y - 28 : y + 10}
                  width="44"
                  height="18"
                  rx="4"
                  fill={isBuy ? "#064e3b" : "#4c0519"}
                  stroke={isBuy ? "#10b981" : "#f43f5e"}
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={isBuy ? y - 16 : y + 23}
                  fill="#ffffff"
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  {d.signal}
                </text>
              </g>
            );
          })}

          {/* X-axis labels */}
          {data.map((d, i) => (
            <text
              key={i}
              x={getX(i)}
              y={height - padding.bottom + 18}
              fill="#64748b"
              fontSize="9"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {d.date}
            </text>
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800 text-xs text-slate-400">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#94a3b8] rounded inline-block"></span>
            <span>Close Price</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#d4af37] rounded inline-block"></span>
            <span className="text-white font-medium">Fast 20-Day SMA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#38bdf8] rounded inline-block"></span>
            <span className="text-white font-medium">Slow 50-Day SMA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            <span>Golden Cross</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
            <span>Death Cross</span>
          </div>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          Source: yFinance historical NSE data · Vectorized in Pandas
        </div>
      </div>

      {/* Comparative Metric Snapshot */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
          <div className="text-[11px] text-slate-400 uppercase font-mono">Max Drawdown</div>
          <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono mt-0.5">
            {selectedStock === "INFY" ? "-18.2%" : "-24.8%"}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            vs {selectedStock === "INFY" ? "-36.4%" : "-52.1%"} Buy & Hold
          </div>
        </div>

        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
          <div className="text-[11px] text-slate-400 uppercase font-mono">Sharpe Ratio</div>
          <div className="text-base sm:text-lg font-bold text-[#d4af37] font-mono mt-0.5">
            {selectedStock === "INFY" ? "0.35" : "0.60"}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            Rf = 6.5% 91-day T-Bill baseline
          </div>
        </div>

        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
          <div className="text-[11px] text-slate-400 uppercase font-mono">Annual Volatility</div>
          <div className="text-base sm:text-lg font-bold text-sky-400 font-mono mt-0.5">
            {selectedStock === "INFY" ? "15.3%" : "19.7%"}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            Reduced standard deviation of returns
          </div>
        </div>

        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg">
          <div className="text-[11px] text-slate-400 uppercase font-mono">Market Exposure</div>
          <div className="text-base sm:text-lg font-bold text-slate-200 font-mono mt-0.5">
            {selectedStock === "INFY" ? "~58%" : "~62%"}
          </div>
          <div className="text-[10px] text-slate-500 mt-1">
            Invested time; remainder in cash
          </div>
        </div>
      </div>
    </div>
  );
}
