'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ExternalLink, Users, PlaySquare, TrendingUp, ArrowRight, Clock } from 'lucide-react'

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

export default function CasesClient() {
  return (
    <main className="pt-16">

      {/* ── HERO ── */}
      <section className="relative bg-white overflow-hidden border-b border-brand-border">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-24 pb-20 md:pt-32 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-brand-yellow text-xs tracking-[0.3em] uppercase font-bold mb-8"
          >
            Cases
          </motion.p>

          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-end">
            {/* Left: headline */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1 className="text-brand-dark text-5xl sm:text-6xl md:text-[5rem] font-extrabold leading-[1.05] tracking-tight mb-6">
                고객과<br />함께 만든<br />
                <span className="relative inline-block">
                  결과
                  <span className="absolute left-0 bottom-1 w-full h-3 bg-brand-yellow/30 -z-10" />
                </span>
              </h1>
              <p className="text-brand-gray text-lg leading-relaxed max-w-sm">
                실제 협업을 통해 검증된 성장 스토리.<br />숫자로 증명합니다.
              </p>
            </motion.div>

            {/* Right: stat table */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="border border-brand-border divide-y divide-brand-border"
            >
              {[
                { label: '달성 구독자 수', value: 2170, suffix: '명+' },
                { label: '제작 완료 영상', value: 144, suffix: '개+' },
                { label: '운영 중인 채널', value: 1, suffix: '개' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="flex items-center justify-between px-7 py-6 group hover:bg-brand-light transition-colors duration-200"
                >
                  <span className="text-brand-gray text-sm font-medium">{stat.label}</span>
                  <span className="text-brand-dark text-3xl md:text-4xl font-extrabold tabular-nums">
                    <CountUp target={stat.value} /><span className="text-brand-yellow">{stat.suffix}</span>
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FEATURED CASE ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-14"
          >
            <span className="w-8 h-0.5 bg-brand-yellow" />
            <span className="text-brand-gray text-xs font-bold tracking-[0.2em] uppercase">Featured Case</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block bg-brand-yellow text-brand-dark text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5 rounded-full mb-6">
                인플루언서 브랜딩
              </span>
              <h2 className="text-brand-dark text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                이미나 약사
              </h2>
              <p className="text-brand-gray text-sm font-medium mb-6">@yak_up_mina · 운영 진행 중</p>
              <div className="w-12 h-1 bg-brand-yellow mb-7" />
              <p className="text-brand-gray leading-relaxed text-base mb-8">
                16년 차 전문 약사이자 강사로,{' '}
                <strong className="text-brand-dark">약사 가르치는 1타강사</strong> 채널의
                콘텐츠 기획부터 촬영 연출·편집·업로드까지 전 과정을 운영대행하고 있습니다.
              </p>

              <div className="flex flex-wrap gap-2 mb-10">
                {['유튜브 운영대행', '콘텐츠 기획', '채널 브랜딩', '인플루언서 전략'].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold text-brand-dark border border-brand-border px-3 py-1.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <motion.a
                href="https://www.youtube.com/@yak_up_mina"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-6 py-3.5 rounded-xl hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200"
              >
                유튜브 채널 보기 <ExternalLink size={15} />
              </motion.a>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <div className="bg-gradient-to-br from-[#1a5c35] to-[#0a2e1a] rounded-2xl p-8 text-center">
                <p className="text-white/40 text-xs tracking-widest uppercase mb-2">약사 가르치는 1타강사</p>
                <h3 className="text-white text-3xl font-extrabold mb-1">이미나 약사</h3>
                <p className="text-white/40 text-sm mb-5">@yak_up_mina</p>
                <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/30 px-4 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
                  <span className="text-brand-yellow text-xs font-bold">운영 진행 중</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { Icon: Users, label: '구독자', node: <CountUp target={2170} suffix="명" /> },
                  { Icon: PlaySquare, label: '업로드 영상', node: <CountUp target={144} suffix="개" /> },
                  { Icon: TrendingUp, label: '운영 시작', node: <span>2024~</span> },
                ].map(({ Icon, label, node }) => (
                  <div
                    key={label}
                    className="bg-brand-light rounded-xl p-4 text-center border border-brand-border"
                  >
                    <Icon size={16} className="text-brand-gray mx-auto mb-2" />
                    <p className="text-brand-dark font-extrabold text-lg leading-tight">{node}</p>
                    <p className="text-brand-gray text-[10px] mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-brand-gray text-xs font-bold tracking-[0.2em] uppercase mb-2">More Cases</p>
            <h2 className="text-brand-dark text-2xl font-extrabold tracking-tight">다음 성공 사례</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { label: '소상공인 SNS 교육', sub: '수강생 모집 / 진행 예정' },
              { label: '광고대행 파트너', sub: '신규 파트너 협의 중' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/60 border-2 border-dashed border-brand-border rounded-2xl p-8"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-brand-gray" />
                  <span className="text-brand-gray text-xs font-semibold tracking-wider uppercase">준비 중</span>
                </div>
                <h3 className="text-brand-dark font-extrabold text-lg mb-1">{item.label}</h3>
                <p className="text-brand-gray text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-brand-yellow text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                다음 성공 사례의 주인공
              </p>
              <h2 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                함께 만들어가실<br />준비가 되셨나요?
              </h2>
              <p className="text-white/50 leading-relaxed">
                아미레브와 함께 브랜드의 새로운 가능성을 열어보세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex md:justify-end"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.15 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-brand-yellow text-brand-dark font-bold px-8 py-4 rounded-xl hover:bg-white transition-all duration-200 text-base"
                >
                  무료 상담 요청 <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}
