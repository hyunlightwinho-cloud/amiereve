'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutClient() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Left: CEO Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative w-full aspect-[3/4] overflow-hidden bg-brand-light max-w-sm mx-auto md:mx-0"
            >
              <Image
                src="/images/about/about-hero.jpg"
                alt="반경화 대표"
                fill
                priority
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
              animate={{ opacity: 1, x: 0 }}
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
    </main>
  )
}
