'use client';

import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function Ring({ position, rotation, speed }: { position: [number, number, number], rotation: [number, number, number], speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
      meshRef.current.rotation.x += speed * 0.3;
    }
  });

  return (
    <Float speed={2.0} rotationIntensity={0.3} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} rotation={rotation} renderOrder={999}>
        <torusGeometry args={[1.5, 0.2, 64, 128]} />
        <meshPhysicalMaterial
          color="#60a5fa"
          metalness={0.2}
          roughness={0.1}
          transmission={0.7}
          thickness={0.8}
          ior={1.45}
          reflectivity={0.6}
          iridescence={0.8}
          iridescenceIOR={1.9}
          iridescenceThicknessRange={[200, 800]}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
          transparent={true}
          opacity={0.6}
          envMapIntensity={1.5}
          depthWrite={true}
          depthTest={true}
        />
      </mesh>
    </Float>
  );
}

function InterlockedRings() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* 知恵の輪スタイル - 縦向きリング */}
      <Ring position={[-0.3, 0, 0]} rotation={[0, 0, Math.PI / 2]} speed={0.008} />
      {/* 知恵の輪スタイル - 横向きリング（縦リングを通して絡み合う） */}
      <Ring position={[0.3, 0, 0]} rotation={[0, 0, 0]} speed={-0.010} />
    </group>
  );
}

export default function GlassRings({ isVisible = true }: { isVisible?: boolean }) {
  // より安全な表示制御 - フェードアウトで非表示
  const opacity = isVisible ? 0.8 : 0;
  
  return (
    <div 
      className="fixed inset-0 pointer-events-none transition-opacity duration-500" 
      style={{
        backgroundColor: 'transparent', 
        opacity, 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        mixBlendMode: 'normal',
        transform: 'translateZ(0)',
        willChange: 'transform',
        isolation: 'isolate'
      }}
    >
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 50 }} 
        style={{
          backgroundColor: 'transparent', 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1000000
        }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[8, 8, 8]} intensity={1.2} color="#60a5fa" />
        <pointLight position={[-8, -8, -8]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, 10, 5]} intensity={1.0} color="#ffffff" />
        <spotLight position={[5, 5, 10]} intensity={1.5} angle={0.2} penumbra={0.8} color="#60a5fa" />
        <spotLight position={[-5, -5, 10]} intensity={1.2} angle={0.25} penumbra={0.9} color="#8b5cf6" />
        
        <InterlockedRings />
        
        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  );
}