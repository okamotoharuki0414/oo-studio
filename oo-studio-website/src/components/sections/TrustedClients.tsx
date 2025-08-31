'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';

const clients = [
  { name: 'Microsoft', category: 'Technology' },
  { name: 'Google', category: 'Technology' },
  { name: 'Meta', category: 'Technology' },
  { name: 'Amazon', category: 'E-commerce' },
  { name: 'Salesforce', category: 'SaaS' },
  { name: 'Netflix', category: 'Media' },
  { name: 'Uber', category: 'Transportation' },
  { name: 'Spotify', category: 'Media' }
];

const stats = [
  { number: '100+', label: 'Projects Delivered' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '99.9%', label: 'Uptime Guaranteed' },
  { number: '24/7', label: 'Global Support' }
];

export default function TrustedClients() {
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

    const element = document.getElementById('trusted-clients');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="gradient" size="xl" id="trusted-clients">
      <Container size="xl">
        {/* Stats Section */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl font-bold tracking-tight mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Trusted by Industry Leaders
          </h2>
          
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`group transition-all duration-500`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="w-32 h-16 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors duration-300">
                  {client.name}
                </span>
              </div>
              <div className="text-xs text-gray-400 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {client.category}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ITSection>
  );
}