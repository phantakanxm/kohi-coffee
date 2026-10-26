import { Reveal } from '../../components/animations/Reveal.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export function SpacePreview() {
  const t = useCopy(homeCopy).space
  return (
    <section className="section-y overflow-hidden" aria-labelledby="space-heading">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4 lg:pt-10">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <DisplayHeading id="space-heading" className="mt-7" lines={t.title} />
            <p className="mt-8 max-w-[38ch] text-[1.0625rem] leading-[1.8] text-muted">
              {t.body}
            </p>
            <TextLink to="/our-space" className="mt-6">
              {t.link}
            </TextLink>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="lg:bleed-right">
              <ImageFrame asset="seating-area" ratio="3 / 2" sizes="(min-width: 1024px) 62vw, 100vw" reveal parallax />
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 items-start gap-x-4 gap-y-8 md:mt-14 md:gap-x-8">
          <figure className="col-span-8 md:col-span-5 lg:col-span-4 lg:-mt-24">
            <ImageFrame asset="quiet-corner" ratio="4 / 5" sizes="(min-width: 1024px) 30vw, 66vw" reveal />
            <figcaption className="mt-3 text-[0.8125rem] text-muted">{t.quietCaption}</figcaption>
          </figure>
          <figure className="col-span-10 col-start-3 md:col-span-7 md:col-start-6 md:mt-24 lg:col-span-6 lg:col-start-6 lg:mt-28">
            <ImageFrame asset="courtyard" ratio="16 / 10" sizes="(min-width: 1024px) 50vw, (min-width: 768px) 58vw, 84vw" reveal parallax />
            <figcaption className="mt-3 text-[0.8125rem] text-muted">{t.courtyardCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
