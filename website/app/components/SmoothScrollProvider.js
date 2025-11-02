'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.8,
      smoothTouch: false,
    })

    let animationFrameId
    const raf = (time) => {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  return null
}
