import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SplashScreen from '@/components/SplashScreen'

export const metadata: Metadata = {
  metadataBase: new URL('https://amiereve.hyunlight.com'),
  title: {
    default: '아미레브 | 브랜드 마케팅 파트너',
    template: '%s | 아미레브',
  },
  description: '인플루언서·유튜버 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅 전문 광고대행사. 아미레브와 함께 브랜드의 새로운 가능성을 열어보세요.',
  keywords: [
    '아미레브', 'SNS마케팅', '인플루언서브랜딩', '소상공인교육', 'AI마케팅', '광고대행',
    '유튜브운영대행', '콘텐츠마케팅', '브랜드마케팅', '유튜버브랜딩', '채널운영',
    '콘텐츠기획', '마케팅컨설팅', '인스타그램마케팅', '소셜미디어마케팅',
    '유튜브채널', '인플루언서마케팅', '디지털마케팅', '온라인마케팅',
  ],
  authors: [{ name: '아미레브', url: 'https://amiereve.hyunlight.com' }],
  creator: '아미레브',
  publisher: '아미레브',
  alternates: {
    canonical: '/',
    languages: { 'ko-KR': '/' },
  },
  openGraph: {
    title: '아미레브 | 브랜드 마케팅 파트너',
    description: '인플루언서·유튜버 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅 전문 광고대행사',
    url: 'https://amiereve.hyunlight.com',
    siteName: '아미레브',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: '아미레브 | 브랜드 마케팅 파트너',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '아미레브 | 브랜드 마케팅 파트너',
    description: '인플루언서·유튜버 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅 전문 광고대행사',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    other: {
      'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION || '',
    },
  },
  category: '마케팅',
}

const sameAs = [
  process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  process.env.NEXT_PUBLIC_YOUTUBE_URL,
  process.env.NEXT_PUBLIC_BLOG_URL,
].filter(Boolean)

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MarketingAgency'],
  name: '아미레브',
  alternateName: 'Amie Reve',
  url: 'https://amiereve.hyunlight.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://amiereve.hyunlight.com/opengraph-image',
    width: 1200,
    height: 630,
  },
  image: 'https://amiereve.hyunlight.com/opengraph-image',
  description: '인플루언서·유튜버 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅 전문 광고대행사',
  telephone: '010-4334-9779',
  email: 'amie-reve@naver.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressLocality: '대한민국',
  },
  areaServed: { '@type': 'Country', name: '대한민국' },
  priceRange: '$$',
  currenciesAccepted: 'KRW',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '마케팅 서비스',
    itemListElement: [
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', name: '유튜브 채널 운영대행' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', name: '인플루언서 브랜딩' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', name: '소상공인 SNS 마케팅 교육' } },
      { '@type': 'Offer', 'itemOffered': { '@type': 'Service', name: 'AI 마케팅 컨설팅' } },
    ],
  },
  sameAs,
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '아미레브',
  url: 'https://amiereve.hyunlight.com',
  description: '인플루언서·유튜버 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅 전문 광고대행사',
  inLanguage: 'ko-KR',
  publisher: { '@type': 'Organization', name: '아미레브' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FEE500" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
