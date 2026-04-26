'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
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
    <section className="relative bg-brand-dark overflow-hidden">
      <div className="h-1.5 w-full bg-brand-yellow" />

      <div className="container mx-auto px-6 pt-28 pb-14 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-brand-yellow text-brand-dark text-xs font-bold tracking-widest uppercase px-3 py-1 mb-5">
            서비스
          </span>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-5">
            우리가 제공하는<br />
            <span className="text-brand-yellow">전문 서비스</span>
          </h1>
          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 mx-auto text-center">
            광고대행부터 인플루언서 브랜딩, 소상공인 교육, AI 마케팅까지<br />
            아미레브가 브랜드의 성장을 함께합니다.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            {anchorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 border border-white/20 text-white/70 text-sm hover:border-brand-yellow hover:text-brand-yellow transition-colors"
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
        className="relative min-h-[320px] md:min-h-0 overflow-hidden"
      >
        <Image src="/images/gallery/photo-01.jpg" alt="광고대행 현장" fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-yellow flex items-center px-6 py-10 md:px-10 md:py-16"
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
        className="bg-brand-dark flex items-center px-6 py-10 md:px-10 md:py-16 order-2 md:order-1"
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
        className="relative min-h-[320px] md:min-h-0 overflow-hidden order-1 md:order-2"
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
        className="relative min-h-[320px] md:min-h-0 overflow-hidden"
      >
        <Image src="/images/gallery/photo-02.jpg" alt="소상공인 교육 현장" fill className="object-cover" sizes="50vw" />
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-purple flex items-center px-6 py-10 md:px-10 md:py-16"
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
    <section id="ai" className="py-20 md:py-32 bg-gradient-to-r from-[#1A1A1A] via-[#2D1B69] to-[#1A1A1A] text-center">
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
  { num: '01', label: '상담 요청', tip: '빠른 온라인 상담 신청' },
  { num: '02', label: '니즈 파악', tip: '업종·목표 심층 분석' },
  { num: '03', label: '전략 수립', tip: '맞춤 마케팅 플랜 설계' },
  { num: '04', label: '콘텐츠 제작', tip: '전문 크리에이터 제작' },
  { num: '05', label: '배포·운영', tip: '플랫폼 최적화 운영' },
  { num: '06', label: '성과 리포트', tip: 'KPI 기반 성과 분석' },
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

        <div className="md:hidden space-y-6 mt-12 relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-brand-border" />
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-5 pl-2"
            >
              <div className="w-10 h-10 bg-brand-dark text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
                {step.num}
              </div>
              <span className="font-semibold text-brand-dark">{step.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const faqs = [
  {
    q: '계약 기간은 최소 얼마인가요?',
    a: '기본 계약 기간은 3개월입니다. 단기 프로젝트성 협업도 가능하니 상담을 통해 맞춤 일정을 협의드립니다.',
  },
  {
    q: '어떤 업종이든 가능한가요?',
    a: '식음료, 뷰티, 교육, 서비스업 등 다양한 업종의 경험이 있습니다. 업종에 따라 최적화된 전략을 제안드립니다.',
  },
  {
    q: '콘텐츠 방향은 누가 정하나요?',
    a: '초기 전략 수립 단계에서 클라이언트와 충분한 협의를 통해 브랜드 방향성을 함께 결정합니다. 이후 아미레브 팀이 실행을 담당합니다.',
  },
  {
    q: 'AI 서비스는 어떤 방식으로 진행되나요?',
    a: 'ChatGPT, Midjourney, Runway 등 최신 AI 툴을 활용하여 콘텐츠를 제작합니다. AI가 생성한 결과물을 전문가가 검토·편집하는 방식으로 품질을 보장합니다.',
  },
  {
    q: '소상공인 교육은 오프라인인가요?',
    a: '온라인과 오프라인 모두 진행합니다. 지역에 따라 방문 교육도 가능하며, 온라인 1:1 줌(Zoom) 교육도 운영 중입니다.',
  },
]

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-brand-border overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-brand-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
      >
        <span className="font-semibold text-brand-dark">{faq.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={20} className="text-brand-gray shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 bg-brand-light border-t border-brand-border">
              <p className="text-brand-gray leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FaqSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle title="자주 묻는 질문" subtitle="궁금한 점을 해결해 드립니다" />
        <div className="space-y-3 mt-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ServicesClient() {
  return (
    <main>
      <HeroSection />
      <Service01Section />
      <Service02Section />
      <Service03Section />
      <AiSection />
      <ProcessSection />
      <FaqSection />
    </main>
  )
}
