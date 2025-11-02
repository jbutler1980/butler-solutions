'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Edges } from '@react-three/drei'

export default function Logo3D() {
  const meshRef = useRef()
  const materialRef = useRef()
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
    }),
    [],
  )

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.15
    meshRef.current.rotation.y += delta * 0.25
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.75, 2]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
        />
      </mesh>
      <mesh scale={[1.15, 1.15, 1.15]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#5D7BFF" transparent opacity={0.1} />
        <Edges scale={1.01} color="#4DF3FF" />
      </mesh>
    </group>
  )
}

const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec3 vPosition;
  varying float vNoise;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    float n = dot(i, vec3(1.0, 57.0, 113.0));
    float res = mix(
      mix(
        mix(hash(i + vec3(0.0, 0.0, 0.0)), hash(i + vec3(1.0, 0.0, 0.0)), f.x),
        mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), f.x),
        f.y
      ),
      mix(
        mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), f.x),
        mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), f.x),
        f.y
      ),
      f.z
    );
    return res;
  }

  void main() {
    vPosition = position;
    vec3 pos = position;
    float n = noise(position * 2.0 + uTime * 0.6);
    vNoise = n;
    pos += normal * n * 0.12;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  uniform float uTime;
  varying float vNoise;

  void main() {
    float glow = smoothstep(0.2, 1.0, vNoise + 0.5);
    vec3 colorA = vec3(0.36, 0.48, 1.0);
    vec3 colorB = vec3(0.77, 0.36, 1.0);
    vec3 color = mix(colorA, colorB, vNoise + 0.4);
    gl_FragColor = vec4(color, glow);
  }
`
