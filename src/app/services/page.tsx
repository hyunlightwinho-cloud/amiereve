'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Aperture, Play, Globe, Video, UtensilsCrossed, Coffee, Scissors, GraduationCap, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionTitle from '@/components/ui/SectionTitle'

/* ─────────────────────────────────────────────
   Section 1: 광고대행 & 미디어 운영
───────────────────────────────────────────── */
const service01Checks = [
  'SNS 광고 기획 및 집행',
  '영상 콘텐츠 운영',
  '브랜드 채널 이상화',
  '성과 리포트 제공',
]

function Service01Section() {
  return (
    <section className="grid md:grid-cols-2 min-h-[560px]">
      {/* 이미지 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-200 min-h-[320px] md:min-h-0"
      />

      {/* 카드 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-dark flex items-center px-10 py-16"
      >
        <div className="max-w-md">
          <span className="text-brand-yellow text-sm font-semibold tracking-widest lowercase">service 01</span>
          <h2 className="text-white font-bold mt-3 mb-5" style={{ fontSize: '2rem', lineHeight: 1.25 }}>
            광고대행 &<br />미디어 운영
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            전략적인 SNS 광고와 미디어 운영으로 브랜드의 존재감을 키웁니다.<br />
            데이터 기반의 성과 최적화를 통해 실질적인 ROI를 달성합니다.
          </p>
          <ul className="space-y-2 mb-8">
            {service01Checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/80">
                <span className="text-brand-yellow font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Button variant="outline">문의하기</Button>
        </div>
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 2: 인플루언서·유튜버 브랜딩
───────────────────────────────────────────── */
const platformIcons = [
  { Icon: Aperture, label: 'Instagram' },
  { Icon: Play, label: 'YouTube' },
  { Icon: Globe, label: 'Blog' },
  { Icon: Video, label: 'TikTok' },
]

const service02Checks = [
  '채널 브랜딩 & 아이덴티티 구축',
  '숏폼 콘텐츠 전략 수립',
  '팔로워 유입 캠페인',
  '수익화 전략 컨설팅',
]

function Service02Section() {
  return (
    <section className="grid md:grid-cols-2 min-h-[560px]">
      {/* 카드 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-yellow flex items-center px-10 py-16 order-2 md:order-1"
      >
        <div className="max-w-md">
          <span className="text-brand-dark/60 text-sm font-semibold tracking-widest lowercase">service 02</span>
          <h2 className="text-brand-dark font-bold mt-3 mb-5" style={{ fontSize: '2rem', lineHeight: 1.25 }}>
            인플루언서·유튜버<br />브랜딩
          </h2>

          {/* 플랫폼 아이콘 */}
          <div className="flex gap-4 mb-6">
            {platformIcons.map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-xl bg-brand-dark/10 flex items-center justify-center hover:bg-brand-dark/20 transition-colors">
                  <Icon size={22} className="text-brand-dark" />
                </div>
                <span className="text-xs text-brand-dark/60">{label}</span>
              </div>
            ))}
          </div>

          {/* 뱃지 */}
          <div className="inline-block bg-brand-dark text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
            평균 팔로워 +340% 성장
          </div>

          <ul className="space-y-2 mb-8">
            {service02Checks.map((item) => (
              <li key={item} className="flex items-center gap-2 text-brand-dark/80">
                <span className="text-brand-dark font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Button variant="primary">문의하기</Button>
        </div>
      </motion.div>

      {/* 이미지 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-200 min-h-[320px] md:min-h-0 order-1 md:order-2"
      />
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 3: 소상공인 교육·컨설팅
───────────────────────────────────────────── */
const businessIcons = [
  { Icon: UtensilsCrossed, label: '식당' },
  { Icon: Coffee, label: '카페' },
  { Icon: Scissors, label: '미용실' },
  { Icon: GraduationCap, label: '학원' },
]

const recommendList = [
  'SNS를 시작하고 싶은 소상공인',
  '계정이 있지만 이상이 막막한 분',
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
    <section className="grid md:grid-cols-2 min-h-[560px]">
      {/* 이미지 */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-200 min-h-[320px] md:min-h-0"
      />

      {/* 카드 */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-brand-green flex items-center px-10 py-16"
      >
        <div className="max-w-md">
          <span className="text-white/60 text-sm font-semibold tracking-widest lowercase">service 03</span>
          <h2 className="text-white font-bold mt-3 mb-5" style={{ fontSize: '2rem', lineHeight: 1.25 }}>
            소상공인<br />교육·컨설팅
          </h2>

          {/* 2x2 아이콘 그리드 */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            {businessIcons.map(({ Icon, label }) => (
              <div
                key={label}
                className="group flex flex-col items-center gap-1.5 bg-white hover:bg-brand-yellow rounded-xl py-3 transition-colors cursor-pointer"
              >
                <Icon size={22} className="text-brand-dark" />
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

          {/* 추천 박스 */}
          <div className="border border-white/30 rounded-xl p-4 mb-6">
            <p className="text-white/80 text-sm font-semibold mb-2">이런 분께 추천합니다</p>
            <ul className="space-y-1">
              {recommendList.map((txt) => (
                <li key={txt} className="text-white/70 text-sm flex items-start gap-2">
                  <span className="mt-0.5 shrink-0">·</span>{txt}
                </li>
              ))}
            </ul>
          </div>

          <Button variant="outline">문의하기</Button>
        </div>
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 4: AI 마케팅 서비스 (2026)
───────────────────────────────────────────── */
const aiTools = [
  { name: 'ChatGPT', desc: '콘텐츠 자동 생성' },
  { name: 'Midjourney', desc: 'AI 이미지 제작' },
  { name: 'Runway', desc: 'AI 영상 편집' },
  { name: 'Notion AI', desc: '전략 문서 자동화' },
]

const aiServices = [
  'AI 콘텐츠 자동화',
  'AI 이미지·영상 제작',
  'AI 마케팅 컨설팅',
]

function AiSection() {
  return (
    <section className="py-32 bg-gradient-to-r from-[#1A1A1A] via-[#2D1B69] to-[#1A1A1A] text-center">
      <div className="container mx-auto px-6">
        {/* 뱃지 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-brand-purple text-white text-sm font-bold px-5 py-2 rounded-full mb-8 animate-pulse-ring"
        >
          ✦ NEW 2026
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white text-4xl md:text-5xl font-bold mb-4"
        >
          AI와 함께하는<br />마케팅의 미래
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

        {/* AI 툴 카드 2x2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(108,63,197,0.5)] rounded-xl p-6 transition-all duration-300 cursor-pointer"
            >
              <div className="text-white font-bold mb-1">{tool.name}</div>
              <div className="text-white/50 text-sm">{tool.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* AI 서비스 목록 */}
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

/* ─────────────────────────────────────────────
   Section 5: 진행 프로세스
───────────────────────────────────────────── */
const processSteps = [
  { num: '01', label: '상담 요청' },
  { num: '02', label: '니즈 파악' },
  { num: '03', label: '전략 수립' },
  { num: '04', label: '콘텐츠 제작' },
  { num: '05', label: '배포·운영' },
  { num: '06', label: '성과 리포트' },
]

function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const tooltips: Record<string, string> = {
    '01': '빠른 온라인 상담 신청',
    '02': '업종·목표 심층 분석',
    '03': '맞춤 마케팅 플랜 설계',
    '04': '전문 크리에이터 제작',
    '05': '플랫폼 최적화 운영',
    '06': 'KPI 기반 성과 분석',
  }

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <SectionTitle title="진행 프로세스" subtitle="체계적인 6단계로 성과를 만들어 드립니다" />

        {/* 가로 타임라인 (데스크탑) */}
        <div className="hidden md:flex items-center justify-between mt-12 relative">
          {processSteps.map((step, i) => (
            <div key={step.num} className="flex items-center flex-1">
              <div
                className="relative flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-lg relative"
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
                      className="absolute bottom-full mb-3 bg-brand-dark text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg"
                    >
                      {tooltips[step.num]}
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

        {/* 세로 타임라인 (모바일) */}
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
              <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
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

/* ─────────────────────────────────────────────
   Section 6: FAQ 아코디언
───────────────────────────────────────────── */
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
  {
    q: '성과가 없으면 어떻게 하나요?',
    a: '계약 기간 내 목표 KPI 달성을 위해 지속적으로 전략을 조정합니다. 성과 리포트를 매월 제공하며, 미달 시 추가 서비스를 제공하는 조항을 계약에 포함할 수 있습니다.',
  },
]

function FaqItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((v) => !v)
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      toggle()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-brand-border rounded-xl overflow-hidden"
    >
      <button
        onClick={toggle}
        onKeyDown={handleKeyDown}
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

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <main>
      <Service01Section />
      <Service02Section />
      <Service03Section />
      <AiSection />
      <ProcessSection />
      <FaqSection />
    </main>
  )
}
