const accentClass = {
  cyan: "text-cyan-300 border-cyan-400/40 bg-cyan-400/10",
  green: "text-emerald-300 border-emerald-400/40 bg-emerald-400/10",
  violet: "text-violet-300 border-violet-400/40 bg-violet-400/10",
  amber: "text-amber-300 border-amber-400/40 bg-amber-400/10",
  rose: "text-rose-300 border-rose-400/40 bg-rose-400/10",
};

export default function AgentCard({ agent }) {
  return (
    <div className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-400/60">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
            accentClass[agent.accent] || accentClass.cyan
          }`}
        >
          ✦
        </div>

        {agent.status && (
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              agent.status === "Beta"
                ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                : "border-slate-700 bg-slate-900 text-slate-400"
            }`}
          >
            {agent.status}
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-semibold text-[var(--text-main)]">
        {agent.name}
      </h3>

      <p className="mt-4 leading-7 text-[var(--text-muted)]">
        {agent.description}
      </p>
    </div>
  );
}
