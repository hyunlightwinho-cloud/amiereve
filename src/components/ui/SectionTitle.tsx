'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  light?: boolean
  center?: boolean
}

export default function SectionTitle({ title, subtitle, className, light = false, center = false }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('mb-12', center && 'text-center', className)}
    >
      {center ? (
        <>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-5 h-px bg-brand-yellow" />
            <span className={cn('text-xs font-semibold tracking-[0.2em] uppercase', light ? 'text-brand-yellow' : 'text-brand-yellow')}>{title}</span>
            <span className="w-5 h-px bg-brand-yellow" />
          </div>
          {subtitle && (
            <p className={cn('text-2xl md:text-3xl font-extrabold tracking-tight', light ? 'text-white' : 'text-brand-dark')}>
              {subtitle}
            </p>
          )}
        </>
      ) : (
        <div className="flex items-start gap-4">
          <div className="w-1 bg-brand-yellow rounded-full self-stretch min-h-8 shrink-0 mt-1" />
          <div>
            <h2
              className={cn(
                'text-3xl md:text-[2.6rem] font-extrabold leading-tight',
                light ? 'text-white' : 'text-brand-dark',
              )}
            >
              {title}
            </h2>
            {subtitle && (
              <p className={cn('mt-3 text-base font-medium', light ? 'text-white/60' : 'text-brand-gray')}>
                {subtitle}
              </p>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}
