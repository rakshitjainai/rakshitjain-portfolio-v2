import React from "react";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const recognition = [
    {
      title: "2nd Runner-Up — Tutedude Buildathon 2025",
      issuer: "Tutedude National Hackathon",
      detail: "Podium finish for LawPrix legal-tech matchmaking application in a national product build contest.",
      badge: "2nd Runner-Up",
    },
    {
      title: "1st Rank — IoT + Deep Learning Workshop",
      issuer: "PDEU / IEEE Student Branch / GUJCOST",
      detail: "Ranked 1st among participant teams in applied IoT and deep learning model implementation.",
      badge: "1st Place",
    },
    {
      title: "NPTEL Elite Certification (Score: 90/100)",
      issuer: "Ministry of Education, Government of India (IIT)",
      detail: "Elite certification in Understanding Incubation and Entrepreneurship.",
      badge: "Elite 90/100",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          Education
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a]">
          Education
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] max-w-2xl font-sans">
          Academic background and competitive honors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education (5 Cols) */}
        <div className="lg:col-span-5 p-7 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#2563eb] uppercase font-bold">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Degree</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0f172a] font-sans">
              Pandit Deendayal Energy University (PDEU)
            </h3>
            <p className="text-sm font-bold text-[#1d4ed8] font-mono">
              B.Tech in Information and Communication Technology (ICT)
            </p>
            <p className="text-xs font-mono text-[#64748b]">
              2023 – 2027 · Gandhinagar, Gujarat, India
            </p>
          </div>

          <p className="text-xs text-[#475569] leading-relaxed font-sans pt-3 border-t border-[#e3e8ef]">
            Core coursework across computer systems, data structures and algorithms, database management, computer networks, and operating systems.
          </p>
        </div>

        {/* Honors & Recognition (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#047857] uppercase font-bold">
            <Award className="w-4 h-4" />
            <span>Honors &amp; Recognition</span>
          </div>

          <div className="space-y-3">
            {recognition.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#e3e8ef] shadow-xs space-y-1.5 hover:border-[#2563eb]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-[#0f172a] font-sans">
                    {item.title}
                  </h4>
                  <span className="font-mono text-[10px] text-[#047857] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/80 font-bold self-start sm:self-auto">
                    {item.badge}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#2563eb]">
                  {item.issuer}
                </div>
                <p className="text-xs text-[#475569] leading-relaxed font-sans">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
