'use client';

import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const processes = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'ビジネス課題の深堀りと戦略策定',
    duration: '1-2 weeks'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'UX/UIデザインとプロトタイプ作成',
    duration: '2-4 weeks'
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: '開発・テスト・品質保証',
    duration: '6-12 weeks'
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description: 'リリース・運用・継続的改善',
    duration: 'Ongoing'
  }
];

export default function Process() {
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

    const element = document.getElementById('process');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="light" size="xl" id="process">
      <Container size="lg">
        <div className="text-center mb-20">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Our Process
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            体系化されたプロセスで、確実に成果を生み出します。
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 hidden lg:block"></div>
          
          <div className="space-y-16 lg:space-y-20">
            {processes.map((process, index) => (
              <div
                key={process.step}
                className={`relative flex flex-col lg:flex-row lg:items-center transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                {/* Step Circle */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-300 flex items-center justify-center text-xl font-bold text-gray-700 mb-6 lg:mb-0 lg:mr-12 shadow-sm">
                    {process.step}
                  </div>
                  {/* Connection dot for timeline */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-gray-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                          {process.title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {process.description}
                        </p>
                      </div>
                      <div className="mt-4 lg:mt-0 lg:ml-8">
                        <span className="inline-block px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-500 border border-gray-200">
                          {process.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}