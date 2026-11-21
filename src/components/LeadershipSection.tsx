import React from "react";

export function LeadershipSection() {
  const leadershipRoles = [
    {
      role: "Operations & Logistics Head",
      organization: "Computer Society of India (CSI), PDEU",
      period: "October 2025 – July 2026",
      teamSize: "25 members",
      events: "5 technical events",
      highlights:
        "Led a 25-member student operations and logistics squad, coordinating venue allocations, equipment scheduling, and stage setups for major campus hackathons and technical workshops.",
    },
    {
      role: "Head of Operations & Logistics",
      organization: "Nucleus – The Physics Club, PDEU",
      period: "July 2024 – May 2025",
      teamSize: "9 members",
      events: "10+ events",
      highlights:
        "Advanced from subcommittee member to department head within 12 months. Directed resource planning, faculty permissions, and scheduling across all academic conclaves and student activities.",
    },
    {
      role: "Training & Placement Cell Representative",
      organization: "PDEU Central Placement Cell",
      period: "April 2026 – Present",
      teamSize: null,
      events: null,
      highlights:
        "Serves as student coordinator between the university placement office and recruiting corporate organizations, coordinating batch schedules and on-campus recruitment drives.",
    },
    {
      role: "Publicity Assistant",
      organization: "IEEE Computer Society Chapter, PDEU",
      period: "February 2024 – May 2025",
      teamSize: null,
      events: "15+ workshops",
      highlights:
        "Coordinated digital outreach, announcements, and registration campaigns across 15+ coding competitions, guest lectures, and student technical workshops.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="border-b border-[#22262e] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#c8a15a] font-semibold">
          Leadership
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#f2efe8]">
          Leadership
        </h2>
        <p className="text-xs sm:text-sm text-[#8b8f97] max-w-2xl font-sans">
          Campus leadership positions across technical event operations, club administration, and placement coordination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipRoles.map((lead, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-[#111317] border border-[#22262e] space-y-4 hover:border-[#c8a15a]/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3 border-b border-[#22262e] pb-3">
                <div>
                  <span className="font-mono text-xs font-bold text-[#c8a15a]">
                    {lead.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#f2efe8] font-sans mt-0.5">
                    {lead.organization}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#8b8f97] shrink-0">
                  {lead.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#8b8f97] font-sans leading-relaxed">
                {lead.highlights}
              </p>
            </div>

            {/* Scope Strip (Only rendering verified numeric stats) */}
            {(lead.teamSize || lead.events) && (
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#22262e] text-[11px] font-mono">
                {lead.teamSize && (
                  <div className="px-2.5 py-1 rounded bg-[#0a0b0d] border border-[#22262e] flex items-center gap-1.5">
                    <span className="text-[#8b8f97] text-[10px] uppercase">Team:</span>
                    <span className="font-bold text-[#f2efe8]">{lead.teamSize}</span>
                  </div>
                )}
                {lead.events && (
                  <div className="px-2.5 py-1 rounded bg-[#0a0b0d] border border-[#22262e] flex items-center gap-1.5">
                    <span className="text-[#8b8f97] text-[10px] uppercase">Scope:</span>
                    <span className="font-bold text-[#f2efe8]">{lead.events}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
