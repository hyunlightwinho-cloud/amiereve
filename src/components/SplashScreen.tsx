'use client'

import { useEffect, useState } from 'react'

export default function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [hidden, setHidden] = useState(false)
  const [skip, setSkip] = useState<boolean | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    try {
      if (sessionStorage.getItem('amiereve-splash-shown') === '1') {
        setSkip(true)
        return
      }
      sessionStorage.setItem('amiereve-splash-shown', '1')
    } catch {
      // sessionStorage unavailable — fall through and show splash anyway
    }
    setSkip(false)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    let progressVal = 0
    let raf = 0
    let done = false

    const computeTarget = () => {
      const state = document.readyState
      if (state === 'complete') return 100
      const imgs = Array.from(document.images)
      const loaded = imgs.filter((i) => i.complete).length
      const ratio = imgs.length > 0 ? loaded / imgs.length : 0.5
      if (state === 'interactive') return Math.min(95, 60 + ratio * 35)
      return Math.min(60, ratio * 60)
    }

    const tick = () => {
      const target = computeTarget()
      progressVal += Math.max(0.4, (target - progressVal) * 0.05)
      if (progressVal > 100) progressVal = 100
      setProgress(progressVal)

      if (progressVal >= 99.9 && !done) {
        done = true
        setProgress(100)
        document.body.style.overflow = prevOverflow
        window.setTimeout(() => setHidden(true), 500)
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = prevOverflow
    }
  }, [])

  if (skip === null || skip === true) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#111111] flex items-center justify-center transition-opacity duration-700 ease-out ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Decorative orbits */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <circle cx="100%" cy="0%" r="380" fill="none" stroke="#FEE500" strokeOpacity="0.12" />
        <circle cx="100%" cy="0%" r="560" fill="none" stroke="#FEE500" strokeOpacity="0.08" />
        <circle cx="100%" cy="0%" r="740" fill="none" stroke="#FEE500" strokeOpacity="0.05" />
        <circle cx="0%" cy="100%" r="320" fill="none" stroke="#FEE500" strokeOpacity="0.1" />
        <circle cx="0%" cy="100%" r="500" fill="none" stroke="#FEE500" strokeOpacity="0.06" />
      </svg>

      {/* Tiny accent dots */}
      <div className="absolute top-[18%] left-[12%] w-1 h-1 bg-brand-yellow rounded-full opacity-60" />
      <div className="absolute top-[28%] right-[22%] w-[3px] h-[3px] bg-brand-yellow rounded-full opacity-40" />
      <div className="absolute bottom-[22%] right-[12%] w-1 h-1 bg-brand-yellow rounded-full opacity-50" />
      <div className="absolute bottom-[32%] left-[18%] w-[3px] h-[3px] bg-brand-yellow rounded-full opacity-40" />
      <div className="absolute top-[55%] left-[8%] w-[2px] h-[2px] bg-brand-yellow rounded-full opacity-30" />

      {/* Center content */}
      <div className="relative flex flex-col items-center px-6 w-full">
        {/* Logo */}
        <div className="flex items-baseline gap-2 sm:gap-3 mb-4 sm:mb-5">
          <span className="text-brand-yellow font-black text-3xl sm:text-5xl md:text-6xl tracking-[0.08em]">
            AMIE
          </span>
          <span className="text-gray-400 font-light text-3xl sm:text-5xl md:text-6xl tracking-[0.12em]">
            REVE
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 sm:h-8 bg-brand-yellow mb-4 sm:mb-5" />

        {/* Subtitle */}
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-12 sm:mb-16 md:mb-20">
          Marketing Agency
        </p>

        {/* Counter */}
        <div className="flex items-baseline">
          <span className="text-white font-bold text-5xl sm:text-7xl md:text-8xl tabular-nums leading-none">
            {Math.floor(progress)}
          </span>
          <span className="text-white text-xl sm:text-2xl md:text-3xl ml-1 font-light">%</span>
        </div>

        {/* Progress bar */}
        <div className="mt-6 sm:mt-8 w-48 sm:w-64 md:w-80 h-px bg-white/15 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-brand-yellow"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}
