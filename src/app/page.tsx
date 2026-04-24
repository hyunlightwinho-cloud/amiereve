import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'

export const metadata: Metadata = {
  title: '아미레브 | 브랜드 마케팅 파트너',
  description: '광고대행, 인플루언서 브랜딩, 소상공인 SNS 교육, AI 마케팅 서비스를 제공하는 아미레브',
}
import ServiceZigzag from '@/components/home/ServiceZigzag'
import GallerySection from '@/components/home/GallerySection'
import CaseSection from '@/components/home/CaseSection'
import ReviewsSection from '@/components/home/ReviewsSection'
import CTASection from '@/components/home/CTASection'

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
