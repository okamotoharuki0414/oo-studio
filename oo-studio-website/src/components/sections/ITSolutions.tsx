'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';
import ITCard from '../ui/ITCard';

const solutions = [
  {
    title: 'Cloud Infrastructure',
    description: 'スケーラブルなクラウドアーキテクチャの設計・構築・運用',
    features: ['AWS/Azure/GCP', 'Kubernetes', 'DevOps/CI/CD', 'Monitoring'],
    accent: 'text-blue-600'
  },
  {
    title: 'AI & Data Analytics',
    description: 'ビッグデータとAIを活用した事業インサイトの創出',
    features: ['Machine Learning', 'Business Intelligence', 'Predictive Analytics', 'Data Pipeline'],
    accent: 'text-cyan-600'
  },
  {
    title: 'Enterprise Applications',
    description: 'ミッションクリティカルなエンタープライズシステム開発',
    features: ['Microservices', 'API Integration', 'Security', 'Legacy Modernization'],
    accent: 'text-blue-600'
  },
  {
    title: 'Digital Transformation',
    description: 'デジタル変革を通じた業務効率化と競争力強化',
    features: ['Process Automation', 'Workflow Optimization', 'System Integration', 'Change Management'],
    accent: 'text-cyan-600'
  }
];

export default function ITSolutions() {
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

    const element = document.getElementById('it-solutions');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="light" size="xl" id="it-solutions">
      <Container size="xl">
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Enterprise Solutions
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            次世代のテクノロジーで、お客様のビジネスを未来へ導きます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <ITCard variant="light" hover={true} padding="lg">
                <div>
                  <h3 className={`text-2xl font-bold mb-6 ${solution.accent}`}>
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 text-base leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <button className={`text-sm font-semibold ${solution.accent} hover:underline transition-colors duration-200`}>
                      詳細を見る →
                    </button>
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