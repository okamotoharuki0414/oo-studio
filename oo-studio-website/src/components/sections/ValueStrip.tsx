'use client';

import { useEffect, useState } from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';

const logos = [
  { name: 'Microsoft', width: 'w-32' },
  { name: 'Google', width: 'w-28' },
  { name: 'Apple', width: 'w-24' },
  { name: 'Meta', width: 'w-28' },
  { name: 'Amazon', width: 'w-32' },
  { name: 'Spotify', width: 'w-28' }
];

export default function ValueStrip() {
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

    const element = document.getElementById('value-strip');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="dark" size="lg" id="value-strip">
      <Container size="lg">
        {/* Value Message */}
        <div className="text-center mb-16">
          <h2 
            className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              background: 'linear-gradient(45deg, #ffffff, #60a5fa, #34d399, #8b5cf6, #ffffff)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              animation: isVisible ? 'wave-gradient 8s ease-in-out infinite' : 'none'
            }}
          >
            デザインとテクノロジーで、ビジネスの可能性を無限に広げる。
          </h2>
        </div>
        
        {/* Trusted Logos Inline */}
        <div className="text-center mb-12">
          <p className={`text-sm text-gray-500 mb-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            世界中の革新的な企業に選ばれています
          </p>
        </div>
        
        <div className={`grid grid-cols-3 sm:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className={`flex items-center justify-center h-12 transition-all duration-500`}
              style={{ 
                transitionDelay: `${700 + index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div 
                className={`${logo.width} h-6 bg-gray-600 rounded opacity-40 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center`}
              >
                <span className="text-xs font-medium text-white">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}