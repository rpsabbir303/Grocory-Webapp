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
