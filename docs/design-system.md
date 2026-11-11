# Design System

The shared design system lives in `packages/ui`. Task 28.1 defines the configurable LocalMarket light-theme identity. See [LocalMarket design system](localmarket-design-system.md) for the current brand, token values, component specifications, and preview instructions. This file retains the original component API overview.

## Tokens

`designTokens` centralizes semantic colors, typography, spacing, radii, shadows, content widths, responsive breakpoints, and z-index levels. CSS variables in `styles.css` expose core semantic values to application styles.

- Primary: forest green (`#245c42`) for primary actions and focus.
- Neutral: warm neutral values for text, borders, surfaces, and canvas.
- Status: centralized success, warning, error, and information palettes.
- Typography: a local system stack with regular, medium, semibold, and bold weights; no remote font loading.
- Breakpoints: mobile 640px, tablet 768px, desktop 1024px, wide 1280px.

## Components

`packages/ui/src/index.tsx` provides Button, Input, Textarea, Select, Checkbox, Radio, Switch, Badge, Avatar, Card, Modal, Dropdown, Tooltip, Tabs, Breadcrumb, Pagination, Table, Skeleton, Loading, EmptyState, ErrorState, Toast, ConfirmationDialog, MainLayout, and DashboardLayout.

Compose form controls with `Field` for labels, required indicators, helper text, and validation messages. Pass `aria-invalid` to controls for error styling.

Components are presentational and do not contain business logic, data fetching, or authentication.

## Responsive rules

Use mobile-first Tailwind classes. Content containers should use `max-w-7xl` or the tokenized content width. Tables scroll horizontally, dashboard navigation collapses below the medium breakpoint, and controls remain usable at touch sizes.

## Preview and verification

The repository has no Storybook or component preview system, and no dependency was added for one. Import primitives into a future app route or test harness. Run `pnpm typecheck` and `pnpm build` after installing dependencies.
