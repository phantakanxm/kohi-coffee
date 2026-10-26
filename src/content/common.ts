import type { Localized } from '../i18n/locale.ts'

const en = {
  skipLink: 'Skip to content',
  homeLabel: 'KŌHI / COFFEE — home',
  mainNav: 'Main',
  mobileNav: 'Site navigation',
  footerNav: 'Footer',
  openMenu: 'Open navigation',
  closeMenu: 'Close navigation',
  language: 'Language',
  headerLocation: 'Chiang Mai, Thailand',
  footer: {
    explore: 'Explore',
    findUs: 'Find us',
    addressHours: 'Address & hours',
    fictional: 'A made-up café, designed as a portfolio piece.',
  },
}

const th: typeof en = {
  skipLink: 'ข้ามไปที่เนื้อหา',
  homeLabel: 'KŌHI / COFFEE — หน้าแรก',
  mainNav: 'เมนูหลัก',
  mobileNav: 'เมนูนำทาง',
  footerNav: 'ลิงก์ส่วนท้าย',
  openMenu: 'เปิดเมนู',
  closeMenu: 'ปิดเมนู',
  language: 'เลือกภาษา',
  headerLocation: 'เชียงใหม่',
  footer: {
    explore: 'สำรวจ',
    findUs: 'ไปที่ร้าน',
    addressHours: 'ที่อยู่และเวลาเปิด',
    fictional: 'ร้านกาแฟสมมติ ทำขึ้นเป็นผลงานพอร์ตโฟลิโอ',
  },
}

export const commonCopy: Localized<typeof en> = { en, th }
