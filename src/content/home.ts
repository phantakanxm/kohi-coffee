import type { Localized } from '../i18n/locale.ts'

const en = {
  hero: {
    eyebrow: 'Specialty coffee · Chiang Mai',
    title: ['Coffee for', 'slower mornings.'],
    body: 'A little coffee spot in Chiang Mai. Good cups, good light, and no rush at all.',
    primary: 'See the Menu',
    secondary: 'Have a Look Around',
  },
  intro: {
    eyebrow: 'Take it easy',
    title: ['Good coffee.', 'Good moments.'],
    body: 'Honestly, the best mornings are pretty simple. A really good cup, a quiet table, and a bit of time just for you. That’s what we’re here for.',
    caption: 'Morning light by the garden window.',
  },
  favorites: {
    eyebrow: 'Our favorites',
    title: ['The ones we', 'keep coming back to.'],
    body: 'Three cups we drink ourselves pretty much every morning. Each one’s made fresh when you order — never in a hurry.',
    link: 'See the Full Menu',
  },
  pastry: {
    eyebrow: 'From the bakery',
    title: ['Something sweet', 'to stay for.'],
    body: 'First sip, last flaky crumb — it’s the little things that make a morning.',
    link: 'See the Bakery',
  },
  space: {
    eyebrow: 'Our space',
    title: ['Room to', 'slow down.'],
    body: 'Sunny plaster walls, warm oak tables, and a little garden right outside the glass. Nobody’s going to rush you here — grab one coffee, or hang out all morning.',
    link: 'Come Take a Look',
    quietCaption: 'A table for one',
    courtyardCaption: 'The courtyard',
  },
  craft: {
    eyebrow: 'How we make it',
    title: ['Thoughtful from', 'the first bean.'],
    body: [
      'We’re a bit picky about our beans. We look for coffee that tastes clean, balanced and easy to love.',
      'Then we take our time. Every cup gets weighed, ground and brewed properly — not to make a fuss, just so it tastes the way it should.',
    ],
    link: 'Read Our Story',
  },
  closing: {
    title: ['Slow mornings.', 'Thoughtful coffee.'],
    body: 'Come as you are. Stay as long as you like.',
    cta: 'Come Say Hi',
  },
}

const th: typeof en = {
  hero: {
    eyebrow: 'สเปเชียลตี้คอฟฟี่ · เชียงใหม่',
    title: ['กาแฟสำหรับ', 'เช้าที่ไม่ต้องรีบ'],
    body: 'ร้านกาแฟเล็ก ๆ ในเชียงใหม่ กาแฟอร่อย แดดเช้าสวย ๆ แล้วก็ไม่มีใครเร่งเลยสักนิด',
    primary: 'ดูเมนู',
    secondary: 'แวะดูร้านกัน',
  },
  intro: {
    eyebrow: 'ช้าลงหน่อยก็ได้',
    title: ['กาแฟดี ๆ', 'กับเวลาดี ๆ'],
    body: 'จริง ๆ เช้าที่ดีมันง่ายกว่าที่คิดนะ กาแฟอร่อย ๆ สักแก้ว โต๊ะเงียบ ๆ สักตัว กับเวลาให้ตัวเองอีกนิด เราอยู่ตรงนี้ก็เพื่อแบบนั้นแหละ',
    caption: 'แสงเช้าริมหน้าต่างฝั่งสวน',
  },
  favorites: {
    eyebrow: 'เมนูโปรดของเรา',
    title: ['แก้วที่เรา', 'วนกลับมาสั่งตลอด'],
    body: 'สามแก้วที่เราเองก็ดื่มแทบทุกเช้า ทุกแก้วชงสดตอนสั่ง ไม่รีบ ไม่ลัดขั้นตอน',
    link: 'ดูเมนูทั้งหมด',
  },
  pastry: {
    eyebrow: 'จากเบเกอรี่',
    title: ['ของหวานนิด ๆ', 'ให้อยากนั่งต่อ'],
    body: 'ตั้งแต่จิบแรกยันเศษครัวซองต์ชิ้นสุดท้าย เรื่องเล็ก ๆ แบบนี้แหละที่ทำให้เช้าดีขึ้น',
    link: 'ดูเมนูเบเกอรี่',
  },
  space: {
    eyebrow: 'บรรยากาศร้าน',
    title: ['ที่ให้นั่ง', 'ช้า ๆ ได้เต็มที่'],
    body: 'ผนังปูนรับแดดเช้า โต๊ะไม้อุ่น ๆ แล้วก็สวนเล็ก ๆ อยู่อีกฝั่งกระจก ที่นี่ไม่มีใครเร่งนะ จะแวะแก้วเดียว หรือนั่งยาวทั้งเช้าก็ได้หมด',
    link: 'แวะดูร้านกัน',
    quietCaption: 'โต๊ะสำหรับคนเดียว',
    courtyardCaption: 'ลานสวน',
  },
  craft: {
    eyebrow: 'เราทำกาแฟยังไง',
    title: ['ใส่ใจตั้งแต่', 'เมล็ดแรก'],
    body: [
      'เราค่อนข้างเลือกเรื่องเมล็ดนิดนึง ชอบกาแฟที่รสสะอาด กลมกล่อม ดื่มง่าย แบบที่ใครก็น่าจะชอบ',
      'แล้วก็ค่อย ๆ ทำ ทุกแก้วชั่ง บด แล้วชงให้ดี ไม่ได้อยากให้ยุ่งยากอะไรหรอก แค่อยากให้กาแฟอร่อยอย่างที่มันควรเป็น',
    ],
    link: 'อ่านเรื่องของเรา',
  },
  closing: {
    title: ['เช้าช้า ๆ', 'กับกาแฟที่ตั้งใจชง'],
    body: 'มาแบบสบาย ๆ อยู่นานแค่ไหนก็ได้',
    cta: 'แวะมาหากันนะ',
  },
}

export const homeCopy: Localized<typeof en> = { en, th }
