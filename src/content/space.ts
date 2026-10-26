import type { Localized } from '../i18n/locale.ts'

const en = {
  hero: {
    eyebrow: 'Our space',
    title: ['A space to', 'feel at ease.'],
    body: 'A low, sunny little building tucked in among the trees. Made for hanging out — and for the kind of quiet that makes coffee taste even better.',
  },
  architecture: {
    eyebrow: 'The building',
    title: ['Warm, low,', 'and open to', 'the garden.'],
    body: [
      'It’s basically one simple room under a deep timber roof. Tall oak windows run all the way along, so you can always see the garden, and the light slowly moves across the tables as the morning goes by.',
      'We didn’t add much decoration. The materials do the work — and the trees outside handle the rest.',
    ],
  },
  inside: {
    eyebrow: 'Inside KŌHI',
    title: ['Light, oak,', 'and room to breathe.'],
    body: 'Long benches under the windows, tables with plenty of space between them, and the coffee bar right in the middle of it all.',
    caption: 'The window bench',
  },
  corners: {
    eyebrow: 'Quiet corners',
    title: ['A table for one.', 'A morning to yourself.'],
    body: 'Some of our favorite seats are the little ones — one table by the glass, a coffee, a croissant, and nothing you have to do. Bring a book if you like. Or don’t.',
  },
  courtyard: {
    eyebrow: 'The courtyard',
    title: 'Coffee under the trees.',
    body: 'Outside, there’s a gravel courtyard with a few tables in the shade — ferns, big leafy plants, and all the sounds of the garden.',
  },
  materials: {
    eyebrow: 'Materials',
    title: ['Honest materials.', 'Quiet details.'],
    body: 'We kept it to a few natural materials and let them be themselves — warm to the touch, easy on the eyes, and better with time.',
    items: [
      { name: 'Warm ivory plaster', text: 'Hand-finished walls that soften the light and soak up the morning warmth.' },
      { name: 'Natural oak timber', text: 'Windows, tables and chairs in oak, left natural so they age nicely.' },
      { name: 'Warm gray-beige concrete', text: 'Floors and benches that feel solid and grounded.' },
      { name: 'Handmade ceramics', text: 'Speckled cups and plates — no two quite the same.' },
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Around the café',
    closing: 'Come find your corner.',
    cta: 'Plan a Visit',
  },
}

const th: typeof en = {
  hero: {
    eyebrow: 'บรรยากาศร้าน',
    title: ['ที่ที่ทำให้', 'รู้สึกสบายใจ'],
    body: 'ร้านชั้นเดียวเล็ก ๆ แดดส่องทั้งวัน ซ่อนตัวอยู่ในต้นไม้ เหมาะกับการมานั่งเล่นนาน ๆ แล้วก็เงียบพอที่จะทำให้กาแฟอร่อยขึ้นอีก',
  },
  architecture: {
    eyebrow: 'ตัวร้าน',
    title: ['อบอุ่น เรียบง่าย', 'แล้วก็เปิดรับสวน'],
    body: [
      'ร้านเป็นห้องโล่ง ๆ ห้องเดียวใต้หลังคาไม้ยื่นยาว หน้าต่างกรอบไม้โอ๊กบานสูงเรียงไปตลอดแนว นั่งตรงไหนก็เห็นสวน แล้วแสงก็ค่อย ๆ เลื่อนผ่านโต๊ะไปเรื่อย ๆ ตามเวลาของเช้า',
      'เราแทบไม่ได้แต่งอะไรเพิ่มเลย ปล่อยให้วัสดุทำหน้าที่ของมัน ส่วนที่เหลือ ต้นไม้ข้างนอกจัดการให้หมด',
    ],
  },
  inside: {
    eyebrow: 'ข้างใน KŌHI',
    title: ['แสง ไม้โอ๊ก', 'แล้วก็ที่ให้หายใจ'],
    body: 'ม้านั่งยาวใต้หน้าต่าง โต๊ะวางห่างกันสบาย ๆ แล้วก็บาร์กาแฟอยู่ตรงกลางห้องพอดี',
    caption: 'ม้านั่งริมหน้าต่าง',
  },
  corners: {
    eyebrow: 'มุมเงียบ ๆ',
    title: ['โต๊ะสำหรับคนเดียว', 'เช้าที่เป็นของเราเอง'],
    body: 'ที่นั่งโปรดของเราหลายที่เป็นมุมเล็ก ๆ โต๊ะตัวเดียวติดกระจก กาแฟแก้วนึง ครัวซองต์ชิ้นนึง แล้วก็ไม่ต้องทำอะไรเลย จะพกหนังสือมาด้วยก็ได้ ไม่พกก็ได้',
  },
  courtyard: {
    eyebrow: 'ลานสวน',
    title: 'จิบกาแฟใต้ร่มไม้',
    body: 'ข้างนอกเป็นลานกรวด มีโต๊ะอยู่ไม่กี่ตัวใต้ร่มไม้ มีเฟิร์น ต้นไม้ใบใหญ่ แล้วก็เสียงของสวน',
  },
  materials: {
    eyebrow: 'วัสดุ',
    title: ['ของจริง', 'รายละเอียดเงียบ ๆ'],
    body: 'เราเลือกวัสดุธรรมชาติแค่ไม่กี่อย่าง แล้วปล่อยให้มันเป็นตัวของตัวเอง จับแล้วอุ่น มองแล้วสบายตา แล้วก็ยิ่งนานยิ่งสวย',
    items: [
      { name: 'ผนังปูนสีงาช้าง', text: 'ผนังฉาบมือที่ทำให้แสงนุ่มลง แล้วเก็บความอุ่นของตอนเช้าไว้' },
      { name: 'ไม้โอ๊กธรรมชาติ', text: 'หน้าต่าง โต๊ะ เก้าอี้ เป็นไม้โอ๊กหมด ปล่อยผิวธรรมชาติ ให้เก่าไปอย่างสวย ๆ' },
      { name: 'ปูนสีเทาอมเบจ', text: 'พื้นกับม้านั่งที่ให้ความรู้สึกมั่นคง หนักแน่น' },
      { name: 'เซรามิกทำมือ', text: 'แก้วกับจานลายจุด ไม่มีใบไหนเหมือนกันเป๊ะสักใบ' },
    ],
  },
  gallery: {
    eyebrow: 'แกลเลอรี',
    title: 'รอบ ๆ ร้าน',
    closing: 'มาหามุมโปรดของคุณกัน',
    cta: 'วางแผนมาที่ร้าน',
  },
}

export const spaceCopy: Localized<typeof en> = { en, th }
