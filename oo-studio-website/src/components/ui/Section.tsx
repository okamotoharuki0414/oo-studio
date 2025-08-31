'use client';

import { ReactNode, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, variant = 'light', size = 'lg', id }, ref) => {
    const variants = {
      dark: 'bg-black text-white',
      light: 'bg-white text-gray-900',
      gradient: 'bg-gradient-to-b from-black to-white text-white'
    };

    const sizes = {
      sm: 'py-12 sm:py-16',
      md: 'py-16 sm:py-20',
      lg: 'py-20 sm:py-24',
      xl: 'py-24 sm:py-32'
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative overflow-hidden transition-all duration-500',
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;