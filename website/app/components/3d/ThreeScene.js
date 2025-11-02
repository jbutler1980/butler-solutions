'use client'

import { Canvas } from '@react-three/fiber'
import { Float, Stars, Line, Sphere } from '@react-three/drei'
import { useMemo } from 'react'
import Logo3D from './Logo3D'
import ParticleField from './ParticleField'

function NetworkHalo() {
  const points = useMemo(() => {
    const result = []
    const radius = 1.6
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2
      result.push([radius * Math.cos(angle), 0.45 * Math.sin(angle * 2), radius * Math.sin(angle)])
    }
    return result
  }, [])

  return (
    <group>
      <Line points={points} color="#4DF3FF" transparent opacity={0.35} />
      <mesh rotation={[0.2, 0.4, 0]}>
        <torusGeometry args={[1.2, 0.04, 48, 96]} />
        <meshStandardMaterial color="#C25BFF" emissive="#C25BFF" emissiveIntensity={0.35} transparent opacity={0.35} />
      </mesh>
    </group>
  )
}

function SignalPulse() {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.5}>
      <Sphere args={[0.35, 64, 64]}>
        <meshStandardMaterial color="#4DF3FF" emissive="#4DF3FF" emissiveIntensity={0.7} transparent opacity={0.4} />
      </Sphere>
    </Float>
  )
}

export default function ThreeScene({ fallback }) {
  return (
    <Canvas
      className="h-full w-full"
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ alpha: true }}
      fallback={fallback}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 2, 4]} intensity={1.6} color="#5D7BFF" />
      <pointLight position={[-3, -2, -4]} intensity={1.2} color="#C25BFF" />
      <Stars radius={10} depth={40} count={2500} factor={0.5} saturation={0} fade speed={0.6} />
      <ParticleField />
      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.3}>
        <Logo3D />
      </Float>
      <SignalPulse />
      <NetworkHalo />
    </Canvas>
  )
}
