'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionTitle from '@/components/ui/SectionTitle'
import galleryImages from '@/data/galleryImages'

const ROW1 = galleryImages.slice(0, 5)
const ROW2 = galleryImages.slice(5, 10)
const ITEM_W = 360
const ITEM_GAP = 16

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const slides = galleryImages.map((img) => ({ src: img.src, alt: img.alt }))

  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionTitle title="현장에서 만나는 아미레브" subtitle="강의와 컨설팅 현장의 생생한 모습들" />
      </motion.div>

      <div className="flex flex-col gap-4">
        {/* Row 1 — 왼쪽으로 스크롤 */}
        <div className="gallery-row overflow-hidden">
          <div
            className="gallery-marquee-track"
            style={{ animation: 'gallery-scroll-left 38s linear infinite' }}
          >
            {[...ROW1, ...ROW1].map((img, i) => (
              <div
                key={`r1-${i}`}
                className="gallery-card group"
                style={{ width: ITEM_W, marginRight: ITEM_GAP }}
                onClick={() => setLightboxIndex(galleryImages.findIndex((g) => g.id === img.id))}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={`${ITEM_W}px`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="bg-brand-yellow text-brand-dark text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — 오른쪽으로 스크롤 (다른 속도로 입체감) */}
        <div className="gallery-row overflow-hidden">
          <div
            className="gallery-marquee-track"
            style={{ animation: 'gallery-scroll-right 50s linear infinite' }}
          >
            {[...ROW2, ...ROW2].map((img, i) => (
              <div
                key={`r2-${i}`}
                className="gallery-card group"
                style={{ width: ITEM_W, marginRight: ITEM_GAP }}
                onClick={() => setLightboxIndex(galleryImages.findIndex((g) => g.id === img.id))}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={`${ITEM_W}px`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="bg-brand-yellow text-brand-dark text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  )
}
