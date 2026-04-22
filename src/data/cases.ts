export interface CaseItem {
  id: number
  title: string
  category: string
  description: string
  badge: string
  thumbnail: string
  channelUrl?: string
}

const cases: CaseItem[] = [
  {
    id: 1,
    title: '이미나 약사',
    category: '인플루언서 브랜딩',
    description: '16년 차 전문 약사이자 강사. 약사 가르치는 1타강사 채널 운영대행 진행 중.',
    badge: '운영 중',
    thumbnail: '',
    channelUrl: 'https://www.youtube.com/@yak_up_mina',
  },
]

export default cases
