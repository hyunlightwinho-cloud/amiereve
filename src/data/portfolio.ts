export interface PortfolioItem {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

const portfolio: PortfolioItem[] = [
  { id: 1, src: '/images/portfolio/port-01.jpg', alt: '아미레브 포트폴리오', category: '유튜브 운영', title: '이미나 약사 채널 운영대행' },
  { id: 2, src: '/images/portfolio/port-02.jpg', alt: '아미레브 포트폴리오', category: '영상 제작', title: '약사 전문 강의 숏폼 시리즈' },
  { id: 3, src: '/images/portfolio/port-03.jpg', alt: '아미레브 포트폴리오', category: 'SNS 콘텐츠', title: '인스타그램 피드 기획 및 제작' },
  { id: 4, src: '/images/portfolio/port-04.jpg', alt: '아미레브 포트폴리오', category: '브랜드 디자인', title: '소상공인 브랜드 아이덴티티 구축' },
  { id: 5, src: '/images/portfolio/port-05.jpg', alt: '아미레브 포트폴리오', category: '광고 기획', title: '온라인 강의 론칭 광고 캠페인' },
  { id: 6, src: '/images/portfolio/port-06.jpg', alt: '아미레브 포트폴리오', category: 'SNS 콘텐츠', title: '카드뉴스 시리즈 기획 및 디자인' },
  { id: 7, src: '/images/portfolio/port-07.jpg', alt: '아미레브 포트폴리오', category: '영상 제작', title: '제품 홍보 영상 제작' },
  { id: 8, src: '/images/portfolio/port-08.jpg', alt: '아미레브 포트폴리오', category: '브랜드 디자인', title: '로컬 브랜드 리브랜딩 프로젝트' },
  { id: 9, src: '/images/portfolio/port-09.jpg', alt: '아미레브 포트폴리오', category: 'AI 마케팅', title: 'AI 활용 콘텐츠 자동화 전략' },
  { id: 10, src: '/images/portfolio/port-10.jpg', alt: '아미레브 포트폴리오', category: '광고 기획', title: '네이버 스마트스토어 광고 최적화' },
  { id: 11, src: '/images/portfolio/port-11.jpg', alt: '아미레브 포트폴리오', category: '유튜브 운영', title: '인플루언서 채널 성장 전략 컨설팅' },
  { id: 12, src: '/images/portfolio/port-12.jpg', alt: '아미레브 포트폴리오', category: 'AI 마케팅', title: 'AI 쇼츠 영상 제작 파이프라인 구축' },
]

export default portfolio
