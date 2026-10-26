import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useLocalize } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'

interface TextLinkProps {
  to: string
  children: ReactNode
  className?: string
}

/** Understated editorial link: a quiet underline and a small arrow. Inherits colour. */
export function TextLink({ to, children, className }: TextLinkProps) {
  const localize = useLocalize()
  return (
    <Link
      to={localize(to)}
      className={cx(
        'group/link inline-flex min-h-11 items-center gap-2.5 text-[0.875rem] font-medium tracking-[0.01em]',
        className,
      )}
    >
      <span className="border-b border-current/30 pb-1 transition-colors duration-300 ease-calm group-hover/link:border-current">
        {children}
      </span>
      <ArrowRight
        aria-hidden
        size={15}
        strokeWidth={1.5}
        className="transition-transform duration-300 ease-calm group-hover/link:translate-x-0.5"
      />
    </Link>
  )
}
