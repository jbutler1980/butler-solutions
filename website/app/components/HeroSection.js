'use client'

import Scene3D from './3d/Scene3D'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-4">Butler Solutions</h1>
        <p className="text-xl">Innovative Technology Solutions</p>
      </div>
    </section>
  )
}
