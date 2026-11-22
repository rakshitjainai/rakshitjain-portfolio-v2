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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1280px] mx-auto space-y-10">
      <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          Leadership
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a] [text-wrap:balance]">
          Leadership
        </h2>
        <p className="text-sm sm:text-base text-[#475569] max-w-2xl font-sans [text-wrap:pretty]">
          Campus leadership positions across technical event operations, club administration, and placement coordination.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipRoles.map((lead, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs hover:border-[#2563eb]/40 hover:shadow-md transition-all duration-200 space-y-4"
          >
            <div className="space-y-1 border-b border-[#e3e8ef] pb-3">
              <span className="font-mono text-xs font-bold text-[#2563eb]">
                {lead.role}
              </span>
              <h3 className="text-lg font-bold text-[#0f172a] font-sans">
                {lead.organization}
              </h3>
              <div className="font-mono text-xs text-[#64748b] pt-0.5">
                {lead.period}
              </div>
            </div>

            <p className="text-base text-[#334155] leading-relaxed font-sans [text-wrap:pretty]">
              {lead.highlights}
            </p>

            {(lead.teamSize || lead.events) && (
              <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
                {lead.teamSize && (
                  <span className="px-2.5 py-1 rounded bg-[#f8fafc] border border-[#e3e8ef] text-[#0f172a] font-medium">
                    Team: {lead.teamSize}
                  </span>
                )}
                {lead.events && (
                  <span className="px-2.5 py-1 rounded bg-[#f8fafc] border border-[#e3e8ef] text-[#0f172a] font-medium">
                    Scope: {lead.events}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
