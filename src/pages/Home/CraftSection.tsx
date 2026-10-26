import { Reveal } from '../../components/animations/Reveal.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export function CraftSection() {
  const t = useCopy(homeCopy).craft
  return (
    <section className="section-y border-t border-line/70 bg-surface" aria-labelledby="craft-heading">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)]">
            <ImageFrame asset="coffee-beans" sizes="(min-width: 1024px) 38vw, 100vw" reveal />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <DisplayHeading id="craft-heading" className="mt-7" lines={t.title} />
            <div className="mt-8 max-w-[44ch] space-y-5 text-[1.0625rem] leading-[1.8] text-muted">
              {t.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <TextLink to="/our-story" className="mt-7">
              {t.link}
            </TextLink>
          </Reveal>

          <div className="mt-16 lg:mt-24 lg:bleed-right">
            <ImageFrame asset="barista-craft" ratio="3 / 2" sizes="(min-width: 1024px) 52vw, 100vw" reveal parallax />
          </div>
        </div>
      </div>
    </section>
  )
}
