'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import team from '@/data/team'

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-brand-dark flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/about/about-hero.jpg"
          alt="반경화 대표"
          fill
          priority
          className="object-cover object-top opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <span className="inline-block text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight">
            아미레브를<br />소개합니다
          </h1>
          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            브랜드의 이야기를 세상에 전하는 마케팅 파트너,<br />아미레브와 함께 성장하세요.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

const storyBlocks = [
  {
    reverse: false,
    label: '브랜드 스토리',
    title: '브랜드에는 이야기가 필요합니다',
    body: '모든 비즈니스에는 고유한 스토리가 있습니다. 그 이야기를 올바르게 전달할 때 비로소 브랜드가 고객의 마음에 자리잡게 됩니다.',
    image: '/images/about/story-01.jpg',
  },
  {
    reverse: true,
    label: '현장 경험',
    title: '현장에서 쌓은 진짜 경험',
    body: '현장에서 직접 검증된 전략으로 소통합니다.',
    image: '/images/about/story-02.jpg',
  },
  {
    reverse: false,
    label: '미래 비전',
    title: '2026, AI와 함께 더 큰 도약',
    body: 'AI 기술과 인간의 창의성이 결합될 때 마케팅은 새로운 차원으로 진화합니다. 아미레브는 그 최전선에 서 있습니다.',
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
              <h3 className="text-2xl md:text-3xl font-extrabold text-brand-dark mb-4 tracking-tight">{block.title}</h3>
              <p className="text-brand-gray leading-relaxed">{block.body}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: block.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`relative rounded-2xl w-full aspect-[4/3] overflow-hidden ${block.reverse ? 'md:[direction:ltr]' : ''}`}
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
        <h3 className="text-3xl font-extrabold mb-6 tracking-tight">브랜드의 이야기를<br />세상에 전합니다</h3>
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
        <h3 className="text-3xl font-extrabold mb-6 tracking-tight">AI로 진화하는<br />마케팅의 미래</h3>
        <p className="text-brand-dark/70 leading-relaxed">
          2026년, AI와 함께 더 많은 브랜드가 자신만의 콘텐츠를 가질 수 있는 세상을 만들어 갑니다.
        </p>
      </motion.div>
    </section>
  )
}

const milestones = [
  { year: '2022', text: '아미레브 창립', isNew: false },
  { year: '2023', text: '소상공인 SNS 교육 론칭', isNew: false },
  { year: '2024', text: '유튜브 채널 운영대행 시작', isNew: false },
  { year: '2025', text: '추가 예정', isNew: false },
  { year: '2026', text: 'AI 콘텐츠 마케팅 서비스 론칭', isNew: true },
]

function TimelineSection() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-6">
        <SectionTitle title="아미레브 연혁" subtitle="작은 시작에서 큰 꿈으로" />

        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-yellow -translate-x-1/2" />
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
                  className={`relative flex items-center md:justify-center pl-14 md:pl-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-5/12 ${isRight ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                    <div className={`inline-block rounded-xl px-5 py-4 shadow-sm ${m.isNew ? 'bg-brand-purple text-white' : 'bg-white text-brand-dark'}`}>
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

function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle title="팀 소개" subtitle="아미레브를 이끄는 사람들" />

        <div className="flex justify-center mt-4">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-brand-light rounded-2xl p-10 text-center w-full max-w-sm"
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-5 overflow-hidden bg-brand-border relative">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="112px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-brand-yellow/30 to-brand-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-brand-yellow/60">{member.name[0]}</span>
                  </div>
                )}
              </div>

              <h4 className="text-xl font-extrabold text-brand-dark tracking-tight">{member.name}</h4>
              <p className="text-sm text-brand-purple font-semibold mt-1">{member.position}</p>
              <p className="text-brand-gray text-sm mt-3 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
