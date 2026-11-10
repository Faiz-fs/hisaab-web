import CTAButton from "../components/CTAButton";
import AgentCard from "../components/AgentCard";
import { agents } from "../data/siteData";

const howItWorks = [
  {
    title: "Connect read-only AWS context",
    description:
      "Use read-only AWS credentials or session-based access so Zynapse can inspect infrastructure safely.",
  },
  {
    title: "Ask an AWS question",
    description:
      "Ask about incidents, service health, logs, alarms, IAM posture, or deployment readiness.",
  },
  {
    title: "Review gathered signals",
    description:
      "Zynapse uses MCP tools to gather AWS service, log, and monitoring context before answering.",
  },
  {
    title: "Approve next steps",
    description:
      "Review summaries, risks, and recommendations without any create, update, or delete actions.",
  },
];

export default function Home() {
  function openJoinBeta() {
    window.dispatchEvent(new Event("open-join-beta"));
  }

  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(76,215,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.12),transparent_35%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="ai-pulse" />
              AWS read-only agent beta
            </div>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-7xl">
              Understand your AWS environment without changing it.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Zynapse v1 helps startups and SMBs inspect AWS services, logs,
              alarms, incidents, IAM posture, and cloud health through read-only
              MCP tools. No create, update, or delete actions are performed.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="/product">View product</CTAButton>
              <CTAButton onClick={openJoinBeta} variant="secondary">
                Join beta
              </CTAButton>
            </div>
          </div>

          <PlatformPreview />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Beta agent catalog
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
            Starting with AWS read-only analysis.
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            Zynapse can grow into a wider agent platform later. The current beta
            is focused on AWS visibility, incident review, and security posture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <AgentCard key={agent.name} agent={agent} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--outline)] bg-[var(--surface)] p-8 lg:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
              Read-only AWS review from question to summary.
            </h2>

            <p className="mt-4 text-[var(--text-muted)]">
              The beta is built around safe inspection and explanation, not
              infrastructure mutation.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-5"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>

                <h3 className="text-lg font-bold text-[var(--text-main)]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-cyan-400/10 p-8 lg:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Join the beta
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
              Get early access to AWS read-only analysis.
            </h2>

            <p className="mt-5 leading-8 text-[var(--text-muted)]">
              Join the beta list to receive updates when Zynapse AWS read-only
              agent access is ready.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton onClick={openJoinBeta}>Join beta</CTAButton>
              <CTAButton href="/pricing" variant="secondary">
                View beta plans
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PlatformPreview() {
  const agentList = [
    "AWS Read-Only Ops Agent",
    "AWS Security Review Agent",
    "AWS Incident Review Agent",
    "GitHub PR Agent",
    "Sales Agent",
    "Founder Agent",
  ];

  return (
    <div className="glass-card rounded-[2rem] p-6">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-[var(--text-main)]">
          AWS beta preview
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Join beta now. Platform registration comes later.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[190px_1fr]">
        <div className="rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-4">
          <p className="mb-4 text-sm font-semibold text-[var(--text-muted)]">
            Agents
          </p>

          <div className="space-y-3">
            {agentList.map((agent, index) => (
              <div
                key={agent}
                className={`rounded-xl px-3 py-2 text-xs font-semibold ${
                  index === 0
                    ? "border border-cyan-400/40 bg-cyan-400/10 text-cyan-300"
                    : "bg-[var(--surface)] text-[var(--text-muted)]"
                }`}
              >
                {agent}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-5">
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
            read-only
          </span>

          <div className="mt-5 rounded-2xl bg-[var(--surface)] p-4 text-sm text-[var(--text-muted)]">
            User: Analyze ECS service health and recent CloudWatch errors.
          </div>

          <div className="mt-4 rounded-2xl border border-[var(--outline)] bg-[var(--surface)] p-4">
            <p className="text-xs font-semibold text-[var(--text-muted)]">
              Agent response
            </p>

            <p className="mt-2 leading-6 text-[var(--text-main)]">
              Read-only summary generated with service health, recent signals,
              likely risks, and next review actions.
            </p>

            <div className="mt-4 flex gap-3">
              <button className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-slate-950">
                Review
              </button>

              <button className="rounded-xl border border-[var(--outline)] px-4 py-2 text-sm text-[var(--text-main)]">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
