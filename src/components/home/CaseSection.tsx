'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay },
})

export default function CaseSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="고객 사례" light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <motion.div {...fadeUp(0.05)}>
              <Tag className="mb-4">유튜브 운영대행</Tag>
            </motion.div>

            <motion.h3 {...fadeUp(0.12)} className="text-white text-3xl font-extrabold mb-2 tracking-tight">
              이미나 약사
            </motion.h3>

            <motion.p {...fadeUp(0.17)} className="text-white/50 text-sm mb-6">
              @yak_up_mina · 운영 진행 중
            </motion.p>

            <motion.div {...fadeUp(0.22)} className="flex flex-wrap gap-2 mb-8">
              <Tag color="bg-white/10 text-white">인플루언서 브랜딩</Tag>
              <Tag color="bg-white/10 text-white">유튜브 운영대행</Tag>
              <Tag color="bg-white/10 text-white">콘텐츠 전략</Tag>
            </motion.div>

            <motion.div {...fadeUp(0.28)} className="grid grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-brand-yellow p-5 rounded-xl relative overflow-hidden cursor-default"
              >
                {/* 글로우 */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl pointer-events-none" />
                <p className="text-brand-dark text-2xl font-bold relative z-10">2.17천</p>
                <p className="text-brand-dark/70 text-sm mt-1 relative z-10">구독자</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white/10 p-5 rounded-xl relative overflow-hidden cursor-default border border-white/5 hover:border-white/20 transition-colors duration-300"
              >
                <p className="text-white text-2xl font-bold">144개</p>
                <p className="text-white/60 text-sm mt-1">업로드 영상</p>
              </motion.div>
            </motion.div>

            <motion.p {...fadeUp(0.33)} className="text-white/60 text-sm leading-relaxed mb-8">
              16년 차 전문 약사이자 강사. 약사 가르치는 1타강사 채널의 콘텐츠 기획부터 업로드까지 운영대행을 진행하고 있습니다.
            </motion.p>

            <motion.div {...fadeUp(0.38)} className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white hover:text-brand-dark transition-all duration-200 w-full sm:w-auto rounded-xl"
              >
                사례 전체 보기 →
              </Link>
              <a
                href="https://www.youtube.com/@yak_up_mina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white/60 font-semibold px-6 py-3 hover:border-white/60 hover:text-white transition-all duration-200 w-full sm:w-auto rounded-xl"
              >
                채널 보기 <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: 채널 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="overflow-hidden border border-white/10 rounded-2xl shadow-2xl"
            >
              {/* YouTube 채널 헤더 */}
              <div className="bg-[#FF0000] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white flex-shrink-0" aria-label="YouTube">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">이미나 약사</p>
                    <p className="text-white/70 text-[11px] mt-0.5">@yak_up_mina</p>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/@yak_up_mina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-white text-[#FF0000] text-xs font-bold px-3 py-1.5 rounded-full hover:bg-white/90 transition-colors"
                >
                  구독 <ExternalLink size={11} />
                </a>
              </div>

              {/* 대표 영상 임베드 */}
              <div className="relative w-full bg-black" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/kcSOvt6gO30?rel=0&modestbranding=1&vq=hd1080"
                  title="이미나 약사 유튜브 대표 영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
