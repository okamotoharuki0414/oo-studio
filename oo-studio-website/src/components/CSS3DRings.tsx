'use client';

import { useEffect, useState } from 'react';

export default function CSS3DRings({ isVisible = true }: { isVisible?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // 追加のスクロール監視でより確実な制御
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroThreshold = windowHeight * 0.4; // さらに厳格に40%
      setShouldShow(scrollY < heroThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初回実行
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted || !isVisible || !shouldShow) return null;

  return (
    <>
      <style>{`
        @keyframes ring-float-1 {
          0%, 100% {
            transform: translate(-50%, -50%) translate(-30px, 0) rotateZ(90deg) rotateX(15deg) rotateY(0deg);
          }
          25% {
            transform: translate(-50%, -50%) translate(-30px, -10px) rotateZ(90deg) rotateX(25deg) rotateY(10deg);
          }
          50% {
            transform: translate(-50%, -50%) translate(-30px, 0) rotateZ(90deg) rotateX(15deg) rotateY(0deg);
          }
          75% {
            transform: translate(-50%, -50%) translate(-30px, 10px) rotateZ(90deg) rotateX(5deg) rotateY(-10deg);
          }
        }

        @keyframes ring-float-2 {
          0%, 100% {
            transform: translate(-50%, -50%) translate(30px, 0) rotateZ(0deg) rotateY(15deg) rotateX(0deg);
          }
          25% {
            transform: translate(-50%, -50%) translate(30px, 10px) rotateZ(0deg) rotateY(25deg) rotateX(10deg);
          }
          50% {
            transform: translate(-50%, -50%) translate(30px, 0) rotateZ(0deg) rotateY(15deg) rotateX(0deg);
          }
          75% {
            transform: translate(-50%, -50%) translate(30px, -10px) rotateZ(0deg) rotateY(5deg) rotateX(-10deg);
          }
        }
        
        .ring-1 {
          animation: ring-float-1 4s ease-in-out infinite;
        }
        
        .ring-2 {
          animation: ring-float-2 4s ease-in-out infinite reverse;
        }
      `}</style>
      
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 999999,
          perspective: '1000px',
          opacity: isVisible ? 0.8 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        {/* 縦向きリング - 本格的3D */}
        <div
          className="absolute top-1/2 left-1/2 ring-1"
          style={{
            width: '300px',
            height: '300px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 3Dトーラス本体 - 複数レイヤーで厚み表現 */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: '8px solid rgba(96, 165, 250, 0.1)',
                transform: `translateZ(${i * 2 - 10}px) scale(${1 - i * 0.01})`,
                boxShadow: `
                  0 0 20px rgba(96, 165, 250, 0.3),
                  inset 0 0 20px rgba(96, 165, 250, 0.1)
                `,
                background: 'transparent'
              }}
            />
          ))}
          
          {/* 前面ハイライト */}
          <div
            className="absolute inset-6 rounded-full"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.4)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent, rgba(96, 165, 250, 0.1))',
              transform: 'translateZ(20px)',
              filter: 'blur(0.3px)'
            }}
          />
        </div>

        {/* 横向きリング - 本格的3D */}
        <div
          className="absolute top-1/2 left-1/2 ring-2"
          style={{
            width: '300px',
            height: '300px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* 3Dトーラス本体 - 複数レイヤーで厚み表現 */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: '8px solid rgba(96, 165, 250, 0.1)',
                transform: `translateZ(${i * 2 - 10}px) scale(${1 - i * 0.01})`,
                boxShadow: `
                  0 0 20px rgba(96, 165, 250, 0.3),
                  inset 0 0 20px rgba(96, 165, 250, 0.1)
                `,
                background: 'transparent'
              }}
            />
          ))}
          
          {/* 前面ハイライト */}
          <div
            className="absolute inset-6 rounded-full"
            style={{
              border: '2px solid rgba(255, 255, 255, 0.4)',
              background: 'linear-gradient(-135deg, rgba(255, 255, 255, 0.2), transparent, rgba(96, 165, 250, 0.1))',
              transform: 'translateZ(20px)',
              filter: 'blur(0.3px)'
            }}
          />
        </div>
      </div>
    </>
  );
}