'use client'

import { motion } from 'framer-motion'

const solutionStreams = [
  {
    title: 'Edge Command Fabric',
    lead: 'Deploy, observe, and heal edge workloads with deterministic compliance evidence in minutes.',
    callouts: [
      'Digital twin of every edge region with live drift reconciliation',
      'Mission-kit templates for air, sea, orbital, and terrestrial theaters',
      'Continuous authority chain attestation with signed SBOMs',
    ],
  },
  {
    title: 'AI Copilot Mesh',
    lead: 'LLM copilots orchestrate runbooks, correlate signals, and ground decisions in mission priorities.',
    callouts: [
      'Knowledge graph reasoning across telemetry, tickets, and playbooks',
      'Closed-loop remediation tied to business and mission SLOs',
      'Every automated act emits an auditable narrative',
    ],
  },
  {
    title: 'Sonic Data Fabric',
    lead: 'Jurisdiction-aware data mesh powering predictive intelligence without sacrificing sovereignty.',
    callouts: [
      'Edge inference nodes synchronized with cloud-scale models',
      'Lineage-led access management and encrypted exchange',
      'Data product delivery in under 45 seconds with policy guardrails',
    ],
  },
]

const orbitHighlights = [
  {
    title: 'Launch Pad',
    description: '12-week accelerator transforming legacy estates into policy-driven, git-controlled platforms.',
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
        <motion.div
          className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-electric/80">
              Mission Studios
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              We converge AI, platform engineering, and compliance into one unstoppable flow.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate/70 md:text-right">
            Butler embeds cross-functional strike teams—architects, SREs, data strategists, and AI scientists—to deliver
            mission-ready platforms, not slides.
          </p>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {solutionStreams.map((solution) => (
            <motion.article
              key={solution.title}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }}
              whileHover={{ y: -12, borderColor: 'rgba(194, 91, 255, 0.55)', boxShadow: '0 30px 65px rgba(194, 91, 255, 0.22)' }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl transition"
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
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl md:grid-cols-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {orbitHighlights.map((highlight) => (
            <div key={highlight.title} className="flex flex-col gap-3">
              <h3 className="font-heading text-lg font-semibold text-white">{highlight.title}</h3>
              <p className="text-sm text-slate/70">{highlight.description}</p>
            </div>
          ))}
          <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-6 text-sm text-slate/70">
            <span className="text-xs uppercase tracking-[0.3em] text-slate/60">Activation Metrics</span>
            <div className="grid gap-4 text-white sm:grid-cols-3">
              <div>
                <p className="font-heading text-2xl font-semibold">45</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">Day compliance hardening</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold">3×</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">Deployment velocity</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold">-62%</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">Mean time to restore</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
