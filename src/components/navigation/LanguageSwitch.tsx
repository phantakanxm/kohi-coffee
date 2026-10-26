import { Link, useLocation } from 'react-router'
import { commonCopy } from '../../content/common.ts'
import { localeFromPath, localeMeta, locales, localizePath, stripLocale } from '../../i18n/locale.ts'
import { cx } from '../../utils/cx.ts'

/** EN / ไทย — links to the same page (and filter) in the other language, keeping scroll position. */
export function LanguageSwitch({ className }: { className?: string }) {
  const { pathname, search } = useLocation()
  const current = localeFromPath(pathname)
  const base = stripLocale(pathname)

  return (
    <nav aria-label={commonCopy[current].language} className={className}>
      <ul className="flex items-center text-[0.8125rem]">
        {locales.map((locale, i) => (
          <li key={locale} className="flex items-center">
            {i > 0 && (
              <span aria-hidden className="mx-1 opacity-40">
                /
              </span>
            )}
            <Link
              to={localizePath(base, locale) + search}
              preventScrollReset
              lang={locale}
              hrefLang={locale}
              aria-label={localeMeta[locale].name}
              aria-current={locale === current ? 'true' : undefined}
              className={cx(
                'inline-flex min-h-11 min-w-8 items-center justify-center px-1 transition-opacity duration-300',
                locale === current ? 'opacity-100' : 'opacity-75 hover:opacity-100',
              )}
            >
              {localeMeta[locale].label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
