'use client';

import { useEffect, useState } from 'react';
import GlassRings from '../components/GlassRings';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);
  const [showLoading, setShowLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [textAnimationStarted, setTextAnimationStarted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [hasScrolledToWhite, setHasScrolledToWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      // さらに早い段階で白に切り替え
      const heroHeight = window.innerHeight * 0.5; // ヒーローセクションの50%時点
      const shouldBeDark = currentScrollY < heroHeight;
      
      // 一度白になったら戻らない
      if (!shouldBeDark && isDark) {
        setHasScrolledToWhite(true);
      }
      
      setIsDark(shouldBeDark && !hasScrolledToWhite);
      
      // タブバーは一度表示されたら常時表示
      if (currentScrollY >= 50) {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 800); // 起き上がりアニメーション
    const timer2 = setTimeout(() => setAnimationPhase(2), 2200); // スライドアニメーション開始
    const timer3 = setTimeout(() => setShowLoading(false), 3200); // ロゴスライド開始と同時
    const timer4 = setTimeout(() => setAnimationPhase(3), 3800); // 拡大アニメーション（高速化）
    const timer5 = setTimeout(() => setTextAnimationStarted(true), 4500); // 左移動アニメーション（早める）

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <>
      {/* 3D Glass Rings */}
      <GlassRings />
      
      {/* Loading overlay */}
      <div className={`fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden transition-all duration-2000 ease-out ${
        animationPhase >= 2 ? 'opacity-0 backdrop-blur-xl' : 'opacity-100 backdrop-blur-none'
      } ${showLoading ? 'pointer-events-auto' : 'pointer-events-none'}`}>
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
          ? 'bg-white/2 border-white/10 shadow-black/50' 
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
                <a href="#knowledge" className={`px-6 py-2 rounded-full font-bold transition-all duration-[5000ms] ease-in-out ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                }`}>
                  Knowledge
                </a>
                <a href="#business" className={`px-6 py-2 rounded-full font-bold transition-all duration-[5000ms] ease-in-out ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                }`}>
                  Business
                </a>
                <a href="#news" className={`px-6 py-2 rounded-full font-bold transition-all duration-[5000ms] ease-in-out ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/10'
                }`}>
                  News
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
        className={`min-h-screen transition-all duration-[1200ms] ease-in-out ${
          isDark ? 'bg-black' : 'bg-white'
        } ${!showLoading ? 'opacity-100 scale-100 blur-0' : 'opacity-80 scale-102 blur-[1px]'}`}
      >
        {/* Hero Section */}
        <section className="pt-24 pb-32 px-6 sm:px-8 min-h-screen flex items-center relative">
          {/* グラデーション境目ぼかし */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50 opacity-80"></div>
          <div className="max-w-7xl mx-auto w-full relative z-30">
            <div className={`flex flex-col min-h-screen transition-all duration-2000 ease-out ${
              textAnimationStarted 
                ? 'justify-center items-start text-left' 
                : 'justify-center items-center text-center'
            }`}>
              <div className={`transition-all duration-2000 ease-out ${
                textAnimationStarted ? 'transform -translate-x-1/3' : 'transform translate-x-0'
              }`}>
                <h1 className={`font-bold leading-tight tracking-tight transition-all duration-500 ${
                  animationPhase >= 3 
                    ? 'text-6xl sm:text-7xl lg:text-8xl' 
                    : 'text-4xl sm:text-5xl lg:text-6xl'
                } ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  伝える以上に、<span 
                    className={`transition-all duration-500 ${
                      animationPhase >= 3 
                        ? 'text-7xl sm:text-8xl lg:text-9xl' 
                        : 'text-5xl sm:text-6xl lg:text-7xl'
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
                      animation: 'wave-gradient 8s ease-in-out infinite'
                    }}
                  >
                    響かせる。
                  </span>
                </h1>
                <p className={`mt-12 text-xl leading-relaxed max-w-2xl transition-all duration-500 font-bold ${
                  textAnimationStarted ? 'mx-0 text-left' : 'mx-auto text-center'
                } ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  サービスやブランドが持つ本当の魅力を最大限に引き出し、
                  <br />
                  伝える以上に"響かせる"仕組みをつくります。
                </p>
                <div className={`mt-16 flex transition-all duration-500 ${
                  textAnimationStarted ? 'justify-start' : 'justify-center'
                }`}>
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

        {/* Knowledge Section */}
        <section id="knowledge" className="py-20 bg-gray-50 relative">
          {/* 上部のぼかし */}
          <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl font-bold mb-6 transition-colors duration-1000 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Knowledge
              </h2>
              <p className={`text-xl max-w-3xl mx-auto transition-colors duration-1000 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                システム開発とマーケティングに関する最新情報をお届けします
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className={`text-sm mb-3 transition-colors duration-1000 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2025.01.15 | Technology
                </div>
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-1000 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Next.js 15の新機能とパフォーマンス改善
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-1000 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  最新のNext.js 15で追加された機能とパフォーマンス向上について解説します。
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className={`text-sm mb-3 transition-colors duration-1000 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2025.01.10 | Design
                </div>
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-1000 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  モダンなWebデザインのトレンド
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-1000 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  2025年のWebデザインで注目すべきトレンドとベストプラクティス。
                </p>
              </div>
              
              <div className={`p-6 rounded-2xl border hover:shadow-lg transition-all duration-300 ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}>
                <div className={`text-sm mb-3 transition-colors duration-1000 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2025.01.05 | Business
                </div>
                <h3 className={`text-lg font-semibold mb-3 transition-colors duration-1000 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  DXを成功に導くシステム設計
                </h3>
                <p className={`text-sm leading-relaxed transition-colors duration-1000 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  デジタルトランスフォーメーションを成功に導くための設計思想。
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="#" className={`inline-flex items-center text-lg font-medium transition-colors duration-1000 ${
                isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
              }`}>
                すべて見る →
              </a>
            </div>
          </div>
        </section>

        {/* Business Section */}
        <section id="business" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className={`text-4xl font-bold mb-8 transition-colors duration-1000 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Solution
                </h2>
                <p className={`text-xl leading-relaxed mb-8 transition-colors duration-1000 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  お客様のビジネス課題に対して、最適なテクノロジーソリューションを提供します。
                  企画から運用まで一貫したサポートで、確実な成果を実現します。
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-1000 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      戦略的システム設計
                    </h4>
                    <p className={`transition-colors duration-1000 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      ビジネス要件を深く理解し、最適なアーキテクチャを設計
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-1000 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      高品質な開発・実装
                    </h4>
                    <p className={`transition-colors duration-1000 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      最新技術を活用した堅牢で拡張性の高いシステム構築
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className={`text-4xl font-bold mb-8 transition-colors duration-1000 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Product
                </h2>
                <p className={`text-xl leading-relaxed mb-8 transition-colors duration-1000 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  独自のプロダクト開発を通じて、新しい価値の創造と市場開拓を支援します。
                  アイデアから製品化まで、トータルでサポートします。
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-1000 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      プロダクト企画・設計
                    </h4>
                    <p className={`transition-colors duration-1000 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      市場分析からUXデザインまで一貫した製品開発
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold mb-2 transition-colors duration-1000 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      継続的な改善・運用
                    </h4>
                    <p className={`transition-colors duration-1000 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      データドリブンな改善とスケーラブルな運用体制
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-32 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white mb-8">
                The Evolution Partner
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                テクノロジーの力で、お客様のビジネスを次のステージへ。<br />
                私たちは単なる開発会社ではなく、共に成長する進化のパートナーです。
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex justify-between items-center mb-16">
              <h2 className={`text-4xl font-bold transition-colors duration-1000 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                News
              </h2>
              <a href="#" className={`text-lg font-medium transition-colors duration-1000 ${
                isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
              }`}>
                Index →
              </a>
            </div>
            
            <div className="space-y-6">
              <div className={`flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-sm font-medium transition-colors duration-1000 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2025.01.20 | 会社情報
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold transition-colors duration-1000 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    新オフィス開設のお知らせ
                  </h3>
                </div>
              </div>
              
              <div className={`flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-sm font-medium transition-colors duration-1000 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2025.01.15 | サービス
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold transition-colors duration-1000 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    AI活用コンサルティングサービスを開始
                  </h3>
                </div>
              </div>
              
              <div className={`flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl border transition-all duration-300 hover:shadow-md ${
                isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
              }`}>
                <div className={`text-sm font-medium transition-colors duration-1000 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  2025.01.10 | 実績
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold transition-colors duration-1000 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    大手企業様向けWebアプリケーション開発完了
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`py-20 transition-colors duration-1000 ${
          isDark ? 'bg-gray-900' : 'bg-gray-900'
        }`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              プロジェクトを始めましょう
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              お客様のアイデアを形にするお手伝いをさせてください。
              まずはお気軽にご相談ください。
            </p>
            <a
              href="mailto:contact@oostudio.dev"
              className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium text-lg inline-block"
            >
              お問い合わせはこちら
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className={`border-t py-12 transition-colors duration-1000 ${
          isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-100'
        }`}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center">
              <div className={`text-2xl font-bold mb-4 transition-colors duration-1000 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                OO studio
              </div>
              <p className={`mb-8 transition-colors duration-1000 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                システム開発・コンサルティング
              </p>
              <div className={`text-sm transition-colors duration-1000 ${
                isDark ? 'text-gray-500' : 'text-gray-500'
              }`}>
                © 2025 OO studio. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}