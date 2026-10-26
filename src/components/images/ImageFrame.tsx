import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { assets } from '../../data/assets.ts'
import { cx } from '../../utils/cx.ts'
import { Parallax } from '../animations/Parallax.tsx'
import { durations, ease } from '../animations/motion.ts'
import { Picture, type PictureProps } from './Picture.tsx'

interface ImageFrameProps extends PictureProps {
  /**
   * CSS aspect-ratio for the frame. Defaults to the photograph's own ratio.
   * Use "fill" when the parent sets the height.
   */
  ratio?: string
  parallax?: boolean
  /** Soft mask reveal when the frame scrolls into view. */
  reveal?: boolean
  /** Slow, subtle scale when an ancestor `.group` is hovered. */
  hover?: boolean
  frameClassName?: string
  children?: ReactNode
}

/**
 * A fixed-ratio frame that crops a registry photograph with object-fit: cover.
 * The frame reserves its space up front, so images never shift the layout.
 */
export function ImageFrame({
  ratio,
  parallax = false,
  reveal = false,
  hover = false,
  frameClassName,
  className,
  children,
  ...picture
}: ImageFrameProps) {
  const reduce = useReducedMotion()
  const asset = assets[picture.asset]
  const aspectRatio = ratio === 'fill' ? undefined : (ratio ?? `${asset.width} / ${asset.height}`)

  const image = (
    <Picture
      {...picture}
      className={cx(
        hover && 'transition-transform duration-[1100ms] ease-calm group-hover:scale-[1.03]',
        className,
      )}
    />
  )

  const content = (
    <>
      {parallax ? <Parallax>{image}</Parallax> : <div className="absolute inset-0">{image}</div>}
      {children}
    </>
  )

  const frame = cx('relative overflow-hidden bg-linen', frameClassName)

  if (!reveal || reduce) {
    return (
      <div className={frame} style={{ aspectRatio }}>
        {content}
      </div>
    )
  }

  // Above-the-fold (priority) images reveal on load with the mask only: they stay painted
  // throughout, so the browser can show and measure them immediately.
  const motionProps = picture.priority
    ? { initial: { clipPath: 'inset(0% 0% 14% 0%)' }, animate: { clipPath: 'inset(0% 0% 0% 0%)' } }
    : {
        initial: { clipPath: 'inset(0% 0% 14% 0%)', opacity: 0 },
        whileInView: { clipPath: 'inset(0% 0% 0% 0%)', opacity: 1 },
        viewport: { once: true, amount: 0.2 },
      }

  return (
    <motion.div
      className={frame}
      style={{ aspectRatio }}
      {...motionProps}
      transition={{ duration: durations.image, ease }}
    >
      {content}
    </motion.div>
  )
}
