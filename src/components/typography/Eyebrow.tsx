import type { ReactNode } from 'react'
import { cx } from '../../utils/cx.ts'

interface EyebrowProps {
  children: ReactNode
  tone?: 'dark' | 'light'
  className?: string
}

export function Eyebrow({ children, tone = 'dark', className }: EyebrowProps) {
  return (
    <p className={cx('label-caps flex items-center gap-3', tone === 'dark' ? 'text-muted' : 'text-ivory/80', className)}>
      <span aria-hidden className={cx('h-px w-6 shrink-0', tone === 'dark' ? 'bg-sage' : 'bg-ivory/60')} />
      {children}
    </p>
  )
}
