'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'

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

export default function FaqSection() {
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
