# Development Progress

## 2026-11-11 — Frontend initialization

Completed:

- Inspected the workspace; no existing files or business/product documentation were present.
- Created pnpm workspace and root TypeScript configuration.
- Initialized separate Next.js applications for main web and admin web.
- Configured TypeScript, Tailwind CSS, PostCSS, and shared package transpilation.
- Added shared entity interfaces, validation helpers, reusable UI primitives, and a mock service boundary.
- Added README and architecture documentation.

Not started by design:

- Feature pages, routing, authentication, real APIs, backend, database, and production data.

Next step: implement page groups from the approved product requirements, starting with the main website shell and role-aware navigation.

## 2026-11-11 — Design system foundation

Completed:

- Added centralized design tokens and shared CSS variables.
- Expanded `packages/ui` with reusable controls, feedback states, data display primitives, dialogs, navigation primitives, and layout foundations.
- Added consistent form field composition and accessible state attributes.
- Applied shared semantic tokens to both application global styles.
- Added `docs/design-system.md`.

Not started by design:

- Complete website pages, feature-specific flows, Storybook, backend, database, and real API integrations.

## 2026-11-11 — Main website layout and navigation

Completed:

- Added responsive main-site header with brand placeholder, location selector, search, customer navigation, cart, and merchant entry points.
- Added mock auth states for guest, customer, pending merchant, approved merchant, and dual-role users.
- Added profile dropdown navigation with role-aware merchant destinations.
- Added public, authentication, account, merchant application, and separate merchant dashboard layout shells.
- Added responsive footer with placeholder business/legal information.
- Added route-level 404 handling and placeholder routes for required navigation destinations.

Not started by design:

- Homepage, product/store pages, complete account flows, merchant dashboard features, backend, database, and real authentication.
