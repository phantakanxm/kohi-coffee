/** Shared motion language: slow, settled, never bouncy. */
export const ease = [0.22, 1, 0.36, 1] as const

export const durations = {
  micro: 0.25,
  section: 0.85,
  image: 1.2,
  hero: 2.2,
} as const

export const viewportOnce = { once: true, amount: 0.25 } as const
