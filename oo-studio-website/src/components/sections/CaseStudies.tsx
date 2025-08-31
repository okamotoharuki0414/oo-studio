'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';
import ITCard from '../ui/ITCard';

const cases = [
  {
    industry: 'Financial Services',
    title: 'Core Banking System Modernization',
    challenge: '老朽化したメインフレームシステムの完全刷新',
    solution: 'マイクロサービス・クラウドネイティブ・アーキテクチャによる段階移行',
    results: [
      { metric: '処理速度', value: '15x向上' },
      { metric: '運用コスト', value: '60%削減' },
      { metric: '可用性', value: '99.99%' }
    ],
    technologies: ['Kubernetes', 'Spring Boot', 'PostgreSQL', 'Redis']
  },
  {
    industry: 'E-commerce',
    title: 'Global Platform Scaling',
    challenge: '急成長に対応するためのプラットフォーム拡張',
    solution: 'マルチリージョン対応とリアルタイム在庫管理システム',
    results: [
      { metric: 'トラフィック処理', value: '10x拡張' },
      { metric: 'レスポンス時間', value: '200ms以下' },
      { metric: 'ダウンタイム', value: '年間1時間未満' }
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
  }
];

export default function CaseStudies() {
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

    const element = document.getElementById('case-studies');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="light" size="xl" id="case-studies">
      <Container size="xl">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Success Stories
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            数値で証明する、確かな実績と圧倒的な成果。
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div
              key={caseStudy.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <ITCard variant="light" hover={true} padding="lg">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Problem & Solution */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                        {caseStudy.industry}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      {caseStudy.title}
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {caseStudy.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {caseStudy.solution}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 border border-gray-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Results</h4>
                    <div className="space-y-6">
                      {caseStudy.results.map((result) => (
                        <div key={result.metric} className="text-center lg:text-left">
                          <div className="text-3xl font-bold text-blue-600 mb-1">
                            {result.value}
                          </div>
                          <div className="text-sm text-gray-600 uppercase tracking-wide">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ITCard>
            </div>
          ))}
        </div>
      </Container>
    </ITSection>
  );
}