'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Scene3D from './3d/Scene3D'

const stats = [
  { label: 'Edge Regions Under Command', value: '42', suffix: '+', detail: 'Live across air, sea, orbital theaters' },
  { label: 'Critical Incidents Auto-Resolved', value: '73', suffix: '%', detail: 'Handled by Atlas copilots with audit trails' },
  { label: 'Regulated Deployments per Quarter', value: '520', detail: 'Signed, attested, and compliant by design' },
]

const heroSignals = [
  'AI-native autonomy with human-in-command protocols',
  'Latency-aware data fabric binding sovereign estates',
  'Zero-trust orchestration spanning core, cloud, and edge',
]

const badgeItems = [
  'Mission Architecture',
  'AI Copilot Engineering',
  'Sovereign Data Fabric',
  'Edge SRE Guild',
]

const container = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

const child = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-nebula-swirl" />
      <div className="absolute inset-0 -z-20 animate-aurora bg-gradient-to-br from-electric/20 via-transparent to-magenta/20 blur-3xl" />
      <div className="absolute inset-0 -z-20 bg-grid-overlay bg-[length:120px_120px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-[-10%] top-0 -z-10 h-[820px] animate-aurora bg-gradient-to-r from-electric/10 via-transparent to-magenta/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-32 pt-40 md:px-10 lg:flex-row lg:items-center lg:pt-48">
        <motion.div className="relative z-10 flex-1" variants={container} initial="hidden" animate="show">
          <motion.div variants={child} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-aqua shadow-glow">
            <span className="size-2 rounded-full bg-aqua" />
            Edge Command Fabric
          </motion.div>
          <motion.h1
            variants={child}
            className="mt-6 max-w-2xl font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl"
          >
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-magenta">sovereign AI command center</span> your mission deserves.
          </motion.h1>
          <motion.p variants={child} className="mt-6 max-w-xl text-base text-slate/80 md:text-lg">
            Butler Solutions architects and runs AI-native platforms that give regulated enterprises clairvoyant awareness, autonomous remediation, and provable compliance from cloud to tactical edge.
          </motion.p>

          <motion.div variants={child} className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.35em]">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-electric to-magenta px-7 py-3 font-semibold text-white shadow-glow transition hover:shadow-glow-magenta"
            >
              Engage Our Architects
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold text-slate transition hover:border-aqua/60 hover:text-aqua"
            >
              View Mission Command
            </a>
          </motion.div>

          <motion.ul variants={child} className="mt-10 grid gap-3 text-sm text-slate/70">
            {heroSignals.map((signal) => (
              <motion.li
                key={signal}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.04] px-4 py-3"
                whileHover={{ borderColor: 'rgba(77, 243, 255, 0.4)', color: '#d7ecff' }}
              >
                <span className="inline-flex size-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-aqua">
                  <svg viewBox="0 0 24 24" className="size-3" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
                <span>{signal}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div className="relative flex-1">
          <div className="absolute -inset-6 -z-10 rounded-[56px] border border-white/10 bg-gradient-to-br from-electric/20 via-transparent to-magenta/10 blur-2xl" />
          <motion.div
            className="relative overflow-hidden rounded-[48px] border border-white/10 bg-white/10 shadow-glow backdrop-blur-3xl"
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
            <div className="aspect-[4/5] w-full">
              <Scene3D />
            </div>
            <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-aqua">
              Atlas Telemetry Stream
              <span className="flex items-center gap-2 text-[9px] text-slate/60">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full bg-aqua/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-aqua" />
                </span>
                2.8 ms jitter
              </span>
            </div>
            <div className="absolute bottom-8 left-1/2 flex w-[85%] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.35em] text-slate/60">
              <span>Core</span>
              <span>Edge</span>
              <span>AI Ops</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, duration: 0.8 } } }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <p className="text-xs uppercase tracking-[0.35em] text-slate/60">{stat.label}</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-white">
                {stat.value}
                {stat.suffix && <span className="text-lg text-electric/80">{stat.suffix}</span>}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate/50">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 overflow-hidden rounded-full border border-white/10 bg-white/5 py-4">
          <div className="animate-marquee whitespace-nowrap text-xs uppercase tracking-[0.4em] text-slate/60">
            {badgeItems.concat(badgeItems).map((item, index) => (
              <span key={`${item}-${index}`} className="mx-8 inline-flex items-center gap-3">
                <span className="inline-flex size-1.5 rounded-full bg-gradient-to-r from-electric to-magenta" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
