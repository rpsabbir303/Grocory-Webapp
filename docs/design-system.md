# Design System

The shared design system lives in `packages/ui`. It is brand-neutral because no business documentation defines a final identity yet. Update `src/tokens.ts` and `src/styles.css` to re-theme both applications together.

## Tokens

`designTokens` centralizes semantic colors, typography, spacing, radii, shadows, content widths, responsive breakpoints, and z-index levels. CSS variables in `styles.css` expose core semantic values to application styles.

- Primary: teal (`#0f766e`) for primary actions and focus.
- Neutral: slate values for text, borders, surfaces, and canvas.
- Status: green, amber, red, and sky for success, warning, error, and information.
- Typography: Inter-first system stack with regular, medium, semibold, and bold weights.
- Breakpoints: mobile 640px, tablet 768px, desktop 1024px, wide 1280px.

## Components

`packages/ui/src/index.tsx` provides Button, Input, Textarea, Select, Checkbox, Radio, Switch, Badge, Avatar, Card, Modal, Dropdown, Tooltip, Tabs, Breadcrumb, Pagination, Table, Skeleton, Loading, EmptyState, ErrorState, Toast, ConfirmationDialog, MainLayout, and DashboardLayout.

Compose form controls with `Field` for labels, required indicators, helper text, and validation messages. Pass `aria-invalid` to controls for error styling.

Components are presentational and do not contain business logic, data fetching, or authentication.

## Responsive rules

Use mobile-first Tailwind classes. Content containers should use `max-w-7xl` or the tokenized content width. Tables scroll horizontally, dashboard navigation collapses below the medium breakpoint, and controls remain usable at touch sizes.

## Preview and verification

The repository has no Storybook or component preview system, and no dependency was added for one. Import primitives into a future app route or test harness. Run `pnpm typecheck` and `pnpm build` after installing dependencies.
