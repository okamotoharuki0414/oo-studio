'use client';

import { useState } from 'react';

interface CodeSnippet {
  language: string;
  title: string;
  code: string;
}

interface CodePreviewProps {
  snippets: CodeSnippet[];
  className?: string;
}

export default function CodePreview({ snippets, className = '' }: CodePreviewProps) {
  const [activeSnippet, setActiveSnippet] = useState(0);

  return (
    <div className={`bg-gray-900 rounded-xl overflow-hidden shadow-2xl ${className}`}>
      {/* Tab Bar */}
      <div className="flex border-b border-gray-700 bg-gray-800">
        {snippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveSnippet(index)}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeSnippet === index
                ? 'bg-gray-900 text-white border-b-2 border-blue-500'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            {snippet.title}
          </button>
        ))}
      </div>

      {/* Code Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-gray-400 text-sm">
              {snippets[activeSnippet].language}
            </span>
          </div>
          <button className="text-gray-400 hover:text-white text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
        
        <pre className="text-sm text-gray-300 overflow-x-auto">
          <code className={`language-${snippets[activeSnippet].language.toLowerCase()}`}>
            {snippets[activeSnippet].code}
          </code>
        </pre>
      </div>
    </div>
  );
}