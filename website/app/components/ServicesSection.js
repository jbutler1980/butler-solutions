const solutionStreams = [
  {
    title: 'Edge Command Fabric',
    lead: 'Deploy, observe, and heal edge workloads with deterministic compliance evidence in minutes.',
    callouts: [
      'Digital twin of every edge region with live drift reconciliation',
      'Mission-kit templates for air-gapped, telco, and tactical deployments',
      'Continuous authority chain attestation with signed SBOMs',
    ],
  },
  {
    title: 'AI Ops Copilot Mesh',
    lead: 'LLM copilots orchestrate runbooks, correlate signals, and keep humans decisively in the loop.',
    callouts: [
      'Graph reasoning across telemetry, tickets, and playbooks for first-triage insights',
      'Closed-loop remediation tied to business SLO outcomes',
      'Audit-grade narrative for every automated decision',
    ],
  },
  {
    title: 'Sonic Data Fabric',
    lead: 'A latency-aware data mesh that respects jurisdiction while powering predictive intelligence.',
    callouts: [
      'Edge inference nodes synchronized with cloud-scale models',
      'Lineage-led access management across sovereign boundaries',
      'Encrypted, policy-driven data product exchange within 45 seconds',
    ],
  },
]

const orbitHighlights = [
  {
    title: 'Launch Pad',
    description: '12-week accelerator that converts legacy footprints into policy-driven, git-controlled platforms.',
  },
  {
    title: 'Atlas Intelligence',
    description: 'AI-enabled observability overlay delivering anomaly foresight and decision intelligence.',
  },
  {
    title: 'Command Continuum',
    description: 'Lifecycle governance, SRE operations, and platform stewardship with embedded architects.',
  },
]

export default function ServicesSection() {
  return (
    <section id="solutions" className="relative isolate py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-magenta/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-4 text-center">
          <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.4em] text-electric/80">
            <span className="inline-flex size-1.5 rounded-full bg-electric" />
            Mission Studios
          </span>
          <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
            We integrate AI, platform engineering, and compliance into one continuum.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-slate/80 md:text-lg">
            Butler teams embed with your platform crew to deliver technology that endures—architecting, automating, and
            governing the systems that move your mission.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solutionStreams.map((solution) => (
            <article
              key={solution.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl transition hover:border-electric/40 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-heading text-xl font-semibold text-white">{solution.title}</h3>
              <p className="mt-3 text-sm text-slate/70">{solution.lead}</p>
              <ul className="mt-5 space-y-3 text-sm text-slate/60">
                {solution.callouts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-gradient-to-r from-electric to-magenta" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-slate/60">
                <span className="inline-flex size-1.5 rounded-full bg-aqua" />
                Delivered via Butler Atlas™
              </span>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl md:grid-cols-3">
          {orbitHighlights.map((highlight) => (
            <div key={highlight.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-lg font-semibold text-white">{highlight.title}</h3>
              <p className="text-sm text-slate/70">{highlight.description}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-slate/70">
            <span className="text-xs uppercase tracking-[0.3em] text-slate/60">Activation Metrics</span>
            <div className="grid gap-4 text-white md:grid-cols-3">
              <div>
                <p className="font-heading text-2xl font-semibold">45</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate/60">Day compliance hardening</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold">3X</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate/60">Deployment velocity</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold">-62%</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate/60">MTTR reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
