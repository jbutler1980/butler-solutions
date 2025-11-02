const pillars = [
  {
    title: 'Sovereign Control Plane',
    description:
      'Unified orchestration across air-gapped, low-bandwidth, and contested environments with policy automation baked in.',
    points: ['Zero-trust fabric signing deployments in < 90s', 'Hardware attestation across heterogeneous fleets'],
  },
  {
    title: 'Autonomous SLO Engine',
    description:
      'AI copilots surface, diagnose, and remediate failure patterns before human escalation, preserving compliance trails.',
    points: ['LLM copilots trained on your runbooks', 'Closed-loop guardrails with human-in-command overrides'],
  },
  {
    title: 'Sonic Data Mesh',
    description:
      'Latency-aware data sharing that respects jurisdiction, enabling predictive intelligence without compromising sovereignty.',
    points: ['Edge inference with cloud-scale analytics', 'Deterministic lineage and encrypted exchange'],
  },
]

export default function AboutSection() {
  return (
    <section id="platform" className="relative isolate py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-electric/10 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">
            The Butler platform is a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-magenta">
              command center for edge autonomy
            </span>
            .
          </h2>
          <p className="mt-4 text-base text-slate/80 md:text-lg">
            We pair deep site reliability expertise with AI-native automation so regulated organizations can sense,
            decide, and execute across distributed estates without sacrificing compliance or speed.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition hover:border-aqua/40 hover:shadow-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-heading text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate/70">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate/60">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-electric/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-8 block text-xs uppercase tracking-[0.35em] text-slate/60">
                Interlocks with Butler Atlas™
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
