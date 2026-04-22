'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import team from '@/data/team'

const Particles = dynamic(
  () => import('@tsparticles/react').then((m) => ({ default: m.Particles })),
  { ssr: false },
)

/* ─────────────────────────────────────────────
   Section 1: Hero
───────────────────────────────────────────── */
function HeroSection() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  return (
    <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
      {init && (
        <Particles
          id="about-particles"
          className="absolute inset-0"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { value: 60, density: { enable: true } },
              color: { value: '#FEE500' },
              opacity: { value: { min: 0.1, max: 0.4 } },
              size: { value: { min: 1, max: 3 } },
              move: { enable: true, speed: 0.6, direction: 'none', random: true, outModes: 'out' },
              links: { enable: true, color: '#FEE500', opacity: 0.12, distance: 120 },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="relative z-10 container mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* 텍스트 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            아미레브를<br />소개합니다
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            브랜드의 이야기를 세상에 전하는 마케팅 파트너,<br />아미레브와 함께 성장하세요.
          </p>
        </motion.div>

        {/* 대표 이미지 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative rounded-xl w-full aspect-[4/3] overflow-hidden ring-1 ring-white/10"
        >
          <Image
            src="/images/about/about-hero.jpg"
            alt="반경화 대표"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 2: 브랜드 스토리 (교차 레이아웃)
───────────────────────────────────────────── */
const storyBlocks = [
  {
    reverse: false,
    label: '브랜드 스토리',
    title: '브랜드에는 이야기가 필요합니다',
    body: '모든 비즈니스에는 고유한 스토리가 있습니다. 그 이야기를 올바르게 전달할 때 비로소 브랜드가 고객의 마음에 자리잡게 됩니다.',
    quote: '좋은 마케팅은 제품을 팔지 않습니다. 이야기를 팝니다.',
    showQuote: true,
    image: '/images/about/story-01.jpg',
  },
  {
    reverse: true,
    label: '현장 경험',
    title: '현장에서 쌓은 진짜 경험',
    body: '현장에서 직접 검증된 전략으로 소통합니다.',
    quote: '',
    showQuote: false,
    image: '/images/about/story-02.jpg',
  },
  {
    reverse: false,
    label: '미래 비전',
    title: '2026, AI와 함께 더 큰 도약',
    body: 'AI 기술과 인간의 창의성이 결합될 때 마케팅은 새로운 차원으로 진화합니다. 아미레브는 그 최전선에 서 있습니다.',
    quote: '',
    showQuote: false,
    image: '/images/about/story-03.jpg',
  },
]

function BrandStorySection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 space-y-32">
        {storyBlocks.map((block, i) => (
          <div
            key={i}
            className={`grid md:grid-cols-2 gap-12 items-center ${block.reverse ? 'md:[direction:rtl]' : ''}`}
          >
            {/* 텍스트 */}
            <motion.div
              initial={{ opacity: 0, x: block.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={block.reverse ? 'md:[direction:ltr]' : ''}
            >
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-gray mb-3 block">
                {block.label}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">{block.title}</h3>
              <p className="text-brand-gray leading-relaxed">{block.body}</p>
              {block.showQuote && (
                <blockquote className="mt-6 border-l-4 border-brand-yellow bg-brand-yellow-light px-5 py-4 italic text-brand-dark/80 rounded-r-lg">
                  "{block.quote}"
                </blockquote>
              )}
            </motion.div>

            {/* 이미지 */}
            <motion.div
              initial={{ opacity: 0, x: block.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative rounded-xl w-full aspect-[4/3] overflow-hidden ${block.reverse ? 'md:[direction:ltr]' : ''}`}
            >
              <Image
                src={block.image}
                alt={block.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 3: 미션 & 비전
───────────────────────────────────────────── */
function MissionVisionSection() {
  return (
    <section className="grid md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-brand-dark text-white px-12 py-20 flex flex-col justify-center"
      >
        <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">Mission</span>
        <h3 className="text-3xl font-bold mb-6">브랜드의 이야기를<br />세상에 전합니다</h3>
        <p className="text-white/70 leading-relaxed">
          소상공인부터 인플루언서까지, 모든 브랜드가 자신의 진정한 이야기를 세상에 전달할 수 있도록 최선을 다합니다.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-brand-yellow text-brand-dark px-12 py-20 flex flex-col justify-center"
      >
        <span className="text-brand-dark/60 text-sm font-semibold tracking-widest uppercase mb-4">Vision</span>
        <h3 className="text-3xl font-bold mb-6">AI로 진화하는<br />마케팅의 미래</h3>
        <p className="text-brand-dark/70 leading-relaxed">
          2026년, AI와 함께 모든 브랜드가 최고의 콘텐츠를 가질 수 있는 세상을 만들어 갑니다.
        </p>
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 4: 연혁 타임라인
───────────────────────────────────────────── */
const milestones = [
  { year: '2022', text: '아미레브 창립', isNew: false },
  { year: '2023', text: '소상공인 SNS 교육 론칭', isNew: false },
  { year: '2024', text: '유튜브 이상화 서비스 시작', isNew: false },
  { year: '2025', text: '추가 예정', isNew: false },
  { year: '2026', text: 'AI 콘텐츠 마케팅 서비스 론칭', isNew: true },
]

function TimelineSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <SectionTitle title="아미레브 연혁" subtitle="작은 시작에서 큰 꿈으로" />

        <div className="relative mt-16">
          {/* 중앙 수직 라인 (데스크탑) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-yellow -translate-x-1/2" />
          {/* 왼쪽 단일 라인 (모바일) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-brand-yellow" />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const isRight = i % 2 === 0
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex items-center md:justify-center
                    pl-14 md:pl-0
                    ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* 연도 박스 */}
                  <div
                    className={`md:w-5/12 ${isRight ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}
                  >
                    <div
                      className={`inline-block rounded-xl px-5 py-4 shadow-sm
                        ${m.isNew ? 'bg-brand-purple text-white' : 'bg-white text-brand-dark'}
                      `}
                    >
                      <div className={`text-sm font-semibold mb-1 ${m.isNew ? 'text-brand-yellow' : 'text-brand-gray'}`}>
                        {m.year}
                      </div>
                      <div className="font-semibold flex items-center gap-2 flex-wrap">
                        {m.text}
                        {m.isNew && (
                          <span className="text-xs bg-brand-yellow text-brand-dark px-2 py-0.5 rounded-full font-bold">
                            ✦ NEW
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 중앙 점 */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-yellow border-2 border-white shadow md:-translate-x-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Section 5: 팀 소개
───────────────────────────────────────────── */
function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="팀 소개" subtitle="아미레브를 이끄는 사람들" />

        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-brand-light rounded-xl p-8 text-center overflow-hidden"
            >
              {/* 프로필 이미지 */}
              <div className="w-24 h-24 rounded-full mx-auto mb-5 overflow-hidden bg-brand-border relative">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="96px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-yellow/60">{member.name[0]}</span>
                  </div>
                )}
              </div>

              <h4 className="text-xl font-bold text-brand-dark">{member.name}</h4>
              <p className="text-sm text-brand-purple font-semibold mt-1">{member.position}</p>
              <p className="text-brand-gray text-sm mt-3 leading-relaxed">{member.bio}</p>

              {/* hover 오버레이 */}
              <div className="absolute inset-0 bg-brand-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
                <p className="text-white text-sm px-6 leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main>
      <HeroSection />
      <BrandStorySection />
      <MissionVisionSection />
      <TimelineSection />
      <TeamSection />
    </main>
  )
}
