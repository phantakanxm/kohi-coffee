/**
 * Page titles, descriptions and preview images — read by <PageMeta> in the app
 * and by scripts/prerender.ts, which bakes them into static HTML for link previews.
 */
import type { Locale, Localized } from '../i18n/locale.ts'
import type { AssetId } from '../data/assets.ts'
import { site } from '../data/site.ts'

export type PageKey = 'home' | 'menu' | 'story' | 'space' | 'visit' | 'notFound'

interface PageMetaEntry {
  /** English-form path. Omitted for pages that have no fixed URL. */
  path?: string
  image: AssetId
  /** Omitted on the home page, which uses the brand name and tagline. */
  title?: Localized
  description: Localized
}

export const pageMeta: Record<PageKey, PageMetaEntry> = {
  home: {
    path: '/',
    image: 'hero-interior',
    description: site.description,
  },
  menu: {
    path: '/menu',
    image: 'signature-coffee',
    title: { en: 'Menu', th: 'เมนู' },
    description: {
      en: 'Espresso, hand brews, iced matcha and a few bakery treats — here’s what’s on at KŌHI / COFFEE.',
      th: 'เอสเพรสโซ กาแฟดริป มัทฉะเย็น แล้วก็ขนมอีกนิดหน่อย มาดูกันว่า KŌHI / COFFEE มีอะไรบ้าง',
    },
  },
  story: {
    path: '/our-story',
    image: 'coffee-beans',
    title: { en: 'Our Story', th: 'เรื่องของเรา' },
    description: {
      en: 'Why we do things slowly at KŌHI / COFFEE — good beans, brewing by hand, one cup at a time.',
      th: 'ทำไม KŌHI / COFFEE ถึงชอบทำอะไรช้า ๆ เมล็ดดี ๆ ดริปมือ ชงทีละแก้ว',
    },
  },
  space: {
    path: '/our-space',
    image: 'master-exterior',
    title: { en: 'Our Space', th: 'บรรยากาศร้าน' },
    description: {
      en: 'Take a look inside KŌHI / COFFEE — sunny plaster walls, oak tables, a garden courtyard and plenty of quiet corners in Chiang Mai.',
      th: 'มาดูข้างใน KŌHI / COFFEE ผนังปูนรับแดด โต๊ะไม้โอ๊ก ลานสวน แล้วก็มุมเงียบ ๆ อีกเพียบ',
    },
  },
  visit: {
    path: '/visit-us',
    image: 'exterior-alternate',
    title: { en: 'Visit Us', th: 'มาที่ร้าน' },
    description: {
      en: 'Come visit KŌHI / COFFEE in Chiang Mai, Thailand. Our address, hours and contact details are coming soon.',
      th: 'แวะมาหา KŌHI / COFFEE ที่เชียงใหม่ ที่อยู่ เวลาเปิด และช่องทางติดต่อ เดี๋ยวมาแจ้งเร็ว ๆ นี้',
    },
  },
  notFound: {
    image: 'quiet-corner',
    title: { en: 'Page not found', th: 'ไม่พบหน้านี้' },
    description: { en: 'We couldn’t find that page.', th: 'หาหน้านี้ไม่เจอ' },
  },
}

export function pageTitle(page: PageKey, locale: Locale): string {
  const title = pageMeta[page].title?.[locale]
  return title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline[locale]}`
}
