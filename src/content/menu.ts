import type { Localized } from '../i18n/locale.ts'

const en = {
  eyebrow: 'The menu',
  title: ['Something good', 'in every cup.'],
  body: 'Coffee, a little matcha, and a couple of treats to go with them.',
  itemsLabel: 'Menu items',
  filterLabel: 'Filter the menu by category',
  all: 'All',
  count: (n: number) => `${n} ${n === 1 ? 'item' : 'items'}`,
  note: {
    title: ['A short menu,', 'on purpose.'],
    body: 'We keep it small so every cup gets our full attention. Prices are coming soon — we’ll pop them up here once they’re set.',
    brew: 'How We Brew',
    visit: 'Plan a Visit',
  },
}

const th: typeof en = {
  eyebrow: 'เมนู',
  title: ['มีอะไรอร่อย ๆ', 'ในทุกแก้ว'],
  body: 'กาแฟ มัทฉะนิดหน่อย แล้วก็ขนมอีกไม่กี่อย่างไว้กินคู่กัน',
  itemsLabel: 'รายการเมนู',
  filterLabel: 'กรองเมนูตามหมวด',
  all: 'ทั้งหมด',
  count: (n: number) => `${n} รายการ`,
  note: {
    title: ['เมนูไม่เยอะ', 'ตั้งใจเลย'],
    body: 'เราตั้งใจให้เมนูน้อย ๆ จะได้ใส่ใจได้ทุกแก้ว ส่วนราคา เดี๋ยวยืนยันเสร็จแล้วจะมาอัปเดตตรงนี้นะ',
    brew: 'ดูว่าเราชงยังไง',
    visit: 'วางแผนมาที่ร้าน',
  },
}

export const menuCopy: Localized<typeof en> = { en, th }
