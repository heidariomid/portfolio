# Move production to Vercel

## Status

Production is the rebuilt site. An anonymous
fetch of `https://heidariomid.ir/` returns 200 and the hero heading.
`www.heidariomid.ir` redirects there. There is no Vercel login page.

GitHub Pages is not used. Analytics is Vercel Web Analytics, not
GA4. The repo website points at `https://heidariomid.ir`. LinkedIn’s
public page did not return a website field, so that profile was not
changed from here.

## Done

- Production is the Vercel project `portfolio`, deploying from
  `main`. No static export, no `basePath`, no `/portfolio` path
- The address is `https://heidariomid.ir`. The apex and `www` are on
  the project. `www` redirects to the apex. There is no
  `heidariomid.com`
- `metadataBase`, the canonical path `/`, and the Open Graph URL in
  `app/layout.tsx` use that address
- The contact Website row and `package.json` `homepage` are
  `https://heidariomid.ir/`
- A push to `main` deploys with no workflow in `.github/`
- `pnpm lint` and `pnpm build` pass
- DNS for `heidariomid.ir` already points at Vercel
- Analytics is `@vercel/analytics` in `app/layout.tsx`, enabled in
  the Vercel project. GA4 is removed. One tool.
  https://vercel.com/docs/analytics/quickstart?framework=nextjs#add-the-analytics-component-to-your-app
- The public mailbox is `contact@heidariomid.ir`
- `app/sitemap.ts` and `app/robots.ts` allow the whole site and list
  `https://heidariomid.ir`
- `interview-practice/about-me.md` now uses `https://heidariomid.ir`,
  `contact@heidariomid.ir`, the crypto demo on Vercel, and an offline
  food-delivery demo
- A share of the production URL has the title, description, and
  `https://heidariomid.ir/assets/images/omid-heidari.jpeg` (that image
  returns 200)
- Lighthouse on `https://heidariomid.ir`, mobile, 13 Oct 2026:
  performance 99, accessibility 96, best practices 100, SEO 100

## Still to do

- LinkedIn. The public profile did not load a website field from
  here. If the profile still says `heidariomid.com`, change it to
  `https://heidariomid.ir`

## Out of scope

- Any change to how the page looks
- A contact form backend. emailjs stays

## Notes

- After this ships, spec 1 of `amazon` is the next upgrade. Nothing
  else in the portfolio blocks on this repo
