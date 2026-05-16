import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Lightformer, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Central iridescent distorted orb — cursor-reactive. A local lightformer
// environment gives the metallic surface its holographic reflections.
function Orb() {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    const m = mesh.current
    if (!m) return
    m.rotation.y += 0.0018
    const tx = state.pointer.x * 0.45
    const ty = state.pointer.y * 0.3
    m.rotation.x = THREE.MathUtils.lerp(m.rotation.x, ty, 0.04)
    m.rotation.z = THREE.MathUtils.lerp(m.rotation.z, -tx, 0.04)
  })
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
      <mesh ref={mesh} scale={1.08} position={[0.5, 0.65, 0]}>
        <icosahedronGeometry args={[1, 18]} />
        <MeshDistortMaterial
          color="#b9a8ff"
          distort={0.4}
          speed={1.8}
          roughness={0.06}
          metalness={1}
          envMapIntensity={1.4}
        />
      </mesh>
    </Float>
  )
}

interface Dot {
  p: [number, number, number]
  c: string
  s: number
}

// Small glowing satellites drifting around the orb.
function Satellites() {
  const group = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.1
  })
  const dots: Dot[] = [
    { p: [2.7, 1.4, -1], c: '#22d3ee', s: 0.13 },
    { p: [-2.8, -1.1, -0.5], c: '#ec4899', s: 0.16 },
    { p: [2.3, -1.7, 0.5], c: '#8b5cf6', s: 0.1 },
    { p: [-2.4, 1.6, 0.6], c: '#22d3ee', s: 0.09 },
  ]
  return (
    <group ref={group}>
      {dots.map((d, i) => (
        <Float key={i} speed={2} floatIntensity={1.4} rotationIntensity={0.6}>
          <mesh position={d.p}>
            <sphereGeometry args={[d.s, 32, 32]} />
            <meshStandardMaterial
              color={d.c}
              emissive={d.c}
              emissiveIntensity={2.4}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[0, 3, 4]} intensity={30} color="#ffffff" />
      <Orb />
      <Satellites />
      {/* local environment — drives the iridescent reflections */}
      <Environment resolution={256}>
        <Lightformer form="circle" intensity={5} color="#22d3ee" position={[-4, 2, 4]} scale={5} />
        <Lightformer form="circle" intensity={5} color="#ec4899" position={[4, -1, 4]} scale={5} />
        <Lightformer form="rect" intensity={4} color="#8b5cf6" position={[0, 4, -3]} scale={[8, 4, 1]} />
        <Lightformer form="rect" intensity={2.5} color="#ffffff" position={[0, -4, 2]} scale={[8, 3, 1]} />
      </Environment>
    </>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 5], fov: 42 }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
