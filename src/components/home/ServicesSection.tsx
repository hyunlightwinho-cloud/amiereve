'use client'

import { motion } from 'framer-motion'
import { Megaphone, Star, BookOpen, Sparkles, ArrowUpRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import TiltCard from '@/components/ui/TiltCard'
import Link from 'next/link'

const services = [
  {
    icon: Megaphone,
    number: '01',
    title: '광고대행 & 미디어 운영',
    desc: 'SNS 광고 기획부터 집행, 채널 최적화까지 전문적으로 운영합니다.',
    href: '/services#ad',
    badge: null,
    color: 'from-amber-400/20 to-yellow-300/10',
  },
  {
    icon: Star,
    number: '02',
    title: '인플루언서·유튜버 브랜딩',
    desc: '개인 브랜드를 체계적으로 구축하고 성장시키는 전략을 제공합니다.',
    href: '/services#branding',
    badge: null,
    color: 'from-violet-400/20 to-purple-300/10',
  },
  {
    icon: BookOpen,
    number: '03',
    title: '소상공인 교육·컨설팅',
    desc: '실전 SNS 마케팅 교육으로 직접 운영할 수 있는 역량을 키워드립니다.',
    href: '/services#education',
    badge: null,
    color: 'from-emerald-400/20 to-green-300/10',
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'AI 마케팅 서비스',
    desc: 'AI 도구를 활용한 차세대 마케팅 전략으로 효율을 극대화합니다.',
    href: '/services#ai',
    badge: 'NEW 2026',
    color: 'from-sky-400/20 to-blue-300/10',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F5F5F5] relative overflow-hidden">
      {/* Subtle top rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-border" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="아미레브가 하는 일" subtitle="4대 핵심 서비스로 브랜드 성장을 도와드립니다" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <motion.div key={svc.title} variants={itemVariants}>
              <TiltCard className="relative bg-white border border-brand-border p-6 flex flex-col group cursor-pointer h-full">
                {/* Hover accent bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number */}
                <span className="text-[11px] font-bold text-brand-border tracking-widest mb-4">{svc.number}</span>

                {/* Badge */}
                {svc.badge && (
                  <span className="absolute top-5 right-5 bg-brand-purple text-white text-[10px] font-bold px-2.5 py-1 animate-pulse-ring">
                    {svc.badge}
                  </span>
                )}

                {/* Icon */}
                <div className={`w-11 h-11 bg-gradient-to-br ${svc.color} bg-brand-yellow/10 flex items-center justify-center mb-5 border border-brand-yellow/20`}>
                  <Icon size={20} className="text-brand-dark" />
                </div>

                {/* Text */}
                <h3 className="text-base font-extrabold text-brand-dark mb-2 leading-snug tracking-tight">{svc.title}</h3>
                <p className="text-sm font-medium text-brand-gray leading-relaxed flex-1">{svc.desc}</p>

                {/* Link */}
                <Link
                  href={svc.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark/50 group-hover:text-brand-dark group-hover:gap-2 transition-all duration-200"
                >
                  자세히 보기
                  <ArrowUpRight size={14} className="shrink-0" />
                </Link>
              </TiltCard>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
