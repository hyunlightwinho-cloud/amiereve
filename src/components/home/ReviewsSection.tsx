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
    <section className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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
    </section>
  )
}
