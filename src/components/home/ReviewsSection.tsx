'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'

const reviews = [
  { src: '/images/reviews/review-01.png', alt: '수강생 후기 1' },
  { src: '/images/reviews/review-02.png', alt: '수강생 후기 2' },
  { src: '/images/reviews/review-03.png', alt: '수강생 후기 3' },
]

export default function ReviewsSection() {
  return (
    <section className="py-24 reviews-noise" style={{ backgroundColor: '#F7F5F0', backgroundImage: "url('/images/reviews/reviews-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top', position: 'relative' }}>
      <div className="reviews-content max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="고객들의 진짜 이야기" subtitle="수강생들이 직접 남겨준 솔직한 후기" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div className="relative w-full">
                <Image
                  src={review.src}
                  alt={review.alt}
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wave divider — ReviewsSection → CTASection (#FEE500) */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, zIndex: 5 }}>
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 100 }}>
          <path d="M0,50 C300,100 900,0 1200,50 L1200,100 L0,100 Z" fill="#FEE500"/>
        </svg>
      </div>
    </section>
  )
}
