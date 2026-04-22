import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스 | 광고대행 · AI 마케팅 · 소상공인 교육 컨설팅',
  description: '아미레브의 4대 핵심 서비스를 소개합니다',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
