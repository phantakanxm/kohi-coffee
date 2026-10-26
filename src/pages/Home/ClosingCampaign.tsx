import { Reveal } from '../../components/animations/Reveal.tsx'
import { ButtonLink } from '../../components/buttons/ButtonLink.tsx'
import { ImageFrame } from '../../components/images/ImageFrame.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { homeCopy } from '../../content/home.ts'
import { useCopy } from '../../i18n/useLocale.ts'

/**
 * Asset 22 leaves an open band of plaster wall between the potted olive (left ~20%)
 * and the window corner (~52%). From desktop up the copy sits inside that band in
 * charcoal, keeping the architecture on the right clear. Narrower screens can't fit
 * copy in the band, so the copy sits above the full photograph instead.
 */
export function ClosingCampaign() {
  const t = useCopy(homeCopy).closing
  return (
    <section
      className="relative flex flex-col bg-linen lg:block lg:h-[clamp(680px,94vh,1040px)]"
      aria-labelledby="closing-heading"
    >
      <ImageFrame
        asset="closing-campaign"
        ratio="fill"
        sizes="100vw"
        focal="50% 62%"
        frameClassName="order-2 aspect-[1122/1402] lg:absolute lg:inset-0 lg:aspect-auto"
      />

      <div className="shell order-1 py-20 md:py-28 lg:absolute lg:inset-y-0 lg:left-[21%] lg:flex lg:w-[31%] lg:max-w-none lg:items-center lg:px-0 lg:pt-0 lg:pb-[10%]">
        <Reveal>
          <DisplayHeading
            id="closing-heading"
            lines={t.title}
            reveal="view"
            className="lg:text-[clamp(2.5rem,3.5vw,4.5rem)]"
          />
          <p className="mt-6 text-[1.0625rem] leading-[1.8] text-charcoal/80">{t.body}</p>
          <ButtonLink to="/visit-us" className="mt-9">
            {t.cta}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
