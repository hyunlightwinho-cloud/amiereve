import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: '아미레브 소개 | 인플루언서·SNS 마케팅 광고대행사 이야기',
  description: '아미레브는 소상공인 전문 마케팅 에이전시입니다. 인플루언서 브랜딩과 전문적인 SNS 마케팅 교육을 전문으로 하는 광고대행사입니다. 유튜버 이야기, 철학과 비전을 확인하세요.',
  keywords: [
    '아미레브 소개', '아미레브 광고대행사', '마케팅대행사 소개', '인플루언서전문대행사',
    '소상공인전문마케팅', 'SNS마케팅전문대행사', '유튜버브랜딩전략', '콘텐츠기획대행사',
  ],
  alternates: { canonical: 'https://amiereve.hyunlight.com/about', languages: { 'ko-KR': 'https://amiereve.hyunlight.com/about' } },
  openGraph: {
    title: '아미레브 소개 | 인플루언서·SNS 마케팅 광고대행사 이야기',
    description: '아미레브는 소상공인 전문 마케팅 에이전시입니다. 인플루언서 브랜딩과 전문적인 SNS 마케팅 교육을 전문으로 하는 광고대행사입니다.',
    url: 'https://amiereve.hyunlight.com/about',
  },
}

export default function AboutPage() {
  return <AboutClient />
}
