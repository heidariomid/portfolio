# Spec 3 — Move production to Vercel

## Overview

Spec 3 of 3. Depends on spec 2.

The rebuilt site becomes the one address a reviewer is given, and
the old GitHub Pages copy stops being a second, stale portfolio.
"Done" is the production URL answering for someone who is not signed
in to Vercel, and the old Pages URL sending visitors there.

## Requirements

- Production is the Vercel project connected in spec 2, deploying
  from `main`. No static export, no `basePath`, no `/portfolio` path.
  The site is served at the root
- The production address is `https://heidariomid.ir`. Add the apex
  and `www` to the Vercel project and redirect `www` to the apex.
  There is no `heidariomid.com`
- Vercel Deployment Protection is off for production
- The old GitHub Pages address must not keep serving the Next 12
  site. Replace the Pages content with one static `index.html` that
  redirects to `https://heidariomid.ir`
  (`<meta http-equiv="refresh">` plus a `rel="canonical"` link),
  published from a `gh-pages` branch. Do not delete the Pages site
  outright: the old link is on CVs already sent
- `metadataBase`, the canonical URL, and the Open Graph URL in
  `app/layout.tsx` use the final address. Add `app/sitemap.ts` and
  `app/robots.ts`
- The GA4 property `G-8JCQBPR9CP` gets the new address added as a
  data stream domain, or the tag is replaced by `@vercel/analytics`
  the way `asma-portfolio` does it. One analytics tool, not both
- The site's own "Website" row in the contact section and the
  `homepage` field in `package.json` name the final address
- Update the three places outside this repo that name the old
  address: the GitHub profile, the GitHub repo's website field, and
  LinkedIn. These are leftovers, listed at the end of `start`
- `interview-practice/about-me.md` gets the new address if it names
  the old one

## Out of scope

- Any change to how the page looks
- Email on the domain. A mailbox for `info@` is a registrar or mail
  host setting, not this repo
- A contact form backend. emailjs stays

## Done when

- The production URL, fetched with no cookies, returns 200 and the
  HTML contains the hero heading
- The old GitHub Pages address lands on `https://heidariomid.ir` in
  a private window
- A push to `main` deploys with no workflow in `.github/`
- Sharing the URL in a chat app shows the title, description, and
  image
- The analytics tool chosen records a visit from a phone on mobile
  data
- Lighthouse on the production URL, mobile: performance and
  accessibility both 90 or higher. Record the four scores in
  `current-feature.md`
- `pnpm lint` and `pnpm build` pass

## Notes

- **Open decision — analytics.** GA4 keeps the history. Vercel
  Analytics needs no cookie banner. Pick one before `start`
- **Leftovers on you:** DNS for `heidariomid.ir` already points at
  Vercel. Still open: the three profile links, and turning off
  Deployment Protection in the Vercel dashboard
- After this ships, spec 1 of `amazon` is the next upgrade. Nothing
  else in the portfolio blocks on this repo

## References

- @context/project-overview.md
- @context/stack.md
- @context/features/spec2-next16-rebuild.md
