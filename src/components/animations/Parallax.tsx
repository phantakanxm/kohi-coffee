import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery.ts'

interface ParallaxProps {
  children: ReactNode
  /** Maximum drift, as a percentage of the frame height. */
  distance?: number
}

/**
 * Restrained vertical drift for an image inside a fixed-ratio frame.
 * Disabled on small screens and for people who prefer reduced motion.
 */
export function Parallax({ children, distance = 6 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const wide = useMediaQuery('(min-width: 768px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${distance}%`, `${distance}%`])

  if (reduce || !wide) {
    return (
      <div ref={ref} className="absolute inset-0">
        {children}
      </div>
    )
  }

  const overscan = `-${distance + 1}%`
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div className="absolute inset-x-0" style={{ y, top: overscan, bottom: overscan }}>
        {children}
      </motion.div>
    </div>
  )
}
