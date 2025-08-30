'use client';

import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function Ring({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.1}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        <torusGeometry args={[1.5, 0.4, 16, 100]} />
        <meshPhysicalMaterial
          color="#60a5fa"
          metalness={0.1}
          roughness={0.1}
          transmission={0.9}
          thickness={1.5}
          ior={1.5}
          reflectivity={0.8}
          iridescence={0.3}
          iridescenceIOR={1.8}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transparent={true}
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function InterlockedRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* First ring */}
      <Ring position={[-0.8, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
      {/* Second ring - interlocked */}
      <Ring position={[0.8, 0, 0]} rotation={[0, 0, 0]} />
    </group>
  );
}

export default function GlassRings() {
  return (
    <div className="fixed inset-0 z-5 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#60a5fa" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <spotLight position={[0, 10, 0]} intensity={0.6} angle={0.3} penumbra={1} color="#60a5fa" />
        
        <InterlockedRings />
        
        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  );
}