'use client';

import GenreCard from '../ui/GenreCard';
import CardGrid from '../ui/CardGrid';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  href?: string;
  icon: React.ReactNode;
  badge: string;
  technologies: string[];
  period: string;
  videoUrl?: string;
}

const projects = [
  {
    id: 1,
    title: '製造業向けコーポレートサイト',
    category: 'Web Development',
    description: '製造業企業のブランディングとデジタル変革を支援。モダンなデザインで技術力と信頼性をアピール。',
    image: '/images/スクリーンショット 2025-08-30 22.25.11.png',
    href: 'https://okbrand.vercel.app',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    ),
    badge: 'Live',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    period: '2024年2-4月'
  },
  {
    id: 2,
    title: '飲食店専用SNSアプリ',
    category: 'Mobile App Development', 
    description: '飲食店とユーザーをつなぐソーシャルプラットフォーム。企画段階から参画し、完全オリジナルアプリを開発。',
    image: '/images/スクリーンショット 2025-08-26 23.35.56.png',
    videoUrl: '/images/画面収録 2025-08-26 21.13.52.mov',
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    ),
    badge: 'Beta',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'PostgreSQL'],
    period: '2024年5-8月'
  },
  {
    id: 3,
    title: 'グローバル展開向けLP',
    category: 'Landing Page',
    description: 'グローバル展開に向けた多言語対応ランディングページ。国際的なブランド展開を支援する戦略的なWebサイト。',
    image: '/images/スクリーンショット 2025-08-26 23.37.04.png',
    href: 'https://ok-brand-en.vercel.app',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: 'Prototype',
    technologies: ['React', 'i18next', 'Figma', 'Google Analytics'],
    period: '2024年9-10月'
  }
];

export default function ProjectsCards() {
  return (
    <section className="bg-white py-20" id="actual-projects">
      <CardGrid
        title="Recent Projects"
        subtitle="実際に手がけた3つのプロジェクトをご紹介します。"
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        gap="xl"
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="transition-all duration-700"
            style={{ 
              transitionDelay: `${index * 150}ms`,
              opacity: 1,
              transform: 'translateY(0)'
            }}
          >
            <GenreCard
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              icon={project.icon}
              badge={project.badge}
              href={project.href}
              videoUrl={project.videoUrl}
            />
          </div>
        ))}
      </CardGrid>
      
      {/* Technology Stack Overview */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            使用技術スタック
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Flutter', 'Firebase', 'Node.js', 'Tailwind CSS', 'Vercel', 'PostgreSQL', 'Figma', 'i18next', 'Three.js'].map((tech) => (
              <div
                key={tech}
                className="bg-white rounded-xl p-3 text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}