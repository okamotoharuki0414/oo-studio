'use client';

import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const works = [
  {
    title: 'E-Commerce Platform',
    client: 'Fashion Retail Co.',
    description: 'モバイルファーストのECプラットフォーム。売上300%向上を実現',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Stripe', 'AWS', 'Mobile-First'],
    stats: { conversion: '+300%', performance: '98/100', users: '50k+' }
  },
  {
    title: 'AI-Powered Analytics',
    client: 'FinTech Startup',
    description: '機械学習による予測分析システム。データドリブンな意思決定を支援',
    image: '/api/placeholder/600/400',
    tags: ['Python', 'TensorFlow', 'React', 'D3.js'],
    stats: { accuracy: '95%', processing: '10x faster', insights: '1000+' }
  },
  {
    title: 'Healthcare Platform',
    client: 'Medical Group',
    description: '患者管理とテレヘルスを統合したヘルスケアプラットフォーム',
    image: '/api/placeholder/600/400',
    tags: ['Flutter', 'FHIR', 'Security', 'HIPAA'],
    stats: { patients: '10k+', satisfaction: '4.9/5', uptime: '99.9%' }
  }
];

export default function Works() {
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

    const element = document.getElementById('works');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="light" size="xl" id="works">
      <Container size="xl">
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Selected Works
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            クライアントと共に創り上げた、革新的なデジタル体験をご紹介します。
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {works.map((work, index) => (
            <div
              key={work.title}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div 
                    className="aspect-[4/3] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <div className="text-gray-500 text-6xl">🖼️</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">
                        {work.client}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                        {work.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {work.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 py-6">
                      {Object.entries(work.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                          <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm rounded-full bg-gray-100 border border-gray-200 text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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