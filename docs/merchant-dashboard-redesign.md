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

- TypeScript and production build verification should be run with `pnpm typecheck` and `pnpm build` from the repository root.
