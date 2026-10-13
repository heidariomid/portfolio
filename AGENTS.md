# AGENTS.md

One-page personal portfolio for Omid Heidari.

## Commands

```bash
pnpm dev               # dev server, http://localhost:3000
pnpm build             # production build
pnpm start             # serve the production build
pnpm lint              # ESLint 9 flat config, must print nothing
pnpm exec tsc --noEmit # typecheck (run a build once first so next-env.d.ts exists)
```

This is not the Next.js in training data. Read `node_modules/next/dist/docs/`
before writing App Router, metadata, font, or image code.

## Memory

- **Stack:** Next.js 16 App Router, React 19, TypeScript 6, Tailwind 4 through
  `@tailwindcss/postcss`, ESLint 9, pnpm. Same versions as `bakery`.
- **Routes:** `app/layout.tsx` and `app/page.tsx` only. The page renders Navbar,
  Hero, About, Skills, Projects, Cta, Contact, Footer, in that order.
- **Client components:** `Navbar` (scroll state, mobile menu), `ThemeToggle`,
  `Reveal` (scroll-reveal observer), `ContactForm`, `BackToTop`. Everything
  else is a server component.
- **Project cards:** `data/projects.ts` holds the typed `projects` array.
  `demo: null` renders a disabled "Demo · Offline" button and `code: null`
  renders "Code · Private".
- **Contact details:** `data/contact.ts` holds the email address and the
  Website row. Nothing else in the repo spells them out.
- **Design tokens:** `app/globals.css`. Colours are CSS variables under
  `:root`, `html[data-theme='dark']` and `html[data-theme='light']`. There is
  no `tailwind.config`; theme values live under `@theme`. Custom classes sit in
  `@layer components` so utilities still override them.
- **Theme:** dark is the default. `ThemeToggle` sets `data-theme` on `<html>`
  and saves it to `localStorage` under `theme`. An inline script in
  `app/layout.tsx` applies the saved value before first paint.
- **Fonts:** `app/fonts.ts` declares General Sans (local files in
  `app/fonts/general-sans/`, licence in `FFL.txt`) and DM Mono through
  `next/font`. It is not imported yet, so the site renders in the system
  fallbacks of `--font-sans` and `--font-mono`, exactly as the Next 12 site did:
  that site's `@import` font lines sat after other rules and browsers ignored
  them. Adding `import './fonts';` to `app/layout.tsx` turns both fonts on and
  changes how all text looks. The owner decides.
- **Tailwind 3 look kept on purpose:** default border colour `#e5e7eb`,
  `cursor: pointer` on buttons, the `@tailwindcss/forms` focus ring pinned to
  `#2563eb`, and `.project-img-clip`, which stands in for the clipping span the
  old `next/image` rendered.
- **Contact form:** `@emailjs/browser` from the browser, service
  `service_v7hm19x`, template `template_o5gyj0r`. Three states: sending, sent,
  failed.
- **Analytics:** `@vercel/analytics` only. `<Analytics />` from
  `@vercel/analytics/next` sits in `app/layout.tsx`. GA4 is gone.
- **Hosting:** production deploys from `main` to `https://heidariomid.ir` at
  the domain root. There is no `/portfolio` path and no `heidariomid.com`. The
  GitHub Pages is not used. `metadataBase` is `https://heidariomid.ir`.
- **Contact:** the website row is `https://heidariomid.ir`. The mailbox is
  `contact@heidariomid.ir`.
- **Git:** commits have one author. No `Co-authored-by` trailer. If a
  tool adds one, strip it before the commit is pushed. `/feature
  complete` merges the feature branch into `main` and deletes that
  branch locally and on the remote.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
