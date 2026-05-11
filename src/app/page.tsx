import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import ServiceZigzag from '@/components/home/ServiceZigzag'
import GallerySection from '@/components/home/GallerySection'
import CaseSection from '@/components/home/CaseSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import CTASection from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: '아미레브 | 인플루언서 브랜딩 전문 유튜버·소상공인 SNS 마케팅',
  description: '아미레브는 인플루언서·유튜브 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅을 전문으로 하는 광고대행사입니다. 지금 바로 문의하세요.',
  keywords: [
    '아미레브', '인플루언서브랜딩', '소상공인마케팅', '전문SNS마케팅',
    'AI마케팅', '광고대행사', '콘텐츠기획', '인플루언서채널운영', '유튜버브랜딩전략',
  ],
  alternates: { canonical: 'https://amiereve.hyunlight.com', languages: { 'ko-KR': 'https://amiereve.hyunlight.com' } },
  openGraph: {
    title: '아미레브 | 인플루언서 브랜딩 전문 유튜버·소상공인 SNS 마케팅',
    description: '아미레브는 인플루언서·유튜브 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅을 전문으로 하는 광고대행사입니다.',
    url: 'https://amiereve.hyunlight.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceZigzag />
      <GallerySection />
      <CaseSection />
      <ReviewsSection />
      <CTASection />
    </>
  )
}
