# Mecozx — coming-soon site

Next.js (App Router) + Tailwind CSS v4, exported as a fully static site.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub/GitLab repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - Framework preset: **Next.js (Static HTML Export)**
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22`
4. Deploy, then add `mecozx.com` under **Custom domains**.

(Or from the CLI: `npm run build && npx wrangler pages deploy out`.)

## Things you will want to edit

| What | Where |
| --- | --- |
| Launch date (default 1 Dec 2026, 00:00 UTC+6) | `lib/config.ts`, or set `NEXT_PUBLIC_LAUNCH_DATE` in Cloudflare and redeploy |
| Product cards and logos | `lib/products.ts` |
| Share link | `SITE_URL` in `lib/config.ts` |
| Logo | `public/mecozx-logo.png` (product logos: `public/products/`) |

## Notes

- Animations use only `transform` and `opacity` (compositor-only, 60fps) and are disabled for users with `prefers-reduced-motion`.
- The countdown targets a fixed date, so every visitor sees the same time left.
- Security and caching headers live in `public/_headers`.
