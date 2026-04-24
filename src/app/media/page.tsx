import { type Metadata } from 'next'
import MediaClient from './MediaClient'

export const metadata: Metadata = {
  title: '포트폴리오 | 아미레브',
  description: '아미레브가 제작한 영상, 콘텐츠 포트폴리오',
}

export default function MediaPage() {
  return <MediaClient />
}
