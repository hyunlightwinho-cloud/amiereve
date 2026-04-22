export interface YoutubeVideo {
  id: number
  videoId: string
  title: string
  thumbnail: string
  views: string
  date: string
  category: string
}

const youtubeVideos: YoutubeVideo[] = [
  { id: 1, videoId: 'dQw4w9WgXcQ', title: '소상공인 SNS 마케팅 완전 정복 가이드', thumbnail: '/images/portfolio/port-01.jpg', views: '2.3만', date: '2026.03', category: '강의 & 교육' },
  { id: 2, videoId: 'dQw4w9WgXcQ', title: '유튜브 채널 빠르게 성장하는 5가지 방법', thumbnail: '/images/portfolio/port-04.jpg', views: '1.8만', date: '2026.02', category: '브랜딩 사례' },
  { id: 3, videoId: 'dQw4w9WgXcQ', title: 'AI로 콘텐츠 만드는 방법 완전정복', thumbnail: '/images/cases/case-01.jpg', views: '3.1만', date: '2026.01', category: 'AI 마케팅' },
  { id: 4, videoId: 'dQw4w9WgXcQ', title: '인스타그램 알고리즘 완벽 분석 2026', thumbnail: '/images/portfolio/port-07.jpg', views: '1.5만', date: '2025.12', category: '강의 & 교육' },
  { id: 5, videoId: 'dQw4w9WgXcQ', title: '카페 SNS 마케팅으로 매출 2배 달성하기', thumbnail: '/images/portfolio/port-08.jpg', views: '2.1만', date: '2025.11', category: '브랜딩 사례' },
  { id: 6, videoId: 'dQw4w9WgXcQ', title: 'ChatGPT로 SNS 콘텐츠 자동화하기', thumbnail: '/images/portfolio/port-09.jpg', views: '4.2만', date: '2025.10', category: 'AI 마케팅' },
]

export default youtubeVideos
