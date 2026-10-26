import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { pageMeta, pageTitle, type PageKey } from '../../content/meta.ts'
import { assets, largestJpeg } from '../../data/assets.ts'
import { site } from '../../data/site.ts'
import { localeMeta } from '../../i18n/locale.ts'
import { useLocale } from '../../i18n/useLocale.ts'

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.append(tag)
  }
  tag.content = content
}

/**
 * Keeps the title and social tags in sync during client-side navigation.
 * The same values are baked into static HTML at build time by scripts/prerender.ts.
 */
export function PageMeta({ page }: { page: PageKey }) {
  const { pathname } = useLocation()
  const locale = useLocale()

  useEffect(() => {
    const entry = pageMeta[page]
    const title = pageTitle(page, locale)
    const asset = assets[entry.image]
    const image = largestJpeg(asset)

    document.title = title
    setMeta('name', 'description', entry.description[locale])
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', entry.description[locale])
    setMeta('property', 'og:locale', localeMeta[locale].ogLocale)
    setMeta('property', 'og:image', site.url ? new URL(image, site.url).href : image)
    setMeta('property', 'og:image:alt', asset.alt[locale])

    if (site.url) {
      const href = new URL(pathname, site.url).href
      setMeta('property', 'og:url', href)
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = href
    }
  }, [page, locale, pathname])

  return null
}
