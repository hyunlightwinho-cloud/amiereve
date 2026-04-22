export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/photo-01.jpg', alt: '아미레브 SNS 마케팅 강의 현장', category: 'SNS 강의' },
  { id: 2, src: '/images/gallery/photo-02.jpg', alt: '아미레브 브랜딩 세미나', category: '세미나' },
  { id: 3, src: '/images/gallery/photo-03.jpg', alt: '아미레브 인플루언서 브랜딩 강의', category: '브랜딩' },
  { id: 4, src: '/images/gallery/photo-04.jpg', alt: '아미레브 소상공인 교육 현장', category: '교육' },
  { id: 5, src: '/images/gallery/photo-05.jpg', alt: '아미레브 콘텐츠 제작 워크샵', category: '콘텐츠' },
  { id: 6, src: '/images/gallery/photo-06.jpg', alt: '아미레브 광고대행 실습', category: '실습' },
  { id: 7, src: '/images/gallery/photo-07.webp', alt: '아미레브 소규모 마케팅 클래스', category: '클래스' },
  { id: 8, src: '/images/gallery/photo-08.webp', alt: '아미레브 SNS 운영 워크샵', category: 'SNS 강의' },
  { id: 9, src: '/images/gallery/photo-09.webp', alt: '아미레브 인스타그램 브랜딩 강의', category: '브랜딩' },
  { id: 10, src: '/images/gallery/photo-10.jpg', alt: '아미레브 해시태그 마케팅 강의', category: 'AI 마케팅' },
]

export default galleryImages
