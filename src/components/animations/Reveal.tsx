import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { durations, ease, viewportOnce } from './motion.ts'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  /** Vertical travel in pixels. */
  y?: number
}

/** Gentle fade-and-rise as the block enters the viewport. */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: durations.section, ease, delay }}
    >
      {children}
    </motion.div>
  )
}
