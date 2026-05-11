'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutClient() {
  return (
    <main className="pt-16">

      {/* ── 회사소개 배너 ── */}
      <section className="relative overflow-hidden bg-white pt-12 pb-8 border-b border-brand-border">
        <Image
          src="/images/pexels-junsu-18839145.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center pointer-events-none"
          style={{ opacity: 0.3 }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow z-10" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-brand-yellow text-xs tracking-[0.35em] uppercase font-bold mb-3">ABOUT US</p>
            <h1 className="text-brand-dark text-4xl md:text-5xl font-extrabold tracking-tight mb-4">회사소개</h1>
            <div className="w-10 h-0.5 bg-brand-yellow mb-4" />
            <p className="text-brand-gray text-sm md:text-base leading-relaxed max-w-lg">
              브랜드의 이야기를 세상에 전하는 마케팅 에이전시, 아미레브입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CEO 인사말 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: CEO Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light max-w-sm mx-auto md:mx-0"
            >
              <Image
                src="/images/about/about-hero.jpg"
                alt="반경화 대표"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width:768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-extrabold text-lg leading-tight">반경화</p>
                <p className="text-white/70 text-sm mt-0.5">대표 · 아미레브</p>
              </div>
            </motion.div>

            {/* Right: CEO Message */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <p className="text-brand-yellow text-xs tracking-[0.3em] uppercase font-bold mb-3">
                CEO MESSAGE
              </p>
              <h2 className="text-brand-dark text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                인사말
              </h2>
              <div className="w-10 h-0.5 bg-brand-yellow mb-8" />

              <p className="font-bold text-base leading-relaxed mb-6">
                <mark className="bg-brand-yellow text-brand-dark px-1">"브랜드의 이야기를 세상에 전하는 것이 아미레브의 사명입니다."</mark>
              </p>

              <div className="space-y-4 text-brand-gray text-sm leading-relaxed">
                <p>
                  소상공인부터 인플루언서까지, 모든 브랜드에는 고유한 스토리가 있습니다. 그 이야기를 올바르게 전달할 때 비로소 브랜드가 고객의 마음에 자리잡게 됩니다.
                </p>
                <p>
                  아미레브는 2024년 창립 이래 광고대행, 유튜브 운영대행, 소상공인 SNS 교육 등 다양한 분야에서 브랜드의 성장을 함께해왔습니다.
                </p>
                <p>
                  앞으로도 AI 마케팅 서비스를 비롯한 차세대 솔루션으로 더 많은 분들에게 건강한 브랜드 성장을 전달하겠습니다.
                </p>
              </div>

              <p className="mt-8 text-brand-dark font-bold text-sm">— 대표 반경화</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Mission / Vision ── */}
      <section className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand-dark text-white px-6 md:px-12 py-14 md:py-20 flex flex-col justify-center"
        >
          <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">Mission</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">브랜드의 이야기를<br />세상에 전합니다</h3>
          <p className="text-white/70 leading-relaxed">
            소상공인부터 인플루언서까지, 모든 브랜드가 자신의 진정한 이야기를 세상에 전달할 수 있도록 최선을 다합니다.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-brand-yellow text-brand-dark px-6 md:px-12 py-14 md:py-20 flex flex-col justify-center"
        >
          <span className="text-brand-dark/60 text-sm font-semibold tracking-widest uppercase mb-4">Vision</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight">AI로 진화하는<br />마케팅의 미래</h3>
          <p className="text-brand-dark/70 leading-relaxed">
            2026년, AI와 함께 더 많은 브랜드가 자신만의 콘텐츠를 가질 수 있는 세상을 만들어 갑니다.
          </p>
        </motion.div>
      </section>

      {/* ── 연혁 ── */}
      <TimelineSection />

    </main>
  )
}

type Milestone = {
  year: string
  text: string
  sub: string
  description: string
  tags: string[]
  isNew: boolean
}

const milestones: Milestone[] = [
  {
    year: '2024',
    text: '아미레브 창립',
    sub: '유튜브 & SNS 채널 운영대행 시작',
    description: '브랜드의 이야기를 함께 써내려가는 마케팅 파트너를 목표로 설립. 유튜브 운영대행을 시작으로 SNS 브랜딩 서비스를 본격화했습니다.',
    tags: ['유튜브 대행', 'SNS 운영', '브랜드 전략'],
    isNew: false,
  },
  {
    year: '2025',
    text: '소상공인 & 기업 SNS 마케팅',
    sub: '브랜드 마케팅 대행 및 컨설팅 확장',
    description: '소상공인부터 중소기업까지 서비스 범위를 확장하며 클라이언트를 늘렸습니다. 현장 검증된 콘텐츠 전략으로 브랜드 온라인 성장을 이끌었습니다.',
    tags: ['소상공인 교육', '기업 컨설팅', '콘텐츠 전략'],
    isNew: false,
  },
  {
    year: '2026',
    text: 'AI 콘텐츠 마케팅 서비스 론칭',
    sub: '차세대 AI 마케팅 서비스',
    description: 'AI 카피라이팅·이미지 생성·키워드 분석을 마케팅에 통합한 차세대 서비스 론칭. 인간의 창의성과 AI의 정밀함으로 콘텐츠 제작 속도와 퀄리티를 동시에 높입니다.',
    tags: ['AI 마케팅', '콘텐츠 자동화', '키워드 분석'],
    isNew: true,
  },
]

type CardTheme = {
  cardStyle: React.CSSProperties
  yearStyle: React.CSSProperties
  titleStyle: React.CSSProperties
  subStyle: React.CSSProperties
  descStyle: React.CSSProperties
  tagStyle: React.CSSProperties
  newBadgeStyle?: React.CSSProperties
  dot: React.CSSProperties
}

const cardThemes: Record<string, CardTheme> = {
  '2024': {
    cardStyle: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '14px 22px',
    },
    yearStyle: {
      fontSize: '30px',
      fontWeight: 900,
      letterSpacing: '-1px',
      color: '#FEE500',
      marginBottom: '4px',
      lineHeight: 1,
    },
    titleStyle: { fontSize: '19px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.3 },
    subStyle: { fontSize: '15px', fontWeight: 500, color: '#777', marginTop: '3px' },
    descStyle: { fontSize: '15px', fontWeight: 500, color: '#555', lineHeight: 1.55, marginTop: '6px' },
    tagStyle: {
      fontSize: '14px',
      fontWeight: 600,
      borderRadius: '20px',
      padding: '4px 12px',
      color: '#92660a',
      border: '1px solid rgba(254,229,0,0.5)',
      background: 'rgba(254,229,0,0.12)',
    },
    dot: { background: '#FEE500', border: '3px solid #111' },
  },
  '2025': {
    cardStyle: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '14px 22px',
    },
    yearStyle: {
      fontSize: '30px',
      fontWeight: 900,
      letterSpacing: '-1px',
      color: '#FEE500',
      marginBottom: '4px',
      lineHeight: 1,
    },
    titleStyle: { fontSize: '19px', fontWeight: 800, color: '#1a1a1a', lineHeight: 1.3 },
    subStyle: { fontSize: '15px', fontWeight: 500, color: '#777', marginTop: '3px' },
    descStyle: { fontSize: '15px', fontWeight: 500, color: '#555', lineHeight: 1.55, marginTop: '6px' },
    tagStyle: {
      fontSize: '14px',
      fontWeight: 600,
      borderRadius: '20px',
      padding: '4px 12px',
      color: '#92660a',
      border: '1px solid rgba(254,229,0,0.5)',
      background: 'rgba(254,229,0,0.12)',
    },
    dot: { background: '#FEE500', border: '3px solid #111' },
  },
  '2026': {
    cardStyle: {
      background: '#1a1a1a',
      borderRadius: '12px',
      padding: '14px 22px',
    },
    yearStyle: {
      fontSize: '30px',
      fontWeight: 900,
      letterSpacing: '-1px',
      color: '#FEE500',
      marginBottom: '4px',
      lineHeight: 1,
    },
    titleStyle: { fontSize: '19px', fontWeight: 800, color: '#ffffff', lineHeight: 1.3 },
    subStyle: { fontSize: '15px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginTop: '3px' },
    descStyle: {
      fontSize: '15px',
      fontWeight: 500,
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.55,
      marginTop: '6px',
    },
    tagStyle: {
      fontSize: '14px',
      fontWeight: 600,
      borderRadius: '20px',
      padding: '4px 12px',
      color: '#FEE500',
      border: '1px solid rgba(254,229,0,0.4)',
      background: 'rgba(254,229,0,0.10)',
    },
    newBadgeStyle: {
      background: '#FEE500',
      color: '#1a1a1a',
      fontSize: '13px',
      fontWeight: 800,
      padding: '2px 8px',
      borderRadius: '4px',
    },
    dot: { background: '#FEE500', border: '3px solid #111' },
  },
}

const cardDelays = [0.05, 0.15, 0.25]
const futureDelay = 0.4

function TimelineSection() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden" style={{ background: '#FAFAF7' }}>
      {/* 워터마크 배경 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          style={{
            position: 'absolute',
            bottom: '-10px',
            right: '-8px',
            fontSize: 'clamp(80px, 12vw, 130px)',
            fontWeight: 900,
            letterSpacing: '-5px',
            color: 'rgba(0,0,0,0.03)',
            lineHeight: 1,
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          AMIE
        </span>

        {/* 링 레이어드 (우측 상단) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.05, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '60px solid rgba(245,184,0,0.18)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '-65px',
            right: '-65px',
            width: '270px',
            height: '270px',
            borderRadius: '50%',
            border: '2px solid rgba(245,184,0,0.35)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '-28px',
            right: '-28px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '1.5px solid rgba(245,184,0,0.45)',
          }}
        />

        {/* 링 레이어드 (좌측 하단) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: '-100px',
            left: '-100px',
            width: '340px',
            height: '340px',
            borderRadius: '50%',
            border: '50px solid rgba(0,0,0,0.04)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: '-55px',
            left: '-55px',
            width: '210px',
            height: '210px',
            borderRadius: '50%',
            border: '1.5px solid rgba(0,0,0,0.1)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '-20px',
            width: '110px',
            height: '110px',
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        />

        {/* 링 레이어드 (좌측 중앙) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '38%',
            left: '-110px',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            border: '40px solid rgba(245,184,0,0.10)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '42%',
            left: '-70px',
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            border: '1.5px solid rgba(245,184,0,0.30)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '46%',
            left: '-30px',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '1px solid rgba(245,184,0,0.40)',
          }}
        />

        {/* 링 레이어드 (우측 중앙) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '62%',
            right: '-90px',
            width: '230px',
            height: '230px',
            borderRadius: '50%',
            border: '36px solid rgba(0,0,0,0.035)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '66%',
            right: '-50px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '1.5px solid rgba(0,0,0,0.09)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '70%',
            right: '-15px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '1px solid rgba(245,184,0,0.35)',
          }}
        />

        {/* 링 레이어드 (중앙 상단) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '14%',
            left: '46%',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            border: '1.5px solid rgba(245,184,0,0.18)',
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          style={{
            position: 'absolute',
            top: '17%',
            left: '49%',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.07)',
          }}
        />

        {/* 파티클 도트 */}
        <div className="animate-pulse" style={{ position: 'absolute', top: '12%', left: '8%', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(254,229,0,0.8)', boxShadow: '0 0 12px rgba(254,229,0,0.6)' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '22%', right: '12%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(254,229,0,0.5)', boxShadow: '0 0 10px rgba(254,229,0,0.4)', animationDelay: '0.5s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '38%', left: '6%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(245,184,0,0.55)', boxShadow: '0 0 10px rgba(245,184,0,0.4)', animationDelay: '1s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '50%', right: '8%', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(245,184,0,0.55)', boxShadow: '0 0 12px rgba(245,184,0,0.4)', animationDelay: '0.3s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '65%', left: '16%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(254,229,0,0.4)', boxShadow: '0 0 10px rgba(254,229,0,0.3)', animationDelay: '1.2s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '78%', right: '18%', width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(254,229,0,0.45)', boxShadow: '0 0 10px rgba(254,229,0,0.35)', animationDelay: '0.7s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '30%', left: '38%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(245,184,0,0.45)', boxShadow: '0 0 8px rgba(245,184,0,0.35)', animationDelay: '1.5s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '55%', right: '32%', width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(254,229,0,0.3)', boxShadow: '0 0 8px rgba(254,229,0,0.25)', animationDelay: '0.9s' }} />
        <div className="animate-pulse" style={{ position: 'absolute', top: '88%', left: '45%', width: '5px', height: '5px', borderRadius: '50%', background: 'rgba(245,184,0,0.40)', boxShadow: '0 0 10px rgba(245,184,0,0.3)', animationDelay: '1.8s' }} />
        <span
          style={{
            position: 'absolute',
            top: '-6px',
            left: '-6px',
            fontSize: 'clamp(60px, 9vw, 100px)',
            fontWeight: 900,
            letterSpacing: '-4px',
            color: 'rgba(245,184,0,0.12)',
            lineHeight: 1,
            userSelect: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          REVE
        </span>
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative" style={{ zIndex: 1 }}>
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-12"
        >
          <div
            style={{
              fontSize: '16px',
              color: 'rgba(0,0,0,0.5)',
              letterSpacing: '0.22em',
              marginBottom: '8px',
              fontWeight: 700,
            }}
          >
            OUR JOURNEY
          </div>
          <h2 style={{ color: '#1a1a1a', fontSize: '44px', fontWeight: 900, lineHeight: 1.2 }}>
            아미레브 연혁
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.55)', fontSize: '18px', marginTop: '6px' }}>
            작은 시작에서 큰 꿈으로
          </p>
          <div style={{ width: '24px', height: '2px', background: '#FEE500', marginTop: '10px' }} />
        </motion.div>

        <div className="relative mt-12">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2"
            style={{ background: 'rgba(245,184,0,0.55)', width: '1px' }}
          />
          <div
            className="md:hidden absolute left-5 top-0 bottom-0"
            style={{ background: 'rgba(245,184,0,0.55)', width: '1px' }}
          />

          <div className="space-y-6">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              const theme = cardThemes[m.year]

              const card = (
                <div className="cursor-default w-full md:w-auto md:max-w-xl relative">
                  <div style={theme.cardStyle}>
                    <div style={theme.yearStyle}>{m.year}</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span style={theme.titleStyle}>{m.text}</span>
                      {m.isNew && theme.newBadgeStyle && <span style={theme.newBadgeStyle}>NEW</span>}
                    </div>
                    {m.sub && <div style={theme.subStyle}>{m.sub}</div>}
                    <p style={theme.descStyle}>{m.description}</p>
                    <div className="flex flex-wrap" style={{ marginTop: '5px' }}>
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            ...theme.tagStyle,
                            marginRight: '5px',
                            marginTop: '5px',
                            display: 'inline-block',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )

              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.65, ease: 'easeOut', delay: cardDelays[i] ?? 0.05 }}
                  className="relative"
                >
                  <div className="hidden md:grid md:grid-cols-2 items-center">
                    <div className="flex justify-end pr-8">{isLeft && card}</div>
                    <div className="flex justify-start pl-8">{!isLeft && card}</div>
                  </div>

                  <div className="md:hidden pl-14">{card}</div>

                  <div
                    className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full z-10"
                    style={theme.dot}
                  />
                </motion.div>
              )
            })}

            <FutureCard index={milestones.length} />
          </div>
        </div>
      </div>
    </section>
  )
}

function FutureCard({ index }: { index: number }) {
  const isLeft = index % 2 === 0
  const futureTags = ['교육 플랫폼', '온라인 강의', '브랜드 성장']

  const card = (
    <div className="cursor-default w-full md:w-auto md:max-w-xl relative">
      <div
        style={{
          background: 'rgba(0,0,0,0.03)',
          border: '1.5px dashed rgba(0,0,0,0.18)',
          borderRadius: '12px',
          padding: '14px 22px',
        }}
      >
      <div
        style={{
          fontSize: '13px',
          color: 'rgba(0,0,0,0.55)',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          marginBottom: '5px',
          fontWeight: 800,
        }}
      >
        COMING SOON
      </div>
      <div
        style={{
          fontSize: '30px',
          fontWeight: 900,
          color: '#1a1a1a',
          letterSpacing: '-1px',
          lineHeight: 1,
          marginBottom: '6px',
        }}
      >
        NEXT
      </div>
      <div
        style={{
          fontSize: '19px',
          fontWeight: 900,
          color: '#1a1a1a',
          lineHeight: 1.3,
        }}
      >
        교육 플랫폼으로 확장
      </div>
      <p
        style={{
          fontSize: '15px',
          fontWeight: 600,
          color: 'rgba(0,0,0,0.65)',
          lineHeight: 1.55,
          marginTop: '5px',
        }}
      >
        현장 노하우를 체계적인 커리큘럼으로 담은 온라인 교육 플랫폼을 준비 중입니다.
      </p>
      <div className="flex flex-wrap" style={{ marginTop: '5px' }}>
        {futureTags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '14px',
              fontWeight: 700,
              padding: '4px 12px',
              color: 'rgba(0,0,0,0.7)',
              border: '1px dashed rgba(0,0,0,0.3)',
              background: 'transparent',
              borderRadius: '20px',
              marginRight: '5px',
              marginTop: '5px',
              display: 'inline-block',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <p
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: 'rgba(0,0,0,0.55)',
          marginTop: '8px',
        }}
      >
        아미레브의 다음 챕터
      </p>
      </div>
    </div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, ease: 'easeOut', delay: futureDelay }}
      className="relative"
    >
      <div className="hidden md:grid md:grid-cols-2 items-center">
        <div className="flex justify-end pr-8">{isLeft && card}</div>
        <div className="flex justify-start pl-8">{!isLeft && card}</div>
      </div>

      <div className="md:hidden pl-14">{card}</div>

      <div
        className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full z-10"
        style={{ background: 'transparent', border: '2px dashed rgba(0,0,0,0.3)' }}
      />
    </motion.div>
  )
}
