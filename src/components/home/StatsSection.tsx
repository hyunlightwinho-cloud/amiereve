'use client'

import { motion } from 'framer-motion'

const stats = [
  { label: '누적 수강생' },
  { label: '파트너 채널' },
  { label: '콘텐츠 제작' },
  { label: '고객 만족도' },
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="text-center px-4 md:px-8 py-6 md:py-8"
            >
              <div className="flex items-baseline justify-center gap-0.5 mb-2">
                <span className="text-3xl md:text-4xl font-bold text-white/20">-</span>
              </div>
              <p className="text-white/45 text-sm font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
