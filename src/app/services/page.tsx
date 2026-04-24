import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: '서비스 | 아미레브',
  description: '광고대행, 인플루언서 브랜딩, 소상공인 교육, AI 마케팅 서비스',
}

export default function ServicesPage() {
  return <ServicesClient />
}
