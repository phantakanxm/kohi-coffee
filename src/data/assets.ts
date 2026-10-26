/**
 * Central registry for the 22 art-directed KŌHI / COFFEE photographs.
 *
 * `source` is the original file in /assets-source. `npm run images` reads this
 * file and writes AVIF / WebP / JPEG variants to /public/images/<id>/<width>.<ext>.
 * Components never reference image paths directly — they ask for an asset id.
 */

import type { Localized } from '../i18n/locale.ts'

export type AssetGroup = 'architecture' | 'lifestyle' | 'menu' | 'editorial' | 'campaign'

export interface ImageAsset {
  id: AssetId
  number: number
  name: string
  group: AssetGroup
  source: string
  /** Public directory holding the generated variants. */
  path: string
  alt: Localized
  usage: string
  width: number
  height: number
  /** CSS object-position used when the frame crops the photograph. */
  focal: string
}

export type AssetId =
  | 'master-exterior'
  | 'hero-interior'
  | 'seating-area'
  | 'coffee-bar'
  | 'courtyard'
  | 'exterior-alternate'
  | 'morning-light'
  | 'barista-craft'
  | 'signature-coffee'
  | 'coffee-pastry'
  | 'quiet-corner'
  | 'iced-latte'
  | 'iced-americano'
  | 'flat-white'
  | 'iced-matcha-latte'
  | 'hand-brew'
  | 'butter-croissant'
  | 'basque-cheesecake'
  | 'coffee-beans'
  | 'brewing-equipment'
  | 'material-texture'
  | 'closing-campaign'

type AssetInput = Omit<ImageAsset, 'path'>

const LANDSCAPE = { width: 1536, height: 1024 }
const PORTRAIT = { width: 1122, height: 1402 }

const list: AssetInput[] = [
  // Architecture
  {
    id: 'master-exterior',
    number: 1,
    name: 'Master Exterior',
    group: 'architecture',
    source: 'Warm Minimalist KŌHI Café Facade.png',
    alt: {
      en: 'The KŌHI / COFFEE facade at street level: an ivory plaster pavilion with a low timber roof, tall glass windows and a young tree shading the entrance.',
      th: 'หน้าร้าน KŌHI / COFFEE จากริมถนน อาคารผนังปูนสีงาช้าง หลังคาไม้ยื่นต่ำ หน้าต่างกระจกบานสูง และต้นไม้ต้นเล็กให้ร่มตรงทางเข้า',
    },
    usage: 'Main architectural reference — Our Space hero',
    ...LANDSCAPE,
    focal: '55% 55%',
  },
  {
    id: 'hero-interior',
    number: 2,
    name: 'Hero Interior',
    group: 'architecture',
    source: 'Sunlit Scandinavian Café Interior.png',
    alt: {
      en: 'The café interior in morning light, with oak tables, woven chairs, a long window wall and the coffee bar along the back.',
      th: 'ภายในร้านยามเช้า โต๊ะไม้โอ๊ก เก้าอี้สาน ผนังกระจกยาวทั้งแนว และบาร์กาแฟอยู่ด้านหลัง',
    },
    usage: 'Home hero, Our Space interior',
    ...LANDSCAPE,
    focal: '50% 55%',
  },
  {
    id: 'seating-area',
    number: 3,
    name: 'Seating Area',
    group: 'architecture',
    source: 'Sunlit Minimalist Café Interior.png',
    alt: {
      en: 'A bench seat with linen cushions runs beneath a wall of windows, beside oak tables and chairs.',
      th: 'ม้านั่งยาววางเบาะผ้าลินินใต้แนวหน้าต่าง ข้าง ๆ เป็นโต๊ะและเก้าอี้ไม้โอ๊ก',
    },
    usage: 'Home space section, Our Space interior',
    ...LANDSCAPE,
    focal: '40% 60%',
  },
  {
    id: 'coffee-bar',
    number: 4,
    name: 'Coffee Bar Detail',
    group: 'architecture',
    source: 'Sunlit Scandinavian Café Bar.png',
    alt: {
      en: 'The coffee bar: an espresso machine and grinders on a pale stone counter facing the windows.',
      th: 'บาร์กาแฟ มีเครื่องชงเอสเพรสโซและเครื่องบดวางบนเคาน์เตอร์หินสีอ่อนหันออกหน้าต่าง',
    },
    usage: 'Craftsmanship — Our Story, gallery',
    ...LANDSCAPE,
    focal: '40% 55%',
  },
  {
    id: 'courtyard',
    number: 5,
    name: 'Courtyard',
    group: 'architecture',
    source: 'Sunlit Minimalist Café Garden Patio.png',
    alt: {
      en: 'The garden courtyard: a round oak table and two chairs on gravel, ferns and tropical plants around the glass frontage.',
      th: 'ลานสวนด้านนอก โต๊ะไม้กลมกับเก้าอี้สองตัวบนพื้นกรวด รายล้อมด้วยเฟิร์นและต้นไม้ใบใหญ่หน้าแนวกระจก',
    },
    usage: 'Home space section, Our Space courtyard',
    ...LANDSCAPE,
    focal: '35% 60%',
  },
  {
    id: 'exterior-alternate',
    number: 6,
    name: 'Exterior Alternate',
    group: 'architecture',
    source: 'Sunlit Minimalist Café Garden Corner.png',
    alt: {
      en: 'The café seen from the corner of the garden, its timber-framed windows open onto outdoor tables beneath the trees.',
      th: 'ร้านมองจากมุมสวน หน้าต่างกรอบไม้เปิดออกสู่โต๊ะด้านนอกใต้ร่มไม้',
    },
    usage: 'Our Space introduction, Visit Us hero',
    ...LANDSCAPE,
    focal: '55% 50%',
  },

  // Lifestyle
  {
    id: 'morning-light',
    number: 7,
    name: 'Morning Light',
    group: 'lifestyle',
    source: 'Sunlit Latte by the Window.png',
    alt: {
      en: 'A single cup of coffee on an oak table by an open window, dappled with morning light.',
      th: 'กาแฟหนึ่งแก้ววางบนโต๊ะไม้โอ๊กริมหน้าต่าง มีเงาแสงเช้าลอดใบไม้ตกกระทบ',
    },
    usage: 'Home brand introduction, Our Space quiet corners',
    ...LANDSCAPE,
    focal: '62% 60%',
  },
  {
    id: 'barista-craft',
    number: 8,
    name: 'Barista Craft',
    group: 'lifestyle',
    source: 'Sunlit Latte Art Pour.png',
    alt: {
      en: 'A barista pours steamed milk into a speckled ceramic cup, forming latte art beside the espresso machine.',
      th: 'บาริสต้ากำลังเทนมสตีมลงในแก้วเซรามิกลายจุด วาดลาเต้อาร์ตข้างเครื่องชงเอสเพรสโซ',
    },
    usage: 'Home craft section, Our Story barista craft',
    ...LANDSCAPE,
    focal: '60% 55%',
  },
  {
    id: 'signature-coffee',
    number: 9,
    name: 'Signature Coffee',
    group: 'lifestyle',
    source: 'Sunlit Speckled Latte in a Cozy Café.png',
    alt: {
      en: 'A latte with a rosetta pattern in a speckled ceramic cup and saucer, on a sunlit oak table.',
      th: 'ลาเต้ลายโรเซตต้าในแก้วเซรามิกลายจุดพร้อมจานรอง บนโต๊ะไม้ที่มีแดดส่อง',
    },
    usage: 'Menu hero',
    ...LANDSCAPE,
    focal: '45% 60%',
  },
  {
    id: 'coffee-pastry',
    number: 10,
    name: 'Coffee & Pastry',
    group: 'lifestyle',
    source: 'Sunlit Croissant and Latte Café Scene.png',
    alt: {
      en: 'A butter croissant on a ceramic plate beside a latte, set on a window-side table in soft sun.',
      th: 'ครัวซองต์เนยบนจานเซรามิกวางคู่กับลาเต้ บนโต๊ะริมหน้าต่างในแสงแดดอ่อน ๆ',
    },
    usage: 'Home coffee and pastry feature',
    ...LANDSCAPE,
    focal: '45% 60%',
  },
  {
    id: 'quiet-corner',
    number: 11,
    name: 'Quiet Corner',
    group: 'lifestyle',
    source: 'Sunlit Café Corner with Croissant and Latte.png',
    alt: {
      en: 'A small table for one by the window, with a croissant and a cup of coffee, the garden just outside.',
      th: 'โต๊ะเล็กสำหรับหนึ่งคนริมหน้าต่าง มีครัวซองต์กับกาแฟหนึ่งแก้ว และสวนอยู่ด้านนอก',
    },
    usage: 'Home space section, Our Space quiet corners',
    ...LANDSCAPE,
    focal: '55% 60%',
  },

  // Menu
  {
    id: 'iced-latte',
    number: 12,
    name: 'Iced Latte',
    group: 'menu',
    source: 'Sunlit Iced Latte by the Window.png',
    alt: {
      en: 'An iced latte in a tall glass, the milk and espresso still settling, on an oak table by the window.',
      th: 'ลาเต้เย็นในแก้วทรงสูง นมกับเอสเพรสโซกำลังค่อย ๆ ผสมกัน วางบนโต๊ะไม้ริมหน้าต่าง',
    },
    usage: 'Menu — Coffee',
    ...LANDSCAPE,
    focal: '66% 55%',
  },
  {
    id: 'iced-americano',
    number: 13,
    name: 'Iced Americano',
    group: 'menu',
    source: 'Sunlit Iced Americano Still Life.png',
    alt: {
      en: 'An iced Americano in a clear glass on a wooden coaster, with sunlight through the window behind.',
      th: 'อเมริกาโน่เย็นในแก้วใส วางบนที่รองแก้วไม้ มีแสงแดดลอดหน้าต่างอยู่ด้านหลัง',
    },
    usage: 'Menu — Coffee',
    ...PORTRAIT,
    focal: '55% 60%',
  },
  {
    id: 'flat-white',
    number: 14,
    name: 'Flat White',
    group: 'menu',
    source: 'Sunlit Latte by the Window2.png',
    alt: {
      en: 'A flat white with a fine rosetta in a speckled ceramic cup and saucer on an oak table.',
      th: 'แฟลตไวท์ลายโรเซตต้าละเอียดในแก้วเซรามิกลายจุดพร้อมจานรอง บนโต๊ะไม้โอ๊ก',
    },
    usage: 'Menu — Coffee',
    ...PORTRAIT,
    focal: '62% 62%',
  },
  {
    id: 'iced-matcha-latte',
    number: 15,
    name: 'Iced Matcha Latte',
    group: 'menu',
    source: 'Sunlit Iced Matcha Latte by the Window.png',
    alt: {
      en: 'An iced matcha latte, green tea swirling into milk, in a clear glass by the window.',
      th: 'มัทฉะลาเต้เย็น ชาเขียวค่อย ๆ ไหลลงไปในนม อยู่ในแก้วใสริมหน้าต่าง',
    },
    usage: 'Menu — Non-Coffee',
    ...PORTRAIT,
    focal: '45% 65%',
  },
  {
    id: 'hand-brew',
    number: 16,
    name: 'Hand Brew Coffee',
    group: 'menu',
    source: 'Sunlit Pour-Over Coffee by the Window.png',
    alt: {
      en: 'A ceramic pour-over dripper above a glass server, with a cup of filter coffee alongside.',
      th: 'ดริปเปอร์เซรามิกวางบนเหยือกแก้ว ข้าง ๆ เป็นกาแฟดริปหนึ่งแก้ว',
    },
    usage: 'Menu — Coffee',
    ...PORTRAIT,
    focal: '55% 55%',
  },
  {
    id: 'butter-croissant',
    number: 17,
    name: 'Butter Croissant',
    group: 'menu',
    source: 'Sunlit Croissant Café Still Life.png',
    alt: {
      en: 'A golden butter croissant on a speckled ceramic plate, lit by the afternoon sun.',
      th: 'ครัวซองต์เนยสีทองบนจานเซรามิกลายจุด ต้องแสงแดดยามบ่าย',
    },
    usage: 'Menu — Bakery',
    ...PORTRAIT,
    focal: '60% 65%',
  },
  {
    id: 'basque-cheesecake',
    number: 18,
    name: 'Basque Cheesecake',
    group: 'menu',
    source: 'Sunlit Basque Cheesecake Café Still Life.png',
    alt: {
      en: 'A slice of Basque cheesecake with a deeply caramelised top on a ceramic plate.',
      th: 'บาสก์ชีสเค้กหนึ่งชิ้น ผิวด้านบนไหม้คาราเมลเข้ม วางบนจานเซรามิก',
    },
    usage: 'Menu — Bakery',
    ...PORTRAIT,
    focal: '58% 65%',
  },

  // Editorial
  {
    id: 'coffee-beans',
    number: 19,
    name: 'Coffee Beans & Origins',
    group: 'editorial',
    source: 'Rustic Coffee Beans in Sunlit Café.png',
    alt: {
      en: 'A ceramic bowl of roasted coffee beans beside a paper bag, with green unroasted beans scattered on the table.',
      th: 'ถ้วยเซรามิกใส่เมล็ดกาแฟคั่ว ข้างถุงกระดาษ และมีเมล็ดกาแฟดิบสีเขียวกระจายอยู่บนโต๊ะ',
    },
    usage: 'Home craft section, Our Story hero and origins',
    ...PORTRAIT,
    focal: '55% 65%',
  },
  {
    id: 'brewing-equipment',
    number: 20,
    name: 'Brewing Equipment Detail',
    group: 'editorial',
    source: 'Sunlit Pour-Over Coffee Ritual.png',
    alt: {
      en: 'A pour-over set with a ceramic dripper, glass server and gooseneck kettle, beside a small dish of coffee beans.',
      th: 'ชุดดริปกาแฟ ดริปเปอร์เซรามิก เหยือกแก้ว และกาน้ำคอห่าน ข้างถ้วยเมล็ดกาแฟใบเล็ก',
    },
    usage: 'Our Story brewing craft',
    ...PORTRAIT,
    focal: '50% 55%',
  },
  {
    id: 'material-texture',
    number: 21,
    name: 'Material & Texture Study',
    group: 'editorial',
    source: 'Sunlit Minimalist Nook with Blossoms.png',
    alt: {
      en: 'Hand-finished plaster, an oak tabletop and a speckled ceramic vase of blossoms, caught in a band of sunlight.',
      th: 'ผนังปูนฉาบมือ โต๊ะไม้โอ๊ก และแจกันเซรามิกลายจุดใส่ดอกไม้ ต้องแสงแดดเป็นแถบ',
    },
    usage: 'Our Story space connection, Our Space materials',
    ...PORTRAIT,
    focal: '60% 50%',
  },

  // Closing campaign
  {
    id: 'closing-campaign',
    number: 22,
    name: 'Closing Campaign',
    group: 'campaign',
    source: 'Sunlit Garden Café Nook.png',
    alt: {
      en: 'A sunlit plaster wall and concrete bench give way to oak tables and chairs beside tall garden windows.',
      th: 'ผนังปูนรับแดดกับม้านั่งปูน ต่อด้วยโต๊ะและเก้าอี้ไม้โอ๊กข้างหน้าต่างบานสูงที่มองเห็นสวน',
    },
    usage: 'Home closing section — text sits on the plaster wall at left',
    ...PORTRAIT,
    focal: '50% 62%',
  },
]

export const assets = Object.fromEntries(
  list.map((a) => [a.id, { ...a, path: `/images/${a.id}` }]),
) as Record<AssetId, ImageAsset>

export const allAssets: ImageAsset[] = Object.values(assets)

/** Widths generated for every asset — always ends at the original width. */
export function variantWidths(asset: Pick<ImageAsset, 'width'>): number[] {
  return [...[480, 800, 1200].filter((w) => w < asset.width - 100), asset.width]
}

/** Path of the largest JPEG variant — used for Open Graph previews. */
export function largestJpeg(asset: ImageAsset): string {
  return `${asset.path}/${variantWidths(asset).at(-1)}.jpg`
}

export const imageFormats = ['avif', 'webp', 'jpg'] as const
