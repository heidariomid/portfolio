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
  Hero, About, Projects, Skills, Cta, Contact, Footer, in that order.
- **Client components:** `Navbar` (scroll state, mobile menu), `ThemeToggle`,
  `Reveal` (scroll-reveal observer), `ContactForm`, `BackToTop`,
  `ServiceWorker`. Everything else is a server component.
- **Home screen and offline:** `public/manifest.json` (dark `#0a0a0a` theme and
  splash), `public/apple-touch-icon.png` for iOS, and `public/sw.js`, which
  `ServiceWorker` registers in production only. Page loads go network-first
  and fall back to the cached page; build files and images are cache-first.
  Bump `CACHE` in `sw.js` when a file in `public/` changes at the same path.
- **Project cards:** `data/projects.ts` holds the typed `projects` array.
  `demo: null` renders a disabled "Demo · Offline" button and `code: null`
 renders "Code · Private". An optional `backend` URL adds a "Back-end code"
 button.
- **Contact details:** `data/contact.ts` holds the email, website, GitHub,
 LinkedIn and resume URLs. Components import them; nothing else in `app/` or
 `components/` spells them out. There is no phone number on the site.
- **Resume:** `resume/omid-heidari-resume.html` is the one source of
 `public/assets/omid-heidari-resume.pdf` and `.docx`. `bash resume/build.sh` prints the PDF with headless Google Chrome
 on macOS, fails unless it is one A4 page, then runs `resume/build-docx.py`
 (needs `python-docx`), which reads the same HTML. The design follows the site
 (accent `#ff631a` darkened to `#c74d14` for small text, DM Mono for dates,
 links and stack lines) in one column. The PDF uses Avenir Next because Chrome
 embeds General Sans as Type 3 fonts and its licence forbids converting the
 files; DM Mono is the OFL copy in `resume/fonts/`. The `.docx` uses Arial and
 Consolas so Windows renders it the same.
 `resume/omid-heidari-resume-fa.html` is the Persian translation and the source
 of `omid-heidari-resume-fa.pdf` (built by the same script, also one page). It
 follows Iranian norms: photo, phone, military status, Solar Hijri years in
 Persian digits, Vazirmatn (static TTFs, OFL). Its inline script wraps each run
 of English words in a left-to-right isolate so lists keep right-to-left order.
 It is the only resume with the phone number; it is not linked from the site.
 `resume/v2/` holds the rewritten 2026 resumes: `en.html` and `fa.html` share
 `resume.css`. `bash resume/v2/build.sh` prints each twice into
 `public/assets/omid-heidari-resume-v2-{en,en-ats,fa,fa-ats}.pdf` and fails
 unless each is one page. The `#ats` URL hash switches to the plain layout:
 one column, no photo, full URLs, all-ink text, labelled stack lines. Facts
 are the same in all four; only the Persian ones carry the phone number and
 military status. v2's accent is the 2023 resume's teal `#307584`, not the
 site orange. The header gives Kish Island, Iran, open to remote work and
 relocation. The v1 files above are left as they are. `RESUME_URL` and the
 README link point at `omid-heidari-resume-v2-en.pdf`.
 `public/assets/resume.pdf` and `resume.docx` are the 2023 versions, kept on
 purpose and no longer linked.
- **Content facts:** degree is MSc IT Management (Shahid Beheshti, 2019).
 Independent web developer since 2021 (own projects and small clients, including
 the bakery), Kish Exchange IT department 2017–2020. The site shows no
 years-of-experience count. Every project claim is checked against that
 project's repo. The Amazon and bakery cards link clean public
 copies (`amazon-ae`, `ghanadbashi-asal`); the original repos are private
 because their history holds secrets.
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
 `#2563eb`. Project images fill their frame edge to edge (`object-fit: cover`,
 no padding); `.project-img-clip` clips the hover zoom.
- **Contact form:** `@emailjs/browser` from the browser, service
  `service_v7hm19x`, template `template_o5gyj0r`. Three states: sending, sent,
  failed.
- **Analytics:** `@vercel/analytics` only. `<Analytics />` from
  `@vercel/analytics/next` sits in `app/layout.tsx`. GA4 is gone.
- **Hosting:** production deploys from `main` to `https://heidariomid.ir` at
  the domain root. There is no `/portfolio` path and no `heidariomid.com`. The
  GitHub Pages is not used. `metadataBase` is `https://heidariomid.ir`.
- **Contact:** the site URL is `https://heidariomid.ir`. The mailbox is
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
