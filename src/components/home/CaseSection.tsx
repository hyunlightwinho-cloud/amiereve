'use client'

import { motion } from 'framer-motion'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function CaseSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="성장한 고객 사례" light />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Tag className="mb-4">유튜브 운영대행</Tag>
            <h3 className="text-white text-3xl font-extrabold mb-2 tracking-tight">이미나 약사</h3>
            <p className="text-white/50 text-sm mb-6">@yak_up_mina · 운영 진행 중</p>

            <div className="flex flex-wrap gap-2 mb-8">
              <Tag color="bg-white/10 text-white">인플루언서 브랜딩</Tag>
              <Tag color="bg-white/10 text-white">유튜브 운영대행</Tag>
              <Tag color="bg-white/10 text-white">콘텐츠 전략</Tag>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-brand-yellow rounded-xl p-5">
                <p className="text-brand-dark text-2xl font-bold">2.17천</p>
                <p className="text-brand-dark/70 text-sm mt-1">구독자</p>
              </div>
              <div className="bg-white/10 rounded-xl p-5">
                <p className="text-white text-2xl font-bold">144개</p>
                <p className="text-white/60 text-sm mt-1">업로드 영상</p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-8">
              16년 차 전문 약사이자 강사. 약사 가르치는 1타강사 채널의 콘텐츠 기획부터 업로드까지 운영대행을 진행하고 있습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-brand-dark transition-all duration-200"
              >
                사례 전체 보기 →
              </Link>
              <a
                href="https://www.youtube.com/@yak_up_mina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white/60 font-semibold px-6 py-3 rounded-full hover:border-white/60 hover:text-white transition-all duration-200"
              >
                채널 보기 <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right: 채널 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-xl overflow-hidden border border-white/10">
              {/* 채널 배너 */}
              <div className="bg-gradient-to-br from-[#1a5c35] to-[#0f3a21] px-8 py-10 text-center">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-3">약사 가르치는 1타강사</p>
                <h4 className="text-white text-3xl font-bold tracking-tight">이미나 약사</h4>
                <p className="text-white/40 text-sm mt-2">@yak_up_mina</p>
              </div>
              {/* 채널 스탯 */}
              <div className="bg-white/5 grid grid-cols-3 divide-x divide-white/10">
                <div className="py-5 text-center">
                  <p className="text-white font-bold text-lg">2.17천</p>
                  <p className="text-white/40 text-xs mt-1">구독자</p>
                </div>
                <div className="py-5 text-center">
                  <p className="text-white font-bold text-lg">144개</p>
                  <p className="text-white/40 text-xs mt-1">영상</p>
                </div>
                <div className="py-5 text-center">
                  <p className="text-brand-yellow font-bold text-lg">운영 중</p>
                  <p className="text-white/40 text-xs mt-1">현황</p>
                </div>
              </div>
              {/* 설명 */}
              <div className="bg-white/5 px-6 py-5 border-t border-white/10">
                <p className="text-white/60 text-sm leading-relaxed">
                  16년 차, 전문 약사이자 강사입니다.
                </p>
                <a
                  href="https://www.youtube.com/@yak_up_mina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-brand-yellow text-sm font-semibold hover:underline"
                >
                  유튜브 채널 방문 <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
