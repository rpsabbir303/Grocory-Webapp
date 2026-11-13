# Development Progress

## 2026-11-11 — Frontend initialization

Completed:

- Established the Super Admin dashboard foundation in `apps/admin-web` with a responsive grouped shell, admin navigation, header, profile footer, and data-backed overview cards/sections. Documented the isolated Admin design system in `docs/localmarket-admin-design-system.md`; planned Admin management routes remain intentionally unimplemented.
- Added Admin Merchant Verification routes at `/merchants/verification` and `/merchants/verification/[id]` with real application fields, search, status filtering, accurate counts, responsive table/cards, details, and explicit unavailable states for unsupported persisted documents and review actions.
- Added Admin Merchant Management routes at `/merchants` and `/merchants/[id]` with Store-backed directory filters, details, catalogue, store verification/availability, and supported subscription visibility; unsupported account actions remain omitted.
- Added Admin Customer Management routes at `/customers` and `/customers/[id]` with the existing customer, address, and order data; unsupported account fields and management actions remain omitted or explicitly documented.
- Added Admin Store Management routes at `/stores` and `/stores/[id]` with Store-backed search/filtering, merchant association, location/operations details, product/order metrics, and confirmed activate/deactivate actions through the existing store service.
- Added Admin Product Management routes at `/products` and `/products/[id]` with Product-backed search/filtering, inventory/status views, Merchant/Store links, and confirmed activate/deactivate/remove actions through existing product services.
- Added Admin Order Management routes at `/orders` and `/orders/[id]` with marketplace-wide order search/status filters, relationship links, item/payment/delivery details, and valid status advancement through the existing order service.
- Added Admin Subscription Management routes at `/subscriptions` and `/subscriptions/[id]` with configured subscription/trial data, supported status filters, billing/history visibility, merchant/store links, and confirmed renewal through the existing subscription service.
- Added Admin Billing Management routes at `/billing` and `/billing/[id]` with existing transaction search/status filters, financial record details, merchant/subscription links, and explicit unsupported-action states for invoice/payment operations.
- Added Admin Complaints Management routes at `/complaints` and `/complaints/[id]` using the existing merchant-scoped `SupportTicket` service, supported categories/statuses, related merchant/store/order references, and read-only detail states where Admin actions are not available.

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

## 2026-11-13 — Merchant dashboard layout and overview redesign

Completed:

- Refreshed the merchant sidebar with LocalMarket branding, icon-led navigation, active state, and responsive drawer behavior.
- Refreshed the merchant header with workspace context, notification disclosure, account menu, and public-store action.
- Redesigned the overview welcome section, metric cards, recent orders, product overview, store status, subscription summary, and notifications.
- Reused existing merchant routes, authorization gate, mock services, shared types, and UI primitives.
- Added `docs/merchant-dashboard-redesign.md`.

## 2026-11-13 — Merchant Store Management UI redesign

Completed:

- Reworked `/merchant/store` into a premium profile and management layout consistent with the merchant shell.
- Added structured store identity, image previews and upload guidance, editable information, location, availability, and public preview sections.
- Preserved the existing store state, validation, mock update service, file preview/removal behavior, availability confirmation, and public storefront navigation.

Remaining limitations:

- Image selection remains a local browser preview and is not uploaded to a backend, matching the existing mock architecture.

## 2026-11-13 — Merchant Product Management UI redesign

Completed:

- Refreshed the product listing with summary metrics, search/status controls, responsive table/card presentation, status badges, and action hierarchy.
- Refreshed add/edit product forms with grouped information, pricing/stock panels, validation feedback, and existing image presentation.
- Preserved product routes, mock CRUD services, filtering, activation/deactivation, deletion confirmation, validation, and customer product links.

Remaining limitations:

- The existing product flow has no image upload or pagination behavior; the redesign does not introduce either capability.

## 2026-11-13 — Merchant Inventory Management UI redesign

Completed:

- Refreshed `/merchant/inventory` with premium light-theme summary cards, responsive inventory table/cards, stock status presentation, and movement history table.
- Restyled search, stock-status filtering, low-stock threshold control, Stock In/Stock Out dialog, validation feedback, loading, and empty states.
- Preserved the existing stock calculations, threshold persistence, mock inventory service, movement history, validation, and product/store synchronization.

Verification limitations:

- Automated typecheck/build verification was run. Browser-level interaction testing for inventory controls remains to be performed separately.

## 2026-11-13 — Merchant Order Management UI redesign

Completed:

- Refreshed `/merchant/orders` with dynamic order metrics, status navigation, search/sort controls, responsive order table/cards, and status/payment hierarchy.
- Refreshed `/merchant/orders/[id]` with structured order overview, customer/delivery information, line items, financial summary, and transition action presentation.
- Preserved the existing order service calls, search/filter/sort behavior, totals, item calculations, valid status transitions, confirmation dialog, and customer contact placeholder.

## 2026-11-13 — Merchant Store Sharing and QR UI redesign

Completed:

- Refreshed `/merchant/store-sharing` with store identity/link presentation, QR code framing, sharing instructions, and poster preview.
- Preserved the existing slug/origin URL generation, QR canvas generation, clipboard copy, native sharing fallback, QR PNG download, and print/Save-as-PDF behavior.

Verification limitations:

- Automated typecheck/build verification was run. Browser-level testing of clipboard permissions, native share availability, popup blocking, QR download, and responsive layouts remains to be performed separately.

## 2026-11-13 — Development-only merchant access fixture

Completed:

- Added a query-activated development-only approved merchant fixture using the exact object and `localmarket-merchant-application` storage key from the existing UI verification harness.
- The fixture is non-overwriting and isolated from production; the existing `application?.status === 'approved'` guard is unchanged.

Activation:

- Run the main app in development mode and open `http://localhost:3000/merchant/dashboard?devMerchantFixture=1`.
- Remove access by deleting `localmarket-merchant-application` from browser localStorage and reloading without the query string.

Verification limitations:

- Automated typecheck/build verification was run. Browser-level testing of every order transition and responsive state remains to be performed separately.

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

## 2026-11-11 — Customer homepage

Completed:

- Added a conversion-focused local-commerce homepage with location-aware mock messaging and product/store search.
- Added fictional Bangladesh-market mock stores and products in `packages/api-client`.
- Added nearby stores, supported categories, available products, three-step journey, merchant CTA, and platform-principles sections.
- Added mock location selection, mock current-location feedback, product filtering, and add-to-cart feedback.
- Kept unavailable products out of the purchasable product grid.

Not started by design:

- Real location services, cart persistence, checkout, store/product detail pages, backend, database, and real API integrations.

## 2026-11-11 — Nearby stores listing

Completed:

- Added `/stores` with selected-location display, mock location switching, 500m/1km radius controls, result counts, and empty state.
- Added store-name search, category filtering, availability filtering, nearest sorting, and alphabetical sorting.
- Reused centralized mock store data and shared design-system components.

Not started by design:

- Maps, GPS, real location services, store detail pages, backend, database, and real API integrations.

## 2026-11-11 — Storefront page

Completed:

- Added `/store/[slug]` storefront route with store profile, optional verified badge, optional hours/delivery information, availability state, and mock Call/Chat feedback.
- Added store-scoped product search, category filtering, price sorting, product counts, loading skeletons, empty states, and stock messaging.
- Added centralized mock product data across existing stores.
- Added one-store-per-cart mock context at the main app root, header cart count, and cart replacement confirmation.
- Added legacy `/stores/[id]` redirect compatibility for existing store-card links.

Not started by design:

- Checkout, payments, order placement, real calling/chat, GPS/maps, backend, database, and real authentication.

## 2026-11-11 — Product details page

Completed:

- Added `/product/[slug]` with product image gallery/fallback, product information, stock state, condition note, quantity control, and cart action.
- Added associated store information with status, optional verification, distance, and storefront link.
- Added same-store related product navigation and unknown-product handling.
- Reused the shared cart context and one-store-per-cart confirmation flow with quantity-aware replacement.

Not started by design:

- Checkout, payments, order placement, real image storage, backend, database, and real authentication.

## 2026-11-11 — Shopping cart page

Completed:

- Added `/cart` with empty state, store summary, cart items, quantity controls, removal, clear-cart confirmation, and order summary.
- Extended the existing cart context with quantity updates, removal, clear-cart behavior, stock limits, and lightweight localStorage persistence.
- Added checkout navigation to `/checkout` with a scope-limited placeholder page.
- Delivery fee is shown only when present in mock store data; otherwise the summary clearly marks it as to be determined.

Not started by design:

- Checkout form, address selection, payments, order placement, backend, database, and real API integrations.

## 2026-11-11 — Order success and order details

Completed:

- Persisted checkout-created mock orders through the existing `mockService` boundary.
- Replaced `/order-success` with order-backed confirmation details and Track Order / Continue Shopping actions.
- Added `/orders/[id]` with order overview, delivery information, ordered items, price summary, copy-ID interaction, and status timeline.
- Added `/account/orders` order history using the same mock order service.
- Added proper not-found states and responsive layouts.

Not started by design:

- Real-time tracking, live maps, notifications, cancellation rules, backend, database, and real payment processing.

## 2026-11-11 — Customer account and profile pages

Completed:

- Added shared responsive account shell with desktop sidebar and mobile section navigation.
- Added profile view/edit interaction with Bangladesh mobile validation and feedback.
- Added saved address management with add, edit, delete confirmation, default-address display, and validation.
- Added wishlist page with persisted mock wishlist state, stock-aware Add to Cart, product/store links, removal, and cart replacement confirmation.
- Reused the existing order history, mock order service, shared cart state, UI primitives, and account layout.

Not started by design:

- Real authentication, server-side profile persistence, address APIs, SMS/email verification, backend, database, and merchant dashboard changes.

## 2026-11-12 — Merchant registration and application flow

Completed:

- Added `/become-merchant`, `/become-merchant/application`, `/become-merchant/location`, `/become-merchant/verification`, and `/become-merchant/status`.
- Added merchant opportunity landing content with bounded subscription/trial/no-commission information.
- Added multi-step shop, location, mock map-pin, and document verification flow.
- Added client-only temporary document selection with type/size validation; sensitive files are not persisted.
- Added mock application submission, generated application ID, under-review status, and status messaging.
- Added centralized merchant application types and mock service boundary.

Not started by design:

- Admin approval, real file upload, NID verification, GPS/maps, subscription payments, notifications, backend, database, and merchant dashboard features.

## 2026-11-12 — Merchant dashboard layout and overview

Completed:

- Added dedicated merchant dashboard shell with responsive sidebar/drawer navigation and active route states.
- Added approved-application access gating with pending, rejected, suspended, and customer messaging.
- Added overview metrics, product overview, store status, subscription overview, quick actions, and mock notifications.
- Added placeholders for planned merchant sections without implementing their full functionality.

Not started by design:

- Product, inventory, order, subscription, billing, reporting, support functionality, real notifications, backend authorization, and database integration.

## 2026-11-12 — Merchant order management

Completed:

- Added `/merchant/orders` with merchant-store-scoped order listing, search, status filters, sorting, loading, and empty states.
- Added `/merchant/orders/[id]` with customer information, products, price summary, mock Call Customer action, and status actions.
- Added centralized valid transitions: Pending → Accepted → Packing → Out for Delivery → Delivered.
- Persisted status changes through the existing mock order service so customer order history/details read the latest status.
- Preserved stock behavior: order status changes do not deduct inventory.

Not started by design:

- Cancellation workflow, rider management, real-time tracking, real notifications, phone/chat integrations, backend APIs, and database integration.

## 2026-11-12 — Merchant store sharing and QR

Completed:

- Added `/merchant/store-sharing` with the merchant's current public storefront URL and status preview.
- Added Copy Link, Open Store, native Share Link fallback, and QR PNG download actions.
- Added real QR generation using the lightweight `qrcode` package.
- Added printable A4-style poster preview with browser print / Save as PDF flow.
- Reused persisted store overrides and current store slug so sharing reflects Store Management changes.

Not started by design:

- QR analytics, campaign management, paid advertising, social integrations, backend APIs, and database integration.

## 2026-11-12 — Merchant subscription management

Completed:

- Added `/merchant/subscription` with subscription overview, status handling, plan details, and trial progress calculation.
- Added configurable mock pricing with BDT 99/month default within the BDT 50–100 range.
- Added derived trial remaining days and progress from mock dates rather than hardcoded countdowns.
- Added mock renewal confirmation, processing state, persisted renewal state, and subscription history.
- Added empty, loading, expired/payment-due, and suspended messaging.

Assumption documented:

- The frontend does not enforce a final overdue-subscription access policy; the brief only indicates that stores may be hidden. Backend policy remains unresolved.

Not started by design:

- Payment gateways, recurring billing, invoices, notifications, backend APIs, and database integration.

## 2026-11-12 — Merchant store management

Completed:

- Added `/merchant/store` for viewing and editing the merchant-owned store profile.
- Added editable store name, category, description, contact numbers, address, area, and landmark.
- Added temporary logo and cover image previews with type/size validation and remove actions.
- Added merchant-controlled open/closed availability with confirmation dialog and feedback.
- Added public storefront navigation using the updated store slug.
- Added persisted mock store overrides so public storefront data reflects merchant edits in the current browser.

Not started by design:

- Real image uploads, GPS/maps, product/inventory/order management, subscription payments, backend APIs, and database integration.

## 2026-11-12 — Merchant product management

Completed:

- Added `/merchant/products`, `/merchant/products/new`, and `/merchant/products/[id]/edit`.
- Added `/merchant/products/[id]` with merchant-scoped product overview, images, pricing, inventory, status, store association, and existing activate/deactivate behavior.
- Added merchant-scoped product listing with search, category/status filters, and price/newest sorting.
- Added product create/edit form with validation, pricing, units, stock, active visibility, and mock image preview.
- Added activate/deactivate and delete-with-confirmation actions.
- Added product persistence through the shared mock service and localStorage overrides.
- Customer-facing product consumers read the same centralized mock product collection, preserving storefront consistency.

Not started by design:

- Full inventory management, bulk stock adjustments, stock history, real image uploads, backend APIs, and database integration.

## 2026-11-12 — Merchant inventory management

Completed:

- Added `/merchant/inventory` with derived Total, In Stock, Low Stock, and Out of Stock summaries.
- Added product search and stock-status filtering scoped to the merchant store.
- Added Stock In and Stock Out interactions with quantity validation, previews, notes, and feedback.
- Added persisted mock inventory movement history with previous/updated stock values and movement filtering.
- Added configurable low-stock threshold with a documented mock default of 5 units.
- Reused the centralized product collection and mock service stock mutation methods so Product Management and customer pages receive updated quantities.

Not started by design:

- Barcode scanning, warehouses, supplier management, purchase orders, real notifications, backend APIs, and database integration.

## 2026-11-12 — Authentication pages and user access flow

Completed:

- Added canonical `/login`, `/register`, `/forgot-password`, and `/verify-otp` routes.
- Added a single mock auth context with safe session state only; passwords are not persisted.
- Added mobile/password validation, registration validation, terms acceptance, mock OTP verification (`123456`), and mock resend feedback.
- Added redirect-aware login handling with `next` destination support.
- Added guest protection for customer account routes and retained `/auth/login` as a compatibility redirect.
- Reused the existing design-system Card, Input, and Button primitives.

Not started by design:

- Real authentication, password reset APIs, SMS, email verification, social login, backend authorization, and production security controls.

## 2026-11-11 — Checkout page

Completed:

- Replaced the checkout placeholder with `/checkout` containing saved/new address entry, Bangladesh mobile validation, contact details, COD payment selection, and responsive order summary.
- Added mock order creation through `packages/api-client`, final confirmation, duplicate-submission protection, stock/cart validation, and cart clearing only after successful mock order creation.
- Added `/order-success` with generated mock order ID.

Not started by design:

- Online payments, address APIs, GPS/maps, real order submission, backend, database, and authentication.

## 2026-11-12 — Merchant billing and payment history

Completed:

- Added `/merchant/billing` with subscription overview, paid/outstanding summaries, transaction count, and derived billing status.
- Added searchable, status-filterable, newest/oldest-sortable transaction history scoped to the authenticated mock merchant.
- Added transaction details modal with safe payment information and appropriate pending/due/failed messaging.
- Added eligible paid-record invoice preview using a print-friendly browser document; the filename is based on the invoice number when saved by the browser.
- Connected billing records to the existing subscription history/localStorage mock service without adding a second billing state system.

Not started by design:

- Real payment gateways, recurring billing, tax calculation, bank verification, backend APIs, and database integration.

## 2026-11-12 — Merchant reports and analytics

Completed:

- Added `/merchant/reports` with date-range filters for today, 7, 30, and 90 days.
- Added calculated order, sales, average order value, completion, pending, product, and inventory metrics scoped to the merchant store.
- Added sales visualization, order-status distribution, product performance sorting, and empty states without fabricating sales data.
- Added CSV export for the selected order data with a range-based filename and feedback states.
- Added a centralized `getMerchantReportData` mock service boundary for future analytics APIs.

Not started by design:

- Forecasting, AI insights, external analytics, accounting reports, PDF export, backend APIs, and database integration.

## 2026-11-12 — Merchant settings and account preferences

Completed:

- Added `/merchant/settings` with account information, security, store preferences, notification preferences, and account management sections.
- Added mock profile editing with Bangladesh mobile validation and image preview handling.
- Added mock password-change processing without storing or exposing passwords.
- Added persisted merchant notification preferences through the centralized mock service.
- Reused the existing merchant store state and linked to full Store Management rather than duplicating store editing logic.
- Added simulated logout and account deactivation confirmation behavior.

Not started by design:

- Real password changes, 2FA, notification delivery, account deletion/deactivation enforcement, backend APIs, and database integration.

## 2026-11-12 — Merchant support and help center

Completed:

- Added `/merchant/support` with support category cards, searchable/category-filtered FAQs, and expandable answers.
- Added mock support request creation with validation, character limits, generated ticket IDs, and Open status.
- Added merchant-scoped support request history with ticket search, status filtering, and ticket details.
- Added centralized support categories, FAQ data, ticket types, and localStorage-backed mock support service methods.

Not started by design:

- Live agent messaging, real email/helpdesk integrations, automated replies, ticket status administration, backend APIs, and database integration.

## 2026-11-12 — Local development readiness verification

Completed and verified:

- Provisioned the repository-declared pnpm 9.15.0 through Corepack.
- Installed workspace dependencies and generated `pnpm-lock.yaml` without upgrading package declarations.
- Added the missing `@types/react` dev dependency to `@hyperlocal/ui` and the missing workspace `@hyperlocal/validation` dependency to `@hyperlocal/main-web`.
- Fixed current implementation issues found by checks: malformed homepage/product JSX, Next.js 15 async dynamic route params, and `useSearchParams` prerender handling.
- `corepack pnpm -r typecheck` passes for shared-types, validation, UI, api-client, main-web, and admin-web.
- `corepack pnpm --filter @hyperlocal/main-web build` passes.
- `corepack pnpm --filter @hyperlocal/admin-web build` passes.
- Main development server verified at `http://localhost:3000` with HTTP 200.
- Admin development server verified at `http://localhost:3001` with HTTP 200.
- Root development aliases now invoke Corepack-managed pnpm, so `npm run dev` no longer reports a missing root script and the explicit `dev:main`/`dev:admin` aliases remain available.

Known limitation:

- No ESLint dependency or configuration exists in the repository. The deprecated `next lint` command starts an interactive setup prompt, so no lint configuration was added during this readiness pass. Next production builds completed their built-in compilation/type validation successfully.

## 2026-11-12 — Complete route audit and navigation foundation

Completed:

- Audited the complete current Main Website and Admin Website App Router inventories, layouts, guards, and internal navigation references.
- Added `MainWebsiteFrame` so customer, account, authentication, checkout, order, store, and merchant-application routes consistently receive the Main Website header/footer.
- Kept all `/merchant/*` routes outside the customer shell so the dedicated Merchant Dashboard layout remains isolated.
- Added `docs/route-audit.md` with route inventories, guard behavior, navigation structure, known gaps, and verification notes.

Known route gaps documented rather than fabricated:

- Category listing routes, search route, informational/legal footer routes, and the requested Admin feature routes are not implemented in the current repository.

- Route audit verification: Main Website TypeScript and production build pass after shared shell changes; / and /stores returned HTTP 200 from the refreshed dev server. Tailwind build warnings indicate the existing config is detected but should be reviewed separately.

## 2026-11-12 — Footer and informational pages

Completed:

- Added `/about`, `/how-it-works`, `/categories`, `/contact`, `/privacy-policy`, and `/terms-and-conditions`.
- Kept existing `/stores` and `/become-merchant` routes as canonical destinations.
- Updated footer links to canonical informational and contact routes without changing the established footer layout.
- Added centralized site/contact/legal-review configuration in `app/lib/site-config.ts`.
- Added mock contact submission service with validation, loading, success, and error states.
- Added informational-page documentation and clearly marked unresolved business/legal placeholders.

Remaining documented gaps:

- `/categories/[slug]` and `/search` remain outside this task because their full listing/search experiences are separate product features.

Verification:

- Main and Admin TypeScript checks passed.
- Main and Admin production builds passed.
- New informational routes and `/stores` returned HTTP 200 from a clean Main Website dev server on port 3002 after the prior port-3000 server was left untouched.

## 2026-11-12 — Task 28.1: LocalMarket brand and design-system foundation

Implemented:

- Established the configurable LocalMarket light-theme identity: forest-green primary, blue-gray secondary, restrained clay accent, warm neutrals, and semantic status palettes.
- Added `BrandLogo`, `BrandSymbol`, and `brandConfig` with full, compact, symbol, inverse, and monochrome presentations. Added a small reusable SVG `Icon` vocabulary without an icon dependency.
- Expanded the existing token source with semantic colors, nine responsive typography roles, spacing, layout metrics, component specifications, image ratios, icon metrics, and motion durations.
- Connected the shared token values to the existing Tailwind integration and CSS variables for both applications. Existing utility names remain compatibility aliases; no second token system was introduced.
- Refined shared component presentation for native controls, search, buttons, loading, switches, cards, status badges, tables, navigation, dialogs, and feedback. Existing component APIs and callbacks are retained.
- Added a static visual-reference generator and SVG export command: `node scripts/preview-design-system.cjs`. Outputs are in `%TEMP%\localmarket-design-system`; this adds no application route.
- Created `docs/localmarket-design-system.md`; updated the earlier component overview and linked the Task 28 inventory to the current foundation specification.
- Preserved all working-tree changes from earlier tasks. This task adds no individual-page redesign, routes, business data, services, authentication, or state management.

Verified:

- TypeScript checks pass for main-web, admin-web, UI, api-client, validation, and shared-types, using their existing tsconfig files.
- A start-of-Task-28.1 snapshot comparison found no changes in 115 protected application/configuration, service, model, validation, and package-declaration files.
- HTTP audit covered all 46 existing Main Website route templates with representative dynamic values, plus Admin `/`; all resolve successfully (compatibility redirects followed). Unknown routes and the existing missing category-slug route return 404. These checks establish route availability, not feature completion.
- The browser layout audit covered 138 Main Website route/viewport combinations at 360, 768, and 1440px. No document-level horizontal overflow remained. The shared file-input sizing also resolves the previously observed merchant-settings overflow.
- The standalone identity/component reference renders at 360, 768, and 1440px without horizontal overflow. Inspected desktop/mobile reference images and the confirmation-dialog presentation. Confirmed default/compact/inverse logo colors and sizing after CSS generation.
- Eleven text/background pairs were checked against 4.5:1 contrast. All pass: primary white text 7.82:1, hover 10.20:1, secondary 7.87:1, accent 5.70:1, body 17.49:1, secondary text 7.79:1, muted text on canvas 5.22:1, and status badges at least 8.83:1. This is pair-level verification, not a full accessibility certification.
- Ten browser interaction checks pass: store radius/search/reset; account dropdown/mobile navigation; product quantity/cart replacement; cart quantity/clear cancellation; checkout validation/confirmation dialog; profile validation/save; address save/delete cancellation; inventory adjustment; settings tabs/switch/save; and support FAQ/form submission.
- No root or workspace lint script or ESLint configuration is present. A separate lint pass was therefore not run and no lint dependencies were added.

Known existing limitations retained under the visual-only scope:

- The checkout end-to-end success-navigation check fails: mock order persistence succeeds (two orders including the test fixture), and the cart clears (zero lines), but the existing empty-cart effect redirects to `/cart` instead of retaining `/order-success`. Direct checkout refresh can also redirect before cart hydration. Checkout source and cart state were unchanged in Task 28.1.
- Direct loads with stored merchant state produce existing hydration mismatches on `/become-merchant/status`, `/merchant/dashboard`, and `/merchant/store-sharing`. Their synchronous storage reads/origin-dependent rendering were not changed.
- External sample-image requests are blocked in this test environment (`ERR_NETWORK_ACCESS_DENIED`). The neutral fallback presentation was verified; external-image delivery is not certified.
- Some previously implemented actions remain placeholders; category-slug/search pages and most admin features remain unimplemented. The new identity is ready for a subsequent page rollout, not evidence that all planned features exist.

Final production verification:

- Main Website production build passes (exit 0), using `.\node_modules\.bin\next.cmd build` from `apps/main-web`.
- Admin Website production build passes (exit 0), using the equivalent command from `apps/admin-web`.
- Both builds completed compilation, built-in type validation, static generation, and trace collection. No dependency versions or lockfiles were changed.
- Task 28.1 foundation implementation is complete. The separate pre-existing checkout navigation and merchant hydration findings remain open; full-platform functional completion is not claimed.

Merchant onboarding navigation fix:

- Updated `apps/main-web/app/components/main-header.tsx` so the shared desktop/mobile merchant entry uses the existing `localmarket-merchant-application` state.
- No application routes to `/become-merchant`; drafts continue at `/become-merchant/application`; submitted/under-review, rejected, and suspended applications open `/become-merchant/status`; approved applications open `/merchant/dashboard`.
- The `/merchant/apply` placeholder is no longer used by the shared header, and the dashboard authorization guard and development fixture remain unchanged.
- Verification: TypeScript and production build checks were run after the change. Browser click-through verification was limited to route/build checks in this environment; no application data or authorization rules were changed.

Merchant dashboard shell consistency fix:

- Rooted the existing `MerchantDashboardShell` at `app/merchant/layout.tsx`, so merchant workspace pages share the same sidebar and top navigation instead of only `/merchant/dashboard` doing so.
- Added pathname-based active navigation, page title, and breadcrumb updates while preserving nested merchant routes and page content.
- `/merchant/apply` and `/merchant/application/status` retain their standalone placeholder presentation; the approved merchant guard remains unchanged.
- TypeScript and production build checks pass. Live route checks were run with the development merchant fixture available; route rendering and shell verification are subject to the existing localStorage-based fixture setup.

Next.js development runtime stabilization:

- Confirmed recurring missing-chunk and Webpack runtime errors were caused by `next dev` and `next build/start` sharing the default `.next` output directory during local verification.
- Configured `apps/main-web/next.config.ts` to use `.next-dev` for development and `.next-prod` for production, and ignored both generated directories.
- Safe commands: `pnpm --filter @hyperlocal/main-web dev` for development; `pnpm --filter @hyperlocal/main-web build` followed by `pnpm --filter @hyperlocal/main-web start` (or `next start`) for production.
- Verification passed while development was running during production build, after production startup, and after development restart. Merchant dashboard, store, products, inventory, and orders returned HTTP 200; the full merchant route set also returned HTTP 200 in production.
- No dependency versions, authentication, authorization, routes, or generated build files were changed or committed.
