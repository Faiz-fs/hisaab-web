import CTAButton from "../components/CTAButton";
import { pricingBundles } from "../data/siteData";

const trialSteps = [
  {
    title: "Join beta",
    description: "User submits email from the public website.",
  },
  {
    title: "Confirmation email",
    description: "A temporary frontend email flow sends a confirmation.",
  },
  {
    title: "Manual review",
    description: "Early beta users can be reviewed before enabling access.",
  },
  {
    title: "Platform later",
    description:
      "Register, login, chat, and profile come after platform completion.",
  },
];

const faqs = [
  {
    question: "Is Zynapse live now?",
    answer:
      "Zynapse is currently positioned as an AWS read-only beta. The full platform app will come later.",
  },
  {
    question: "Can Zynapse create or delete AWS resources?",
    answer:
      "No. The current beta focuses on read-only inspection and analysis. It does not create, update, or delete cloud resources.",
  },
  {
    question: "Why focus on AWS first?",
    answer:
      "The first version is built around your existing AWS MCP tools, so AWS read-only analysis is the most accurate beta scope.",
  },
  {
    question: "Will other agents come later?",
    answer:
      "Yes. GitHub, Sales, HR, and Founder agents can be added later as the Zynapse platform expands.",
  },
];

export default function Pricing() {
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
              Beta access
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-main)] sm:text-5xl lg:text-6xl">
              Join the AWS read-only beta.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
              Pricing is not final yet. For now, Zynapse is collecting beta
              interest for AWS read-only analysis and future platform expansion.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4">
          {pricingBundles.map((bundle) => (
            <div
              key={bundle.name}
              className={`relative rounded-2xl border p-6 transition hover:-translate-y-1 ${
                bundle.featured
                  ? "border-cyan-400 bg-cyan-400/10 shadow-2xl shadow-cyan-950/20"
                  : "glass-card"
              }`}
            >
              {bundle.featured && (
                <div className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                  Recommended
                </div>
              )}

              <h2 className="text-2xl font-bold text-[var(--text-main)]">
                {bundle.name}
              </h2>

              <p className="mt-4 text-lg font-semibold text-cyan-300">
                {bundle.agents}
              </p>

              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                {bundle.target}
              </p>

              <div className="mt-8">
                <CTAButton
                  onClick={openJoinBeta}
                  variant={bundle.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  Join beta
                </CTAButton>
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-4">
                <p className="text-sm text-[var(--text-muted)]">
                  ✓ {bundle.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--outline)] bg-[var(--surface)] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                Beta flow
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
                Join beta first. Platform access comes later.
              </h2>

              <p className="mt-5 leading-8 text-[var(--text-muted)]">
                The Join beta flow is temporary until the platform app and API
                fixes are complete.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trialSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-[var(--outline)] bg-[var(--background-soft)] p-5"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {index + 1}
                  </div>

                  <h3 className="font-bold text-[var(--text-main)]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[var(--text-main)] sm:text-4xl">
            Common beta questions.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[var(--text-main)]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-[var(--text-muted)]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
