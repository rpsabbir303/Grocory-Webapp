# Frontend Architecture

## Applications

`apps/main-web` is the single customer and merchant application/domain. Role-aware routes and navigation will be added here without duplicating the application shell.

`apps/admin-web` is an independent Next.js application intended for a separate admin domain and deployment boundary. It must not share customer/merchant route state.

## Packages

- `shared-types`: framework-agnostic interfaces and domain unions.
- `validation`: small reusable client validation utilities; keep schemas here as requirements mature.
- `ui`: presentational primitives with no business logic.
- `api-client`: the future transport boundary. It currently exposes mock services and empty mock collections only.

## Data boundaries

Mock data belongs in `api-client` (or a future dedicated mock-data module), never inside UI components. Real transport, persistence, authentication, and backend concerns are intentionally out of scope for this phase.

## Styling and tooling

Each application owns its Tailwind/PostCSS configuration and shares UI primitives through `@hyperlocal/ui`. TypeScript uses the root strict base configuration.
