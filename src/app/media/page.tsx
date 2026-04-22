import { type Metadata } from 'next'
import MediaClient from './MediaClient'

export const metadata: Metadata = {
  title: '미디어 | 콘텐츠 & 포트폴리오',
  description: '아미레브의 유튜브 콘텐츠와 작업 포트폴리오를 확인하세요',
}

export default function MediaPage() {
  return <MediaClient />
}
