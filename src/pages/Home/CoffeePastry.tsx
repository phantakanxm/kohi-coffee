import { Reveal } from '../../components/animations/Reveal.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export function CoffeePastry() {
  const t = useCopy(homeCopy).pastry
  return (
    <section className="section-y bg-linen" aria-labelledby="pastry-heading">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-8">
          <div className="lg:bleed-left">
            <ImageFrame asset="coffee-pastry" ratio="16 / 11" sizes="(min-width: 1024px) 72vw, 100vw" reveal parallax />
          </div>
        </div>

        <Reveal className="lg:col-span-4 lg:col-start-9 lg:pb-6 xl:pl-6">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <DisplayHeading id="pastry-heading" className="mt-7" size="subsection" lines={t.title} />
          <p className="mt-7 max-w-[34ch] text-[1.0625rem] leading-[1.8] text-muted">
            {t.body}
          </p>
          <TextLink to="/menu?category=bakery" className="mt-6">
            {t.link}
          </TextLink>
        </Reveal>
      </div>
    </section>
  )
}
