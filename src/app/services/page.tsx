import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: '서비스 | 인플루언서 브랜딩 전문 유튜버·소상공인 SNS 마케팅 - 아미레브',
  description: '아미레브의 서비스 소개. 인플루언서·유튜브 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅. 전문 팀이 유튜버 채널을 직접 기획합니다.',
  keywords: [
    '인플루언서채널운영서비스', '소상공인마케팅', '전문SNS마케팅', 'AI마케팅컨설팅',
    '인플루언서채널운영', '콘텐츠기획서비스', '동영상마케팅서비스', 'SNS광고대행', '유튜버채널운영',
    '인스타그램마케팅서비스', '마케팅컨설팅서비스', '브랜드콘텐츠기획',
  ],
  alternates: { canonical: 'https://amiereve.hyunlight.com/services', languages: { 'ko-KR': 'https://amiereve.hyunlight.com/services' } },
  openGraph: {
    title: '서비스 | 인플루언서 브랜딩 전문 유튜버·소상공인 SNS 마케팅 - 아미레브',
    description: '아미레브의 서비스 소개. 인플루언서·유튜브 채널 운영대행, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅.',
    url: 'https://amiereve.hyunlight.com/services',
  },
}

export default function ServicesPage() {
  return <ServicesClient />
}
