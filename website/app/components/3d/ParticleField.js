'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

const pseudoRandom = (seed) => {
  const value = Math.sin(seed) * 10000
  return value - Math.floor(value)
}

export default function ParticleField() {
  const points = useRef()

  const particleCount = 1200
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const cols = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const seed = i + 1
      const x = (pseudoRandom(seed) - 0.5) * 8
      const y = (pseudoRandom(seed + 0.37) - 0.5) * 6
      const z = (pseudoRandom(seed + 0.73) - 0.5) * 8
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z

      const mixValue = Math.abs(y) / 3
      const electric = [0.36, 0.48, 1]
      const magenta = [0.77, 0.36, 1]
      cols[i * 3] = electric[0] * (1 - mixValue) + magenta[0] * mixValue
      cols[i * 3 + 1] = electric[1] * (1 - mixValue) + magenta[1] * mixValue
      cols[i * 3 + 2] = electric[2] * (1 - mixValue) + magenta[2] * mixValue
    }
    return { positions: pos, colors: cols }
  }, [])

  useFrame((state, delta) => {
    if (!points.current) {
      return
    }
    points.current.rotation.x += delta * 0.05
    points.current.rotation.y += delta * 0.08
    points.current.position.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.12
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
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors depthWrite={false} transparent opacity={0.75} sizeAttenuation />
    </points>
  )
}
