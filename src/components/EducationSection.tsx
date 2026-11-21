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
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Education
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          Education
        </h2>
        <p className="text-xs sm:text-sm text-[#8b8f97] max-w-2xl font-sans">
          Academic background and competitive honors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education (5 Cols) */}
        <div className="lg:col-span-5 p-7 rounded-2xl bg-[#111317] border border-[#22262e] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c8a15a] uppercase font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Degree</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-[#f2efe8] font-sans">
              Pandit Deendayal Energy University (PDEU)
            </h3>
            <p className="text-sm font-bold text-[#c8a15a] font-mono">
              B.Tech in Information and Communication Technology (ICT)
            </p>
            <p className="text-xs font-mono text-[#8b8f97]">
              2023 – 2027 · Gandhinagar, Gujarat, India
            </p>
          </div>

          <p className="text-xs text-[#8b8f97] leading-relaxed font-sans pt-3 border-t border-[#22262e]">
            Core curriculum in data structures, algorithms, operating systems, computer networks, database management systems, and probability &amp; statistics for computing.
          </p>
        </div>

        {/* Recognition Cards (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8b8f97] uppercase">
            <Award className="w-4 h-4 text-[#c8a15a]" />
            <span>Awards &amp; Certifications</span>
          </div>

          <div className="space-y-3">
            {recognition.map((rec, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#111317] border border-[#22262e] space-y-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-[#f2efe8]">
                    {rec.title}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-[#c8a15a] bg-[#c8a15a]/10 px-2 py-0.5 rounded shrink-0">
                    {rec.badge}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#8b8f97]">
                  {rec.issuer}
                </div>
                <p className="text-xs text-[#8b8f97] leading-relaxed pt-1 font-sans">
                  {rec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
