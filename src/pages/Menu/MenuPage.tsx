import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router'
import { ease } from '../../components/animations/motion.ts'
import { Reveal } from '../../components/animations/Reveal.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { MenuCard } from '../../components/cards/MenuCard.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { PageMeta } from '../../components/layout/PageMeta.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { menuCopy } from '../../content/menu.ts'
import { isMenuCategory, menuCategories, menuItems, type MenuCategoryId } from '../../data/menu.ts'
import { useLocale } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'

type Filter = MenuCategoryId | 'all'

export default function MenuPage() {
  const locale = useLocale()
  const t = menuCopy[locale]
  const filters: { id: Filter; label: string }[] = [
    { id: 'all', label: t.all },
    ...menuCategories.map((c) => ({ id: c.id, label: c.label[locale] })),
  ]
  const [params, setParams] = useSearchParams()
  const requested = params.get('category')
  const active: Filter = isMenuCategory(requested) ? requested : 'all'

  const groups = menuCategories
    .filter((category) => active === 'all' || category.id === active)
    .map((category) => ({ category, items: menuItems.filter((item) => item.category === category.id) }))
  const visibleCount = groups.reduce((sum, group) => sum + group.items.length, 0)

  const select = (id: Filter) =>
    setParams(id === 'all' ? {} : { category: id }, { replace: true, preventScrollReset: true })

  return (
    <>
      <PageMeta page="menu" />

      <section className="header-offset pb-16 lg:pb-24" aria-labelledby="menu-title">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-6 lg:pb-8">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <DisplayHeading
              as="h1"
              id="menu-title"
              size="page"
              className="mt-8"
              lines={t.title}
              reveal="mount"
              delay={0.15}
            />
            <motion.p
              className="mt-8 max-w-[40ch] text-[1.0625rem] leading-[1.8] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.6 }}
            >
              {t.body}
            </motion.p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:bleed-right">
              <ImageFrame
                asset="signature-coffee"
                ratio="5 / 4"
                sizes="(min-width: 1024px) 45vw, 100vw"
                priority
                reveal
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-40" aria-label={t.itemsLabel}>
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line">
            <div role="group" aria-label={t.filterLabel} className="-mb-px flex flex-wrap gap-x-8">
              {filters.map((filter) => {
                const selected = filter.id === active
                return (
                  <button
                    key={filter.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => select(filter.id)}
                    className={cx(
                      'relative min-h-12 py-3 text-[0.9375rem] tracking-[0.01em] transition-colors duration-300',
                      selected ? 'text-charcoal' : 'text-muted hover:text-charcoal',
                    )}
                  >
                    {filter.label}
                    {selected && (
                      <motion.span
                        layoutId="menu-filter"
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-px bg-charcoal"
                        transition={{ duration: 0.45, ease }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
            <p className="pb-3 text-[0.8125rem] text-muted" aria-live="polite">
              {t.count(visibleCount)}
            </p>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease }}
            >
              {groups.map(({ category, items }) => {
                const number = menuCategories.indexOf(category) + 1
                return (
                  <section
                    key={category.id}
                    aria-labelledby={`menu-${category.id}`}
                    className="grid gap-10 border-b border-line py-16 last:border-b-0 lg:grid-cols-12 lg:gap-8 lg:py-24"
                  >
                    <div className="lg:col-span-3">
                      <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)]">
                        <p className="label-caps tabular-nums text-muted">
                          {String(number).padStart(2, '0')}
                        </p>
                        <h2 id={`menu-${category.id}`} className="mt-4 text-subsection font-light">
                          {category.label[locale]}
                        </h2>
                        <p className="mt-4 max-w-[28ch] text-[0.9375rem] leading-relaxed text-muted">
                          {category.intro[locale]}
                        </p>
                      </div>
                    </div>

                    <ul className="grid gap-x-8 gap-y-14 min-[560px]:grid-cols-2 lg:col-span-8 lg:col-start-5 lg:gap-x-12">
                      {items.map((item, i) => (
                        <li key={item.id} className={cx(i % 2 === 1 && 'min-[560px]:mt-20')}>
                          <MenuCard
                            item={item}
                            showCategory={false}
                            sizes="(min-width: 1024px) 30vw, (min-width: 560px) 46vw, 100vw"
                          />
                        </li>
                      ))}
                    </ul>
                  </section>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-y bg-linen" aria-labelledby="menu-note">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <DisplayHeading id="menu-note" size="subsection" lines={t.note.title} />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-[1.0625rem] leading-[1.8] text-muted">
              {t.note.body}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8">
              <TextLink to="/our-story">{t.note.brew}</TextLink>
              <TextLink to="/visit-us">{t.note.visit}</TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
