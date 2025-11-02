const contactSignals = [
  { label: 'Global Command HQ', value: 'Arlington • London • Canberra' },
  { label: 'Mission Console', value: 'missions@butler.solutions' },
  { label: 'Secure Briefing Line', value: '+1 (202) 555-4182' },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative isolate py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-magenta/10 via-transparent to-midnight" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:px-10 lg:flex-row">
        <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.07] p-8 backdrop-blur-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-electric/80">
            Initiate Briefing
          </span>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
            Ready to architect your edge intelligence future?
          </h2>
          <p className="mt-4 text-sm text-slate/70">
            Share your mission priorities and our architects will schedule a private session to shape your trajectory,
            from tactical prototypes to fully sovereign platforms.
          </p>
          <dl className="mt-8 space-y-4 text-sm text-slate/60">
            {contactSignals.map((signal) => (
              <div key={signal.label}>
                <dt className="text-xs uppercase tracking-[0.35em] text-slate/50">{signal.label}</dt>
                <dd className="mt-1 text-sm text-slate/70">{signal.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex-1 rounded-3xl border border-white/10 bg-black/30 p-8 shadow-glow backdrop-blur-xl">
          <form className="grid gap-5">
            <label className="text-xs uppercase tracking-[0.3em] text-slate/60">
              Name
              <input
                type="text"
                placeholder="Ada Lovelace"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate/50 focus:border-electric/60 focus:outline-none"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.3em] text-slate/60">
              Mission Email
              <input
                type="email"
                placeholder="mission@organization.gov"
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate/50 focus:border-electric/60 focus:outline-none"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.3em] text-slate/60">
              Operational Focus
              <select
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white focus:border-electric/60 focus:outline-none"
              >
                <option value="">Select priority</option>
                <option value="edge">Edge Platform Modernization</option>
                <option value="aiops">AI Ops Automation</option>
                <option value="data">Sovereign Data Fabric</option>
                <option value="other">Other Mission Initiative</option>
              </select>
            </label>
            <label className="text-xs uppercase tracking-[0.3em] text-slate/60">
              Briefing Context
              <textarea
                rows={4}
                placeholder="Outline mission drivers, timelines, and key outcomes."
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate/50 focus:border-electric/60 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-electric to-magenta px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-glow transition hover:shadow-glow-magenta"
            >
              Dispatch Briefing Request
              <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
