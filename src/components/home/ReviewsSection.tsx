'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionTitle from '@/components/ui/SectionTitle'

const reviews = [
  { src: '/images/reviews/review-01.png', alt: '수강생 후기 1' },
  { src: '/images/reviews/review-02.png', alt: '수강생 후기 2' },
  { src: '/images/reviews/review-03.png', alt: '수강생 후기 3' },
]

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length)
    }, 3500)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  const goTo = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current)
    setCurrent(i)
    startTimer()
  }

  return (
    <section
      className="py-16 reviews-noise"
      style={{
        backgroundColor: '#F7F5F0',
        backgroundImage: "linear-gradient(rgba(247,245,240,0.55), rgba(247,245,240,0.55)), url('/images/reviews/reviews-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="reviews-content max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="고객들의 진짜 이야기" subtitle="수강생들이 직접 남겨준 솔직한 후기" />

        <div className="mt-10 flex flex-col items-center">
          <div className="relative w-full max-w-sm mx-auto rounded-2xl shadow-lg overflow-hidden bg-white">
            {/* 슬라이드 트랙 — 오른쪽→왼쪽 슬라이드 */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((review, i) => (
                <div
                  key={i}
                  className="w-full flex-shrink-0"
                  style={{ minWidth: '100%' }}
                >
                  <Image
                    src={review.src}
                    alt={review.alt}
                    width={390}
                    height={844}
                    style={{ display: 'block', width: '100%', height: 'auto', verticalAlign: 'top' }}
                    sizes="(max-width: 640px) 100vw, 384px"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-1.5 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="p-2 flex items-center justify-center"
                aria-label={`후기 ${i + 1}`}
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-brand-dark w-5' : 'bg-brand-dark/25 w-2'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
