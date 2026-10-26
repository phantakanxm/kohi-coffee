import { useSyncExternalStore } from 'react'

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolled(threshold: number): boolean {
  return useSyncExternalStore(
    (notify) => {
      window.addEventListener('scroll', notify, { passive: true })
      return () => window.removeEventListener('scroll', notify)
    },
    () => window.scrollY > threshold,
    () => false,
  )
}
