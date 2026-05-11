import { type Metadata } from 'next'
import CasesClient from './CasesClient'

export const metadata: Metadata = {
  title: '성공 사례 | 인플루언서·SNS 마케팅 실제 성과 - 아미레브',
  description: '아미레브와 함께한 고객의 성공 사례를 확인하세요. 인플루언서 채널 운영대행, 소상공인 SNS 마케팅 교육 등 실제 비즈니스로 이어진 성과를 숫자로 확인합니다.',
  keywords: [
    '인플루언서채널운영성공사례', '소상공인마케팅사례', 'SNS마케팅성과', '인플루언서채널관리결과',
    '마케팅성과결과', '전문SNS마케팅', '채널운영성과', '유튜버채널운영결과', '콘텐츠기획성공사례',
  ],
  alternates: { canonical: 'https://amiereve.hyunlight.com/cases', languages: { 'ko-KR': 'https://amiereve.hyunlight.com/cases' } },
  openGraph: {
    title: '성공 사례 | 인플루언서·SNS 마케팅 실제 성과 - 아미레브',
    description: '아미레브와 함께한 고객의 성공 사례. 실제 비즈니스로 이어진 성과를 숫자로 확인합니다.',
    url: 'https://amiereve.hyunlight.com/cases',
  },
}

export default function CasesPage() {
  return <CasesClient />
}
