import CTAButton from "../components/CTAButton";

const productModules = [
  {
    title: "AWS service inspection",
    description:
      "Inspect ECS, Lambda, EC2, CloudWatch, ALB, CloudTrail, IAM, S3, and related AWS signals through read-only tools.",
  },
  {
    title: "Read-only access model",
    description:
      "The beta is designed for analysis and explanation only. It does not create, update, or delete cloud resources.",
  },
  {
    title: "Incident review",
    description:
      "Gather service health, logs, metrics, alarms, and recent activity to prepare incident context.",
  },
  {
    title: "Security posture review",
    description:
      "Review IAM, CloudTrail, security groups, access keys, storage exposure, and risky configuration signals.",
  },
  {
    title: "MCP tool orchestration",
    description:
      "Use MCP tools to gather AWS context before generating a structured response.",
  },
  {
    title: "Future platform expansion",
    description:
      "Zynapse can later expand into GitHub, sales, HR, and founder agents after the AWS beta matures.",
  },
];

const whyZynapse = [
  {
    title: "Accurate v1 scope",
    description:
      "The beta focuses on AWS read-only inspection instead of promising full automation too early.",
  },
  {
    title: "Safe by design",
    description:
      "No create/delete actions are performed, making it safer for early customers to test.",
  },
  {
    title: "Built for startups",
    description:
      "Small teams can quickly understand cloud health, incidents, and security posture.",
  },
  {
    title: "Platform-ready",
    description:
      "The agent model can later support more teams and workflows inside Zynapse.",
  },
];

export default function Product() {
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
              Product beta
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
              AWS read-only analysis for startups and SMBs.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
              Zynapse v1 starts with AWS read-only tools. It helps teams inspect
              service health, logs, alarms, incidents, IAM posture, and cloud
              signals without performing create, update, or delete actions.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton onClick={openJoinBeta}>Join beta</CTAButton>

              <CTAButton href="/docs" variant="secondary">
                View docs
              </CTAButton>
            </div>
          </div>

          <ProductPreview />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Core product modules
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
            Focused on AWS visibility and safe review.
          </h2>

          <p className="mt-4 text-[var(--text-muted)]">
            The current beta is not a full infrastructure automation agent. It
            is a read-only analysis layer for AWS operations and security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {productModules.map((module) => (
            <div
              key={module.title}
              className="glass-card rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-400/60"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                ✦
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-main)]">
                {module.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Why Zynapse
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
            Honest beta positioning, safer customer trust.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyZynapse.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[var(--text-main)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductPreview() {
  return (
    <div className="glass-card rounded-[2rem] p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-main)]">
            AWS read-only preview
          </h2>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Analysis only. No cloud mutations.
          </p>
        </div>

        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          read-only
        </span>
      </div>

      <div className="rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-5">
        <div className="rounded-2xl bg-[var(--surface)] p-4 text-sm text-[var(--text-muted)]">
          Analyze ECS service health and recent CloudWatch errors.
        </div>

        <div className="mt-5 rounded-2xl border border-[var(--outline)] bg-[var(--surface)] p-4">
          <p className="text-xs font-semibold text-[var(--text-muted)]">
            Zynapse AWS Read-Only Ops Agent
          </p>

          <p className="mt-2 leading-6 text-[var(--text-main)]">
            Service health summary generated with recent events, logs, alarms,
            and recommended review actions.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["ECS", "CloudWatch", "CloudTrail"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[var(--outline)] bg-[var(--background-soft)] px-4 py-3 text-sm text-[var(--text-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
