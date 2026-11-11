# LocalMarket UI redesign

## Scope and pre-change inventory

Task 28 is a presentation-only pass. This inventory was recorded before UI edits on 2026-11-12. Existing working-tree changes to informational pages, mock services, and documentation are retained.

| Surface | Existing implementation | Interactions to preserve |
| --- | --- | --- |
| Public shell | MainHeader, MainFooter, MainWebsiteFrame | Native account details dropdown, mobile toggle, local mock-role selector, cart count, all existing destinations |
| Discovery | Homepage, StoresListing, Storefront, ProductDetails, categories index | Location selectors, radius, search, sort, filters, image selection, quantity and cart replacement confirmation |
| Purchase | CartPage, CheckoutPage, order-success, OrderDetails | Quantity limits, remove/clear, address validation, COD, existing order creation, copy ID, status display |
| Authentication | Login, Register, ForgotPassword, OtpPage | Existing auth context, redirects, password visibility, validation, mock OTP and resend |
| Account | AccountShell, profile, OrderHistory, AddressBook, WishlistPage | Edit/save/cancel, address modal/delete, wishlist removal and cart confirmation, mobile section selector |
| Merchant application | Landing, business/location/verification steps, review/status | Draft persistence, file selection, validation, step navigation, submit/status gates |
| Merchant overview | Dashboard page and MerchantDashboardShell | Approval gate, sidebar/mobile menu, current notifications and links |
| Merchant operations | Store, products/new/edit, inventory, orders/details | Existing handlers, image previews, filters, stock adjustment, delete/availability/status confirmations |
| Merchant account | Sharing, subscription, billing, reports, settings, support | QR/print/export, renewal, invoice modal, analytics filters, tabs/switches, support forms and FAQs |
| Information | About, How it works, Contact, Privacy, Terms | Existing text, contact validation and mock submission, legal placeholders |
| Admin | Root initialization screen only | No implemented admin workflow or feature routes to redesign |
| Shared UI | Button, fields, toggles, Badge, Avatar, Card, Modal, Dropdown, Tooltip, Tabs, Breadcrumb, Pagination, Table, loading/empty/error/toast states, layouts | Component APIs, callback wiring, conditional rendering and content |

There are 47 route `page.tsx` files across both apps, including redirects, dynamic routes, and placeholders. There is no search-results page or category-slug page. Merchant dashboard shell is currently mounted only beneath `/merchant/dashboard`; other merchant pages retain their existing route layout. Account layout currently repeats the public header/footer. These are existing architecture/behavior limitations, not new redesign features.

## Visual direction

Warm neutral canvas, white surfaces, dark ink, and a restrained forest-green accent. Use compact labels, generous section spacing, clear headings, fine borders, and shallow shadows. Keep existing imagery and business copy. No added branding assets, invented data, external fonts, or new dependencies.

## Implementation and verification

The earlier Task 28 working-tree presentation changes are retained. The subsequent Task 28.1 request narrows the current work to a brand/design-system foundation and explicitly postpones individual page redesign. [LocalMarket design system](localmarket-design-system.md) is now the canonical visual specification. Task 28 is not reported as fully complete by this document.

Actual build, route, responsive, interaction, and limitation findings are recorded in `development-progress.md`. Existing mock-service behavior is not certified by a visual redesign.
