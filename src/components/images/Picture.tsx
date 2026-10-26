import { assets, variantWidths, type AssetId } from '../../data/assets.ts'
import { useLocale } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'

export interface PictureProps {
  asset: AssetId
  /** Rendered width hint for the browser, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes: string
  priority?: boolean
  focal?: string
  /** Override the registry alt text; pass "" for purely decorative use. */
  alt?: string
  className?: string
}

export function Picture({ asset: id, sizes, priority = false, focal, alt, className }: PictureProps) {
  const locale = useLocale()
  const asset = assets[id]
  const widths = variantWidths(asset)
  const srcSet = (ext: string) => widths.map((w) => `${asset.path}/${w}.${ext} ${w}w`).join(', ')
  const fallback = widths.find((w) => w >= 800) ?? widths[widths.length - 1]

  return (
    <picture className="contents">
      <source type="image/avif" srcSet={srcSet('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet('webp')} sizes={sizes} />
      <img
        src={`${asset.path}/${fallback}.jpg`}
        srcSet={srcSet('jpg')}
        sizes={sizes}
        width={asset.width}
        height={asset.height}
        alt={alt ?? asset.alt[locale]}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        style={{ objectPosition: focal ?? asset.focal }}
        className={cx('h-full w-full object-cover', className)}
      />
    </picture>
  )
}
