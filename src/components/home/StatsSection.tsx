'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let current = 0
    const duration = 1200
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { label: '누적 수강생', target: 50, suffix: '명+' },
  { label: '파트너 채널', target: 1, suffix: '개' },
  { label: '콘텐츠 제작', target: 144, suffix: '개+' },
  { label: '고객 만족도', target: 100, suffix: '%' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={[
                'text-center px-4 md:px-8 py-6 md:py-8 border-white/10',
                i % 2 === 0 ? 'border-r' : '',
                i < 2 ? 'border-b md:border-b-0' : '',
                i < 3 ? 'md:border-r' : '',
              ].join(' ')}
            >
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </span>
              </div>
              <p className="text-white/45 text-sm font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
