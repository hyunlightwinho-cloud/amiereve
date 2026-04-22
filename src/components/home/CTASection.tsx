'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-brand-yellow relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-black/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-60 h-60 rounded-full bg-black/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-dark/60 text-sm font-semibold tracking-widest uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-brand-dark text-3xl md:text-4xl font-bold tracking-tight mb-3">
              지금 바로 시작하세요
            </h2>
            <p className="text-brand-dark/65 text-base">
              무료 상담으로 나에게 꼭 맞는 브랜딩 전략을 찾아보세요
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-dark text-white font-bold hover:bg-black transition-colors duration-200 shadow-lg"
            >
              무료 상담 예약
              <ArrowRight size={18} />
            </Link>
            <a
              href={process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '#'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-brand-dark/25 text-brand-dark font-semibold hover:border-brand-dark transition-colors duration-200"
            >
              <MessageCircle size={18} />
              카카오 문의
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
