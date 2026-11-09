# studiodialect.com - static clone

A self-contained static export of https://studiodialect.com, kept pixel- and behaviour-identical
to the live site (the original runtime scripts still run, so animations, scroll
effects and responsive layout all keep working).

## Quick start

```bash
npm start        # serves this folder on http://localhost:5000
```

Any static host works too (Netlify, Vercel, GitHub Pages, nginx, ...): just
publish the folder as-is. Serve it over HTTP - opening `index.html` from the file
system will not resolve the scripts or media.

## Project structure

```
.
├── index.html          Semantic markup; edit page copy here
├── css/                Stylesheets, split per section and loaded in order:
│                       global.css, header.css, hero.css, sections.css, footer.css
├── js/
│   ├── main.js         Classic scripts from the original site (animations, effects)
│   └── main.mjs        ES-module runtime from the original site
├── assets/
│   ├── images/         Images (jpg, png, webp, avif, svg)
│   ├── videos/         Video files (mp4, webm)
│   ├── audio/          Audio files
│   ├── fonts/          Web fonts
│   ├── icons/          Favicons and icons
│   └── data/           JSON/data fetched at runtime
├── serve.mjs           Zero-dependency local dev server (Range requests included)
└── package.json
```

## Editing content

- **Text** lives in `index.html`. Edit it there; keep the surrounding class names
  and element structure intact so the archived scripts can still hydrate the page.
  A small inline script remembers the text you changed and re-applies it right
  after the site's own boot scripts run, so your copy sticks while everything
  else keeps animating.
- **Styles** live under `css/`. The files are loaded top-to-bottom, so later files
  win ties - add your overrides to the last one (or a new file linked after them).
  Change colours, spacing, fonts and media paths there.
- **Media** sits under `assets/`. Swap a file in place (keep the same name) and
  hard-refresh (Ctrl+Shift+R).

## Notes

- Some text is written by the original scripts at runtime (animated counters,
  dates, canvas labels). Leave those, or adapt the matching code under `js/`.
- A small inline safety script keeps the page from getting stuck behind a
  full-screen intro overlay if a boot script fails.
- Media under `assets/` is cached by the browser after the first load.
- `serve.mjs` answers HTTP Range requests, so video scrubbing works.

## Reusing one section in your own project

Every `section` component is standalone, so you can lift it into a hand-written (manual) project.

1. **Pick the section.** In the clone app, click the section in the preview and download
   "section only" - that ZIP already contains just that section plus the styles, fonts and
   scripts it needs. Or copy the section file from this export: `src/components/section/<Name>`
   (Vite) or `components/section/<Name>` (Next.js). The Static target has no section files -
   its markup lives directly in `index.html`.
2. **Copy its imports.** A section pulls shared pieces from `ui/*`; copy those files too and
   keep the relative paths (or fix the import paths).
3. **Copy its styles.** Bring the CSS rules the section uses. This export merges them into one
   stylesheet; for a clean per-section split use the **Static** target instead (global /
   header / hero / sections / footer files).
4. **Copy its media.** Local asset paths are root-relative (`/images/...`, `/assets/...`). Put
   the files in your project's `public/` folder (or rewrite the paths).
5. **Mount it.** Render `<Name />` in your own page. Next.js imports it as
   `@/components/section/<Name>` (shared pieces: `@/components/ui/<Name>`); Vite imports the
   same files as `../components/section/<Name>` and `../components/ui/<Name>`.

Things to know:

- A section is **markup + CSS** (static). Animations and interactive behaviour come from the
  site's archived runtime (`js/main.js`, `js/main.mjs`, `js/**`), which is *not* part of a copied
  section. Either ship that runtime too, or re-implement the motion (GSAP, Framer Motion, ...).
- Class names keep the origin's hashed names (e.g. `Hero_hero__kuzag`) so the CSS matches.
  Rename them only if you also update the CSS.
- Text that the original runtime rewrites at load (counters, dates, sliders) is written by the
  runtime, not by the JSX.

## Serving this clone

This site's runtime loads its content from an API that only accepts the
original site's own origins (`*.sanity.io`). A browser blocks that
cross-origin call, and without it the app never mounts - the page stays
blank and does not scroll. The export therefore ships a small same-origin
proxy and needs its own server:

- **Static**: `npm start` - the bundled `serve.mjs` forwards `/_clone/api/...`.
- **Vite**: `npm run dev` - the `apiProxyShim()` middleware does the same.
- **Next**: `npm run dev` - `middleware.ts` does the same.

Using VS Code's **Live Server**? The bundled `.vscode/settings.json` already
points its proxy at the API host, so "Open with Live Server" works too.
Any other plain static host (or opening `index.html` from disk) has no
server-side forwarding and will show a blank page - use one of the
commands above instead.
