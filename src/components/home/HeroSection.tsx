'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-brand-dark">
        <Image
          src="/images/hero-bg.jpg"
          alt="아미레브 강의 현장"
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
      </div>

      {/* Layered Overlay: top dark + bottom stronger dark for text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <span className="w-6 h-px bg-brand-yellow" />
          <span className="text-brand-yellow tracking-[0.25em] text-xs uppercase font-semibold">
            광고대행 · 브랜딩 · AI 마케팅
          </span>
          <span className="w-6 h-px bg-brand-yellow" />
        </motion.div>

        <motion.h1
          className="text-white font-extrabold mb-6"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 4.8rem)', letterSpacing: '-0.04em', lineHeight: 1.1 }}
        >
          {['브랜드의', '이야기를'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {['함께', '써내려갑니다'].map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.54 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-3 ${i === 0 ? 'text-brand-yellow' : ''}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white/70 text-base md:text-lg font-medium mb-10 max-w-xl mx-auto leading-relaxed"
        >
          인플루언서 브랜딩부터 소상공인 교육,<br className="hidden md:block" />
          AI 콘텐츠 마케팅까지 — 함께 성장하는 브랜드 파트너
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.72 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow-dark transition-all duration-200 shadow-lg shadow-brand-yellow/20"
          >
            무료 상담 예약
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/70 text-white font-semibold hover:bg-white hover:text-brand-dark transition-all duration-200"
          >
            서비스 보기 →
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="1" width="18" height="28" rx="9" />
          <path d="M10 8v6" strokeLinecap="round" />
        </svg>
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
