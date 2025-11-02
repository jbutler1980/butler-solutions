'use client'

import { motion } from 'framer-motion'

const posts = [
  {
    title: 'The Sovereign Edge Playbook',
    excerpt: 'Architectural patterns for governing AI, data, and automation across contested environments.',
    published: '2025-10-12',
    category: 'Field Notes',
    readingTime: '11 min read',
  },
  {
    title: 'Designing AI Copilots for Mission Reliability',
    excerpt: 'How Butler Atlas pairs LLM copilots with human-in-command guardrails to accelerate incident response.',
    published: '2025-09-02',
    category: 'AI Operations',
    readingTime: '9 min read',
  },
  {
    title: 'Sonic Data Fabric Reference Architecture',
    excerpt: 'A blueprint for latency-aware, compliance-friendly data meshes powering predictive analytics at the edge.',
    published: '2025-07-21',
    category: 'Systems Design',
    readingTime: '14 min read',
  },
]

export default function BlogSection() {
  return (
    <section id="insights" className="relative isolate py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-electric/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          className="flex flex-col gap-4 text-center md:flex-row md:items-end md:justify-between md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-slate/70">
              Atlas Briefings
            </span>
            <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
              Intelligence from the edge command frontier.
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate/70 md:text-right">
            Explore how we synthesize AI, platform engineering, and compliance to deliver resilient systems worldwide.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: 'rgba(194, 91, 255, 0.5)', boxShadow: '0 35px 70px rgba(194, 91, 255, 0.18)' }}
            >
              <span className="text-xs uppercase tracking-[0.35em] text-slate/60">{post.category}</span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-3 flex-1 text-sm text-slate/70">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate/60">
                <time dateTime={post.published}>{post.published}</time>
                <span>{post.readingTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
