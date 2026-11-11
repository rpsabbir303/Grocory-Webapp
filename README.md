# Hyper-local E-commerce Platform

Frontend-only monorepo for the customer/merchant main website and separate super admin website.

## Scope

This initialization includes Next.js + TypeScript app shells, Tailwind CSS, shared packages, domain types, validation helpers, and mock service boundaries. It intentionally does not include backend, database, real API integrations, or feature pages.

## Run locally

```bash
pnpm install
pnpm dev:main   # http://localhost:3000
pnpm dev:admin  # http://localhost:3001
pnpm typecheck
pnpm build
```

## Workspace layout

- `apps/main-web`: customer and merchant experiences on one domain
- `apps/admin-web`: separate super admin application
- `packages/shared-types`: shared domain contracts
- `packages/validation`: reusable client-side validation
- `packages/ui`: reusable UI primitives
- `packages/api-client`: mock service layer and future API boundary
- `docs`: architecture and progress notes

Business/product documentation was not present in the initial workspace; the requested brief is the source of truth until documentation is added.
