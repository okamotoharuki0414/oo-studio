'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';

export default function SimpleContact() {
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

    const element = document.getElementById('simple-contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection variant="light" size="xl" id="simple-contact">
      <Container size="lg">
        <div className="text-center">
          {/* Main CTA */}
          <h2 className={`text-5xl font-bold tracking-tight text-gray-900 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            プロジェクトを始めませんか？
          </h2>
          
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Webサイト、アプリ、システム開発のご相談を承っています。<br />
            まずはお気軽にお問い合わせください。
          </p>
          
          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-400 mb-16 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <a
              href="#contact"
              className="inline-flex items-center px-12 py-4 bg-gray-900 text-white text-lg font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              無料で相談する
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Contact Info */}
          <div className={`grid md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">contact@oostudio.dev</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Response Time</h3>
              <p className="text-gray-600">24時間以内にご回答</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">Consultation</h3>
              <p className="text-gray-600">初回相談は無料</p>
            </div>
          </div>
        </div>
        
        {/* Simple Footer */}
        <footer className={`mt-24 pt-12 border-t border-gray-200 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="text-2xl font-bold text-gray-900 mb-4">
            OO Studio
          </div>
          <p className="text-gray-600 mb-8">
            システム開発・Webサイト制作・アプリ開発
          </p>
          <p className="text-sm text-gray-500">
            © 2024 OO Studio. All rights reserved.
          </p>
        </footer>
      </Container>
    </ITSection>
  );
}