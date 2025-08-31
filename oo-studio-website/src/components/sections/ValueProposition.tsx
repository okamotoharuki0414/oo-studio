'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';
import ITCard from '../ui/ITCard';

const values = [
  {
    icon: '⚡',
    title: 'Speed & Scale',
    description: '高速開発と拡張性を両立。最新技術で競争優位を実現します。'
  },
  {
    icon: '🛡️',
    title: 'Security First',
    description: 'エンタープライズレベルのセキュリティで、安心安全な運用を保証。'
  },
  {
    icon: '🎯',
    title: 'Business Impact',
    description: '技術を事業成長に直結。ROI最大化にコミットします。'
  }
];

export default function ValueProposition() {
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

    const element = document.getElementById('value-proposition');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="dark" size="xl" id="value-proposition">
      <Container size="xl">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold tracking-tight mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Why Choose OO Studio
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            世界水準のテクノロジーパートナーとして、お客様のビジネス変革を支援します。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <ITCard variant="dark" hover={true} padding="lg">
                <div className="text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-4xl backdrop-blur-sm">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed text-base">
                    {value.description}
                  </p>
                </div>
              </ITCard>
            </div>
          ))}
        </div>
      </Container>
    </ITSection>
  );
}