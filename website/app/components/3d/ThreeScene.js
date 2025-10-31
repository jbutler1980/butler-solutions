'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Logo3D from './Logo3D'
import ParticleField from './ParticleField'

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Logo3D />
      <ParticleField />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
