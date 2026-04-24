import { type Metadata } from 'next'
import CasesClient from './CasesClient'

export const metadata: Metadata = {
  title: '사례 | 아미레브',
  description: '아미레브와 함께 성장한 고객 성공 사례',
}

export default function CasesPage() {
  return <CasesClient />
}
