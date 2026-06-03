# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint via next lint
npx cypress open # Open Cypress test runner (component + e2e)
```

There is no Jest/unit test runner — testing is done exclusively with Cypress component tests (e.g. `components/About/About.cy.jsx`). Run a single component test by opening Cypress and selecting the file.

## Architecture

This is a **Next.js 12** single-page portfolio with all sections rendered on `pages/index.js` in this order: `Hero → About → Skills → Projects → Form (Contact)`.

**State management** is a hand-rolled React Context + useReducer setup in `store/`. The only global state is `theme.isDark` (dark mode toggle), dispatched via `actions.TOGGLE_THEME`. Components access it through `store/useContext.js` (`useStateValue` hook).

**Styling** uses Tailwind CSS with custom animations (border wiggle, icon float, scroll indicator) and CSS variable-based colors defined in `tailwind.config.js`. Dark/light mode is controlled by conditionally applying Tailwind classes based on `isDark`.

**Projects** are individual components in `components/Projects/` — each project (Amazon, Mofid, UberEats, Other) has its own `.jsx` file and is composed inside `Projects.jsx`. The UberEats project also has a dedicated page at `pages/projects/uber-eats.jsx`.

**Contact form** (`pages/api/form.js`) sends email via nodemailer and adds the subscriber to MailerLite. Required env vars: `MAILERLITE_API_KEY`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_SERVICE`, `MAIL_USER`, `MAIL_PASSWORD`.

**PWA** is configured via `next-pwa` with a web manifest at `public/manifest.json`. The `next.config.js` exports are stacked (withVideos, withPWA, standalone) — the last `module.exports` wins, so PWA/video plugins may be effectively inactive in the current config.

**Deployment** targets Liara (config in `liara.json`) with standalone output mode.
