import { type Metadata } from 'next'
import CasesClient from './CasesClient'

export const metadata: Metadata = {
  title: '고객 사례 | 실제 성과',
  description: '아미레브와 함께한 고객들의 실제 성과를 확인하세요',
}

export default function CasesPage() {
  return <CasesClient />
}
