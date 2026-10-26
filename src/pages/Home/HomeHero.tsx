import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import { ease } from '../../components/animations/motion.ts'
import { ButtonLink } from '../../components/buttons/ButtonLink.tsx'
import { TextLink } from '../../components/buttons/TextLink.tsx'
import { Picture } from '../../components/images/Picture.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export function HomeHero() {
  const t = useCopy(homeCopy).hero
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const drift = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

  return (
    <section ref={ref} className="relative h-svh min-h-[620px] overflow-hidden bg-charcoal text-ivory">
      {/* Image settles in slowly — a soft fade up from the charcoal ground with only a whisper of scale.
          It starts partly visible so the browser can paint it (and count it as LCP) straight away. */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.25, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <motion.div className="absolute inset-x-0 -top-[6%] h-[112%]" style={reduce ? undefined : { y: drift }}>
          <Picture asset="hero-interior" sizes="100vw" priority focal="50% 60%" />
        </motion.div>
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(57,55,47,0.42)_0%,rgba(57,55,47,0)_24%,rgba(57,55,47,0.12)_40%,rgba(57,55,47,0.72)_100%)]"
      />

      {/* A soft shadow keeps small copy legible over the bright windows without darkening the photo. */}
      <div className="shell relative flex h-full flex-col justify-end pb-12 [text-shadow:0_1px_14px_rgba(57,55,47,0.35)] md:pb-16 lg:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <motion.p
              className="label-caps mb-6 text-ivory/80 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease, delay: 0.8 }}
            >
              {t.eyebrow}
            </motion.p>
            <DisplayHeading as="h1" size="hero" lines={t.title} reveal="mount" delay={0.85} />
          </div>

          <motion.div
            className="lg:col-span-4 lg:pb-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease, delay: 1.3 }}
          >
            <p className="max-w-[36ch] text-[1rem] leading-relaxed text-ivory/90 md:text-[1.0625rem]">
              {t.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <ButtonLink to="/menu" tone="light">
                {t.primary}
              </ButtonLink>
              <TextLink to="/our-space">{t.secondary}</TextLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
