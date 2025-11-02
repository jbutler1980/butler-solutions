'use client'

import { motion } from 'framer-motion'

const layers = [
  {
    name: 'Sense',
    description: 'Streaming telemetry, digital twins, and sovereign data exchange feeding Atlas knowledge graphs.',
    capabilities: ['Edge observability mesh', 'Telemetry compression + anomaly detection', 'Policy-aware data pipelines'],
  },
  {
    name: 'Decide',
    description: 'LLM copilots reason over missions, compliance, and SLO objectives to recommend grounded actions.',
    capabilities: ['Runbook + playbook copilot', 'Risk + compliance guardrails', 'Mission rehearsal simulations'],
  },
  {
    name: 'Act',
    description: 'Deterministic automation executes across core and edge with human-in-command verification.',
    capabilities: ['GitOps + image attestation', 'Multi-region rollout engine', 'Post-action evidence package'],
  },
]

const signalCards = [
  {
    title: 'Atlas Graph',
    detail: 'Interlinks telemetry, incidents, humans, and automation for explainable intelligence.',
  },
  {
    title: 'Command Console',
    detail: 'Real-time mission canvas with drift reconciliation and sovereign compliance overlays.',
  },
  {
    title: 'Continuum Stewardship',
    detail: 'Joint SRE and governance operating rhythm, aligning mission and product teams.',
  },
]

export default function AIStackSection() {
  return (
    <section id="ai-stack" className="relative isolate py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-electric/10 via-transparent to-magenta/10" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:px-10 lg:flex-row">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-aqua">
            Butler Atlas Stack
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
            AI that is accountable, auditable, and battle-tested.
          </h2>
          <p className="mt-4 text-sm text-slate/70">
            Butler Atlas™ fuses data mesh, AI copilots, and autonomous infrastructure into a unified knowledge system that adapts to your mission tempo.
          </p>

          <div className="mt-8 space-y-6">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.name}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
                whileHover={{ y: -8, borderColor: 'rgba(77, 243, 255, 0.5)' }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-lg font-semibold text-white">{layer.name}</h3>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-slate/60">Atlas Node</span>
                </div>
                <p className="mt-3 text-sm text-slate/70">{layer.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate/60">
                  {layer.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-gradient-to-r from-electric to-magenta" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 rounded-3xl border border-white/10 bg-black/30 p-6 shadow-glow backdrop-blur-xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-electric/20 via-transparent to-magenta/20 p-6 text-sm text-slate/70">
            <h3 className="font-heading text-lg font-semibold text-white">Mission Telemetry Loop</h3>
            <p className="mt-3 text-sm">
              Sense → Decide → Act loops stream into a shared Atlas timeline. Every automation includes provenance, human approvals, and performance outcomes.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {signalCards.map((card) => (
                <div key={card.title}>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate/60">{card.title}</p>
                  <p className="mt-2 text-sm">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-sm text-slate/60">
            <p className="text-xs uppercase tracking-[0.35em] text-slate/50">Telemetry Snapshot</p>
            <div className="mt-3 grid gap-4 text-white md:grid-cols-3">
              <div>
                <p className="font-heading text-2xl font-semibold">98.7%</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">Automations Verified</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold">12.4M</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">Signals/hour</p>
              </div>
              <div>
                <p className="font-heading text-2xl font-semibold">0</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-slate/60">Unexplained Actions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
