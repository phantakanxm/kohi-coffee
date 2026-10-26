import { Link } from 'react-router'
import { menuCategories, type MenuItem } from '../../data/menu.ts'
import { useLocale, useLocalize } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'
import { ImageFrame } from '../images/ImageFrame.tsx'

interface MenuCardProps {
  item: MenuItem
  sizes: string
  /** Small running number shown beside the category, e.g. 01. */
  index?: number
  /** Hide the category label where a surrounding heading already names it. */
  showCategory?: boolean
  /** When set, the whole card links here (English-form path). */
  to?: string
  headingLevel?: 'h3' | 'h4'
  className?: string
}

export function MenuCard({
  item,
  sizes,
  index,
  showCategory = true,
  to,
  headingLevel: Heading = 'h3',
  className,
}: MenuCardProps) {
  const locale = useLocale()
  const localize = useLocalize()
  const category = menuCategories.find((c) => c.id === item.category)?.label[locale]
  const meta = [
    index !== undefined && String(index).padStart(2, '0'),
    showCategory && category,
  ].filter((part): part is string => Boolean(part))

  const body = (
    <>
      <ImageFrame asset={item.image} ratio="4 / 5" sizes={sizes} hover />
      {meta.length > 0 && (
        <div className="label-caps mt-6 flex items-center gap-3 text-muted">
          {meta.map((part, i) => (
            <span key={part} className="flex items-center gap-3 tabular-nums">
              {i > 0 && <span aria-hidden className="h-px w-4 bg-line" />}
              {part}
            </span>
          ))}
        </div>
      )}
      <div className={cx('flex items-baseline justify-between gap-6', meta.length > 0 ? 'mt-3' : 'mt-6')}>
        <Heading className="text-[1.75rem] leading-tight lg:text-[2rem]">{item.name}</Heading>
        {item.price && <p className="shrink-0 text-[0.9375rem] tabular-nums text-muted">{item.price}</p>}
      </div>
      <p className="mt-2 max-w-[36ch] text-[0.9375rem] leading-relaxed text-muted">{item.description[locale]}</p>
    </>
  )

  if (to) {
    return (
      <article className={className}>
        <Link to={localize(to)} className="group block">
          {body}
        </Link>
      </article>
    )
  }
  return <article className={cx('group', className)}>{body}</article>
}
