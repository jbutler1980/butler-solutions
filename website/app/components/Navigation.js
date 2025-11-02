'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Case Command', href: '#case-studies' },
  { label: 'Edge AI Lab', href: '#ai-stack' },
  { label: 'Insights', href: '#insights' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const renderedLinks = useMemo(
    () =>
      links.map((link) => (
        <motion.div key={link.href} whileHover={{ scale: 1.05 }}>
          <Link
            href={link.href}
            className="text-sm font-medium uppercase tracking-[0.2em] text-slate/80 transition hover:text-aqua"
            onClick={() => setOpen(false)}
            scroll
          >
            {link.label}
          </Link>
        </motion.div>
      )),
    [],
  )

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-16 top-4 mx-auto h-24 rounded-full bg-gradient-to-r from-electric/30 via-transparent to-magenta/30 blur-2xl" />
      <div className="mx-auto max-w-6xl px-6 pt-6 md:px-10">
        <div className="glass-panel pointer-events-auto flex items-center justify-between rounded-2xl px-6 py-4 shadow-glow transition hover:shadow-glow-magenta">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Butler Solutions" className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
                <Image src="/logo.png" alt="Butler Solutions logo" fill className="object-cover" priority />
              </div>
              <div>
                <span className="block font-heading text-lg font-semibold text-white">Butler Solutions</span>
                <span className="text-xs uppercase tracking-[0.35em] text-slate">Edge Intelligence</span>
              </div>
            </Link>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-8">{renderedLinks}</div>
            <Link
              href="#contact"
              className="rounded-full border border-white/10 bg-gradient-to-r from-electric/80 via-magenta/70 to-electric/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-glow transition hover:shadow-glow-magenta"
            >
              Request a Briefing
            </Link>
          </div>

          <button
            type="button"
            className="ml-4 flex size-11 items-center justify-center rounded-xl border border-white/10 text-slate transition hover:text-aqua md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
            {open ? (
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-panel mx-auto mt-4 w-[90%] max-w-md rounded-2xl p-6 md:hidden">
          <div className="flex flex-col gap-4 text-center">{renderedLinks}</div>
          <Link
            href="#contact"
            className="mt-6 block rounded-full border border-white/10 bg-gradient-to-r from-electric/80 via-magenta/70 to-electric/80 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-glow transition hover:shadow-glow-magenta"
            onClick={() => setOpen(false)}
          >
            Request a Briefing
          </Link>
        </div>
      )}
    </nav>
  )
}
