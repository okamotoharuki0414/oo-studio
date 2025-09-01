'use client';

import { useState } from 'react';

interface GenreCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string;
  className?: string;
  videoUrl?: string;
}

export default function GenreCard({ 
  title, 
  description, 
  image, 
  category, 
  href, 
  icon, 
  badge,
  className = '',
  videoUrl
}: GenreCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const CardContent = (
    <div 
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {videoUrl ? (
          <video 
            src={videoUrl} 
            autoPlay 
            loop 
            muted 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        
        {/* Icon Overlay */}
        {icon && (
          <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
            {icon}
          </div>
        )}
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 text-xs font-semibold bg-blue-600 text-white rounded-full">
              {badge}
            </span>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {category}
          </span>
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <span className="text-xs text-gray-400">
            Portfolio
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Action Indicator */}
        <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
          <span>詳細を見る</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}