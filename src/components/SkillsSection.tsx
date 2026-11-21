import React from "react";

export function SkillsSection() {
  const groups = [
    {
      category: "Markets & Quant",
      description: "Exchange infrastructure, quantitative analysis, trading operations, and risk metrics",
      skills: [
        { name: "Python", context: "Primary modeling language for backtesting and time-series data processing" },
        { name: "Pandas & NumPy", context: "Vectorized time series transformations and rolling calculations" },
        { name: "Backtesting", context: "20/50 SMA crossover strategy evaluation with 1-day shifted execution" },
        { name: "Risk Metrics", context: "CAGR, Sharpe Ratio (Rf = 6.5%), Maximum Drawdown, volatility" },
        { name: "Bullion Trading", context: "IIBX trading operations and order entry terminal monitoring" },
        { name: "Exchange Settlement", context: "Bullion Depository Receipts (BDRs) dematerialized settlement" },
        { name: "Margin & Risk Monitoring", context: "Real-time collateral limits and order validation" },
        { name: "KYC & Compliance", context: "Institutional PAN, GST, and IEC document verification" },
        { name: "Regulatory Compliance", context: "IFSCA Bullion Exchange Regulations and DGFT procedures" },
        { name: "Excel", context: "Operational tracking, formula modeling, and reconciliation sheets" },
      ],
    },
    {
      category: "Engineering",
      description: "Full-stack web development, systems programming, and database interfaces",
      skills: [
        { name: "React.js & Next.js", context: "Component architecture, client state, and App Router" },
        { name: "Node.js & Express", context: "Backend REST API endpoints, routing, and middleware" },
        { name: "C", context: "Systems programming: POSIX APIs, fork, execvp, pipes, file redirection" },
        { name: "SQL", context: "Relational database schema queries and data consistency" },
        { name: "Git & GitHub", context: "Branching workflows, pull requests, issue tracking, and code reviews" },
        { name: "REST APIs", context: "HTTP methods, payload validation, and client-server integration" },
        { name: "Linux / Unix", context: "Shell scripting, process management, and terminal tooling" },
        { name: "PHP", context: "Internal enterprise web development (DAE training portal)" },
        { name: "HTML5 & Tailwind CSS", context: "Accessible, responsive layouts and print stylesheets" },
      ],
    },
    {
      category: "Product",
      description: "Workflow deconstruction, requirements modeling, and domain problem solving",
      skills: [
        { name: "User Workflow Mapping", context: "Mapping multi-stakeholder handoffs across regulated services" },
        { name: "Problem Discovery", context: "Identifying friction and fee opacity in traditional directories" },
        { name: "Requirements Specification", context: "Translating statutory rules and user needs into engineering specs" },
        { name: "Criteria-Based Routing", context: "Eliminating paid sponsor bidding with domain categorization" },
        { name: "Rapid Prototyping", context: "MVP delivery: 2nd Runner-Up at national Tutedude Buildathon" },
        { name: "Stakeholder Coordination", context: "Liaison between placement teams, student bodies, and engineers" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <div className="border-b border-[#e3e8ef] pb-6 space-y-2">
        <span className="font-mono text-xs uppercase tracking-wider text-[#2563eb] font-semibold">
          Skills
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif-display font-bold text-[#0f172a]">
          Skills
        </h2>
        <p className="text-xs sm:text-sm text-[#475569] max-w-2xl font-sans">
          Technical skills, tools, and methodologies applied across projects and internships.
        </p>
      </div>

      <div className="space-y-8">
        {groups.map((group, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-[#e3e8ef] shadow-xs space-y-5"
          >
            <div className="border-b border-[#e3e8ef] pb-3 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#0f172a] font-sans">
                {group.category}
              </h3>
              <p className="text-xs text-[#475569] font-sans">
                {group.description}
              </p>
            </div>

            {/* Skills tags: soft tinted blue, hover changes to green tint, no glow */}
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  title={skill.context}
                  className="px-3 py-1.5 rounded-lg bg-blue-50/70 border border-blue-200/60 text-[#1d4ed8] text-xs font-mono font-medium transition-colors hover:bg-emerald-50 hover:text-[#047857] hover:border-emerald-300/80 cursor-default shadow-2xs"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
