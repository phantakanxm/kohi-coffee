import { Link } from 'react-router'
import { commonCopy } from '../../content/common.ts'
import { useCopy, useLocalize } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'

export function Wordmark({ className }: { className?: string }) {
  const t = useCopy(commonCopy)
  const localize = useLocalize()
  return (
    <Link
      to={localize('/')}
      aria-label={t.homeLabel}
      className={cx('inline-flex min-h-11 items-baseline gap-2 whitespace-nowrap', className)}
    >
      <span className="text-[1.0625rem] font-medium tracking-[0.3em]">KŌHI</span>
      <span className="text-[0.625rem] font-medium tracking-[0.32em] opacity-75">/ COFFEE</span>
    </Link>
  )
}
