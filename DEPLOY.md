# Deployment Guide

This project is a Next.js 16 app (App Router) and is best deployed on Vercel. GitHub is used as the source-of-truth repo; for static-only GitHub Pages you’d need a full static export, which is not recommended for this app (server features/streaming/MDX likely need SSR).

## Prerequisites
- Node.js 18+ (Next 16 requires Node 18.18+).
- npm (project uses `package-lock.json`).
- Vercel account (for hosting) and optionally GitHub account for CI deploys.

## Local checks before shipping
```bash
npm install
npm run lint
npm run build
# Optional: npm run dev  # local spot-check
```

## Deploy via Vercel (recommended)
### Option A: GitHub → Vercel CI (best for reviews)
1. Commit and push to GitHub.
2. In Vercel dashboard: “Add New Project” → import this GitHub repo.
3. Framework: Next.js. Build command: `npm run build`. Output: `.next`.
4. Set any env vars in Vercel (Project → Settings → Environment Variables).
5. Vercel builds a Preview URL on every push/PR; click to review live. Use “Promote to Production” or push/merge to main for prod.

### Option B: Vercel CLI (fast manual deploy)
```bash
npm install -g vercel
vercel           # first time: link project and create it in Vercel
vercel env add   # add needed env vars (repeat per env)
vercel --prod    # production deploy
```

## Deploy via GitHub Pages (static export only — not recommended here)
If you truly need Pages, you must export static HTML (SSR/Server Components will break):
1. In `next.config.*`, set `output: 'export'` and adjust for `basePath`/`assetPrefix` if using a subpath.
2. Run `npm run build && npx next export` → outputs `out/`.
3. Publish `out/` to GitHub Pages (e.g., `npx gh-pages -d out` to a `gh-pages` branch).
4. Validate that all routes/assets work; dynamic/server features will not.

## Post-deploy checklist
- Open the deployed URL: click through key sections, especially CV, Technical Experience, Education.
- Check browser console/network for errors or 404s.
- Verify images and MDX content render correctly.
- If using analytics or external APIs, confirm env vars are set in Vercel and calls succeed.
- Optionally add a custom domain in Vercel (Project → Settings → Domains).

