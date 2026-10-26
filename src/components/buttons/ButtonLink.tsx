import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useLocalize } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'

interface ButtonLinkProps {
  to: string
  children: ReactNode
  /** "dark" sits on light backgrounds; "light" sits on photographs or charcoal. */
  tone?: 'dark' | 'light'
  external?: boolean
  className?: string
}

export function ButtonLink({ to, children, tone = 'dark', external = false, className }: ButtonLinkProps) {
  const localize = useLocalize()
  const classes = cx(
    'group/button inline-flex min-h-12 items-center gap-3 rounded-[2px] px-6 py-3 text-[0.875rem] font-medium tracking-[0.01em] transition-colors duration-300 ease-calm',
    tone === 'dark' ? 'bg-charcoal text-ivory hover:bg-[#4a473d]' : 'bg-ivory text-charcoal hover:bg-white',
    className,
  )
  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden
        size={16}
        strokeWidth={1.5}
        className="transition-transform duration-300 ease-calm group-hover/button:translate-x-0.5"
      />
    </>
  )

  if (external) {
    return (
      <a href={to} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  return (
    <Link to={localize(to)} className={classes}>
      {content}
    </Link>
  )
}
