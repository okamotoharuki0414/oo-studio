'use client';

import { useEffect, useState } from 'react';

interface CardGridProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  title?: string;
  subtitle?: string;
  centerTitle?: boolean;
}

export default function CardGrid({ 
  children, 
  columns = { sm: 1, md: 2, lg: 3, xl: 3 },
  gap = 'lg',
  className = '',
  title,
  subtitle,
  centerTitle = true
}: CardGridProps) {
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

    const element = document.querySelector('.card-grid');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const gridClasses = {
    sm: columns.sm ? `grid-cols-${columns.sm}` : 'grid-cols-1',
    md: columns.md ? `md:grid-cols-${columns.md}` : 'md:grid-cols-2', 
    lg: columns.lg ? `lg:grid-cols-${columns.lg}` : 'lg:grid-cols-3',
    xl: columns.xl ? `xl:grid-cols-${columns.xl}` : 'xl:grid-cols-3'
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6', 
    lg: 'gap-8',
    xl: 'gap-10'
  };

  return (
    <div className={`card-grid py-16 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className={`mb-12 ${centerTitle ? 'text-center' : ''}`}>
            {title && (
              <h2 className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg text-gray-600 max-w-3xl ${centerTitle ? 'mx-auto' : ''} transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className={`grid ${gridClasses.sm} ${gridClasses.md} ${gridClasses.lg} ${gridClasses.xl} ${gapClasses[gap]}`}>
          {children}
        </div>
      </div>
    </div>
  );
}