# KŌHI / COFFEE

Portfolio website for a fictional specialty coffee café in Chiang Mai, in English and Thai.
React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router · Motion · Lucide.

```bash
npm install
npm run dev        # http://localhost:5173  (Thai at /th)
npm run build      # typecheck + production build + prerendered HTML per page, in dist/
npm run images     # regenerate image variants (add --force to rebuild all)
```

For a deploy build, pass the live address so link previews get absolute image URLs, canonical/hreflang links
and a sitemap:

```bash
SITE_URL=https://your-domain.com npm run build
```

## Where things live

- `src/content/*.ts` — all page copy, English and Thai side by side. Thai must have the same shape as English, so
  TypeScript flags a missing translation.
- `src/content/meta.ts` — page titles, descriptions and preview images (used by the app and the prerender step).
- `src/data/assets.ts` — the registry of all 22 photographs (original file, alt text in both languages, size,
  focal point). Components ask for an asset by id; they never hard-code image paths.
- `src/data/site.ts` — business details. Address, hours, email, phone, map link, social links and production URL
  are `null`/empty until approved, and the site shows clearly labelled placeholders for them.
- `src/data/menu.ts` — menu items and categories. Add `price` to an item to show it.
- `src/i18n/` — locale helpers. English lives at `/…`, Thai at `/th/…`; the language switch keeps the page,
  filter and scroll position.
- `src/styles/index.css` — design tokens, layout utilities and the Thai typography rules.
- `scripts/prerender.ts` — writes `dist/<page>/index.html` for every page and language with its own `lang`,
  title, description, Open Graph tags and a preload for the page's JS.
- `assets-source/` — original PNGs (not in git; kept locally). `public/images/<id>/<width>.{avif,webp,jpg}` are
  generated from them and are committed, so a fresh clone builds and deploys without the originals.

## Filling in real details

Set these values in `src/data/site.ts` once they're confirmed. Each one switches on its feature automatically:

| Field | Turns on |
| --- | --- |
| `address`, `hours`, `email`, `phone` | Real values replace the “Coming soon” placeholders on Visit Us |
| `mapUrl` | The “Get Directions” button |
| `social` | Social links in the footer |
| `url` (or `SITE_URL` at build) | Canonical URLs, hreflang, absolute Open Graph links and `sitemap.xml` |

## Deploying

Every page has its own prerendered `index.html`, so `/menu`, `/th/menu` etc. work on any static host. Unknown
paths still need a fallback to `index.html` (Vercel: a rewrite of `/(.*)` to `/index.html`; Netlify: a
`public/_redirects` line `/* /index.html 200`) so the in-app 404 page can show.
