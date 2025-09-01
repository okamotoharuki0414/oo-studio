'use client';

import { useEffect, useState } from 'react';
import ITSection from '../ui/ITSection';
import Container from '../ui/Container';
import CodePreview from '../ui/CodePreview';

const projects = [
  {
    id: 1,
    title: '製造業向けコーポレートサイト',
    category: 'Web Development',
    description: '製造業企業のブランディングとデジタル変革を支援。モダンなデザインで技術力と信頼性をアピール。',
    deliverables: ['UI/UXデザイン', 'フロントエンド開発', 'レスポンシブ対応', 'SEO最適化'],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    period: '2024年2-4月',
    status: 'Live',
    github: 'https://github.com/okamotoharuki0414/ok-brand-website',
    liveUrl: 'https://okbrand.vercel.app',
    videoUrl: '/images/画面収録 2025-08-26 21.13.52.mov',
    stats: {
      commits: '47+',
      files: '25+',
      languages: ['TypeScript', 'CSS', 'JavaScript']
    }
  },
  {
    id: 2,
    title: '飲食店専用SNSアプリ',
    category: 'Mobile App Development',
    description: '飲食店とユーザーをつなぐソーシャルプラットフォーム。企画段階から参画し、完全オリジナルアプリを開発。',
    deliverables: ['企画・仕様設計', 'UI/UXデザイン', 'iOS/Android開発', 'バックエンドAPI'],
    technologies: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL'],
    period: '2024年5-8月',
    status: 'Beta Testing',
    github: 'https://github.com/okamotoharuki0414/restaurant-sns-app',
    liveUrl: null,
    videoUrl: '/images/スクリーンショット 2025-08-26 23.35.56.png',
    stats: {
      commits: '120+',
      files: '80+',
      languages: ['Dart', 'JavaScript', 'TypeScript']
    }
  },
  {
    id: 3,
    title: 'グローバル展開向けLP',
    category: 'Landing Page',
    description: 'グローバル展開に向けた多言語対応ランディングページ。国際的なブランド展開を支援する戦略的なWebサイト。',
    deliverables: ['多言語対応設計', 'グローバルUI作成', 'パフォーマンス最適化', 'A/Bテスト準備'],
    technologies: ['React', 'i18next', 'Figma', 'Google Analytics'],
    period: '2024年9-10月',
    status: 'Prototype',
    github: 'https://github.com/okamotoharuki0414/ok-brand-en-lp',
    liveUrl: 'https://ok-brand-en.vercel.app',
    videoUrl: '/images/スクリーンショット 2025-08-26 23.37.04.png',
    stats: {
      commits: '32+',
      files: '18+',
      languages: ['JavaScript', 'CSS', 'HTML']
    }
  }
];

export default function ActualProjects() {
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

    const element = document.getElementById('actual-projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <ITSection 
      variant="gradient" 
      size="xl" 
      id="actual-projects"
      className="bg-gradient-to-b from-gray-800 via-gray-700 via-gray-600 to-white"
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold tracking-tight mb-6 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Recent Projects
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            実際に手がけた3つのプロジェクトをご紹介します。
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Project Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    {project.id === 1 ? (
                      <img 
                        src="/images/スクリーンショット 2025-08-30 22.25.11.png" 
                        alt="okbrand製造業向けサイト" 
                        className="w-full h-full object-cover"
                      />
                    ) : project.id === 2 ? (
                      <video 
                        src="/images/画面収録 2025-08-26 21.13.52.mov" 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center p-8">
                        <div className="text-center mb-6">
                          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-3xl text-gray-600">📄</span>
                          </div>
                          <p className="text-gray-600 font-semibold text-lg">{project.category}</p>
                        </div>
                        
                        {/* GitHub Stats */}
                        <div className="grid grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-gray-800">{project.stats.commits}</div>
                            <div className="text-xs text-gray-500">Commits</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-800">{project.stats.files}</div>
                            <div className="text-xs text-gray-500">Files</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-gray-800">{project.stats.languages.length}</div>
                            <div className="text-xs text-gray-500">Languages</div>
                          </div>
                        </div>
                        
                        {/* Language indicators */}
                        <div className="flex flex-wrap gap-1 mt-4 justify-center">
                          {project.stats.languages.map((lang) => (
                            <span key={lang} className="px-2 py-1 text-xs bg-gray-400 text-white rounded-full">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.status === 'Live' ? 'bg-green-100 text-green-800' :
                      project.status === 'Beta Testing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} ${project.id === 3 ? 'text-gray-900' : 'text-white'}`}>
                  <div className="space-y-6">
                    <div>
                      <p className={`text-sm uppercase tracking-wide mb-2 font-medium ${
                        project.id === 3 ? 'text-gray-600' : 'text-gray-400'
                      }`}>
                        {project.period}
                      </p>
                      <h3 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                        {project.title}
                      </h3>
                      <p className={`text-lg leading-relaxed ${
                        project.id === 3 ? 'text-gray-700' : 'text-gray-300'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className={`text-lg font-semibold mb-4 ${
                        project.id === 3 ? 'text-gray-800' : 'text-gray-200'
                      }`}>主な成果物</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.deliverables.map((item) => (
                          <div key={item} className="flex items-center text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className={`text-sm ${
                              project.id === 3 ? 'text-gray-700' : 'text-gray-300'
                            }`}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div>
                      <h4 className={`text-lg font-semibold mb-4 ${
                        project.id === 3 ? 'text-gray-800' : 'text-gray-200'
                      }`}>技術スタック</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1.5 text-sm rounded-full border transition-colors duration-200 ${
                              project.id === 3 
                                ? 'bg-gray-900/10 text-gray-800 border-gray-800/20 hover:bg-gray-900/20' 
                                : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              
              {/* Code Preview Section */}
              <div className="mt-10 lg:mt-12">
                <div className="mb-5">
                  <h4 className="text-xl font-semibold text-white mb-2">Featured Code</h4>
                  <p className="text-gray-300 text-sm">実装のハイライト</p>
                </div>
                <CodePreview snippets={project.codeSnippets} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ITSection>
  );
}