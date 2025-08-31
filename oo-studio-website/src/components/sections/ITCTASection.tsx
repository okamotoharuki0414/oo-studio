'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';

export default function ITCTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('it-cta');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="light" size="xl" id="it-cta">
      <Container size="lg">
        <div className="text-center">
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ready to Transform Your Business?
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            世界水準のテクノロジーパートナーとして、<br />
            あなたのビジネスの可能性を最大化します。
          </p>
          
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="#contact"
              className="inline-flex items-center px-12 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              無料で相談する
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                初回コンサルテーション無料
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                24時間以内に回答
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                NDA締結対応
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ITSection>
  );
}