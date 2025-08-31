'use client';

import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({ children, className, size = 'lg' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl', 
    lg: 'max-w-7xl',
    xl: 'max-w-8xl',
    full: 'max-w-none'
  };

  return (
    <div className={cn(
      'mx-auto px-6 sm:px-8',
      sizes[size],
      className
    )}>
      {children}
    </div>
  );
}