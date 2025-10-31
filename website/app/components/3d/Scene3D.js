'use client'

import { Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import ThreeScene from './ThreeScene'

export default function Scene3D() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeScene />
      </Suspense>
    </ErrorBoundary>
  )
}
