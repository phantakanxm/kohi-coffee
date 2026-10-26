import type { Localized } from '../i18n/locale.ts'

const en = {
  hero: {
    eyebrow: 'Visit us',
    title: ['Your slow morning', 'starts here.'],
    body: 'We’re in Chiang Mai, Thailand, tucked into a quiet garden. Our full address and opening hours are coming soon — check back here.',
  },
  detailsHeading: 'Visit details',
  labels: { location: 'Location', address: 'Address', hours: 'Opening hours', contact: 'Contact' },
  placeholders: {
    badge: 'Coming soon',
    address: 'Street address coming soon.',
    hours: 'Opening hours coming soon.',
    contact: 'Contact details coming soon.',
  },
  map: {
    soon: 'We’ll put a map here as soon as our address is confirmed.',
    directions: 'Get Directions',
  },
  arrival: {
    eyebrow: 'When you get here',
    title: ['Look for the', 'ivory building.'],
    body: 'A low plaster building with a deep wooden roof, big glass windows and a little tree by the door. You’ll spot our name on the wall next to the entrance.',
  },
  notes: {
    eyebrow: 'Before you come',
    title: ['A few little', 'things.'],
    items: [
      { title: 'Come as you are.', text: 'No need to dress up, and no need to rush.' },
      { title: 'Stay a while.', text: 'Grab another cup, finish your chapter, watch the light move.' },
      { title: 'Ask us anything.', text: 'About the coffee, how we brew it, or what to try next — we’re always up for a chat.' },
    ],
  },
  contact: {
    eyebrow: 'Say hi',
    title: ['Got a question?', 'Just ask.'],
    body: 'Our email, phone and socials will go up here as soon as they’re sorted. In the meantime, have a look around.',
    menu: 'Browse the Menu',
    space: 'See Our Space',
  },
}

const th: typeof en = {
  hero: {
    eyebrow: 'มาที่ร้าน',
    title: ['เช้าสบาย ๆ', 'เริ่มที่นี่'],
    body: 'ร้านเราอยู่เชียงใหม่ ในสวนเงียบ ๆ ส่วนที่อยู่เต็ม ๆ กับเวลาเปิดร้าน เดี๋ยวจะมาแจ้งตรงนี้นะ',
  },
  detailsHeading: 'ข้อมูลการเดินทาง',
  labels: { location: 'ที่ตั้ง', address: 'ที่อยู่', hours: 'เวลาเปิด', contact: 'ติดต่อ' },
  placeholders: {
    badge: 'เร็ว ๆ นี้',
    address: 'เดี๋ยวมาแจ้งที่อยู่นะ',
    hours: 'เดี๋ยวมาแจ้งเวลาเปิดนะ',
    contact: 'เดี๋ยวมาแจ้งช่องทางติดต่อนะ',
  },
  map: {
    soon: 'พอยืนยันที่อยู่แล้ว จะเอาแผนที่มาลงตรงนี้นะ',
    directions: 'ดูเส้นทาง',
  },
  arrival: {
    eyebrow: 'มาถึงแล้วสังเกตแบบนี้',
    title: ['มองหาอาคาร', 'สีงาช้างหลังนี้'],
    body: 'อาคารปูนชั้นเดียว หลังคาไม้ยื่นยาว หน้าต่างกระจกบานใหญ่ มีต้นไม้ต้นเล็ก ๆ อยู่ข้างประตู ชื่อร้านติดอยู่บนผนังข้างทางเข้าเลย',
  },
  notes: {
    eyebrow: 'ก่อนมาที่ร้าน',
    title: ['เรื่องเล็ก ๆ', 'ที่อยากบอก'],
    items: [
      { title: 'มาแบบสบาย ๆ', text: 'ไม่ต้องแต่งตัว ไม่ต้องรีบ' },
      { title: 'อยู่นานแค่ไหนก็ได้', text: 'สั่งอีกแก้ว อ่านหนังสือให้จบบท หรือนั่งดูแสงเปลี่ยนไปเรื่อย ๆ' },
      { title: 'ถามเราได้ทุกเรื่อง', text: 'เรื่องกาแฟ วิธีชง หรืออยากลองอะไรต่อ ทักมาได้เลย เราชอบคุยมาก' },
    ],
  },
  contact: {
    eyebrow: 'ทักทายกัน',
    title: ['มีอะไร', 'ทักมาได้เลย'],
    body: 'อีเมล เบอร์โทร แล้วก็โซเชียลของร้าน เดี๋ยวพร้อมแล้วจะมาลงตรงนี้นะ ระหว่างนี้ลองดูส่วนอื่นของเว็บไปก่อนได้เลย',
    menu: 'ดูเมนู',
    space: 'แวะดูร้าน',
  },
}

export const visitCopy: Localized<typeof en> = { en, th }
