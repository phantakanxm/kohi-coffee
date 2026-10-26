import type { Localized } from '../i18n/locale.ts'
import type { AssetId } from './assets.ts'

export type MenuCategoryId = 'coffee' | 'non-coffee' | 'bakery'

export interface MenuCategory {
  id: MenuCategoryId
  label: Localized
  intro: Localized
}

export interface MenuItem {
  id: string
  /** Drink and pastry names stay in English on both languages, as on most Thai café menus. */
  name: string
  category: MenuCategoryId
  description: Localized
  image: AssetId
  /** Only set once pricing is approved — cards omit the price when absent. */
  price?: string
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'coffee',
    label: { en: 'Coffee', th: 'กาแฟ' },
    intro: {
      en: 'Espresso drinks and hand brews, made one at a time.',
      th: 'เอสเพรสโซกับกาแฟดริป ชงทีละแก้ว',
    },
  },
  {
    id: 'non-coffee',
    label: { en: 'Non-Coffee', th: 'ชาและอื่น ๆ' },
    intro: {
      en: 'For a slow afternoon, or an easy start.',
      th: 'สำหรับบ่ายชิล ๆ หรือเช้าที่อยากเริ่มเบา ๆ',
    },
  },
  {
    id: 'bakery',
    label: { en: 'Bakery', th: 'เบเกอรี่' },
    intro: {
      en: 'A few little treats to go with your cup.',
      th: 'ขนมไม่กี่อย่าง ไว้กินคู่กาแฟ',
    },
  },
]

export const menuItems: MenuItem[] = [
  {
    id: 'flat-white',
    name: 'Flat White',
    category: 'coffee',
    description: {
      en: 'Espresso with a thin layer of silky milk. Small, smooth, and still all about the coffee.',
      th: 'เอสเพรสโซกับนมสตีมเนียน ๆ ชั้นบาง ๆ แก้วเล็ก นุ่ม แต่ยังได้รสกาแฟเต็ม ๆ',
    },
    image: 'flat-white',
  },
  {
    id: 'iced-latte',
    name: 'Iced Latte',
    category: 'coffee',
    description: {
      en: 'Espresso over ice and cold milk. Smooth, easy, and pretty much perfect on a hot afternoon.',
      th: 'เอสเพรสโซราดบนน้ำแข็งกับนมเย็น ๆ ดื่มง่าย นุ่ม ๆ เข้ากับบ่ายร้อน ๆ สุด ๆ',
    },
    image: 'iced-latte',
  },
  {
    id: 'iced-americano',
    name: 'Iced Americano',
    category: 'coffee',
    description: {
      en: 'Espresso, cold water, lots of ice. Clean, bright and properly refreshing.',
      th: 'เอสเพรสโซ น้ำเย็น น้ำแข็งเยอะ ๆ รสสะอาด สดชื่น ดื่มแล้วตื่นเลย',
    },
    image: 'iced-americano',
  },
  {
    id: 'hand-brew',
    name: 'Hand Brew Coffee',
    category: 'coffee',
    description: {
      en: 'Poured by hand, one cup at a time. Ask us what we’re brewing today — we love talking about it.',
      th: 'ดริปมือทีละแก้ว ถามได้เลยว่าวันนี้ชงเมล็ดอะไร เราชอบคุยเรื่องนี้มาก',
    },
    image: 'hand-brew',
  },
  {
    id: 'iced-matcha-latte',
    name: 'Iced Matcha Latte',
    category: 'non-coffee',
    description: {
      en: 'Whisked matcha over ice and milk. Soft, grassy and super mellow.',
      th: 'มัทฉะตีจนเนียน ราดบนนมกับน้ำแข็ง หอมชา นุ่ม ๆ ละมุนมาก',
    },
    image: 'iced-matcha-latte',
  },
  {
    id: 'butter-croissant',
    name: 'Butter Croissant',
    category: 'bakery',
    description: {
      en: 'Flaky, buttery, golden. Best with a coffee and nowhere you need to be.',
      th: 'กรอบนอก เนยหอม เป็นชั้น ๆ อร่อยสุดตอนกินคู่กาแฟ ในวันที่ไม่ต้องรีบไปไหน',
    },
    image: 'butter-croissant',
  },
  {
    id: 'basque-cheesecake',
    name: 'Basque Cheesecake',
    category: 'bakery',
    description: {
      en: 'Creamy in the middle, deeply caramelized on top. Simple, rich, and worth sticking around for.',
      th: 'เนื้อในนุ่มครีมมี่ หน้าไหม้คาราเมลหอม ๆ เรียบง่ายแต่เข้มข้น กินแล้วอยากนั่งต่ออีกหน่อย',
    },
    image: 'basque-cheesecake',
  },
]

export function menuItem(id: string): MenuItem {
  const item = menuItems.find((m) => m.id === id)
  if (!item) throw new Error(`Unknown menu item: ${id}`)
  return item
}

export function isMenuCategory(value: string | null): value is MenuCategoryId {
  return menuCategories.some((c) => c.id === value)
}
