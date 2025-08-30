import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OO studio - システム開発・コンサルティング",
  description: "OO studioは、最先端の技術と豊富な経験で、お客様のビジネス課題を解決するシステム開発会社です。Webアプリケーション、モバイルアプリ、システム設計・コンサルティングを提供しています。",
  keywords: "システム開発, Webアプリケーション, モバイルアプリ, React, Next.js, Flutter, コンサルティング",
  authors: [{ name: "OO studio" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{backgroundColor: '#000000'}}>
      <body
        className={`${inter.variable} ${notoSansJP.variable} antialiased`}
        style={{ 
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Noto Sans JP", sans-serif',
          backgroundColor: '#000000',
          margin: 0,
          padding: 0
        }}
      >
        <div style={{backgroundColor: '#000000', minHeight: '100vh'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
