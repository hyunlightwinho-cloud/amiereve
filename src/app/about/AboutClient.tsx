'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Flag, BookOpen, PlayCircle, Clock, Sparkles, ChevronDown } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

export default function AboutClient() {
  return (
    <main>

      {/* ── 회사소개 배너 ── */}
      <section className="relative min-h-screen bg-brand-dark flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="아미레브 배경"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/80" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 text-center px-4 max-w-3xl mx-auto"
        >
          <p className="text-brand-yellow text-[11px] tracking-[0.45em] uppercase font-bold mb-6">
            Company Introduction
          </p>
          <h1 className="text-white font-extrabold tracking-tight leading-[1.05] mb-4"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}>
            아미레브
          </h1>
          <p className="text-brand-yellow font-bold tracking-[0.3em] uppercase text-lg mb-8">
            Amie Reve
          </p>
          <div className="w-10 h-0.5 bg-brand-yellow mx-auto mb-8" />
          <p className="text-white/65 text-base md:text-lg leading-relaxed">
            소상공인부터 인플루언서까지,<br />
            모든 브랜드의 이야기를 세상에 전하는 마케팅 파트너입니다.
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30"
        >
          <ChevronDown size={18} />
          <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ── CEO 인사말 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: CEO Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light max-w-sm mx-auto md:mx-0"
            >
              <Image
                src="/images/about/about-hero.jpg"
                alt="반경화 대표"
                fill
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
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            >
              <p className="text-brand-yellow text-xs tracking-[0.3em] uppercase font-bold mb-3">
                CEO MESSAGE
              </p>
              <h2 className="text-brand-dark text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                인사말
              </h2>
              <div className="w-10 h-0.5 bg-brand-yellow mb-8" />

              <p className="text-brand-yellow font-bold text-base leading-relaxed mb-6">
                "브랜드의 이야기를 세상에 전하는 것이 아미레브의 사명입니다."
              </p>

              <div className="space-y-4 text-brand-gray text-sm leading-relaxed">
                <p>
                  소상공인부터 인플루언서까지, 모든 브랜드에는 고유한 스토리가 있습니다. 그 이야기를 올바르게 전달할 때 비로소 브랜드가 고객의 마음에 자리잡게 됩니다.
                </p>
                <p>
                  아미레브는 2022년 창립 이래 광고대행, 유튜브 운영대행, 소상공인 SNS 교육 등 다양한 분야에서 브랜드의 성장을 함께해왔습니다.
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

const milestones = [
  { year: '2022', text: '아미레브 창립', sub: '브랜드 마케팅의 첫 걸음', isNew: false, Icon: Flag },
  { year: '2023', text: '소상공인 SNS 교육 론칭', sub: '현장 교육 프로그램 시작', isNew: false, Icon: BookOpen },
  { year: '2024', text: '유튜브 채널 운영대행 시작', sub: '이미나 약사 채널 운영대행', isNew: false, Icon: PlayCircle },
  { year: '2025', text: '추가 예정', sub: '', isNew: false, Icon: Clock },
  { year: '2026', text: 'AI 콘텐츠 마케팅 서비스 론칭', sub: '차세대 AI 마케팅 서비스', isNew: true, Icon: Sparkles },
]

function TimelineSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-5 sm:px-6">
        <SectionTitle title="아미레브 연혁" subtitle="작은 시작에서 큰 꿈으로" />

        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-yellow/40 -translate-x-1/2" />
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-brand-yellow/40" />

          <div className="space-y-10">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              const Icon = m.Icon

              const card = (
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.12)' }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center gap-4 px-6 py-5 shadow-md cursor-default w-full md:w-auto
                    ${m.isNew ? 'bg-brand-purple text-white' : m.text === '추가 예정' ? 'bg-white/60 border-2 border-dashed border-brand-border text-brand-gray' : 'bg-white text-brand-dark'}
                  `}
                >
                  <div className={`w-11 h-11 flex items-center justify-center shrink-0
                    ${m.isNew ? 'bg-white/15' : m.text === '추가 예정' ? 'bg-brand-border/50' : 'bg-brand-yellow/15'}`}>
                    <Icon size={20} className={m.isNew ? 'text-brand-yellow' : m.text === '추가 예정' ? 'text-brand-gray' : 'text-brand-dark'} />
                  </div>
                  <div>
                    <div className={`text-xs font-bold tracking-widest mb-1 ${m.isNew ? 'text-brand-yellow' : 'text-brand-gray'}`}>
                      {m.year}
                    </div>
                    <div className={`font-extrabold text-base tracking-tight ${m.text === '추가 예정' ? 'text-brand-gray' : ''}`}>
                      {m.text}
                      {m.isNew && (
                        <span className="ml-2 text-xs bg-brand-yellow text-brand-dark px-2 py-0.5 font-bold">
                          ✦ NEW
                        </span>
                      )}
                    </div>
                    {m.sub && (
                      <div className={`text-xs mt-1 ${m.isNew ? 'text-white/60' : 'text-brand-gray'}`}>{m.sub}</div>
                    )}
                  </div>
                </motion.div>
              )

              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative"
                >
                  <div className="hidden md:grid md:grid-cols-2 items-center">
                    <div className="flex justify-end pr-12">
                      {isLeft && card}
                    </div>
                    <div className="flex justify-start pl-12">
                      {!isLeft && card}
                    </div>
                  </div>

                  <div className="md:hidden pl-14">
                    {card}
                  </div>

                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-brand-yellow border-[3px] border-white shadow-md z-10" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
