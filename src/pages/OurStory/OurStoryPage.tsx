import { motion } from 'motion/react'
import { ease } from '../../components/animations/motion.ts'
import { Reveal } from '../../components/animations/Reveal.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { PageMeta } from '../../components/layout/PageMeta.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { storyCopy } from '../../content/story.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export default function OurStoryPage() {
  const t = useCopy(storyCopy)

  return (
    <>
      <PageMeta page="story" />

      {/* Hero */}
      <section className="header-offset overflow-hidden pb-20 lg:pb-32" aria-labelledby="story-title">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-6 lg:pb-16">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <DisplayHeading
              as="h1"
              id="story-title"
              size="page"
              className="mt-8"
              lines={t.hero.title}
              reveal="mount"
              delay={0.15}
            />
            <motion.p
              className="mt-8 max-w-[42ch] text-[1.0625rem] leading-[1.8] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.6 }}
            >
              {t.hero.body}
            </motion.p>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="lg:bleed-right">
              <ImageFrame asset="coffee-beans" ratio="4 / 5" sizes="(min-width: 1024px) 45vw, 100vw" priority reveal />
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Philosophy */}
      <section className="section-y border-t border-line/70 bg-surface" aria-labelledby="philosophy-heading">
        <div className="shell">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-6">
              <Eyebrow>{t.philosophy.eyebrow}</Eyebrow>
              <DisplayHeading id="philosophy-heading" className="mt-7" lines={t.philosophy.title} />
            </Reveal>
            <Reveal
              className="space-y-5 text-[1.0625rem] leading-[1.8] text-muted lg:col-span-5 lg:col-start-8 lg:pt-16"
              delay={0.1}
            >
              {t.philosophy.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <ol className="mt-20 grid gap-10 border-t border-line pt-10 md:grid-cols-3 md:gap-8 lg:mt-28">
            {t.philosophy.principles.map((principle, i) => (
              <li key={principle.title}>
                <Reveal delay={i * 0.08}>
                  <p className="label-caps tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-4 text-[1.875rem] leading-tight">{principle.title}</h3>
                  <p className="mt-3 max-w-[32ch] text-[0.9375rem] leading-relaxed text-muted">{principle.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>

          <div className="mt-20 lg:mt-28">
            <ImageFrame asset="coffee-bar" ratio="21 / 9" sizes="(min-width: 1440px) 1264px, 100vw" reveal parallax />
          </div>
        </div>
      </section>

      {/* 02 — Origins: words only — the beans already lead the page above. */}
      <section className="section-y" aria-labelledby="origins-heading">
        <div className="shell">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Eyebrow className="justify-center">{t.origins.eyebrow}</Eyebrow>
            <h2 id="origins-heading" className="mt-10 text-subsection font-light italic">
              {t.origins.quote}
            </h2>
          </Reveal>
          <Reveal
            className="mx-auto mt-14 grid max-w-4xl gap-6 text-[1.0625rem] leading-[1.8] text-muted md:grid-cols-2 md:gap-12"
            delay={0.1}
          >
            {t.origins.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 03 — Brewing craft */}
      <section className="section-y bg-linen" aria-labelledby="brewing-heading">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:bleed-left">
              <ImageFrame asset="brewing-equipment" sizes="(min-width: 1024px) 45vw, 100vw" reveal parallax />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-20">
            <Reveal>
              <Eyebrow>{t.brewing.eyebrow}</Eyebrow>
              <DisplayHeading id="brewing-heading" className="mt-7" lines={t.brewing.title} />
              <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-[1.8] text-muted">{t.brewing.body}</p>
            </Reveal>
            <ol className="mt-14 border-t border-charcoal/15">
              {t.brewing.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-charcoal/15 py-5 sm:grid-cols-[3rem_9rem_1fr]"
                >
                  <span className="label-caps tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-[1.625rem] leading-tight">{step.title}</h3>
                  <p className="col-start-2 text-[0.9375rem] text-muted sm:col-start-3">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 04 — Barista craft */}
      <section className="section-y bg-charcoal text-ivory" aria-labelledby="barista-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <ImageFrame
              asset="barista-craft"
              ratio="3 / 2"
              sizes="(min-width: 1024px) 62vw, 100vw"
              frameClassName="bg-[#2f2d27]"
              reveal
            />
          </div>
          <Reveal className="lg:col-span-4 lg:pb-4">
            <Eyebrow tone="light">{t.barista.eyebrow}</Eyebrow>
            <DisplayHeading id="barista-heading" size="subsection" className="mt-7" lines={t.barista.title} />
            <p className="mt-7 max-w-[34ch] text-[1.0625rem] leading-[1.8] text-ivory/75">{t.barista.body}</p>
          </Reveal>
        </div>
      </section>

      {/* 05 — Space connection */}
      <section className="section-y overflow-hidden" aria-labelledby="space-link-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{t.room.eyebrow}</Eyebrow>
            <DisplayHeading id="space-link-heading" className="mt-7" lines={t.room.title} />
            <p className="mt-8 max-w-[40ch] text-[1.0625rem] leading-[1.8] text-muted">{t.room.body}</p>
            <TextLink to="/our-space" className="mt-6">
              {t.room.link}
            </TextLink>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="lg:bleed-right">
              <ImageFrame asset="material-texture" ratio="5 / 6" sizes="(min-width: 1024px) 50vw, 100vw" reveal />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
