'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';

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

// 作品情報
const worksInfo = [
  { title: 'TalentLink', category: 'HR Platform', color: '#667eea' },
  { title: 'DataFlow', category: 'SaaS Platform', color: '#434c5e' },
  { title: 'URBANDESIGN', category: '不動産・建築', color: '#f7fafc' },
  { title: 'PureBeauty', category: '美容・エステ', color: '#ff9500' },
  { title: 'Bon Appetit', category: 'レストラン・カフェ', color: '#2d3748' },
  { title: 'StyleAvenue', category: 'ファッション', color: '#ff7b00' },
  { title: 'CareFirst', category: '医療', color: '#f9fbff' },
  { title: 'PrecisionWorks', category: '製造業', color: '#192e45' },
  { title: 'TechCore', category: 'コーポレートIT', color: '#0f2c5c' }
];

// 個別の作品カード（上下に流れる）
function ShowcaseCard({ texture, info, index, speed, initialY }: {
  texture: THREE.Texture;
  info: typeof worksInfo[0];
  index: number;
  speed: number;
  initialY: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // 上下に流れるアニメーション（12秒で1周期、よりゆっくり）
    const cycleTime = 12.0;
    const progress = (time * speed) % cycleTime;
    const y = 6 - (progress / cycleTime) * 12; // 上6から下-6まで流れる（範囲を狭く）
    
    meshRef.current.position.y = y + initialY;
    
    // 回転は削除 - 正面固定
    meshRef.current.rotation.x = 0;
    meshRef.current.rotation.y = 0;
    meshRef.current.rotation.z = 0;
    
    // ホバー時のスケール効果
    const targetScale = hovered ? 1.15 : 1.0;
    const currentScale = meshRef.current.scale.x;
    meshRef.current.scale.setScalar(currentScale + (targetScale - currentScale) * 0.1);
  });

  return (
    <mesh 
      ref={meshRef} 
      position={[0, 0, 0]} 
      scale={1.0}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <planeGeometry args={[3.2, 1.8]} />
      <meshLambertMaterial 
        map={texture} 
        transparent 
        opacity={0.9}
        emissive={hovered ? 0x666666 : 0x333333}
      />
    </mesh>
  );
}

// 背景の星パーティクル
function BackgroundStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 50;
      positions[i3 + 1] = (Math.random() - 0.5) * 30;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += 0.0005;
    pointsRef.current.rotation.x += 0.0002;
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
        size={0.02} 
        color={0xffffff} 
        transparent 
        opacity={0.6}
      />
    </points>
  );
}

// 3Dシーン
function WorksScene() {
  const textures = useLoader(TextureLoader, imagePaths);
  
  // 作品を3列で流れるように配置（同じ画像が横に並ばないように）
  const cards = useMemo(() => {
    const cols = 3; // 3列で流れる
    const allCards = [];
    
    // 各列に異なるオフセットで画像を配置
    for (let col = 0; col < cols; col++) {
      const colOffset = col * 3; // 列ごとに3つずつずらす
      
      textures.forEach((texture, i) => {
        // 各列で異なる画像インデックスを使用
        const adjustedIndex = (i + colOffset) % textures.length;
        const actualTexture = textures[adjustedIndex];
        const actualInfo = worksInfo[adjustedIndex];
        
        // 固定されたランダム値を使用（再レンダー時に値が変わらない）
        const seed = col * textures.length + i;
        const randomSpeed = 0.5 + ((seed * 123.456) % 1) * 0.4; // 0.5-0.9でゆっくり
        const randomZ = ((seed * 789.123) % 1 - 0.5) * 6; // Z深度を浅く
        
        allCards.push({
          id: `${col}-${i}`,
          texture: actualTexture,
          info: actualInfo,
          speed: randomSpeed,
          column: col,
          initialY: (i / textures.length) * 24 - 12, // 間隔を広げる（24間隔）
          zPosition: randomZ,
        });
      });
    }
    
    return allCards;
  }, [textures]);

  return (
    <>
      {/* 環境光 */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      
      {/* 背景の星 */}
      <BackgroundStars />
      
      {/* 作品カード */}
      {cards.map((card, index) => (
        <group key={card.id} position={[(card.column - 1) * 4, 0, card.zPosition]}>
          <ShowcaseCard
            texture={card.texture}
            info={card.info}
            index={index}
            speed={card.speed}
            initialY={card.initialY}
          />
        </group>
      ))}
    </>
  );
}

// メインコンポーネント
export default function WorksShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px 0px 100px 0px' // バッファを追加してスムーズに
      }
    );

    const element = document.getElementById('works-showcase');
    if (element) observer.observe(element);

    // モバイル判定
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <ITSection 
      variant="dark" 
      size="lg" 
      id="works-showcase"
      className="bg-gradient-to-b from-black via-gray-900 to-gray-800"
    >
      <Container size="xl">
        {/* セクションヘッダー */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold tracking-tight text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Design Gallery
          </h2>
        </div>

        {/* 3D Canvas */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="h-[65vh] min-h-[450px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700">
            {isInView && (
              <Canvas
                camera={{ position: [0, 0, 12], fov: 50 }}
                gl={{ 
                  alpha: true, 
                  antialias: !isMobile,
                  powerPreference: 'high-performance',
                  preserveDrawingBuffer: false,
                }}
                dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
                resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
                frameloop="always"
              >
                <React.Suspense fallback={null}>
                  <WorksScene />
                </React.Suspense>
              </Canvas>
            )}
            {!isInView && (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-400 text-lg">Loading 3D Gallery...</div>
              </div>
            )}
          </div>
        </div>

      </Container>
    </ITSection>
  );
}