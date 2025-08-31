'use client';

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

// 作品画像のパス配列
const imagePaths = [
  '/images/スクリーンショット 2025-08-30 22.25.11.png',
  '/images/スクリーンショット 2025-08-30 22.25.28.png',
  '/images/スクリーンショット 2025-08-30 22.25.42.png',
  '/images/スクリーンショット 2025-08-30 22.26.01.png',
  '/images/スクリーンショット 2025-08-30 22.26.15.png',
  '/images/スクリーンショット 2025-08-30 22.26.27.png',
  '/images/スクリーンショット 2025-08-30 22.26.39.png',
  '/images/スクリーンショット 2025-08-30 22.27.09.png',
  '/images/スクリーンショット 2025-08-30 22.27.21.png'
];

// 作品カードコンポーネント
function WorkCard({ position, texture, speed, rotation, scale }: {
  position: [number, number, number];
  texture: THREE.Texture;
  speed: number;
  rotation: [number, number, number];
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Y軸で下に移動（8秒で1周期）
    const cycleTime = 8.0; // 8秒周期
    const progress = (time * speed) % cycleTime;
    const y = 10 - (progress / cycleTime) * 20; // 上10から下-10まで
    
    meshRef.current.position.y = y;
    
    // 回転アニメーション
    meshRef.current.rotation.x += rotation[0] * 0.01;
    meshRef.current.rotation.y += rotation[1] * 0.01;
    meshRef.current.rotation.z += rotation[2] * 0.005;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshLambertMaterial 
        map={texture} 
        transparent 
        opacity={0.9}
        emissive={0x111111}
      />
    </mesh>
  );
}

// パーティクル（星）コンポーネント
function StarParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 200;
  
  const { positions, speeds, initialY } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);
    const initialY = new Float32Array(particleCount);
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 30; // x
      positions[i3 + 1] = Math.random() * 20 - 10; // y
      positions[i3 + 2] = (Math.random() - 0.5) * 15; // z
      speeds[i] = 0.5 + Math.random() * 1.5; // 速度
      initialY[i] = positions[i3 + 1];
    }
    
    return { positions, speeds, initialY };
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const geometry = pointsRef.current.geometry;
    const pos = geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const cycleTime = 8.0;
      const progress = (time * speeds[i]) % cycleTime;
      pos[i3 + 1] = 10 - (progress / cycleTime) * 20;
    }
    
    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color={0xffffff} 
        transparent 
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

// メインの3Dシーン
function WorksScene() {
  const textures = useLoader(TextureLoader, imagePaths);
  
  // 作品カードの初期設定
  const cards = useMemo(() => {
    const cardCount = 50;
    return Array.from({ length: cardCount }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 25, // x: -12.5 to 12.5
        Math.random() * 20 - 10, // y: -10 to 10
        (Math.random() - 0.5) * 12 // z: -6 to 6
      ] as [number, number, number],
      texture: textures[Math.floor(Math.random() * textures.length)],
      speed: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
      rotation: [
        (Math.random() - 0.5) * 2, // x rotation
        (Math.random() - 0.5) * 2, // y rotation  
        (Math.random() - 0.5) * 1 // z rotation
      ] as [number, number, number],
      scale: 0.3 + Math.random() * 0.4 // 0.3 to 0.7
    }));
  }, [textures]);

  return (
    <>
      {/* 環境光 */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      
      {/* 作品カード */}
      {cards.map((card) => (
        <WorkCard
          key={card.id}
          position={card.position}
          texture={card.texture}
          speed={card.speed}
          rotation={card.rotation}
          scale={card.scale}
        />
      ))}
      
      {/* 星のパーティクル */}
      <StarParticles />
    </>
  );
}

// メインコンポーネント
export default function WorksRain({ className = '' }: { className?: string }) {
  const [isMobile, setIsMobile] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    // モバイル判定
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // エラーハンドリング
  if (hasError) {
    return null;
  }

  // モバイルでは軽量版を表示（パーティクルを減らす）
  const particleCount = isMobile ? 50 : 200;
  const cardCount = isMobile ? 20 : 50;

  return (
    <div className={`fixed inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ 
          alpha: true, 
          antialias: !isMobile, // モバイルではアンチエイリアスを無効化
          powerPreference: 'high-performance'
        }}
        onError={() => setHasError(true)}
      >
        <React.Suspense fallback={null}>
          <WorksScene />
        </React.Suspense>
      </Canvas>
    </div>
  );
}