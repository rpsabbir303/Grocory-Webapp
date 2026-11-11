# LocalMarket custom design system

Task 28.1 establishes the reusable light-theme identity. It does not add or redesign individual pages. Existing application code and earlier working-tree UI changes are retained. The logo treatments are ready for the later page rollout.

## Identity

The visual idea is a **shared canopy and a nearby neighbor**: a simple roof over an open storefront, with a small clay-colored point alongside it. The open doorway suggests commerce; the adjacent point suggests proximity. This is an original code-native geometric treatment for the existing LocalMarket name, not a new company identity or a claim about trademark clearance.

`packages/ui/src/brand.tsx` owns the configurable name, wordmark segments, symbol geometry, minimum sizes, and clear-space ratio. `BrandLogo` supports full wordmark, compact wordmark, and symbol-only variants. Default, inverse, and monochrome tones support light surfaces, restrained brand panels, and single-color reproduction. All treatments have accessible names; decorative SVGs are hidden from assistive technology.

```tsx
import { BrandLogo, BrandSymbol } from '@hyperlocal/ui';

<BrandLogo />
<BrandLogo variant="compact" />
<BrandLogo variant="symbol" />
<BrandLogo tone="inverse" />
<BrandSymbol title="LocalMarket" />
```

Keep at least one quarter of the symbol width clear around the mark. Minimum symbol size is 24px; minimum full wordmark width is 128px. Do not stretch, rotate, add shadows, use gradients, or recolor individual shapes outside the configured tones. Use inverse only on a sufficiently dark surface. `name` and standard HTML attributes can be supplied without creating navigation behavior. Future navigation should wrap the logo in the existing link.

## One token source

`packages/ui/src/tokens.ts` is canonical. `tailwind-theme.ts` maps those values into both existing Tailwind configurations. `styles.css` resolves CSS variables from that theme. There is no separate app-specific brand palette.

The existing `teal`, `slate`, `green`, `amber`, `red`, and `sky` utility names remain compatibility aliases for brand, neutral, success, warning, error, and information palettes. Prefer semantic names in new shared UI: `bg-brand-primary`, `text-content-secondary`, `border-line`, `bg-canvas`, `bg-surface`, and `text-status-error`.

## Colors

- Primary: `#245c42`, for primary actions and selected states.
- Primary hover: `#1d4936`.
- Secondary brand: `#3c5562`, a quiet blue-gray for secondary identity applications.
- Accent: `#9a542f`, clay. Use sparingly in the brand symbol and editorial details; do not use it as another competing primary action.
- Page canvas: `#f7f8f5`.
- Surface and elevated surface: white. Elevation comes from context, border, and a restrained shadow rather than darker surfaces.
- Border: `#dfe4dc`; control border: `#c2cbc0`.
- Primary text: `#111c15`; secondary text: `#485646`; muted text: `#5e6c5c`.
- Success: `#255733`; warning: `#784b1b`; error: `#883329`; information: `#335474`.

Each palette includes 50–950 shades. Status badges pair their 50 surface with 800 text. Use labels alongside status colors. Neutral 400 is for placeholders/decorative details, not body text. White text belongs on the primary 700/800 or other checked dark surfaces. Contrast verification results are recorded in the progress log; this is not a claim of full WCAG certification.

CSS variables include `--color-primary`, `--color-primary-strong`, `--color-secondary`, `--color-accent`, `--color-canvas`, `--color-surface`, `--color-elevated`, `--color-ink`, `--color-text-secondary`, `--color-muted`, `--color-border`, and the four status colors.

## Typography

Use one locally available system family: Segoe UI on Windows, then the platform UI font. No remote font requests, font packages, or downloaded font files are required. Numeric tables use tabular numerals; use a monospace stack only for technical codes when needed.

Typography roles are available as `designTokens.typography.roles` and corresponding CSS classes:

- `type-display`: responsive 32–52px, 700 weight, 1.08 line height. Editorial hero use only.
- `type-page`: responsive 28–36px, 700 weight, 1.2 line height.
- `type-section`: responsive 22–28px, 600 weight, 1.3 line height.
- `type-card`: 17px, 600 weight, 1.4 line height.
- `type-body`: 16px, 400 weight, 1.65 line height.
- `type-secondary`: 14px, 400 weight, 1.6 line height.
- `type-caption`: 12px, 400 weight, 1.5 line height.
- `type-label`: 13px, 600 weight, 1.5 line height.
- `type-button`: 14px, 600 weight, 1.25 line height.

The utility scale remains 12, 14, 16, 18, 20, 24, 30, 36, and 48px. Responsive role sizes do not require changing the existing heading elements or content hierarchy. Avoid all-caps body copy; uppercase is reserved for short contextual labels.

## Spacing, shape, and layout

The spacing scale is 0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, and 96px. Use 8px for tightly related controls, 16px for compact groups, 24px for cards/grid gaps, and 32px between major page groups.

Public section spacing scales from 48 to 80px. Page margins scale from 16 to 32px. Forms cap at 640px; reading content caps at 720px; public/account content caps at 1280px. The administrative content limit is 1440px.

Radii: 4px for small details, 6px for compact surfaces, 8px for controls, 12px for cards, 16px for dialogs, and full radius for badges/avatars. Do not put every content group in a rounded card. Use borders and spacing for ordinary grouping. Shadows are optional for static cards and reserved primarily for menus, floating feedback, and dialogs.

- Public website: editorial composition, product/store imagery, 1280px content, flexible section spacing.
- Customer account: 220px navigation column with a 32px content gap; compact navigation below desktop width.
- Merchant workspace: 256px sidebar, 72px header, 24px grid gap, structured operational surfaces.
- Admin workspace: 256px sidebar, 64px header, 20px grid gap, denser readable data. These are specifications; missing admin pages are not implemented by this task.

Reusable opt-in classes are `lm-public-container`, `lm-account-container`, `lm-reading`, `lm-form`, `lm-merchant-container`, `lm-admin-container`, and `lm-section`. Existing layouts are not migrated as part of this foundation task.

## Component specifications

Existing component props, callbacks, conditional rendering, and native behavior are retained.

- **Buttons:** 40/44/48px small/medium/large heights; on mobile at least 44px. Primary uses brand green with white text; secondary uses white, a fine border, and dark text; ghost is a quiet text action; danger uses semantic error. Use `disabled` for unavailable actions. `aria-busy` adds a visual spinner; callers continue to own loading state and submission protection.
- **Inputs, search, selects, textareas:** 44px minimum height, 8px radius, white surface, strong neutral border. Search decoration is opt-in through native `type="search"`. Textarea remains resizable. Labels, hints, validation copy, and required markers retain their current API. `aria-invalid` supplies error styling; native `disabled` and `readOnly` remain unchanged.
- **Checkboxes/radios:** native controls, brand accent, visible keyboard focus, and a label row with a 44px height.
- **Switches:** existing 44×24px track and existing checked callback; the visual hit area extends to 44px without changing state logic.
- **Cards:** 12px corners, a fine neutral border, 24px padding. Utility padding overrides remain supported. Use padding/spacing to group information before introducing more surfaces.
- **Product cards:** 1:1 neutral image frame with `contain`, clear product name, price/unit, availability, and one primary action. `lm-product-media` is an opt-in media class.
- **Store cards:** 3:2 contextual photograph with `cover`, category/location text, explicit open/closed state, and a clear store action. `lm-store-media` is opt-in. These are future composition rules; existing page card structures are retained.
- **Tables:** 48–56px row rhythm, compact uppercase headers, fine dividers, tabular numerals, quiet hover, and a horizontal scroll container on narrow screens. Keep actions and status text readable.
- **Badges/avatars:** quiet status-tinted badges with readable text; circular initials/image avatars. Verification badges continue to depend on existing data.
- **Dropdowns:** elevated white surface, 12px spacing rhythm, native disclosure behavior, selected/open styling, and viewport-aware width.
- **Modals/confirmation:** 512px maximum default width, 16px corners, neutral backdrop, 24px padding, internal vertical scrolling. Existing close/cancel/confirm callbacks remain in charge. No new focus-management behavior is claimed.
- **Tabs/breadcrumbs/pagination:** understated active underline, readable location trail, comfortable controls, wrapping/scrolling where appropriate. Navigation destinations and callbacks are unchanged.
- **Toasts:** white surface, semantic leading border, concise title and message. Existing status announcement behavior is retained.
- **Skeleton/loading:** quiet neutral blocks and a restrained spinner. Respect reduced-motion preferences.
- **Empty/error:** contextual heading and useful next action; abstract neutral illustration only. Error surfaces use a status border and clear copy. Do not invent business achievements, ratings, statistics, or promises.

Hover changes color/border, focus is visibly outlined, active buttons move by 1px, disabled states remain readable, selected states combine styling with existing ARIA/native checked state, and loading presentation never substitutes for business-state handling. Durations are 120/180/240ms; reduced motion suppresses animation.

## Iconography and imagery

The repository has no dedicated icon package, so this system adds a small code-native SVG vocabulary instead of a dependency: search, location, storefront, bag, check, close, arrow, chevron, information, and image. Use `Icon` from `@hyperlocal/ui`. Icons use a 24px view box, 1.75px stroke, round caps/joins, and 16/20/24/32px display sizes. Standard containers are 40px. Decorative icons are hidden from screen readers; meaningful standalone icons accept a title. Icon-only actions still need an accessible button label.

Product photography should show the actual product clearly against a neutral background without cropping essential information. Store photography should show the actual shop or relevant local context. Promotional imagery should feel observational and local, with natural light and restrained editing. Preserve the current image sources and licensing obligations; this task adds no stock photos or fabricated business assets.

Illustrations use simple line geometry and broad neutral space, with at most one restrained accent. The shared image fallback uses token colors and clearly says “Image unavailable”; it does not substitute a different product or merchant. Existing image source and error callbacks are retained.

## Responsive rules

Mobile-first breakpoints remain 640, 768, 1024, and 1280px. At narrow widths, stack forms, preserve readable labels, avoid fixed-width children, scroll data tables within their own container, and keep actions comfortably tappable. Inputs use 16px text on mobile to avoid zooming on focus. Logo treatments may switch from wordmark to compact/symbol during the later page rollout; do not hide functional navigation to make space.

## Preview and verification

From the repository root:

```powershell
node scripts/preview-design-system.cjs
```

This generates `index.html`, `dialog.html`, CSS, a symbol SVG, and a wordmark SVG in `%TEMP%\localmarket-design-system`. Open `index.html` in a browser to inspect the visual reference. It is intentionally static; use the actual applications for callback/state testing. Set `DESIGN_SYSTEM_OUTPUT` to choose another output folder. SVG files are generated from the shared component/configuration, not maintained as duplicate logo geometry.

The optional existing-browser harness is `scripts/verify-ui-redesign.cjs`. It uses an already installed Playwright module and disposable localhost browser contexts. It is not an application dependency and does not use the user's real browser storage. Verification results and known existing limitations are recorded in `docs/development-progress.md`.
