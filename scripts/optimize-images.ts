// Generates responsive AVIF / WebP / JPEG variants for every registered asset.
// Usage: npm run images   (skips files that already exist; pass --force to rebuild)
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'
import { allAssets, variantWidths } from '../src/data/assets.ts'

const root = join(import.meta.dirname, '..')
const force = process.argv.includes('--force')

for (const asset of allAssets) {
  const input = join(root, 'assets-source', asset.source)
  if (!existsSync(input)) throw new Error(`Missing source image for ${asset.id}: ${asset.source}`)

  const meta = await sharp(input).metadata()
  if (meta.width !== asset.width || meta.height !== asset.height) {
    throw new Error(`${asset.id}: registry says ${asset.width}×${asset.height}, file is ${meta.width}×${meta.height}`)
  }

  const outDir = join(root, 'public', asset.path)
  mkdirSync(outDir, { recursive: true })

  for (const width of variantWidths(asset)) {
    const base = sharp(input).resize({ width, withoutEnlargement: true })
    const jobs = [
      ['avif', () => base.clone().avif({ quality: 52, effort: 5 })],
      ['webp', () => base.clone().webp({ quality: 76 })],
      ['jpg', () => base.clone().jpeg({ quality: 78, mozjpeg: true })],
    ] as const
    for (const [ext, encode] of jobs) {
      const file = join(outDir, `${width}.${ext}`)
      if (!force && existsSync(file)) continue
      await encode().toFile(file)
    }
  }
  console.log(`✓ ${String(asset.number).padStart(2, '0')} ${asset.name}`)
}
