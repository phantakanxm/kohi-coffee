import { Reveal } from '../../components/animations/Reveal.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export function BrandIntro() {
  const t = useCopy(homeCopy).intro
  return (
    <section className="section-y" aria-labelledby="intro-heading">
      <div className="shell grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <DisplayHeading id="intro-heading" className="mt-7" lines={t.title} />
          <p className="mt-8 max-w-[38ch] text-[1.0625rem] leading-[1.8] text-muted">
            {t.body}
          </p>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="lg:bleed-right">
            <ImageFrame
              asset="morning-light"
              ratio="3 / 2"
              sizes="(min-width: 1024px) 62vw, 100vw"
              reveal
              parallax
            />
          </div>
          <p className="mt-4 text-[0.8125rem] text-muted">{t.caption}</p>
        </div>
      </div>
    </section>
  )
}
