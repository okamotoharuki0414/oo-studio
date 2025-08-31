'use client';

import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const capabilities = [
  {
    icon: '🎨',
    title: 'Creative Design',
    description: 'ユーザー体験を重視したインターフェースデザイン'
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: '最適化された高速パフォーマンスの実現'
  },
  {
    icon: '🔒',
    title: 'Security',
    description: 'エンタープライズレベルのセキュリティ対策'
  },
  {
    icon: '📱',
    title: 'Responsive',
    description: 'あらゆるデバイスに対応したレスポンシブ設計'
  },
  {
    icon: '🤖',
    title: 'AI Integration',
    description: '最新のAI技術を活用したソリューション'
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'データドリブンな意思決定を支援する分析機能'
  }
];

export default function Capabilities() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('capabilities');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="light" size="xl" id="capabilities">
      <Container size="xl">
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Capabilities
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            多様な技術領域における専門性で、あらゆる課題に対応します。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`group text-center transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative">
                {/* Icon Circle */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-50 border-2 border-gray-200 flex items-center justify-center text-4xl transition-all duration-500 group-hover:border-gray-300 group-hover:scale-110">
                  {capability.icon}
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}