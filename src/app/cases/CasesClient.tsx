'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import cases, { type CaseItem } from '@/data/cases'

const CATEGORIES = ['전체', '인플루언서 브랜딩', '소상공인 컨설팅', '광고대행', 'AI 서비스']

export default function CasesClient() {
  const [selectedCategory, setSelectedCategory] = useState('전체')

  const filtered: CaseItem[] =
    selectedCategory === '전체'
      ? cases
      : cases.filter((c) => c.category === selectedCategory)

  return (
    <main className="pt-16">
      {/* 헤더 */}
      <section className="bg-brand-dark py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand-yellow text-xs tracking-[0.25em] uppercase font-semibold mb-4">Cases</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">고객 사례</h1>
          <p className="text-white/50 text-lg">실제 협업한 고객들의 성장 스토리</p>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <section className="py-8 border-b border-brand-border bg-white sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={[
                  'px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer',
                  selectedCategory === cat
                    ? 'bg-brand-dark text-white'
                    : 'bg-white text-brand-dark border border-brand-border hover:border-brand-dark',
                ].join(' ')}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 케이스 그리드 */}
      <section className="py-20 bg-brand-light min-h-[400px]">
        <div className="max-w-6xl mx-auto px-4">
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-24 gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-brand-border flex items-center justify-center mb-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="3" />
                  <path d="M9 9h6M9 13h4" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-brand-dark font-semibold text-lg">사례 준비 중입니다</p>
              <p className="text-brand-gray text-sm">곧 실제 고객 사례를 업로드할 예정입니다</p>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    {/* 썸네일 */}
                    <div className="relative aspect-video bg-[#1a4a2e] overflow-hidden flex items-center justify-center">
                      {item.thumbnail ? (
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center gap-2 w-full h-full bg-gradient-to-br from-[#1a5c35] to-[#0f3a21]">
                          <span className="text-white text-2xl font-bold tracking-wide">이미나 약사</span>
                          <span className="text-white/60 text-xs tracking-widest">약사 가르치는 1타강사</span>
                        </div>
                      )}
                      {/* 배지 */}
                      <span className="absolute top-3 right-3 bg-brand-yellow text-brand-dark text-xs font-bold px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    {/* 카드 내용 */}
                    <div className="p-5">
                      <Tag color="bg-brand-light text-brand-gray" className="mb-3 text-xs">
                        {item.category}
                      </Tag>
                      <h3 className="font-bold text-brand-dark text-lg mb-1">{item.title}</h3>
                      <p className="text-brand-gray text-sm leading-relaxed mb-4">{item.description}</p>

                      <div className="flex items-center gap-4 text-xs text-brand-gray border-t border-brand-border pt-4">
                        <span>구독자 <strong className="text-brand-dark">2.17천명</strong></span>
                        <span>영상 <strong className="text-brand-dark">144개</strong></span>
                        {item.channelUrl && (
                          <a
                            href={item.channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto flex items-center gap-1 text-brand-dark font-semibold hover:text-brand-yellow transition-colors"
                          >
                            채널 보기 <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-dark mb-4">함께 만들어가실 준비가 되셨나요?</h2>
          <p className="text-brand-dark/70 mb-8">아미레브와 함께 브랜드의 새로운 가능성을 열어보세요</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-dark text-white font-bold hover:bg-brand-dark/90 transition-colors"
          >
            무료 상담 요청
          </Link>
        </div>
      </section>
    </main>
  )
}
