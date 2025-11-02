'use client'

import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
  {
    heading: 'Platform',
    items: [
      { label: 'Edge Mesh Control Plane', href: '#platform' },
      { label: 'Autonomous SLO Engine', href: '#solutions' },
      { label: 'Sovereign Data Fabric', href: '#ai-stack' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'Case Command', href: '#case-studies' },
      { label: 'Insights', href: '#insights' },
      { label: 'Briefing Request', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-gradient-to-b from-galaxy/40 to-midnight/80">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full border border-white/10 shadow-glow">
                <Image src="/logo.png" alt="Butler Solutions logo" fill className="object-cover" />
              </div>
              <div>
                <p className="font-heading text-xl font-semibold text-white">Butler Solutions LC</p>
                <p className="text-xs uppercase tracking-[0.35em] text-slate">Edge Intelligence Systems</p>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-slate/80">
              We engineer AI-native platforms that let mission-critical teams orchestrate data, automation, and
              compliance from core to edge without compromising velocity or control.
            </p>
          </div>
          {footerLinks.map((column) => (
            <div key={column.heading}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate/70">{column.heading}</h4>
              <ul className="mt-5 space-y-3 text-sm text-slate/80">
                {column.items.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 transition hover:text-aqua"
                    >
                      <span className="h-px w-8 bg-gradient-to-r from-transparent via-magenta/50 to-transparent opacity-0 transition group-hover:opacity-100" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate/60 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Butler Solutions LC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#contact" className="hover:text-aqua">
              Contact
            </Link>
            <Link href="#" className="hover:text-aqua">
              Privacy
            </Link>
            <Link href="#" className="hover:text-aqua">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
