'use client'

import { motion } from 'framer-motion'

const pillars = [
  {
    title: 'Sovereign Control Plane',
    description:
      'Unified orchestration across disputed, air-gapped, and low-bandwidth environments backed by zero-trust policy automation.',
    points: ['Digital twin of every region with live drift reconciliation', 'Hardware attestation and signed SBOM supply chain'],
  },
  {
    title: 'Autonomous SLO Engine',
    description:
      'Atlas copilots synthesize telemetry, knowledge graphs, and runbooks to detect, explain, and remediate before human escalation.',
    points: ['Copilots trained on your missions and governance playbooks', 'Closed-loop guardrails with human approval checkpoints'],
  },
  {
    title: 'Sonic Data Fabric',
    description:
      'Latency-aware data mesh respecting sovereignty boundaries while powering inference, analytics, and predictive logistics.',
    points: ['Edge inference nodes synchronized with cloud-scale models', 'Deterministic lineage + encrypted policy-driven exchange'],
  },
]

export default function AboutSection() {
  return (
    <motion.section
      id="platform"
      className="relative isolate py-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-electric/10 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-heading text-3xl font-semibold text-white md:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            Butler Atlas™ is the&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-magenta">edge intelligence spine</span>&nbsp;
            powering sovereign AI missions.
          </motion.h2>
          <motion.p
            className="mt-4 text-base text-slate/80 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            Our architects embed with your command and product teams to design systems that sense, decide, and act across
            disconnected estates—while producing the evidence trail auditors demand.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.title}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } } }}
              whileHover={{ y: -10, borderColor: 'rgba(77, 243, 255, 0.6)', boxShadow: '0 28px 60px rgba(77, 243, 255, 0.15)' }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-2xl transition"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="font-heading text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm text-slate/70">{pillar.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate/60">
                {pillar.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-gradient-to-r from-electric to-magenta" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-8 block text-xs uppercase tracking-[0.35em] text-slate/60">Interlocks with Butler Atlas™</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
