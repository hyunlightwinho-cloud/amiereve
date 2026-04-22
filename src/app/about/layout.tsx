import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '아미레브 소개 | 브랜드 스토리',
  description: '아미레브 창립 스토리와 팀을 소개합니다',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
