'use client'

export default function HeroFallback() {
  return (
    <div className="relative flex h-full w-full overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.35),transparent_55%),radial-gradient(circle_at_bottom,rgba(30,64,175,0.4),transparent_60%)]" />
      </div>
    </div>
  )
}
