import { Link } from 'react-router'
import { commonCopy } from '../../content/common.ts'
import { navigation } from '../../data/navigation.ts'
import { site } from '../../data/site.ts'
import { useLocale, useLocalize } from '../../i18n/useLocale.ts'
import { Wordmark } from '../navigation/Wordmark.tsx'

export function Footer() {
  const locale = useLocale()
  const localize = useLocalize()
  const t = commonCopy[locale]
  const year = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="shell pt-20 pb-10 lg:pt-28">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Wordmark />
            <p className="mt-6 max-w-[16ch] font-display text-[2.25rem] leading-[1.15] font-light italic lg:text-[2.75rem]">
              {site.tagline[locale]}
            </p>
          </div>

          <nav aria-label={t.footerNav} className="lg:col-span-3">
            <h2 className="label-caps font-sans text-ivory/60">{t.footer.explore}</h2>
            <ul className="mt-5 space-y-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={localize(item.to)}
                    className="inline-flex min-h-10 items-center text-[0.9375rem] text-ivory/85 transition-colors duration-300 hover:text-ivory"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="label-caps font-sans text-ivory/60">{t.footer.findUs}</h2>
            <address className="mt-5 space-y-2 text-[0.9375rem] not-italic text-ivory/85">
              <p>{site.location.en}</p>
              <p lang="th" className="text-ivory/60">
                {site.location.th}
              </p>
              <p className="pt-2">
                <Link
                  to={localize('/visit-us')}
                  className="border-b border-ivory/30 pb-0.5 transition-colors duration-300 hover:border-ivory"
                >
                  {t.footer.addressHours}
                </Link>
              </p>
            </address>

            {site.social.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {site.social.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.9375rem] text-ivory/85 hover:text-ivory"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-ivory/15 pt-8 text-[0.8125rem] text-ivory/60 sm:flex-row sm:items-center sm:justify-between lg:mt-28">
          <p>
            © {year} {site.name}
          </p>
          <p>{t.footer.fictional}</p>
        </div>
      </div>
    </footer>
  )
}
