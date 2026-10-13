# Move production to Vercel

## Status

Partly done. Production is already the rebuilt site. An anonymous
fetch of `https://heidariomid.ir/` returns 200 and the hero heading.
`www.heidariomid.ir` redirects there. There is no Vercel login page.

What is still open: sitemap, robots, and Lighthouse. GitHub Pages
is not used. Analytics is Vercel Web Analytics, not GA4. The repo
website and the GitHub profile point at `https://heidariomid.ir`.

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

## Still to do

- Add `app/sitemap.ts` and `app/robots.ts`
- LinkedIn was not checked. Change it if it names `heidariomid.com`
- `interview-practice/about-me.md` is not in this repo. If it exists
  elsewhere and names the old address, update it there
- Sharing the URL in a chat app shows the title, description, and
  image. Not checked
- Lighthouse on the production URL, mobile: performance and
  accessibility both 90 or higher. Record the four scores. There is
  no `current-feature.md` in this repo yet

## Out of scope

- Any change to how the page looks
- A contact form backend. emailjs stays

## Notes

- After this ships, spec 1 of `amazon` is the next upgrade. Nothing
  else in the portfolio blocks on this repo
