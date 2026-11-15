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
    <div className="w-full bg-[#111317] border border-[#22262e] rounded-xl p-5 sm:p-6 space-y-6">
      {/* Chart Header & Ticker Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#22262e] pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#c8a15a]" />
            <h4 className="text-base font-bold text-[#f2efe8]">
              20/50 SMA Crossover Strategy Backtest Simulation
            </h4>
          </div>
          <p className="text-xs text-[#8b8f97] mt-1">
            Dual moving average trend filter with Golden Cross (Buy) and Death Cross (Exit) triggers.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1 bg-[#0a0b0d] border border-[#22262e] rounded-lg">
          <button
            onClick={() => setSelectedStock("INFY")}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              selectedStock === "INFY"
                ? "bg-[#c8a15a] text-[#0a0b0d] font-bold"
                : "text-[#8b8f97] hover:text-[#f2efe8]"
            }`}
          >
            INFY (Infosys)
          </button>
          <button
            onClick={() => setSelectedStock("TATAINVEST")}
            className={`px-3 py-1 text-xs font-mono rounded transition-colors ${
              selectedStock === "TATAINVEST"
                ? "bg-[#c8a15a] text-[#0a0b0d] font-bold"
                : "text-[#8b8f97] hover:text-[#f2efe8]"
            }`}
          >
            TATAINVEST
          </button>
        </div>
      </div>

      {/* Responsive SVG Chart */}
      <div className="relative w-full overflow-x-auto">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto min-w-[650px] font-mono text-xs select-none"
        >
          {/* Horizontal Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
            const y = height - padding.bottom - pct * (height - padding.top - padding.bottom);
            const val = minVal + pct * (maxVal - minVal);
            return (
              <g key={i}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#22262e"
                  strokeDasharray="3 3"
                />
                <text
                  x={padding.left - 8}
                  y={y + 3}
                  fill="#8b8f97"
                  fontSize="9"
                  fontFamily="monospace"
                  textAnchor="end"
                >
                  ₹{Math.round(val)}
                </text>
              </g>
            );
          })}

          {/* Area Fill under Fast SMA */}
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c8a15a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#c8a15a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d={`${sma20Path} L ${getX(data.length - 1)} ${height - padding.bottom} L ${getX(0)} ${
              height - padding.bottom
            } Z`}
            fill="url(#areaGradient)"
          />

          {/* Lines */}
          <path
            d={pricePath}
            fill="none"
            stroke="#8b8f97"
            strokeWidth="1.25"
            strokeDasharray="2 2"
            opacity="0.8"
          />
          <path
            d={sma50Path}
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <path
            d={sma20Path}
            fill="none"
            stroke="#c8a15a"
            strokeWidth="2.5"
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
                  stroke="#0a0b0d"
                  strokeWidth="2"
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
              fill="#8b8f97"
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
      <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#22262e] text-xs text-[#8b8f97]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 bg-[#8b8f97] rounded inline-block"></span>
            <span>Close Price</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#c8a15a] rounded inline-block"></span>
            <span className="text-[#f2efe8] font-medium">Fast 20-Day SMA</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-1 bg-[#38bdf8] rounded inline-block"></span>
            <span className="text-[#f2efe8] font-medium">Slow 50-Day SMA</span>
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
        <div className="font-mono text-[11px] text-[#8b8f97]">
          Source: yFinance historical NSE data · Vectorized in Pandas
        </div>
      </div>

      {/* Comparative Metric Snapshot */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
        <div className="p-3 bg-[#0a0b0d] border border-[#22262e] rounded-lg">
          <div className="text-[11px] text-[#8b8f97] uppercase font-mono">Max Drawdown</div>
          <div className="text-base sm:text-lg font-bold text-emerald-400 font-mono mt-0.5">
            {selectedStock === "INFY" ? "-18.2%" : "-24.8%"}
          </div>
          <div className="text-[10px] text-[#8b8f97] mt-1">
            vs {selectedStock === "INFY" ? "-36.4%" : "-52.1%"} Buy &amp; Hold
          </div>
        </div>

        <div className="p-3 bg-[#0a0b0d] border border-[#22262e] rounded-lg">
          <div className="text-[11px] text-[#8b8f97] uppercase font-mono">Sharpe Ratio</div>
          <div className="text-base sm:text-lg font-bold text-[#c8a15a] font-mono mt-0.5">
            {selectedStock === "INFY" ? "0.35" : "0.60"}
          </div>
          <div className="text-[10px] text-[#8b8f97] mt-1">
            Rf = 6.5% 91-day T-Bill baseline
          </div>
        </div>

        <div className="p-3 bg-[#0a0b0d] border border-[#22262e] rounded-lg">
          <div className="text-[11px] text-[#8b8f97] uppercase font-mono">Annual Volatility</div>
          <div className="text-base sm:text-lg font-bold text-sky-400 font-mono mt-0.5">
            {selectedStock === "INFY" ? "15.3%" : "19.7%"}
          </div>
          <div className="text-[10px] text-[#8b8f97] mt-1">
            Reduced standard deviation of returns
          </div>
        </div>

        <div className="p-3 bg-[#0a0b0d] border border-[#22262e] rounded-lg">
          <div className="text-[11px] text-[#8b8f97] uppercase font-mono">Market Exposure</div>
          <div className="text-base sm:text-lg font-bold text-[#f2efe8] font-mono mt-0.5">
            {selectedStock === "INFY" ? "~58%" : "~62%"}
          </div>
          <div className="text-[10px] text-[#8b8f97] mt-1">
            Invested time; remainder in cash
          </div>
        </div>
      </div>
    </div>
  );
}
