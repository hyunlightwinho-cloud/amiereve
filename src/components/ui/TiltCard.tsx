'use client'

import { useRef, useState } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [shadow, setShadow] = useState('0 4px 6px -1px rgba(0,0,0,0.1)')

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -8
    const rotateY = ((x - cx) / cx) * 8
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`)
    setShadow(`${-rotateY * 2}px ${rotateX * 2 + 16}px 40px rgba(0,0,0,0.18)`)
  }

  function handleMouseLeave() {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)')
    setShadow('0 4px 6px -1px rgba(0,0,0,0.1)')
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        boxShadow: shadow,
        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
        willChange: 'transform',
      }}
      className={className}
    >
      {children}
    </div>
  )
}
