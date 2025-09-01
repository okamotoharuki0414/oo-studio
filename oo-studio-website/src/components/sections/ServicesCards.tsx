'use client';

import GenreCard from '../ui/GenreCard';
import CardGrid from '../ui/CardGrid';

const services = [
  {
    id: 1,
    title: 'Webアプリケーション開発',
    description: 'モダンな技術スタックを活用したWebアプリケーションの企画・設計・開発を行います。UI/UXから技術選定まで一貫サポート。',
    category: 'Web Development',
    image: '/images/スクリーンショット 2025-08-30 22.25.11.png',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
      </svg>
    ),
    badge: 'Popular'
  },
  {
    id: 2,
    title: 'モバイルアプリ開発',
    description: 'iOS・Android対応のクロスプラットフォームアプリケーション開発。企画段階から参画し、ユーザー体験を重視した設計を実現。',
    category: 'Mobile App',
    image: '/images/スクリーンショット 2025-08-26 23.35.56.png',
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'システム設計・コンサルティング',
    description: 'ビジネス課題を技術で解決するための戦略立案とシステム設計。技術選定からアーキテクチャ設計まで包括的にサポート。',
    category: 'Consulting',
    image: '/images/スクリーンショット 2025-08-26 23.37.04.png',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'ブランディング・UI/UX',
    description: 'ブランドアイデンティティの構築からユーザーインターフェース設計まで。魅力的で使いやすいデザインを提供します。',
    category: 'Design',
    image: '/images/スクリーンショット 2025-08-30 22.26.01.png',
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'DevOps・インフラ構築',
    description: 'CI/CD環境の構築、クラウドインフラ設計、監視・運用体制の整備まで。安定したサービス運用を支援します。',
    category: 'Infrastructure',
    image: '/images/スクリーンショット 2025-08-30 22.26.27.png',
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'DX推進・技術教育',
    description: 'チームの開発生産性向上とデジタル変革を支援。技術研修からプロセス改善まで組織全体のDXを推進します。',
    category: 'Education',
    image: '/images/スクリーンショット 2025-08-30 22.27.09.png',
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

export default function ServicesCards() {
  return (
    <section className="bg-gray-50 py-20">
      <CardGrid
        title="Our Services"
        subtitle="お客様のビジネス課題を解決するための幅広いサービスを提供しています。"
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        gap="lg"
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            className="transition-all duration-700"
            style={{ 
              transitionDelay: `${index * 100}ms`,
              opacity: 1,
              transform: 'translateY(0)'
            }}
          >
            <GenreCard
              title={service.title}
              description={service.description}
              image={service.image}
              category={service.category}
              icon={service.icon}
              badge={service.badge}
              href={`#service-${service.id}`}
            />
          </div>
        ))}
      </CardGrid>
    </section>
  );
}