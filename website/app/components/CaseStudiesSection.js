'use client'

import { motion } from 'framer-motion'

const featured = {
  client: 'Trident Aerospace Command',
  challenge: 'Global edge operations required sovereign autonomy with minute-level situational awareness.',
  outcome:
    'Butler orchestrated a unified command fabric across 11 nations, delivering deterministic telemetry with resilient AI copilots.',
  metrics: [
    { label: 'Rollout Velocity', value: '→ 14x', detail: 'Mission kits from git to runway in 27 minutes' },
    { label: 'Anomaly Detection', value: '↓ 81%', detail: 'Critical incidents caught before escalation' },
    { label: 'Compliance Evidence', value: '100%', detail: 'Continuous STIG + SOC 2 reporting' },
  ],
}

const supporting = [
  {
    name: 'National Health Grid',
    summary: 'Federated patient telemetry with zero-trust data sharing across 120 hospitals.',
    results: ['Zero critical breaches post-launch', 'Data product delivery in 18 minutes', 'Audit narratives auto-generated'],
  },
  {
    name: 'Quantum Logistics Alliance',
    summary: 'AI copilots balancing inventory and fleet logistics across 42 distribution hubs in real time.',
    results: ['Latency cut by 68%', '4× deployment frequency', '$2.4M cross-network savings'],
  },
]

const timeline = [
  { label: 'Ignition', detail: 'Blueprint, capability heat-map, and sovereignty posture in 10 days.' },
  { label: 'Orbit', detail: 'Mission kits hardened, copilots trained, compliance guardrails activated.' },
  { label: 'Continuum', detail: 'Joint command cadence with shared runbooks, AI stewardship, and reliability governance.' },
]

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="relative isolate py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-galaxy/20 to-midnight" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-magenta/70">
              Case Command
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              Mission programs delivered with precision and accountability.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate/70 md:text-right">
            We partner with mission, platform, and compliance leadership to design edge AI systems that withstand contested conditions and pass the toughest audits.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.08] p-8 backdrop-blur-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <header className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate/60">Featured Program</p>
                <h3 className="mt-1 font-heading text-2xl font-semibold text-white">{featured.client}</h3>
              </div>
              <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-electric/80">
                Defense & Aerospace
              </span>
            </header>
            <p className="mt-6 text-sm text-slate/70">{featured.challenge}</p>
            <p className="mt-3 text-sm text-slate/60">{featured.outcome}</p>
            <dl className="mt-8 grid gap-4 text-sm text-slate/60 md:grid-cols-3">
              {featured.metrics.map((metric) => (
                <motion.div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  whileHover={{ borderColor: 'rgba(77, 243, 255, 0.5)', y: -6 }}
                >
                  <dt className="text-xs uppercase tracking-[0.35em] text-slate/60">{metric.label}</dt>
                  <dd className="mt-2 font-heading text-2xl font-semibold text-white">{metric.value}</dd>
                  <p className="mt-2 text-[11px]">{metric.detail}</p>
                </motion.div>
              ))}
            </dl>
          </motion.article>

          <div className="flex flex-col gap-6">
            {supporting.map((program, index) => (
              <motion.article
                key={program.name}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: 'rgba(93, 123, 255, 0.5)' }}
              >
                <header className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-white">{program.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.35em] text-slate/60">Atlas Ops</span>
                </header>
                <p className="mt-3 text-sm text-slate/70">{program.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate/60">
                  {program.results.map((result) => (
                    <li key={result} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-1.5 rounded-full bg-electric" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/20 p-8 text-sm text-slate/70 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="max-w-md">
            <h3 className="font-heading text-lg font-semibold text-white">Mission Continuum</h3>
            <p className="mt-2 text-sm text-slate/60">
              Every program transitions from ignition to shared stewardship with a joint command cadence.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4 md:flex-row md:items-center md:justify-end">
            {timeline.map((item) => (
              <div key={item.label} className="md:text-right">
                <p className="text-xs uppercase tracking-[0.35em] text-slate/60">{item.label}</p>
                <p className="mt-1 text-sm text-slate/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
