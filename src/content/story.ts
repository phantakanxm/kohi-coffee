import type { Localized } from '../i18n/locale.ts'

const en = {
  hero: {
    eyebrow: 'Our story',
    title: ['Every cup', 'has a story.'],
    body: 'Ours is pretty simple. We wanted a place that makes really good coffee — and gives people a reason to slow down while they drink it.',
  },
  philosophy: {
    eyebrow: 'What we believe',
    title: ['Good coffee,', 'every day.'],
    body: [
      'Good coffee doesn’t have to be complicated. You just need good ingredients, a bit of know-how, and the time to do it right.',
      'So that’s what we focus on. A short menu, every cup made when you order it, and lots of attention to the little stuff — the grind, the temperature, how the milk gets poured.',
    ],
    principles: [
      { title: 'Keep it simple', text: 'A short menu we do really well. Nothing extra the cup doesn’t need.' },
      { title: 'Good stuff only', text: 'Good beans, clean water, fresh milk — and the patience to use them right.' },
      { title: 'Made for you', text: 'Every cup made to order, by hand, for whoever’s in front of us.' },
    ],
  },
  origins: {
    eyebrow: 'Where it starts',
    quote: '“We look for coffee that tastes clean and balanced — the kind where you want a second cup.”',
    body: [
      'Every coffee starts as a seed that someone grew, picked and dried with a lot of care. You can taste that work, and we try to do right by it on our end.',
      'When we find a coffee we love, we spend time figuring out how it likes to be brewed. Then we share it — no fuss.',
    ],
  },
  brewing: {
    eyebrow: 'Brewing',
    title: ['Good coffee', 'takes care.'],
    body: 'Brewing by hand is slower, and that’s kind of the point. You watch, you measure, you wait — and you get a cup that tastes exactly like what it is.',
    steps: [
      { title: 'Weigh', text: 'Coffee and water, measured every time.' },
      { title: 'Bloom', text: 'A first gentle pour to wake the coffee up.' },
      { title: 'Pour', text: 'Slow circles, nice and steady.' },
      { title: 'Wait', text: 'Trust us, the last drops are worth it.' },
    ],
  },
  barista: {
    eyebrow: 'By hand',
    title: ['One cup,', 'one person,', 'one moment.'],
    body: 'Nothing’s rushed behind the bar. Milk is steamed fresh for every cup and poured slowly — a tiny ritual we do all day and somehow never get tired of.',
  },
  room: {
    eyebrow: 'The room',
    title: ['The same care,', 'in the room.'],
    body: 'The way we make coffee shaped the way we built the place. Hand-finished plaster, natural oak, handmade ceramics — real materials that feel calm and just get nicer with age.',
    link: 'Take a Look Around',
  },
}

const th: typeof en = {
  hero: {
    eyebrow: 'เรื่องของเรา',
    title: ['ทุกแก้ว', 'มีเรื่องเล่า'],
    body: 'เรื่องของเราง่ายมาก แค่อยากมีร้านที่ชงกาแฟอร่อย ๆ แล้วให้คนได้ช้าลงสักหน่อยระหว่างดื่ม',
  },
  philosophy: {
    eyebrow: 'สิ่งที่เราเชื่อ',
    title: ['กาแฟดี ๆ', 'ได้ทุกวัน'],
    body: [
      'กาแฟดีไม่ต้องซับซ้อนเลย แค่มีวัตถุดิบดี ๆ ฝีมืออีกนิด แล้วก็มีเวลาพอที่จะทำให้มันออกมาดี',
      'เราเลยโฟกัสแค่นั้น เมนูไม่ยาว ทุกแก้วชงตอนสั่ง แล้วก็ใส่ใจเรื่องเล็ก ๆ อย่างความละเอียดตอนบด อุณหภูมิ ไปจนถึงตอนเทนม',
    ],
    principles: [
      { title: 'เรียบง่ายไว้ก่อน', text: 'เมนูไม่เยอะ แต่ทำให้ดี ไม่ใส่อะไรเกินที่แก้วนั้นต้องการ' },
      { title: 'ของดีเท่านั้น', text: 'เมล็ดดี น้ำสะอาด นมสด แล้วก็ใจเย็นพอที่จะใช้ให้ถูกวิธี' },
      { title: 'ทำให้คุณ', text: 'ทุกแก้วชงตอนสั่ง ชงด้วยมือ ให้คนที่อยู่ตรงหน้าเรา' },
    ],
  },
  origins: {
    eyebrow: 'จุดเริ่มต้นของกาแฟ',
    quote: '“เราชอบกาแฟที่รสสะอาด กลมกล่อม แบบที่ดื่มหมดแล้วอยากได้อีกแก้ว”',
    body: [
      'กาแฟทุกแก้วเริ่มจากเมล็ดที่มีคนปลูก เก็บ แล้วตากมาอย่างใส่ใจ ซึ่งชิมแล้วรู้เลย เราเลยอยากทำส่วนของเราให้ดีที่สุดเหมือนกัน',
      'พอเจอกาแฟที่ชอบ เราจะลองชงหลาย ๆ แบบจนรู้ว่ามันอร่อยที่สุดแบบไหน แล้วค่อยเสิร์ฟให้ทุกคนแบบง่าย ๆ',
    ],
  },
  brewing: {
    eyebrow: 'การชง',
    title: ['กาแฟดี ๆ', 'ต้องใจเย็นนิดนึง'],
    body: 'ดริปมือช้ากว่าก็จริง แต่นั่นแหละคือเสน่ห์ ต้องคอยดู คอยชั่ง แล้วก็รอ สุดท้ายได้กาแฟที่รสชาติเป็นตัวของมันจริง ๆ',
    steps: [
      { title: 'ชั่ง', text: 'ชั่งกาแฟกับน้ำทุกครั้ง' },
      { title: 'บลูม', text: 'เทน้ำรอบแรกเบา ๆ ปลุกกาแฟให้ตื่น' },
      { title: 'เท', text: 'วนช้า ๆ จังหวะสม่ำเสมอ' },
      { title: 'รอ', text: 'เชื่อเถอะ หยดสุดท้ายคุ้มที่จะรอ' },
    ],
  },
  barista: {
    eyebrow: 'ทำด้วยมือ',
    title: ['ทีละแก้ว', 'ทีละคน', 'ทีละช่วงเวลา'],
    body: 'หลังบาร์ไม่มีอะไรต้องรีบ นมสตีมใหม่ทุกแก้ว แล้วค่อย ๆ เท เป็นพิธีเล็ก ๆ ที่เราทำทั้งวันแต่ไม่เคยเบื่อเลย',
  },
  room: {
    eyebrow: 'ในร้าน',
    title: ['ใส่ใจแบบเดียวกัน', 'ในทุกมุมของร้าน'],
    body: 'วิธีที่เราทำกาแฟ ก็คือวิธีที่เราสร้างร้านนี้ขึ้นมา ผนังปูนฉาบมือ ไม้โอ๊กธรรมชาติ เซรามิกทำมือ ของจริงทั้งนั้น นั่งแล้วสบายใจ แล้วก็ยิ่งเก่ายิ่งสวย',
    link: 'แวะดูร้านกัน',
  },
}

export const storyCopy: Localized<typeof en> = { en, th }
