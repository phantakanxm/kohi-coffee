/**
 * Business details. Anything set to `null` is unconfirmed and renders as a
 * clearly-labelled placeholder — fill these in once real details are approved.
 */

import type { Localized } from '../i18n/locale.ts'

export interface OpeningHours {
  days: string
  time: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface SiteInfo {
  name: string
  shortName: string
  tagline: Localized
  description: Localized
  /** City and country, e.g. "Chiang Mai, Thailand". */
  location: Localized
  address: string | null
  hours: OpeningHours[] | null
  email: string | null
  phone: string | null
  /** An approved map link. "Get directions" only appears when this is set. */
  mapUrl: string | null
  social: SocialLink[]
  /**
   * Production origin, used for canonical URLs and absolute Open Graph links.
   * The prerender step also reads SITE_URL from the environment.
   */
  url: string | null
}

export const site: SiteInfo = {
  name: 'KŌHI / COFFEE',
  shortName: 'KŌHI',
  tagline: {
    en: 'Slow mornings. Thoughtful coffee.',
    th: 'เช้าช้า ๆ กับกาแฟที่ตั้งใจชง',
  },
  description: {
    en: 'KŌHI / COFFEE is a little specialty coffee café in Chiang Mai, Thailand — good coffee, quiet tables, and no rush.',
      th: 'KŌHI / COFFEE ร้านกาแฟสเปเชียลตี้เล็ก ๆ ในเชียงใหม่ กาแฟอร่อย โต๊ะเงียบ ๆ แล้วก็ไม่มีใครเร่ง',
  },
  location: {
    en: 'Chiang Mai, Thailand',
    th: 'เชียงใหม่ ประเทศไทย',
  },
  address: null,
  hours: null,
  email: null,
  phone: null,
  mapUrl: null,
  social: [],
  url: null,
}
