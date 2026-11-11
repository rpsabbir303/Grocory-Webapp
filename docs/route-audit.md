# Route Audit

## Audit scope

Audited the App Router tree, layouts, route guards, dashboard sidebar, account navigation, main header/footer, breadcrumbs, redirects, and internal links. This audit covers the current frontend implementation only; it does not add backend authorization.

## Main Website inventory

Implemented routes:

- `/`, `/stores`, `/store/[slug]`, `/stores/[id]` (legacy redirect), `/product/[slug]`
- `/cart`, `/checkout`, `/order-success`, `/orders/[id]`
- `/login`, `/auth/login` (compatibility redirect), `/register`, `/forgot-password`, `/verify-otp`
- `/account/profile`, `/account/orders`, `/account/addresses`, `/account/wishlist`
- `/become-merchant`, `/become-merchant/application`, `/become-merchant/location`, `/become-merchant/verification`, `/become-merchant/status`
- `/merchant/dashboard`, `/merchant/store`, `/merchant/products`, `/merchant/products/new`, `/merchant/products/[id]/edit`
- `/merchant/inventory`, `/merchant/orders`, `/merchant/orders/[id]`, `/merchant/store-sharing`, `/merchant/subscription`, `/merchant/billing`, `/merchant/reports`, `/merchant/settings`, `/merchant/support`

Route gaps identified:

- `/categories/[slug]` and `/search` are still not implemented and remain documented gaps. The footer-linked informational routes are now implemented.

## Shared layouts and navigation

- The root Main Website layout now supplies `MainHeader` and `MainFooter` to all non-merchant Main Website routes through `MainWebsiteFrame`.
- Merchant routes are excluded from the customer shell and retain `MerchantDashboardShell`.
- Merchant dashboard navigation contains links for all implemented merchant sections, plus a public-store action.
- Account routes use `AccountShell` and preserve the guest redirect to `/login?next=...`.
- Dynamic detail routes provide internal parent links or useful not-found actions.
- `/stores/[id]` redirects legacy store IDs to `/store/[slug]`.

## Admin Website inventory

Current implementation contains only `/` with the separate admin application boundary. The requested admin routes (`/login`, `/dashboard`, `/verification`, `/merchants`, `/customers`, `/stores`, `/products`, `/orders`, `/subscriptions`, `/billing`, `/complaints`, `/service-areas`, `/reports`, `/settings`, and security routes) are not implemented in the current repository and were not invented during this audit.

## Route guards

- Customer account access is guarded by the mock auth context and redirects guests to login.
- Merchant dashboard access is guarded by merchant application status; only approved applications receive the dashboard shell.
- Pending, rejected, and suspended states show appropriate access messaging.
- Admin remains a separate application and has no customer or merchant navigation imports.

## Verification

- Route inventory generated from the App Router files.
- Main Website and Admin Website production builds previously passed after current implementation fixes.
- TypeScript checks passed for all workspaces.
- The shared Main Website shell change should be rechecked with the normal dev server and production build.
- No claim is made that every route was manually clicked in a browser; missing category/search/informational pages remain documented gaps.
