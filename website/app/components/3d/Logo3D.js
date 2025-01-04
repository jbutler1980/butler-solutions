import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Logo3D() {
  const meshRef = useRef()

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0070f3" />
    </mesh>
  )
}