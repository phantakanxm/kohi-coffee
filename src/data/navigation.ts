import type { Localized } from '../i18n/locale.ts'

export interface NavItem {
  label: Localized
  /** English-form path; links localise it for the current language. */
  to: string
}

export const navigation: NavItem[] = [
  { label: { en: 'Home', th: 'หน้าแรก' }, to: '/' },
  { label: { en: 'Menu', th: 'เมนู' }, to: '/menu' },
  { label: { en: 'Our Story', th: 'เรื่องของเรา' }, to: '/our-story' },
  { label: { en: 'Our Space', th: 'บรรยากาศร้าน' }, to: '/our-space' },
  { label: { en: 'Visit Us', th: 'มาที่ร้าน' }, to: '/visit-us' },
]
