// Writes a static HTML file per page and language after `vite build`, each with its own
// <html lang>, title, description and Open Graph tags. Link previews (LINE, Facebook, X)
// and crawlers read these without running JavaScript; the app then takes over as usual.
//
// Usage: node scripts/prerender.ts   (set SITE_URL=https://… for absolute og:url / og:image,
// canonical and hreflang links — previews need absolute image URLs to show a picture)
import { appendFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { pageMeta, pageTitle, type PageKey } from '../src/content/meta.ts'
import { assets, largestJpeg } from '../src/data/assets.ts'
import { site } from '../src/data/site.ts'
import { localeMeta, locales, localizePath, type Locale } from '../src/i18n/locale.ts'

const dist = join(import.meta.dirname, '..', 'dist')
// dist/index.html is rewritten below, so drop any links a previous run added.
const template = readFileSync(join(dist, 'index.html'), 'utf8').replace(
  /\s*<link rel="(?:canonical|alternate)"[^>]*\/>/g,
  '',
)
const origin = (process.env.SITE_URL ?? site.url ?? '').replace(/\/$/, '')

// Route pages are lazy-loaded; preloading the page's chunk in its HTML removes a request waterfall.
const pageModules: Partial<Record<PageKey, string>> = {
  menu: 'src/pages/Menu/MenuPage.tsx',
  story: 'src/pages/OurStory/OurStoryPage.tsx',
  space: 'src/pages/OurSpace/OurSpacePage.tsx',
  visit: 'src/pages/VisitUs/VisitUsPage.tsx',
}
const manifest = JSON.parse(readFileSync(join(dist, '.vite', 'manifest.json'), 'utf8')) as Record<
  string,
  { file: string }
>
// Only needed at build time — don't ship it.
rmSync(join(dist, '.vite'), { recursive: true, force: true })

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const absolute = (path: string) => (origin ? `${origin}${path}` : path)

function setTag(html: string, attribute: 'name' | 'property', key: string, content: string): string {
  const tag = `<meta ${attribute}="${key}" content="${escape(content)}" />`
  const existing = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?/>`)
  return existing.test(html) ? html.replace(existing, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

function render(page: PageKey, locale: Locale, path: string): string {
  const entry = pageMeta[page]
  const asset = assets[entry.image]
  const title = pageTitle(page, locale)
  const description = entry.description[locale]

  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${locale}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(title)}</title>`)
  html = setTag(html, 'name', 'description', description)
  html = setTag(html, 'property', 'og:title', title)
  html = setTag(html, 'property', 'og:description', description)
  html = setTag(html, 'property', 'og:locale', localeMeta[locale].ogLocale)
  html = setTag(html, 'property', 'og:image', absolute(largestJpeg(asset)))
  html = setTag(html, 'property', 'og:image:alt', asset.alt[locale])

  const chunk = pageModules[page] && manifest[pageModules[page]]?.file
  if (chunk) {
    html = html.replace('</head>', `    <link rel="modulepreload" crossorigin href="/${chunk}" />\n  </head>`)
  }

  if (origin) {
    const english = absolute(localizePath(path, 'en'))
    const links = [
      `<link rel="canonical" href="${absolute(localizePath(path, locale))}" />`,
      ...locales.map((l) => `<link rel="alternate" hreflang="${l}" href="${absolute(localizePath(path, l))}" />`),
      `<link rel="alternate" hreflang="x-default" href="${english}" />`,
    ]
    html = setTag(html, 'property', 'og:url', absolute(localizePath(path, locale)))
    html = html.replace('</head>', `    ${links.join('\n    ')}\n  </head>`)
  }
  return html
}

const written: string[] = []
for (const [page, entry] of Object.entries(pageMeta) as [PageKey, (typeof pageMeta)[PageKey]][]) {
  if (!entry.path) continue
  for (const locale of locales) {
    const route = localizePath(entry.path, locale)
    const file = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html')
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, render(page, locale, entry.path))
    written.push(route)
  }
}

if (origin) {
  const urls = written.map((route) => `  <url><loc>${absolute(route)}</loc></url>`).join('\n')
  writeFileSync(
    join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  const robots = join(dist, 'robots.txt')
  if (existsSync(robots) && !readFileSync(robots, 'utf8').includes('Sitemap:')) {
    appendFileSync(robots, `Sitemap: ${origin}/sitemap.xml\n`)
  }
}

console.log(`Prerendered ${written.length} pages: ${written.join(', ')}`)
if (!origin) {
  console.warn('SITE_URL is not set — og:image stays relative and canonical/hreflang links are skipped.')
}
