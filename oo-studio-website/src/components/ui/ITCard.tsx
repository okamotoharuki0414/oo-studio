'use client';

import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ITCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'glass';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function ITCard({ 
  children, 
  className, 
  variant = 'light', 
  hover = true,
  padding = 'md' 
}: ITCardProps) {
  const variants = {
    dark: 'bg-gray-900/40 border-white/10 backdrop-blur-sm',
    light: 'bg-white border-gray-200 shadow-sm',
    glass: 'bg-white/5 border-white/10 backdrop-blur-md'
  };

  const paddings = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-10'
  };

  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        variants[variant],
        paddings[padding],
        hover && 'hover:shadow-lg hover:scale-[1.02] hover:border-opacity-40',
        variant === 'light' && hover && 'hover:shadow-xl',
        variant === 'dark' && hover && 'hover:bg-gray-900/60 hover:border-white/20',
        className
      )}
    >
      {children}
    </div>
  );
}