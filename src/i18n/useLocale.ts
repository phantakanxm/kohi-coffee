import { useLocation } from 'react-router'
import { localeFromPath, localizePath, type Locale, type Localized } from './locale.ts'

export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname)
}

/** Returns a function that maps English-form site paths to the current locale. */
export function useLocalize(): (path: string) => string {
  const locale = useLocale()
  return (path) => localizePath(path, locale)
}

/** Picks the current locale's entry from a { en, th } object. */
export function useCopy<T>(copy: Localized<T>): T {
  return copy[useLocale()]
}
