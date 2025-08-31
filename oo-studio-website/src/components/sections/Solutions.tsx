'use client';

import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const solutions = [
  {
    title: 'Web & Mobile Development',
    description: 'モダンなフレームワークで高性能なWebアプリケーション・モバイルアプリを開発',
    features: ['React/Next.js', 'Flutter', 'TypeScript', 'Progressive Web App']
  },
  {
    title: 'AI & Machine Learning',
    description: 'ビジネス課題を解決するAIソリューションの設計・実装・運用',
    features: ['ChatGPT Integration', 'Computer Vision', 'Data Analytics', 'MLOps']
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'スケーラブルで安全なクラウドインフラの構築・最適化',
    features: ['AWS/GCP/Azure', 'Kubernetes', 'CI/CD', 'Security']
  },
  {
    title: 'Design System',
    description: 'ブランド体験を統一するデザインシステムの構築・運用',
    features: ['UI/UX Design', 'Component Library', 'Accessibility', 'Brand Guidelines']
  }
];

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('solutions');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="gradient" size="xl" id="solutions" className="bg-gradient-to-b from-black via-gray-900 to-gray-100">
      <Container size="xl">
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Solutions
          </h2>
          <p className={`text-xl text-gray-400 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            テクノロジーの力で、あらゆるビジネス課題に包括的なソリューションを提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* ガラスカード */}
              <div 
                className="relative p-8 lg:p-10 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* グラデーション境界線 */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.1), transparent)',
                    padding: '1px'
                  }}
                >
                  <div className="w-full h-full rounded-2xl bg-black"></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {solution.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}