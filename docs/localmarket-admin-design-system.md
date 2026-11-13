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

## Remaining work

Admin verification, merchant, customer, store, product, order, subscription, billing, complaint, service-area, report, user, role, audit, and settings pages still require their own routes and data-backed flows.
