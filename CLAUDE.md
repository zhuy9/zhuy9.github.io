# CLAUDE.md

Guide for AI agents (and humans) working in this repo.

> `AGENTS.md` is a **symlink to this file** (git mode `120000`). Don't `git add`
> it on Windows (core.symlinks=false) — that converts it to a plain file.

## What this is
A **Notion-style single-page résumé** for **Darren Zhu**, published to
**darren-zhu.com** through GitHub Pages.

- **Tech:** Astro static output + plain scoped CSS using
  Notion design tokens. **No** UI framework, **no** CSS framework.
- **Public repo.** Everything committed here is world-readable.

## Hard rules
- **No PII in the repo — ever.** Do not commit private contact details or home
  location. Allowed public contact: LinkedIn (`linkedin.com/in/darren-zhu`),
  GitHub (`github.com/zhuy9`), and city ("Chicago, IL").
- Private source material lives only in the **gitignored `.exclude/`** folder.
  Never commit `.exclude/` or copy private contact details out.
- **Résumé content is maintained in one place: the site source** —
  `src/data/experience.ts` (experience) and `src/pages/index.astro` (about,
  skills, education, callout). Edit there. `.exclude/Darren_Zhu_resume_26.pdf`
  (local only) is the ultimate data source; when sources disagree, the PDF wins.

## Structure (target)
```
public/            # CNAME, favicons, site.webmanifest, icons/ (avatar + company marks)
src/
  layouts/Base.astro
  pages/index.astro
  components/       # TagPill, Experience
  data/             # experience.ts (+ skills)
  styles/notion.css
```

## Commands
```bash
npm install
npm run dev          # local dev server
npm run build        # static build → dist/
npm run preview      # serve the built dist/
```

## Deploy
- GitHub Actions builds and deploys to Pages: `.github/workflows/deploy.yml`.
- **Manual, once (Darren):** Repo → Settings → Pages → Source = **GitHub Actions**;
  set custom domain **darren-zhu.com**; configure DNS at the registrar
  (apex `A`/`AAAA` → GitHub Pages IPs, or `www` `CNAME` → `zhuy9.github.io`).
- `public/CNAME` holds the domain so it survives redeploys.

## Conventions
- Minimal and boring beats clever. Small, focused files; semantic HTML.
- System fonts only (no web-font downloads); **no external network requests** at
  runtime (no hot-linked images/CSS/JS). Light theme only for v1.
