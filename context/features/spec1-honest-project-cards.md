# Spec 1 — Honest project cards and live links

## Overview

Spec 1 of 3. No dependencies. Ships on the current Next.js 12 site,
before the rebuild.

Every tag on a project card names what the repo runs, and every link
on the page opens something. Today two "Live demo" buttons and the
contact email point at `heidariomid.com`, which is no longer
registered (NXDOMAIN on 12 October 2026). A reviewer who clicks them
gets a DNS error. That is worse than an old version number, so it
ships first.

## Requirements

- All card data is the `projects` array in
  `components/Projects/Projects.jsx`. Edit the array. Do not touch the
  card markup
- Food Delivery tags become `React`, `Apollo`, `GraphQL`, `Tailwind`.
  The app is Create React App 5 with React Router and Apollo Client.
  The word Next.js leaves that card
- Food Delivery has no working demo. `ubereats.heidariomid.com` does
  not resolve, and both API hosts in its `src/apollo/index.ts` are
  down (Heroku returns 404, Liara returns its application-error
  page). Set `demo: null` and render a disabled
  `Demo · Offline` button, the same way `code: null` already renders
  `Code · Private` with the `proj-disabled` class. The demo comes back
  only if spec 1 in the `uber-eats-frontend` repo is built
- Food Delivery `code` points at the front-end repo,
  `https://github.com/heidariomid/uber-eats-frontend`. The card
  describes front-end work and today links the backend
- Crypto Currency `demo` becomes
  `https://cryptocurrenciesprice.vercel.app/`. It answers 200 and it
  is the homepage GitHub lists for `list-of-currencies`. Its tags
  stay: the repo is Next.js 13.1, `@tanstack/react-query` 4,
  TypeScript, Tailwind 3
- AI Trip Planner and Amazon.ae Shop cards do not change. Both demos
  answer 200 and both tag lists match the repos
- The website row stops naming the dead domain. It links to
  `https://heidariomid.ir/` and the label is `heidariomid.ir`. One
  address, written once in a constant and imported. The mailbox stays
  `info@heidariomid.com` until mail exists on `heidariomid.ir`
- `components/Projects/AmazonProject.jsx`, `MofidProject.jsx`,
  `UberEatsProject.jsx`, `OtherProject.jsx`, and
  `pages/projects/uber-eats.jsx` are not imported by any live
  component. Leave them. Spec 2 does not port them, so they disappear
  there

## Out of scope

- Any version bump. That is spec 2
- Vercel, analytics, the base path. That is spec 3
- Restoring the food-delivery demo. That is spec 1 in
  `uber-eats-frontend`
- Rewriting card descriptions or adding a fifth project

## Done when

- On `https://heidariomid.ir/`, every "Live demo" and "View code"
  button that is enabled returns 200. Check each with a fetch, not by
  reading the array. The page is served at the root, with no
  `/portfolio` path
- The Food Delivery card shows four tags, none of them Next.js, and a
  disabled demo button that is not a link
- No website link points at `heidariomid.com` or a `/portfolio` path.
  The only `heidariomid.com` strings left are the mailbox
  `info@heidariomid.com`
- The page renders at 375px, 768px, and 1280px in both themes with a
  clean console
- `npm run build` passes

## Notes

- **Decided.** The home is `https://heidariomid.ir` at the root.
  There is no `heidariomid.com` and no `/portfolio` path
- **Leftover on you:** a mailbox on `heidariomid.ir`. Until that
  exists, the contact email stays `info@heidariomid.com`
- The emailjs contact form posts from the browser and still works
  without the domain. Check which mailbox its template delivers to

## References

- @context/project-overview.md
- `interview-practice/stack-upgrade.md`
- `components/Projects/Projects.jsx`
