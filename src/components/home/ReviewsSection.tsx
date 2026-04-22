'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import SectionTitle from '@/components/ui/SectionTitle'

const reviewImages = [
  { src: '/images/reviews/review-01.png', alt: '수강생 후기 1' },
  { src: '/images/reviews/review-02.png', alt: '수강생 후기 2' },
  { src: '/images/reviews/review-03.png', alt: '수강생 후기 3' },
]

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="고객들의 진짜 이야기" subtitle="수강생들이 직접 남겨준 솔직한 후기" />
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviewImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="overflow-hidden shadow-sm bg-white">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto block"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
