'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const pseudoRandom = (seed) => {
  const value = Math.sin(seed) * 10000
  return value - Math.floor(value)
}

export default function ParticleField() {
  const points = useRef()

  const particleCount = 1000
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const baseSeed = i + 1
      pos[i * 3] = (pseudoRandom(baseSeed) - 0.5) * 10
      pos[i * 3 + 1] = (pseudoRandom(baseSeed + 0.37) - 0.5) * 10
      pos[i * 3 + 2] = (pseudoRandom(baseSeed + 0.73) - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state, delta) => {
    points.current.rotation.x += delta * 0.1
    points.current.rotation.y += delta * 0.1
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#ffffff" sizeAttenuation />
    </points>
  )
}
