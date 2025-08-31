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
  { name: 'Spotify', width: 'w-28' },
  { name: 'Netflix', width: 'w-32' },
  { name: 'Uber', width: 'w-24' }
];

export default function TrustedLogos() {
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

    const element = document.getElementById('trusted-logos');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section variant="dark" size="lg" id="trusted-logos">
      <Container size="xl">
        <div className="text-center mb-16">
          <p className={`text-lg text-gray-400 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            世界中の革新的な企業に選ばれています
          </p>
        </div>
        
        <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 lg:gap-12 items-center transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {logos.map((logo, index) => (
            <div 
              key={logo.name}
              className={`flex items-center justify-center h-16 transition-all duration-500`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div 
                className={`${logo.width} h-8 bg-gray-400 rounded opacity-40 hover:opacity-60 transition-opacity duration-300 flex items-center justify-center`}
              >
                <span className="text-xs font-medium text-black">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}