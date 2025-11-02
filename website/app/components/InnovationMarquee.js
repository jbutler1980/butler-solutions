'use client'

import { motion } from 'framer-motion'

const streams = [
  'Edge Autonomy',
  'AI Copilot Stewardship',
  'Sovereign Data Fabric',
  'Mission SRE Guild',
  'Atlas Knowledge Graph',
  'Compliance Intelligence',
  'Zero-Trust Orchestration',
  'Digital Twin Command',
]

export default function InnovationMarquee() {
  return (
    <section className="relative isolate overflow-hidden py-14">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-galaxy/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="flex animate-marquee items-center gap-12 whitespace-nowrap text-xs uppercase tracking-[0.5em] text-slate/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {streams.concat(streams).map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-4">
              <span className="inline-flex size-1.5 rounded-full bg-gradient-to-r from-electric to-magenta" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
