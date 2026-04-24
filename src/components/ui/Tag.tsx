import { cn } from '@/lib/utils'

interface TagProps {
  children: React.ReactNode
  color?: string
  className?: string
}

export default function Tag({ children, color = 'bg-brand-yellow text-brand-dark', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-sm',
        color,
        className,
      )}
    >
      {children}
    </span>
  )
}
