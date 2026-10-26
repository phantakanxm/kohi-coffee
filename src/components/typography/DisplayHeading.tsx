import { motion } from 'motion/react'
import { cx } from '../../utils/cx.ts'
import { ease, viewportOnce } from '../animations/motion.ts'

const sizes = {
  hero: 'text-hero',
  page: 'text-page',
  section: 'text-section',
  subsection: 'text-subsection',
} as const

interface DisplayHeadingProps {
  as?: 'h1' | 'h2' | 'h3'
  /** Each entry is set on its own line — line breaks are part of the design. */
  lines: string[]
  size?: keyof typeof sizes
  /**
   * "mount" reveals line by line on first render (page heroes),
   * "view" when scrolled into view, false renders static text.
   */
  reveal?: 'mount' | 'view' | false
  delay?: number
  id?: string
  className?: string
}

export function DisplayHeading({
  as: Tag = 'h2',
  lines,
  size = 'section',
  reveal = false,
  delay = 0,
  id,
  className,
}: DisplayHeadingProps) {
  const classes = cx(sizes[size], 'font-light', className)

  if (!reveal) {
    return (
      <Tag id={id} className={classes}>
        {lines.map((line) => (
          <span key={line} className="block">
            {line}{' '}
          </span>
        ))}
      </Tag>
    )
  }

  const MotionTag = motion[Tag]
  // The parent observes the viewport; masked lines sit outside their clip box until revealed.
  const trigger =
    reveal === 'mount'
      ? { initial: 'hidden', animate: 'visible' }
      : { initial: 'hidden', whileInView: 'visible', viewport: viewportOnce }

  return (
    <MotionTag id={id} className={classes} {...trigger}>
      {lines.map((line, i) => (
        // Padding keeps descenders — and Thai vowel and tone marks — inside the mask.
        <span key={line} className="-my-[0.14em] block overflow-hidden py-[0.14em]">
          <motion.span
            className="block"
            variants={{
              hidden: { y: '110%' },
              visible: { y: '0%', transition: { duration: 1.1, ease, delay: delay + i * 0.12 } },
            }}
          >
            {line}{' '}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
