/**
 * Locale helpers. Plain functions with no React, so the build-time prerender
 * script can share them with the app.
 *
 * English lives at the root (/menu); Thai lives under /th (/th/menu).
 */

export type Locale = 'en' | 'th'

export type Localized<T = string> = Record<Locale, T>

export const locales: Locale[] = ['en', 'th']

export const localeMeta: Record<Locale, { label: string; name: string; ogLocale: string }> = {
  en: { label: 'EN', name: 'English', ogLocale: 'en_US' },
  th: { label: 'ไทย', name: 'ภาษาไทย', ogLocale: 'th_TH' },
}

const THAI_PREFIX = '/th'

export function localeFromPath(pathname: string): Locale {
  return pathname === THAI_PREFIX || pathname.startsWith(`${THAI_PREFIX}/`) ? 'th' : 'en'
}

/** "/th/menu" → "/menu", "/th" → "/". English paths are returned unchanged. */
export function stripLocale(pathname: string): string {
  if (localeFromPath(pathname) === 'en') return pathname
  return pathname.slice(THAI_PREFIX.length) || '/'
}

/** Maps a site path written in English form ("/menu?category=bakery") to the given locale. */
export function localizePath(path: string, locale: Locale): string {
  if (locale === 'en' || !path.startsWith('/')) return path
  return path === '/' ? THAI_PREFIX : `${THAI_PREFIX}${path.startsWith('/?') ? path.slice(1) : path}`
}
