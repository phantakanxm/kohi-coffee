import { MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { ease } from '../../components/animations/motion.ts'
import { Reveal } from '../../components/animations/Reveal.tsx'
import { ButtonLink } from '../../components/buttons/ButtonLink.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { PageMeta } from '../../components/layout/PageMeta.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { visitCopy } from '../../content/visit.ts'
import { site } from '../../data/site.ts'
import { useLocale } from '../../i18n/useLocale.ts'

function Placeholder({ children, badge }: { children: ReactNode; badge: string }) {
  return (
    <>
      <p className="text-[1.0625rem] text-charcoal/70">{children}</p>
      <p className="label-caps mt-3 inline-flex rounded-full border border-dashed border-oak px-3 py-1 text-muted">
        {badge}
      </p>
    </>
  )
}

function InfoBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border-t border-line pt-6">
      <h3 className="label-caps font-sans text-muted">{label}</h3>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default function VisitUsPage() {
  const locale = useLocale()
  const t = visitCopy[locale]
  const otherLocale = locale === 'en' ? 'th' : 'en'

  return (
    <>
      <PageMeta page="visit" />

      {/* Hero */}
      <section className="overflow-hidden" aria-labelledby="visit-title">
        <div className="shell grid gap-12 lg:min-h-[min(100svh,980px)] lg:grid-cols-12 lg:gap-8">
          <div className="header-offset flex flex-col justify-end lg:col-span-5 lg:pb-20">
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <DisplayHeading
              as="h1"
              id="visit-title"
              size="page"
              className="mt-8 lg:text-[clamp(2.75rem,4.2vw,5.75rem)]"
              lines={t.hero.title}
              reveal="mount"
              delay={0.15}
            />
            <motion.p
              className="mt-8 max-w-[40ch] text-[1.0625rem] leading-[1.8] text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.6 }}
            >
              {t.hero.body}
            </motion.p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-(--header-h)">
            <div className="h-full lg:bleed-right">
              <ImageFrame
                asset="exterior-alternate"
                ratio="fill"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                focal="58% 50%"
                frameClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Information */}
      <section className="section-y" aria-labelledby="details-heading">
        <div className="shell">
          <h2 id="details-heading" className="sr-only">
            {t.detailsHeading}
          </h2>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            <InfoBlock label={t.labels.location}>
              <p className="text-[1.0625rem]">{site.location[locale]}</p>
              <p lang={otherLocale} className="mt-1 text-[0.9375rem] text-muted">
                {site.location[otherLocale]}
              </p>
            </InfoBlock>

            <InfoBlock label={t.labels.address}>
              {site.address ? (
                <address className="text-[1.0625rem] not-italic">{site.address}</address>
              ) : (
                <Placeholder badge={t.placeholders.badge}>{t.placeholders.address}</Placeholder>
              )}
            </InfoBlock>

            <InfoBlock label={t.labels.hours}>
              {site.hours ? (
                <dl className="space-y-1 text-[1.0625rem]">
                  {site.hours.map((row) => (
                    <div key={row.days} className="flex justify-between gap-6">
                      <dt>{row.days}</dt>
                      <dd className="tabular-nums text-muted">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <Placeholder badge={t.placeholders.badge}>{t.placeholders.hours}</Placeholder>
              )}
            </InfoBlock>

            <InfoBlock label={t.labels.contact}>
              {site.email || site.phone ? (
                <ul className="space-y-1 text-[1.0625rem]">
                  {site.email && (
                    <li>
                      <a className="border-b border-current/30 hover:border-current" href={`mailto:${site.email}`}>
                        {site.email}
                      </a>
                    </li>
                  )}
                  {site.phone && (
                    <li>
                      <a className="border-b border-current/30 hover:border-current" href={`tel:${site.phone}`}>
                        {site.phone}
                      </a>
                    </li>
                  )}
                </ul>
              ) : (
                <Placeholder badge={t.placeholders.badge}>{t.placeholders.contact}</Placeholder>
              )}
            </InfoBlock>
          </div>

          {/* Map — a deliberate placeholder until an approved location exists. */}
          <Reveal className="mt-20 lg:mt-28">
            <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-linen sm:aspect-[16/9] lg:aspect-[21/8]">
              <svg aria-hidden className="absolute inset-0 h-full w-full text-line" preserveAspectRatio="none" viewBox="0 0 100 40">
                <g fill="none" stroke="currentColor" strokeWidth="0.12">
                  <path d="M-5 30 C 20 22, 35 34, 55 24 S 90 14, 105 20" />
                  <path d="M-5 24 C 18 16, 38 28, 58 18 S 88 8, 105 13" />
                  <path d="M-5 36 C 22 29, 40 40, 60 31 S 92 22, 105 28" />
                  <path d="M-5 12 C 15 6, 40 16, 62 8 S 90 2, 105 6" />
                  <path d="M30 -5 C 34 10, 26 22, 34 45" />
                  <path d="M72 -5 C 68 12, 76 26, 70 45" />
                </g>
              </svg>
              <div className="relative max-w-sm px-6 text-center">
                <MapPin aria-hidden size={22} strokeWidth={1.25} className="mx-auto text-sage" />
                <p className="mt-5 font-display text-[2rem] leading-tight font-light">{site.location[locale]}</p>
                {site.mapUrl ? (
                  <ButtonLink to={site.mapUrl} external className="mt-7">
                    {t.map.directions}
                  </ButtonLink>
                ) : (
                  <p className="mt-3 text-[0.9375rem] text-muted">{t.map.soon}</p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* When you arrive — what the café looks like from the street */}
      <section className="section-y border-t border-line/70 bg-surface" aria-labelledby="arrival-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <div className="lg:bleed-left">
              <ImageFrame asset="master-exterior" ratio="3 / 2" sizes="(min-width: 1024px) 62vw, 100vw" reveal parallax />
            </div>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <Eyebrow>{t.arrival.eyebrow}</Eyebrow>
            <DisplayHeading id="arrival-heading" className="mt-7" size="subsection" lines={t.arrival.title} />
            <p className="mt-7 max-w-[38ch] text-[1.0625rem] leading-[1.8] text-muted">{t.arrival.body}</p>
          </Reveal>
        </div>
      </section>

      {/* Before you come */}
      <section className="section-y" aria-labelledby="notes-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <Eyebrow>{t.notes.eyebrow}</Eyebrow>
            <DisplayHeading id="notes-heading" className="mt-7" size="subsection" lines={t.notes.title} />
          </Reveal>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8 lg:col-span-8">
            {t.notes.items.map((note, i) => (
              <li key={note.title}>
                <Reveal delay={i * 0.08}>
                  <p className="label-caps tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-4 text-[1.625rem] leading-tight">{note.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{note.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="section-y border-t border-line/70 bg-linen" aria-labelledby="contact-heading">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <Reveal className="lg:col-span-6">
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <DisplayHeading id="contact-heading" className="mt-7" lines={t.contact.title} />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pb-3" delay={0.1}>
            <p className="text-[1.0625rem] leading-[1.8] text-muted">{t.contact.body}</p>
            <div className="mt-6 flex flex-wrap gap-x-8">
              <TextLink to="/menu">{t.contact.menu}</TextLink>
              <TextLink to="/our-space">{t.contact.space}</TextLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
