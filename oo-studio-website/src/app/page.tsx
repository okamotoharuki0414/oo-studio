'use client';

import { useEffect, useState } from 'react';
import GlassRings from '../components/GlassRings';
import CSS3DRings from '../components/CSS3DRings';
// Simplified Actual Projects Components
import SimpleContact from '../components/sections/SimpleContact';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [textAnimationStarted, setTextAnimationStarted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [hasScrolledToWhite, setHasScrolledToWhite] = useState(false);
  const [showHeroRings, setShowHeroRings] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      // ActualProjects中盤で白に切り替え（実績フォーカス）
      const darkModeHeight = window.innerHeight * 1.8; // Hero完了、Projects中盤で切り替え
      const shouldBeDark = currentScrollY < darkModeHeight;
      
      // 一度白になったら戻らない
      if (!shouldBeDark && isDark) {
        setHasScrolledToWhite(true);
      }
      
      setIsDark(shouldBeDark && !hasScrolledToWhite);
      
      // タブバーは一度表示されたら常時表示
      if (currentScrollY >= 50) {
        setShowNavbar(true);
      }
      
      // ヒーロー画面の判定 - ヒーロー画面のみ（非常に厳格）
      const heroSectionHeight = window.innerHeight * 0.5; // ヒーロー画面の50%まで
      const isHeroVisible = currentScrollY < heroSectionHeight;
      setShowHeroRings(isHeroVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 800); // 起き上がりアニメーション
    const timer2 = setTimeout(() => setAnimationPhase(2), 2200); // スライドアニメーション開始
    const timer3 = setTimeout(() => setShowLoading(false), 3200); // ロゴスライド開始と同時
    const timer4 = setTimeout(() => setAnimationPhase(3), 3800); // 拡大アニメーション（高速化）
    const timer5 = setTimeout(() => setTextAnimationStarted(true), 2500); // テキスト出現を早める
    const timer6 = setTimeout(() => setShowHeroRings(true), 5000); // ロゴアニメーション後にリング表示

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  return (
    <div style={{backgroundColor: '#000000', minHeight: '100vh', position: 'relative'}}>
      
      {/* 3D Glass Rings - 立体的な丸いリング */}
      <CSS3DRings isVisible={showHeroRings} />
      {/* Backup: React Three Fiber rings */}
      {/* {showHeroRings && <GlassRings isVisible={showHeroRings} />} */}
      
      {/* Loading overlay */}
      <div className={`fixed inset-0 flex items-center justify-center z-50 overflow-hidden transition-all duration-2000 ease-out ${
        animationPhase >= 2 ? 'opacity-0' : 'opacity-100'
      } ${showLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}
           style={{backgroundColor: '#000000'}}>
        <div className="flex items-center gap-6 text-6xl sm:text-8xl font-bold perspective-1000">
          <div 
            className={`relative transition-all ease-in-out bg-gradient-to-r from-cyan-400 via-blue-600 to-green-400 bg-clip-text text-transparent ${
              animationPhase === 0 
                ? 'duration-1000 rotate-x-90 opacity-0 scale-50' 
                : animationPhase === 1 
                ? 'duration-1000 rotate-x-0 opacity-100 scale-100' 
                : 'duration-3000 -translate-x-[200vw]'
            }`}
            style={{
              backgroundSize: '400% 100%',
              animation: animationPhase >= 1 ? 'shimmer 2s infinite' : 'none'
            }}
          >
            OO
          </div>
          <div 
            className={`relative transition-all ease-in-out bg-gradient-to-r from-green-400 via-blue-600 to-cyan-400 bg-clip-text text-transparent ${
              animationPhase === 0 
                ? 'duration-1000 rotate-x-90 opacity-0 scale-50' 
                : animationPhase === 1 
                ? 'duration-1000 rotate-x-0 opacity-100 scale-100' 
                : 'duration-3000 translate-x-[200vw]'
            }`}
            style={{
              backgroundSize: '400% 100%',
              animation: animationPhase >= 1 ? 'shimmer 2s infinite' : 'none'
            }}
          >
            Studio
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className={`fixed top-2 left-2 right-2 backdrop-blur-[30px] backdrop-saturate-200 z-50 transition-all duration-500 ease-out rounded-full shadow-2xl border ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        isDark 
          ? 'bg-white/5 border-white/10 shadow-black/50' 
          : 'bg-white/15 border-white/20 shadow-black/10'
      }`}>
          <div className="px-8 py-4">
            <div className="flex justify-between items-center">
              <div className={`text-2xl font-bold transition-colors duration-[5000ms] ease-in-out ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                OO studio
              </div>
              <div className="flex items-center space-x-6">
                <a href="/services" className={`px-6 py-2 rounded-full font-bold transition-all duration-[5000ms] ease-in-out ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                }`}>
                  Services
                </a>
                <a href="/projects" className={`px-6 py-2 rounded-full font-bold transition-all duration-[5000ms] ease-in-out ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                }`}>
                  Projects
                </a>
                <a href="#contact" className={`px-6 py-2 rounded-full transition-all duration-[5000ms] ease-in-out ${
                  isDark 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  お問い合わせ
                </a>
              </div>
            </div>
          </div>
      </nav>
      
      {/* Main website content */}
      <div 
        className="min-h-screen transition-all duration-[1200ms] ease-in-out"
        style={{ 
          backgroundColor: '#000000', 
          opacity: !showLoading ? 1 : 0.8,
          transform: !showLoading ? 'scale(1)' : 'scale(1.02)',
          filter: !showLoading ? 'blur(0px)' : 'blur(1px)'
        }}
      >
        {/* Hero Section */}
        <section className="pt-24 pb-32 px-6 sm:px-8 min-h-screen flex items-center relative" style={{backgroundColor: '#000000', zIndex: 1}}>
          <div className="max-w-7xl mx-auto w-full relative" style={{zIndex: 10}}>
            <div className="flex flex-col min-h-screen justify-center items-center text-center">
              <div className="relative" style={{zIndex: 10}}>
                <div className="relative cartazero-text-effect" style={{ 
                  height: '400px', 
                  overflow: 'hidden',
                  maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
                }}>
                  <h1 className={`hero-text glass-effect font-bold leading-tight tracking-tight text-6xl sm:text-7xl lg:text-8xl transition-colors duration-500 absolute inset-0 flex flex-col items-center justify-center ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{
                        transform: `translateY(${windowHeight > 0 ? scrollY * -0.4 : 0}px)`,
                        opacity: windowHeight > 0 ? Math.max(0.2, 1 - (scrollY / (windowHeight * 0.7))) : 1,
                        willChange: 'transform, opacity'
                      }}>
                    <div className={`transition-all duration-1200 ease-out ${
                      textAnimationStarted ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                    }`}
                         style={{ 
                           transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                           willChange: 'transform, opacity'
                         }}>
                      伝える以上に、
                    </div>
                    <div 
                      className={`hero-text glass-effect text-7xl sm:text-8xl lg:text-9xl transition-all duration-1400 ease-out delay-300 ${
                        textAnimationStarted ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0'
                      }`}
                      style={{
                        backgroundImage: `linear-gradient(45deg, ${
                          isDark 
                            ? '#ffffff, #60a5fa, #34d399, #8b5cf6, #ffffff' 
                            : '#1f2937, #3b82f6, #10b981, #8b5cf6, #1f2937'
                        })`,
                        backgroundSize: '300% 300%',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        animation: textAnimationStarted ? 'wave-gradient 8s ease-in-out infinite' : 'none',
                        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                        willChange: 'transform, opacity'
                      }}
                    >
                      響かせる。
                    </div>
                  </h1>
                </div>
                <p className={`mt-12 text-xl leading-relaxed max-w-2xl mx-auto text-center font-bold transition-all duration-500 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  サービスやブランドが持つ本当の魅力を最大限に引き出し、
                  <br />
                  伝える以上に"響かせる"仕組みをつくります。
                </p>
                <div className="mt-16 flex justify-center">
                  <a
                    href="#contact"
                    className={`px-8 py-4 rounded-full transition-all duration-1000 font-bold text-lg relative overflow-hidden ${
                      isDark 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                    style={{ 
                      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif',
                      boxShadow: '0 0 0 2px transparent',
                      animation: 'rotating-border 3s linear infinite'
                    }}
                  >
                    無料で相談する
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Contact + Footer */}
        <SimpleContact />

        {/* End of Main Content */}
      </div>
    </div>
  );
}