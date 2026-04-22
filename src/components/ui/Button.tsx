'use client'

import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-[250ms] cursor-pointer',
        {
          'bg-brand-dark text-white hover:bg-brand-yellow hover:text-brand-dark': variant === 'primary',
          'bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark': variant === 'secondary',
          'border-2 border-white text-white hover:bg-white hover:text-brand-dark': variant === 'outline',
          'text-brand-dark hover:bg-brand-light': variant === 'ghost',
        },
        {
          'text-sm px-4 py-2': size === 'sm',
          'text-base px-6 py-3': size === 'md',
          'text-lg px-8 py-4': size === 'lg',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
