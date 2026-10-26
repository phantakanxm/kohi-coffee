import { motion } from 'motion/react'
import { ease } from '../../components/animations/motion.ts'
import { Reveal } from '../../components/animations/Reveal.tsx'
import { ButtonLink } from '../../components/buttons/ButtonLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { PageMeta } from '../../components/layout/PageMeta.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { spaceCopy } from '../../content/space.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export default function OurSpacePage() {
  const t = useCopy(spaceCopy)

  return (
    <>
      <PageMeta page="space" />

      {/* Hero — headline first, then the facade at full width */}
      <section aria-labelledby="space-title">
        <div className="shell header-offset grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-20">
          <div className="lg:col-span-8">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <DisplayHeading
              as="h1"
              id="space-title"
              size="page"
              className="mt-8"
              lines={t.hero.title}
              reveal="mount"
              delay={0.15}
            />
          </div>
          <motion.p
            className="max-w-[38ch] text-[1.0625rem] leading-[1.8] text-muted lg:col-span-4 lg:pb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
          >
            {t.hero.body}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.3 }}
        >
          <ImageFrame
            asset="master-exterior"
            ratio="fill"
            sizes="100vw"
            priority
            parallax
            frameClassName="aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[min(82vh,860px)]"
          />
        </motion.div>
      </section>

      {/* 01 — Architectural introduction */}
      <section className="section-y" aria-labelledby="architecture-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{t.architecture.eyebrow}</Eyebrow>
            <DisplayHeading id="architecture-heading" className="mt-7" lines={t.architecture.title} />
            <div className="mt-8 max-w-[42ch] space-y-5 text-[1.0625rem] leading-[1.8] text-muted">
              {t.architecture.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="lg:bleed-right">
              <ImageFrame asset="exterior-alternate" ratio="4 / 3" sizes="(min-width: 1024px) 52vw, 100vw" reveal />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Inside KŌHI */}
      <section className="section-y border-t border-line/70 bg-surface" aria-labelledby="inside-heading">
        <div className="shell">
          <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-8">
            <div className="lg:col-span-6">
              <Eyebrow>{t.inside.eyebrow}</Eyebrow>
              <DisplayHeading id="inside-heading" className="mt-7" lines={t.inside.title} />
            </div>
            <p className="max-w-[38ch] text-[1.0625rem] leading-[1.8] text-muted lg:col-span-4 lg:col-start-9 lg:pb-3">
              {t.inside.body}
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-12 items-start gap-x-4 gap-y-8 md:gap-x-8 lg:mt-20">
            <div className="col-span-12 lg:col-span-8">
              <ImageFrame asset="hero-interior" ratio="3 / 2" sizes="(min-width: 1024px) 62vw, 100vw" reveal parallax />
            </div>
            <figure className="col-span-9 col-start-4 md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9 lg:mt-48">
              <ImageFrame asset="seating-area" ratio="4 / 5" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 48vw, 75vw" reveal />
              <figcaption className="mt-3 text-[0.8125rem] text-muted">{t.inside.caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 03 — The quiet corners */}
      <section className="section-y" aria-labelledby="corners-heading">
        <div className="shell grid gap-12 md:grid-cols-12 md:items-center md:gap-8">
          <div className="md:col-span-7">
            <div className="lg:bleed-left">
              <ImageFrame asset="quiet-corner" ratio="5 / 4" sizes="(min-width: 768px) 60vw, 100vw" reveal parallax />
            </div>
          </div>
          <Reveal className="md:col-span-5 xl:col-span-4 xl:col-start-9">
            <Eyebrow>{t.corners.eyebrow}</Eyebrow>
            <DisplayHeading id="corners-heading" className="mt-7" size="subsection" lines={t.corners.title} />
            <p className="mt-7 max-w-[40ch] text-[1.0625rem] leading-[1.8] text-muted">{t.corners.body}</p>
          </Reveal>
        </div>
      </section>

      {/* 04 — The courtyard */}
      <section className="relative" aria-labelledby="courtyard-heading">
        <ImageFrame
          asset="courtyard"
          ratio="fill"
          sizes="100vw"
          parallax
          frameClassName="aspect-[4/3] md:aspect-auto md:h-[min(92vh,980px)]"
        />
        {/* Panel sits right, over the glass frontage, so the table and chairs stay in view. */}
        <div className="shell md:absolute md:inset-x-0 md:bottom-0 md:flex md:justify-end md:pb-12 lg:pb-16">
          <Reveal className="-mt-12 relative max-w-md bg-ivory p-8 md:mt-0 md:p-10">
            <Eyebrow>{t.courtyard.eyebrow}</Eyebrow>
            <h2 id="courtyard-heading" className="mt-5 text-subsection font-light">
              {t.courtyard.title}
            </h2>
            <p className="mt-4 text-[1rem] leading-[1.75] text-muted">
              {t.courtyard.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 05 — Materials */}
      <section className="section-y" aria-labelledby="materials-heading">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)]">
              <ImageFrame asset="material-texture" sizes="(min-width: 1024px) 38vw, 100vw" reveal />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
            <Reveal>
              <Eyebrow>{t.materials.eyebrow}</Eyebrow>
              <DisplayHeading id="materials-heading" className="mt-7" lines={t.materials.title} />
              <p className="mt-8 max-w-[42ch] text-[1.0625rem] leading-[1.8] text-muted">
                {t.materials.body}
              </p>
            </Reveal>
            <ul className="mt-14 border-t border-line">
              {t.materials.items.map((material, i) => (
                <li key={material.name} className="border-b border-line py-7">
                  <Reveal delay={i * 0.06} y={12}>
                    <h3 className="text-[1.75rem] leading-tight">{material.name}</h3>
                    <p className="mt-2 max-w-[44ch] text-[0.9375rem] leading-relaxed text-muted">{material.text}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 06 — Gallery */}
      <section className="section-y border-t border-line/70 bg-surface" aria-labelledby="gallery-heading">
        <div className="shell">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>{t.gallery.eyebrow}</Eyebrow>
              <h2 id="gallery-heading" className="mt-7 text-section font-light">
                {t.gallery.title}
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-12 md:gap-6 lg:mt-20">
            <div className="grid gap-4 md:col-span-7 md:gap-6">
              <ImageFrame asset="coffee-bar" ratio="3 / 2" sizes="(min-width: 768px) 56vw, 100vw" reveal />
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <ImageFrame asset="signature-coffee" ratio="1 / 1" sizes="(min-width: 768px) 28vw, 50vw" reveal />
                <ImageFrame asset="barista-craft" ratio="1 / 1" focal="62% 50%" sizes="(min-width: 768px) 28vw, 50vw" reveal />
              </div>
            </div>
            <div className="grid gap-4 md:col-span-5 md:gap-6">
              <ImageFrame asset="closing-campaign" ratio="1 / 1" focal="50% 58%" sizes="(min-width: 768px) 40vw, 100vw" reveal />
              <ImageFrame asset="coffee-pastry" ratio="3 / 2" sizes="(min-width: 768px) 40vw, 100vw" reveal />
            </div>
          </div>

          <Reveal className="mt-24 flex flex-col items-start gap-8 border-t border-line pt-12 md:flex-row md:items-center md:justify-between lg:mt-32">
            <p className="font-display text-subsection font-light">{t.gallery.closing}</p>
            <ButtonLink to="/visit-us">{t.gallery.cta}</ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  )
}
