# Spec 2 — Rebuild on Next.js 16

## Overview

Spec 2 of 3. Depends on spec 1, so the cards it ports are already
correct.

The same one-page site, rebuilt in this repo on Next.js 16 App
Router, React 19, TypeScript 6, and Tailwind 4. Same sections, same
look, same copy. "Done" is the new site on a Vercel preview URL,
side by side with the old one, with nothing a visitor can tell apart
except speed. Production does not move in this spec.

## Requirements

- Match the stack `bakery` and `asma-portfolio` already run: Next 16,
  React 19, Tailwind 4 through `@tailwindcss/postcss`, ESLint 9 flat
  config (`eslint.config.mjs`), pnpm. TypeScript 6, not 7:
  `typescript-eslint` did not support 7 when bakery pinned it. Do not
  invent a third setup
- Read `node_modules/next/dist/docs/` before writing App Router,
  metadata, or image code. This is not the Next.js in training data
- The work happens on one branch in this repo. The Pages Router tree
  (`pages/`, `components/`, `store/`, `styles/`) is deleted in the
  same change that adds `app/`. No second folder, no
  `redesigned-portfolio`
- Routes: `app/layout.tsx` and `app/page.tsx` only. The page renders,
  in order, Navbar, Hero, About, Skills, Projects, Cta, Contact form,
  Footer. `pages/projects/uber-eats.jsx` is not ported; nothing live
  links to it
- Server components by default. `'use client'` only on the pieces
  that need it: the theme toggle, the mobile menu in Navbar, the
  scroll-reveal observer, and the contact form
- Tokens move verbatim. `styles/globals.css` holds the design as CSS
  variables under `:root`, `html[data-theme='dark']`, and
  `html[data-theme='light']`. Copy those values into
  `app/globals.css` unchanged. The `@tailwind` directives become
  `@import 'tailwindcss'`. The keyframes, animations, shadows, and
  the `amazon` colours in `tailwind.config.js` move into `@theme`,
  and the config file is deleted. Do not re-interpret a colour
- Fonts load through `next/font`: General Sans as a local font
  (Fontshare has no `next/font` loader, so download the weights 300
  to 700 the CSS uses), DM Mono from `next/font/google`. The two
  `@import url(...)` lines and the Raleway `<link>` in
  `_document.js` go. `--font-sans` and `--font-mono` keep their names
- Theme: the hand-rolled context in `store/` (reducer, actions,
  `useStateValue`) is replaced by one small client component that
  sets `data-theme` on `<html>`. Dark stays the default. The choice
  is saved to `localStorage` and applied before paint, so a light
  theme visitor does not see a dark flash on reload. The old store
  did not save it
- Images: every `next/image` uses the Next 16 props. `Hero.jsx` has
  `layout='fill' objectFit='cover'`; that becomes `fill` with
  `className='object-cover'` and a `sizes` value. The Akamai loader
  and `images.path` are deleted
- `Link` no longer wraps an `<a>`. Navbar, Footer, and Hero pass
  `className` to `Link` directly
- Project cards keep the `projects` array as typed data in its own
  file, with a `Project` type. `demo` and `code` are
  `string | null`
- Contact form keeps `@emailjs/browser` with the same service and
  template ids, and the same three states: sending, sent, failed
- Analytics: the GA4 tag `G-8JCQBPR9CP` stays, loaded with
  `next/script`. `react-ga` and its `ReactGA.initialize('372632070')`
  call go; Universal Analytics has recorded nothing since 2023
- `next.config.ts` is plain: no `basePath`, no `assetPrefix`, no
  webpack rule for PDFs, no plugins
- Metadata moves to the `metadata` export in `app/layout.tsx`: the
  title and description from `pages/index.js`, the favicon, and Open
  Graph tags with the profile image. `_document.js` still says
  "Next.js + TypeScript example"; that line dies here
- Dependencies that leave: `next-pwa`, `next-videos`, `gh-pages`,
  `react-ga`, `moment-jalaali`, `nodemailer`,
  `@mailerlite/mailerlite-nodejs`, `axios`, `global`, `@liara/cli`,
  `framer-motion`, `file-loader`. `pages/api/form.js` and
  `pages/api/hello.js` are deleted; the form never called them and
  they could not run on GitHub Pages
- `@headlessui/react` goes if the new theme toggle is a plain button.
  `Section/Angle.jsx` uses `Popover` but is not rendered on the page;
  check before porting it
- Delete `public/sw.js`, `public/workbox-*.js`, `liara.json`,
  `www.heidariomid.com.txt`, and the `export`, `predeploy`, and
  `deploy` scripts
- Delete `.github/workflows/githubactions.yml` in this change. It
  runs `next export`, which Next 16 does not have, so the first push
  to main would fail. The published Pages site stays up, frozen at
  spec 1, until spec 3 replaces it
- `CLAUDE.md` is rewritten to one line, `@AGENTS.md`, and the facts
  move to `AGENTS.md` Memory. The current file describes Liara and a
  config bug that was already fixed

## Out of scope

- Production hosting, the domain, and retiring GitHub Pages. That is
  spec 3
- A redesign. A section that looks different from the old site is a
  bug in this spec
- New sections, a blog, per-project pages, a CMS
- Porting Cypress. `components/About/About.cy.jsx` is the only test
  and it asserts one heading. Delete Cypress with the old tree
- Motion library. The page animates with CSS keyframes and the
  reveal observer; `framer-motion` is only imported by the dead
  project files

## Done when

- The branch's Vercel preview URL, opened signed out, shows all
  eight sections. Fetch it and check the HTML is the site, not a
  Vercel login page
- Old site and preview side by side at 375px, 768px, and 1280px, in
  dark and in light: same layout, colours, type, and spacing.
  `scrollWidth` equals `innerWidth` at each width
- The theme toggle switches, and a reload keeps the choice with no
  flash
- Scroll-reveal fires on every section. Scroll each into view before
  a screenshot; a full-page capture does not trigger it
- The contact form sends a real message and shows the sent state. A
  blocked network request shows the failed state
- Every enabled demo and code link returns 200
- The console is clean on load and after each interaction
- `pnpm lint` and `pnpm build` pass. `pages/`, `store/`,
  `tailwind.config.js`, and `next.config.js` no longer exist

## Notes

- **Must not merge before spec 3's Vercel project exists** unless you
  accept the Pages site staying frozen in between. It does stay up
- **Leftover on you:** connect the GitHub repo to a Vercel project so
  the branch gets a preview URL. No environment variables are needed
- General Sans is free for commercial use under the Fontshare
  licence; keep the licence file next to the font files
- `redesigned-portfolio` is an older copy of this repo with no git
  history. Archive it after this merges, do not upgrade it

## References

- @context/project-overview.md
- @context/design-system.md
- @context/stack.md
- @context/features/spec1-honest-project-cards.md
- `../bakery/package.json` and `../asma-portfolio/package.json` for
  the versions to match
