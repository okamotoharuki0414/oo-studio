'use client';

import { ReactNode, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ITSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

const ITSection = forwardRef<HTMLElement, ITSectionProps>(
  ({ children, className, variant = 'light', size = 'lg', id }, ref) => {
    const variants = {
      dark: 'bg-black text-white',
      light: 'bg-white text-gray-900',
      gradient: 'bg-gradient-to-b from-black via-gray-800 to-white'
    };

    const sizes = {
      sm: 'py-16 sm:py-20',
      md: 'py-20 sm:py-24', 
      lg: 'py-24 sm:py-32',
      xl: 'py-32 sm:py-40'
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          'relative overflow-hidden transition-colors duration-700',
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

ITSection.displayName = 'ITSection';

export default ITSection;