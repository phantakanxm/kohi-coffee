import { ButtonLink } from '../../components/buttons/ButtonLink.tsx'
import { PageMeta } from '../../components/layout/PageMeta.tsx'
import { DisplayHeading } from '../../components/typography/DisplayHeading.tsx'
import { Eyebrow } from '../../components/typography/Eyebrow.tsx'
import { notFoundCopy } from '../../content/notFound.ts'
import { useCopy } from '../../i18n/useLocale.ts'

export default function NotFoundPage() {
  const t = useCopy(notFoundCopy)
  return (
    <section className="header-offset section-y" aria-labelledby="not-found-title">
      <PageMeta page="notFound" />
      <div className="shell max-w-3xl">
        <Eyebrow>404</Eyebrow>
        <DisplayHeading as="h1" id="not-found-title" size="page" className="mt-8" lines={t.title} />
        <p className="mt-8 max-w-[40ch] text-[1.0625rem] leading-[1.8] text-muted">{t.body}</p>
        <ButtonLink to="/" className="mt-10">
          {t.cta}
        </ButtonLink>
      </div>
    </section>
  )
}
