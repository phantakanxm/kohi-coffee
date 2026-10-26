import { Reveal } from '../../components/animations/Reveal.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { MenuCard } from '../../components/cards/MenuCard.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { menuItem } from '../../data/menu.ts'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'

const favorites = ['flat-white', 'iced-latte', 'hand-brew'].map(menuItem)

export function SignatureCoffee() {
  const t = useCopy(homeCopy).favorites
  return (
    <section className="section-y border-t border-line/70 bg-surface" aria-labelledby="favorites-heading">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <DisplayHeading id="favorites-heading" className="mt-7" lines={t.title} />
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:pb-3" delay={0.1}>
            <p className="max-w-[36ch] text-[1rem] leading-[1.8] text-muted">
              {t.body}
            </p>
            <TextLink to="/menu" className="mt-5">
              {t.link}
            </TextLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 md:mt-24 lg:grid-cols-3 lg:gap-x-12">
          {favorites.map((item, i) => (
            <li key={item.id} className={cx(i === 1 && 'sm:mt-24', i === 2 && 'lg:mt-10')}>
              <Reveal delay={i * 0.08}>
                <MenuCard
                  item={item}
                  index={i + 1}
                  to={`/menu?category=${item.category}`}
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
