'use client'

import { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import ThreeScene from './ThreeScene'
import HeroFallback from './HeroFallback'

export default function Scene3D() {
  const fallback = <HeroFallback />

  return (
    <ErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <ThreeScene fallback={fallback} />
      </Suspense>
    </ErrorBoundary>
  )
}
