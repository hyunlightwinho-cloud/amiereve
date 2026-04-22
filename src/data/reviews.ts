export interface Review {
  id: number
  customerName: string
  occupation: string
  question: string
  answer: string
}

const reviews: Review[] = [
  {
    id: 1,
    customerName: '김소연',
    occupation: '뷰티 소상공인',
    question: '아이레브랑 일하고 정말 달라졌어요! 팔로워가 3배나 늘었는데 맞나요?? ㅠㅠ',
    answer: '네! 맞습니다 😊 6개월 만에 팔로워 340% 성장하셨어요. 꾸준히 함께해주신 덕분이에요!',
  },
  {
    id: 2,
    customerName: '이민준',
    occupation: '카페 운영',
    question: '처음에 SNS 어떻게 해야 할지 몰랐는데... 지금은 매출이 2배 됐어요 진짜로요',
    answer: '정말 열심히 하셨어요! 콘텐츠 전략이 딱 맞아떨어진 케이스예요 💛',
  },
  {
    id: 3,
    customerName: '박지현',
    occupation: '헤어디자이너',
    question: '유튜브 채널 운영 맡기고 나서 예약이 꽉 찼어요. 이게 실화인가요?',
    answer: '실화입니다! 영상 퀄리티와 꾸준한 업로드 덕분에 검색 유입이 크게 늘었어요 🎬',
  },
  {
    id: 4,
    customerName: '최민서',
    occupation: '피트니스 트레이너',
    question: '강의 듣고 혼자서도 운영할 수 있을 것 같아요! 너무 친절하게 알려주셔서 감사해요',
    answer: '이제 충분히 혼자 하실 수 있어요! 언제든 궁금하시면 연락 주세요 😄',
  },
]

export default reviews
