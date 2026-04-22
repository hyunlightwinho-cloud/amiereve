'use client'

import { useState } from 'react'
import Image from 'next/image'
import Masonry from 'react-masonry-css'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import SectionTitle from '@/components/ui/SectionTitle'
import galleryImages from '@/data/galleryImages'
import Tag from '@/components/ui/Tag'

const breakpointCols = { default: 3, 1024: 2, 640: 1 }
const heights = [230, 290, 260, 310, 250, 280, 240, 300, 260, 270]

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(-1)
  const slides = galleryImages.map((img) => ({ src: img.src, alt: img.alt }))

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle title="현장에서 만나는 아미레브" subtitle="강의와 컨설팅 현장의 생생한 모습들" />

        <Masonry
          breakpointCols={breakpointCols}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className="relative overflow-hidden cursor-pointer group bg-brand-light"
              style={{ height: heights[i % heights.length] }}
              onClick={() => setLightboxIndex(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <Tag>{img.category}</Tag>
              </div>
            </div>
          ))}
        </Masonry>
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
