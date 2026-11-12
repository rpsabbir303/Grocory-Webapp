# Merchant dashboard redesign

## Scope

Task 28.2 refreshed the existing merchant dashboard UI without changing routes, merchant authorization, mock services, shared state, or data contracts.

## Layout

- Added the LocalMarket wordmark and a structured 256px desktop sidebar.
- Preserved all 11 merchant destinations and the mobile drawer behavior.
- Added a sticky 72px workspace header with breadcrumb context, notification disclosure, public-store link, and account menu.
- Kept the existing approved-application gate and dashboard route structure intact.

## Overview

- Reworked the welcome area and quick actions.
- Reworked the four existing metrics with restrained icon treatment.
- Added recent orders using the existing `mockService.listMerchantOrders` data.
- Reworked product overview, store status, subscription summary, and notifications.
- Subscription dates, amount, status, and renewal information are rendered only from existing mock subscription data.

## Responsive behavior

- Sidebar becomes a mobile drawer with an overlay.
- Overview cards collapse from four columns to one column.
- Orders remain readable inside a locally scrollable table.
- Header actions remain available at narrow widths, with secondary public-store text hidden on small screens.

## Verification

- `pnpm typecheck` passed across the workspace.
- Main web production build passed, including linting/type validation and static page generation.
- Manual browser interaction testing remains to be performed for file selection/removal, availability confirmation, location editing, and responsive layouts.

## Store Management follow-up

- Redesigned `/merchant/store` with a store identity/profile header, image-management surfaces, editable details, location panel, availability card, and public-store preview.
- Retained the existing local mock update service, file validation and preview behavior, availability confirmation, validation messages, and public-store route.
- The image controls remain browser-local previews; no upload API was added.

## Product Management follow-up

- Redesigned `/merchant/products` with catalogue metrics, search/status controls, a desktop table, and a compact mobile product list.
- Redesigned `/merchant/products/new` and `/merchant/products/[id]/edit` with grouped product details, commercial fields, validation feedback, actions, and existing-image presentation.
- Preserved the existing product filtering, CRUD callbacks, mock service calls, validation rules, routes, and customer product links.
- No product image-upload flow or pagination was added because those capabilities were not present in the existing implementation.

## Inventory Management follow-up

- Redesigned `/merchant/inventory` with an operational page header, dynamic stock summary cards, responsive inventory table/cards, and movement-history table.
- Restyled search, stock-status filtering, threshold control, Stock In/Stock Out adjustment dialog, validation feedback, and empty/loading states.
- Preserved the existing threshold persistence, stock-status calculation, inventory service calls, movement history state, non-negative stock validation, and product data synchronization.
- No new stock rules, records, pagination, or API behavior were introduced.
