import type { Localized } from '../i18n/locale.ts'

const en = {
  title: ['Hmm, this page', 'wandered off.'],
  body: 'It might’ve moved, or maybe it never existed. Don’t worry — the coffee’s still right where we left it.',
  cta: 'Back to Home',
}

const th: typeof en = {
  title: ['อ้าว หน้านี้', 'หลงทางไปแล้ว'],
  body: 'อาจย้ายไปแล้ว หรืออาจไม่เคยมีอยู่จริง แต่ไม่ต้องห่วงนะ กาแฟยังอยู่ที่เดิม',
  cta: 'กลับหน้าแรก',
}

export const notFoundCopy: Localized<typeof en> = { en, th }
