import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: '아미레브 소개 | 브랜드 마케팅 파트너',
  description: '아미레브의 브랜드 스토리와 미션, 비전을 소개합니다',
}

export default function AboutPage() {
  return <AboutClient />
}
