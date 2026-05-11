'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'
import Link from 'next/link'

const anchorLinks = [
  { href: '#ad', label: '광고대행' },
  { href: '#branding', label: '인플루언서 브랜딩' },
  { href: '#education', label: '소상공인 교육' },
  { href: '#ai', label: 'AI 마케팅' },
]

function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden border-b border-brand-border">
      <Image
        src="/images/Gemini_Generated_Image_c2et12c2et12c2et.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center pointer-events-none"
        style={{ opacity: 0.3 }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow z-10" />

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-14 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold tracking-widest uppercase px-3 py-1 mb-5">
            서비스
          </span>
          <h1 className="text-brand-dark text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-5">
            우리가 제공하는<br />
            <span className="text-brand-yellow">전문 서비스</span>
          </h1>
          <p className="text-brand-gray text-base md:text-lg leading-relaxed mb-8 mx-auto text-center">
            광고대행부터 인플루언서 브랜딩, 소상공인 교육, AI 마케팅까지<br />
            아미레브가 브랜드의 성장을 함께합니다.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {anchorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 md:px-4 md:py-2 border border-brand-border text-brand-gray text-xs md:text-sm hover:border-brand-yellow hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const service01Checks = [
  'SNS 광고 기획 및 집행',
  '영상 콘텐츠 운영',
  '브랜드 채널 운영대행',
  '성과 리포트 제공',
]

function Service01Section() {
  return (
    <section id="ad" className="grid md:grid-cols-2 md:min-h-[560px]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative min-h-[240px] md:min-h-0 overflow-hidden"
      >
        <Image src="/images/gallery/photo-01.jpg" alt="광고대행 현장" fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-yellow flex items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16"
      >
        <div className="max-w-md">
          <span className="text-brand-dark/60 text-sm font-semibold tracking-widest lowercase">service 01</span>
          <h2 className="text-brand-dark font-extrabold mt-3 mb-5 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            광고대행 &<br />미디어 운영
          </h2>
          <p className="text-brand-dark/70 leading-relaxed mb-6">
            전략적인 SNS 광고와 미디어 운영으로 브랜드의 존재감을 키웁니다.
          </p>
          <ul className="space-y-2 mb-8">
            {service01Checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-brand-dark/80">
                <span className="text-brand-dark font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact"><Button variant="outline" className="border-white text-white font-bold hover:bg-white hover:text-brand-dark">문의하기</Button></Link>
        </div>
      </motion.div>
    </section>
  )
}

const platformIcons = [
  {
    label: 'Instagram',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: 'Blog',
    svg: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z"/>
      </svg>
    ),
  },
]

const service02Checks = [
  '채널 브랜딩 & 아이덴티티 구축',
  '숏폼 콘텐츠 전략 수립',
  '팔로워 유입 캠페인',
  '수익화 전략 컨설팅',
]

function Service02Section() {
  return (
    <section id="branding" className="grid md:grid-cols-2 md:min-h-[560px]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-dark flex items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16 order-2 md:order-1"
      >
        <div className="max-w-md">
          <span className="text-brand-yellow text-sm font-semibold tracking-widest lowercase">service 02</span>
          <h2 className="text-white font-extrabold mt-3 mb-5 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            인플루언서·유튜버<br />브랜딩
          </h2>

          <div className="flex gap-4 mb-6">
            {platformIcons.map(({ svg, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-200 text-white">
                  {svg}
                </div>
                <span className="text-xs text-white/60">{label}</span>
              </div>
            ))}
          </div>

          <ul className="space-y-2 mb-8">
            {service02Checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/80">
                <span className="text-brand-yellow font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact"><Button variant="outline">문의하기</Button></Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative min-h-[240px] md:min-h-0 overflow-hidden order-1 md:order-2"
      >
        <Image src="/images/gallery/photo-04.jpg" alt="인플루언서 브랜딩 현장" fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>
    </section>
  )
}

const businessIcons = [
  {
    label: '식당',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ),
  },
  {
    label: '카페',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
      </svg>
    ),
  },
  {
    label: '미용실',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.9 6.858l2.122 2.12-9.9 9.9-2.12-2.12 9.898-9.9zM6.5 5C5.12 5 4 6.12 4 7.5S5.12 10 6.5 10 9 8.88 9 7.5 7.88 5 6.5 5zm11 11c-1.38 0-2.5 1.12-2.5 2.5S16.12 21 17.5 21 20 19.88 20 18.5 18.88 16 17.5 16zm-5.4-4.5l2.12 2.12 3.18-3.18-2.12-2.12-3.18 3.18zM6.5 8C6.22 8 6 7.78 6 7.5S6.22 7 6.5 7 7 7.22 7 7.5 6.78 8 6.5 8z"/>
      </svg>
    ),
  },
  {
    label: '학원',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
  },
]

const recommendList = [
  'SNS를 시작하고 싶은 소상공인',
  '계정이 있지만 운영이 막막한 분',
  '매출과 연결되는 콘텐츠를 원하는 분',
]

const service03Checks = [
  'SNS 운영 기초 교육',
  '업종별 맞춤 콘텐츠 전략',
  '1:1 온·오프라인 컨설팅',
  '매출 연결 실전 워크샵',
]

function Service03Section() {
  return (
    <section id="education" className="grid md:grid-cols-2 md:min-h-[560px]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative min-h-[240px] md:min-h-0 overflow-hidden"
      >
        <Image src="/images/gallery/photo-02.jpg" alt="소상공인 교육 현장" fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-purple flex items-center px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-16"
      >
        <div className="max-w-md">
          <span className="text-white/60 text-sm font-semibold tracking-widest lowercase">service 03</span>
          <h2 className="text-white font-extrabold mt-3 mb-5 text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            소상공인<br />교육·컨설팅
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {businessIcons.map(({ svg, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-1.5 bg-white hover:bg-brand-yellow py-3 rounded-xl transition-all duration-200 cursor-pointer text-brand-dark"
              >
                {svg}
                <span className="text-xs text-brand-dark font-medium">{label}</span>
              </div>
            ))}
          </div>

          <ul className="space-y-2 mb-6">
            {service03Checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/80">
                <span className="text-white font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="border border-white/30 p-4 mb-6">
            <p className="text-white/80 text-sm font-semibold mb-2">이런 분께 추천합니다</p>
            <ul className="space-y-1">
              {recommendList.map((txt) => (
                <li key={txt} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">·</span>{txt}
                </li>
              ))}
            </ul>
          </div>

          <Link href="/contact"><Button variant="outline">문의하기</Button></Link>
        </div>
      </motion.div>
    </section>
  )
}

const aiTools = [
  { name: 'ChatGPT', desc: '콘텐츠 기획·작성' },
  { name: 'Midjourney', desc: 'AI 이미지 제작' },
  { name: 'Runway', desc: 'AI 영상 편집' },
  { name: 'Notion AI', desc: '전략 문서 정리' },
]

const aiServices = [
  'AI 콘텐츠 자동화',
  'AI 이미지·영상 제작',
  'AI 마케팅 컨설팅',
]

function AiSection() {
  return (
    <section id="ai" className="py-20 md:py-32 bg-[#1A1A1A] text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="text-white/50 text-sm font-semibold tracking-widest lowercase">service 04</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight"
        >
          AI 콘텐츠<br />마케팅
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 mb-16 text-lg"
        >
          최신 AI 툴을 활용해 콘텐츠 생산성을 극대화합니다.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 hover:bg-white/20 p-6 transition-all duration-300"
            >
              <div className="text-white font-bold mb-1">{tool.name}</div>
              <div className="text-white/50 text-sm">{tool.desc}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
          {aiServices.map((svc, i) => (
            <motion.div
              key={svc}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex-1 border-l-2 border-brand-yellow pl-4 text-left"
            >
              <p className="text-white font-semibold">{svc}</p>
              <p className="text-white/50 text-sm mt-1">2026 출시 예정</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const processSteps = [
  {
    num: '01', label: '상담 요청', tip: '빠른 온라인 상담 신청으로 시작합니다',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <line x1="9" y1="10" x2="15" y2="10"/><line x1="12" y1="7" x2="12" y2="13"/>
      </svg>
    ),
  },
  {
    num: '02', label: '니즈 파악', tip: '업종·목표를 심층 분석합니다',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
  {
    num: '03', label: '전략 수립', tip: '맞춤 마케팅 플랜을 설계합니다',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
        <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    num: '04', label: '콘텐츠 제작', tip: '전문 크리에이터가 제작합니다',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
  },
  {
    num: '05', label: '배포·운영', tip: '플랫폼 최적화로 운영합니다',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
        <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
      </svg>
    ),
  },
  {
    num: '06', label: '성과 리포트', tip: 'KPI 기반으로 성과를 분석합니다',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-dark">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
]

function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="진행 프로세스" subtitle="체계적인 6단계로 성과를 만들어 드립니다" />

        <div className="hidden md:flex items-center justify-between mt-12 relative">
          {processSteps.map((step, i) => (
            <div key={step.num} className="flex items-center flex-1">
              <div
                className="relative flex flex-col items-center cursor-pointer"
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 bg-brand-dark text-white flex items-center justify-center font-bold text-lg"
                >
                  {step.num}
                </motion.div>
                <span className="mt-3 text-sm font-semibold text-brand-dark">{step.label}</span>

                <AnimatePresence>
                  {hoveredStep === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full mb-3 bg-brand-dark text-white text-xs px-3 py-1.5 whitespace-nowrap shadow-lg"
                    >
                      {step.tip}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brand-dark" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {i < processSteps.length - 1 && (
                <div className="flex-1 h-0.5 bg-brand-border mx-3 relative top-[-14px]">
                  <span className="absolute right-0 -top-2 text-brand-gray text-xs">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="md:hidden mt-10 space-y-0">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="relative flex gap-4 p-5 bg-white border border-brand-border">
                {/* 왼쪽 번호 + 아이콘 */}
                <div className="flex flex-col items-center gap-2 shrink-0 w-14">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg bg-brand-yellow">
                    {step.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-brand-gray">
                    {step.num}
                  </span>
                </div>

                {/* 오른쪽 텍스트 */}
                <div className="flex-1 pt-1.5">
                  <p className="font-extrabold text-base tracking-tight leading-tight mb-1 text-brand-dark">
                    {step.label}
                  </p>
                  <p className="text-sm leading-relaxed text-brand-gray">
                    {step.tip}
                  </p>
                </div>
              </div>

              {/* 화살표 커넥터 */}
              {i < processSteps.length - 1 && (
                <div className="flex items-center justify-center h-6 bg-brand-light">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L7 10M7 10L3 6.5M7 10L11 6.5" stroke="#1A1A1A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesClient() {
  return (
    <main className="pt-16">
      <HeroSection />
      <Service01Section />
      <Service02Section />
      <Service03Section />
      <AiSection />
      <ProcessSection />
    </main>
  )
}
