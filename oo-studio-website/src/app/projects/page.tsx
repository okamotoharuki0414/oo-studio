'use client';

import { useEffect, useState } from 'react';
import ProjectsCards from '../../components/sections/ProjectsCards';
import SimpleContact from '../../components/sections/SimpleContact';

export default function ProjectsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY >= 50) {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-2 left-2 right-2 backdrop-blur-[30px] backdrop-saturate-200 z-50 transition-all duration-500 ease-out rounded-full shadow-2xl border bg-white/15 border-white/20 shadow-black/10 ${
        showNavbar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              OO studio
            </a>
            <div className="flex items-center space-x-6">
              <a href="/" className="px-6 py-2 rounded-full font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-900/10 transition-all duration-300">
                Home
              </a>
              <a href="/services" className="px-6 py-2 rounded-full font-bold text-gray-600 hover:text-gray-900 hover:bg-gray-900/10 transition-all duration-300">
                Services
              </a>
              <a href="/projects" className="px-6 py-2 rounded-full font-bold text-gray-900 bg-gray-900/10">
                Projects
              </a>
              <a href="#contact" className="px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300">
                お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Recent Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            実際に手がけた3つのプロジェクトをご紹介します。
            <br />
            企画から開発・運用まで、一貫したサポートでお客様の課題を解決しています。
          </p>
        </div>
      </section>

      {/* Projects Content */}
      <ProjectsCards />
      
      {/* Contact Section */}
      <SimpleContact />
    </div>
  );
}