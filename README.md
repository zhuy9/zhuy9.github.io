# Darren Zhu Resume

Single-page resume built with Astro and deployed to GitHub Pages.

- **Stack:** Astro static output + plain CSS. No UI framework, no runtime JS.

## Develop

```bash
npm install
npm run dev        # local dev server
```

## Build

```bash
npm run build      # static build → dist/
npm run preview    # serve the built dist/
```

## Docs

- [`CLAUDE.md`](CLAUDE.md) — repo guide and conventions (`AGENTS.md` is a symlink to it).

Resume content is edited in the site source (`src/data/experience.ts` and
`src/pages/index.astro`).

Private source material is kept locally in the gitignored `.exclude/` folder and
is **never committed**.
