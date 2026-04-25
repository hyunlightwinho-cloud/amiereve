'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Masonry from 'react-masonry-css'
import SectionTitle from '@/components/ui/SectionTitle'
import Tag from '@/components/ui/Tag'
import Button from '@/components/ui/Button'
import portfolio, { type PortfolioItem } from '@/data/portfolio'

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
}

export default function MediaClient() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  function openPortfolioLightbox(index: number) {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main>

      {/* ── 포트폴리오 갤러리 (Masonry) ── */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTitle
            title="포트폴리오"
            subtitle="아미레브가 만들어온 콘텐츠와 브랜딩 작업물"
          />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {portfolio.map((item: PortfolioItem, idx: number) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                onClick={() => openPortfolioLightbox(idx)}
              >
                <div className="relative overflow-hidden bg-brand-light" style={{ height: Math.max(160, 200 + (idx % 3) * 60) }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-brand-yellow">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            이런 성과를 원하신다면
          </h2>
          <p className="text-brand-dark/70 text-lg mb-8">
            아미레브와 함께 브랜드의 새로운 가능성을 열어보세요
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              무료 상담 요청
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Portfolio Lightbox ── */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={portfolio.map((p) => ({ src: p.src, alt: p.alt }))}
          render={{
            slide: ({ slide }) => {
              const item = portfolio.find((p) => p.src === (slide as { src: string }).src)
              return (
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="relative max-w-2xl max-h-full">
                    <img
                      src={(slide as { src: string }).src}
                      alt={item?.alt ?? '포트폴리오'}
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                    {item && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <Tag color="bg-brand-yellow text-brand-dark" className="mb-1">{item.category}</Tag>
                        <p className="text-white font-semibold text-sm">{item.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            },
          }}
          styles={{ container: { backgroundColor: 'rgba(0,0,0,0.9)' } }}
        />
      )}

    </main>
  )
}
