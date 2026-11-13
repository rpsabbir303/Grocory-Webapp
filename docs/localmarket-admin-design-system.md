# LocalMarket Admin Design System

## Foundation

The Super Admin application uses a light premium SaaS surface system built on the existing LocalMarket token-backed Tailwind theme. Admin-specific layout and navigation styles are isolated in `apps/admin-web`.

- Canvas: `#f6f8f6` with white content surfaces.
- Primary brand: LocalMarket green for actions, active accents, and platform identity.
- Text hierarchy: slate/neutral tokens for headings, body copy, metadata, and empty states.
- Borders: soft neutral green-gray lines with restrained shadows.
- Radius: rounded-lg controls and rounded-xl cards.
- Focus: visible two-pixel outline with offset for keyboard users.

## Application shell

`AdminShell` provides the fixed 256px desktop sidebar, responsive mobile drawer, sticky top header, grouped navigation, admin profile footer, and responsive content container. Only the implemented dashboard route is navigable today; planned admin areas are visibly listed but non-clickable until their routes and services exist.

## Dashboard patterns

The dashboard uses responsive metric cards, catalogue activity, pending-action empty states, recent products, and recent orders. Values come from existing mock stores, products, customer, and order services. Unsupported admin datasets are represented as unavailable rather than fabricated.

## Merchant verification

`/merchants/verification` provides searchable and status-filtered application review using the existing `MerchantApplication` model and browser-stored application record. `/merchants/verification/[id]` displays applicant, business, location, status, and document-readiness information. The current onboarding flow does not persist a list of applications or uploaded files and exposes no Admin approval, rejection, reviewer, or notes service; those controls remain explicitly unavailable.

## Remaining work

Admin verification, merchant, customer, store, product, order, subscription, billing, complaint, service-area, report, user, role, audit, and settings pages still require their own routes and data-backed flows.

## Product management

`/products` provides a searchable, category/status-filtered directory backed by existing `Product` records. `/products/[id]` shows real product images, description, category, unit, price, inventory, status, and Merchant/Store links. Activate/deactivate and remove use existing product services with confirmation; SKU, brand, approval/rejection, previous price, and created date are not supported by the current model.

## Order management

`/orders` provides a marketplace-wide directory backed by the existing browser order store, with search and supported status filters. `/orders/[id]` shows order totals, items, customer/store relationships, COD payment method, delivery fields, and available timestamps. Status advancement follows the existing `pending → accepted → packing → out_for_delivery → delivered` service rules; cancellation, refunds, payment status, and separate delivery status are not supported.

## Subscription management

`/subscriptions` and `/subscriptions/[id]` use the existing configured merchant subscription service, including its mock monthly amount, trial duration, supported statuses, renewal service, and billing/history records when available. Renewal is the only implemented lifecycle action. Plan editing, cancellation, trial extension, payment processing, and invoice management are not supported by the current architecture.

## Store management

`/stores` provides a searchable, filterable directory backed by existing `Store` records. `/stores/[id]` shows store overview, merchant association, location, operating fields, product/order counts, and the existing subscription-independent store data. Activate/deactivate uses `mockService.updateMerchantStore`; edit and suspend actions are omitted because no corresponding Admin service exists.

## Merchant management

`/merchants` provides a searchable, filterable directory backed by the existing `Store` records. `/merchants/[id]` shows the merchant profile represented by `ownerId`, store verification and availability, store location/category, catalogue products, and subscription data only when the existing subscription service supports that merchant. Edit, suspend, reactivate, joined-date, reviewer, and account-status controls are intentionally omitted because no corresponding Admin data or service exists.

## Customer management

`/customers` is backed by the existing `mockCustomer`, saved addresses, and browser-backed order service. `/customers/[id]` shows only the available profile, order, and address data. Email, registration date, account status, activity logs, edit, suspend, and reactivate actions are not supported by the current customer model or services and are not treated as functional Admin capabilities.
