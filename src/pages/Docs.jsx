const docsSections = [
  {
    number: "01",
    title: "Introduction",
    description:
      "Understand what Zynapse AWS read-only beta is and how it works.",
  },
  {
    number: "02",
    title: "AWS connection",
    description:
      "Learn how read-only AWS access is connected for safe inspection.",
  },
  {
    number: "03",
    title: "MCP tools",
    description: "Understand how Zynapse uses MCP tools to gather AWS context.",
  },
  {
    number: "04",
    title: "Read-only scope",
    description:
      "See what the beta can inspect and what actions it will not perform.",
  },
  {
    number: "05",
    title: "Incident review",
    description:
      "Use AWS service signals, logs, alarms, and events for incident context.",
  },
  {
    number: "06",
    title: "Security review",
    description:
      "Review IAM, CloudTrail, security groups, S3, and posture signals.",
  },
  {
    number: "07",
    title: "Beta access",
    description: "Join the beta list and receive access updates.",
  },
  {
    number: "08",
    title: "Future platform",
    description:
      "Learn how Zynapse can expand into more agents after AWS beta.",
  },
];

const quickStart = [
  "Join beta",
  "Receive confirmation",
  "Beta access review",
  "Connect read-only AWS",
  "Start AWS analysis",
];

const domainRows = [
  {
    label: "zynapse.in",
    value: "Homepage, Product, Docs, Pricing",
  },
  {
    label: "future platform app",
    value: "Register, Login, Chat, Profile",
  },
  {
    label: "api layer",
    value: "Backend API and beta signup endpoint later",
  },
  {
    label: "docs site",
    value: "agent documention will be available on docs site",
  },
];

export default function Docs() {
  function openJoinBeta() {
    window.dispatchEvent(new Event("open-join-beta"));
  }

  return (
    <>
      <section className="relative overflow-hidden px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(76,215,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.1),transparent_35%)]" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
              <span className="ai-pulse" />
              Documentation
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
              Docs for the AWS read-only beta.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
              Public documentation explains the beta scope, read-only AWS
              access, MCP tools, incident review, security review, and future
              platform direction.
            </p>

            <div className="mt-8">
              <button
                onClick={openJoinBeta}
                className="rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
                type="button"
              >
                Join beta
              </button>
            </div>
          </div>

          <div className="mt-10 max-w-4xl rounded-2xl border border-[var(--outline)] bg-[var(--surface)] px-5 py-4 text-[var(--text-muted)]">
            Search docs: AWS, MCP, read-only, incidents, security...
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            Docs index
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
            Everything users need before beta access.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {docsSections.map((section) => (
            <div
              key={section.number}
              className="glass-card rounded-2xl p-5 transition hover:-translate-y-1 hover:border-cyan-400/60"
            >
              <div className="flex gap-4">
                <span className="text-sm font-bold text-cyan-300">
                  {section.number}
                </span>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-main)]">
                    {section.title}
                  </h3>

                  <p className="mt-2 leading-6 text-[var(--text-muted)]">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--outline)] bg-[var(--surface)] p-8 lg:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
              Quick start
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
              From beta signup to first AWS analysis.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-5">
            {quickStart.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-5"
              >
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold leading-6 text-[var(--text-main)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--outline)] bg-[var(--surface)] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                Structure
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
                Marketing now, platform later.
              </h2>

              <p className="mt-5 leading-8 text-[var(--text-muted)]">
                Join beta is temporary until the full platform app is complete.
                Later the platform will handle register, login, chat, and
                profile screens.
              </p>
            </div>

            <div className="space-y-4">
              {domainRows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-3 rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-5 sm:grid-cols-[190px_1fr]"
                >
                  <div className="font-semibold text-cyan-300">{row.label}</div>
                  <div className="text-[var(--text-muted)]">{row.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
