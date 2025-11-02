'use client'

import Image from 'next/image'
import Scene3D from './3d/Scene3D'

const stats = [
  { label: 'Edge Regions Under Management', value: '42', suffix: '+' },
  { label: 'Critical Incidents Auto-Resolved', value: '73', suffix: '%' },
  { label: 'Regulated Deployments per Quarter', value: '520' },
]

const heroPills = [
  'AI-native autonomy with human auditability',
  'Latency-aware data mesh for sovereign estates',
  'Zero-trust orchestration from core to edge',
]

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-nebula-swirl" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-galaxy/20 to-midnight" />
      <div className="absolute inset-0 -z-10 bg-grid-overlay bg-[length:120px_120px] opacity-30" />
      <div className="pointer-events-none absolute inset-x-0 top-16 h-[600px] bg-gradient-to-r from-electric/20 via-transparent to-magenta/20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-32 pt-36 md:px-10 md:pt-44">
        <div className="grid items-center gap-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-aqua shadow-glow">
              <span className="size-2 rounded-full bg-aqua" />
              Edge Command Fabric
            </div>
            <h1 className="mt-6 max-w-2xl font-heading text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
              Operationalize <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric to-magenta">AI
              sovereignty</span> for every mission-critical edge.
            </h1>
            <p className="mt-6 max-w-xl text-base text-slate/80 md:text-lg">
              Butler Solutions designs and runs AI-native control planes that let regulated enterprises deploy,
              observe, and adapt systems across disconnected environments—without surrendering security or speed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-electric to-magenta px-7 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-glow transition hover:shadow-glow-magenta"
              >
                Engage Our Architects
                <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-slate transition hover:border-aqua/60 hover:text-aqua"
              >
                View Case Command
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-slate/70 md:max-w-xl">
              {heroPills.map((pill) => (
                <div key={pill} className="flex items-center gap-3">
                  <span className="inline-flex size-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-aqua">
                    <svg viewBox="0 0 24 24" className="size-3" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>{pill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] w-full">
            <div className="absolute inset-0 rounded-[48px] border border-white/10 bg-white/5 shadow-glow backdrop-blur-3xl" />
            <div className="absolute inset-0 rounded-[48px] border border-white/5 bg-gradient-to-br from-galaxy/60 via-transparent to-midnight/40" />
            <div className="absolute inset-6 rounded-[40px] bg-black/20">
              <Scene3D />
            </div>
            <div className="absolute -top-12 left-1/2 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-xs uppercase tracking-[0.35em] text-aqua lg:flex">
              Live Telemetry
              <span className="flex items-center gap-2 text-[10px] text-slate/60">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-pulseGlow rounded-full bg-aqua/60" />
                  <span className="relative inline-flex size-2 rounded-full bg-aqua" />
                </span>
                2.8ms jitter
              </span>
            </div>
            <div className="absolute -bottom-8 left-1/2 hidden w-[85%] -translate-x-1/2 rounded-3xl border border-white/10 bg-white/10 px-6 py-4 text-xs text-slate/70 shadow-glow md:flex">
              <div className="flex w-full items-center justify-between">
                <span className="uppercase tracking-[0.35em]">SLO Monitor</span>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className="inline-flex size-2 rounded-full bg-aqua" />
                    Core
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="inline-flex size-2 rounded-full bg-magenta/80" />
                    Edge
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="inline-flex size-2 rounded-full bg-electric/80" />
                    AI Ops
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-xs uppercase tracking-[0.35em] text-slate/70">{stat.label}</p>
              <p className="mt-3 font-heading text-3xl font-semibold text-white">
                {stat.value}
                {stat.suffix && <span className="text-lg text-electric/80">{stat.suffix}</span>}
              </p>
            </div>
          ))}
          <div className="md:col-span-3">
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.35em] text-slate/60 md:justify-between">
              <span className="flex items-center gap-3">
                <Image src="/logo.png" alt="Butler mark" width={36} height={36} className="rounded-full border border-white/10" />
                Sovereign Edge Alliance
              </span>
              <span>Trusted in healthcare, aerospace, and national infrastructure</span>
              <span>ISO 27001 • SOC 2 • FedRAMP alignment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
