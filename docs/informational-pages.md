# Informational Pages

## Pages

- `/about` — platform introduction, mission, vision, values, and local-commerce approach.
- `/how-it-works` — customer and merchant journeys, one-store cart rule, COD, and subscription model.
- `/stores` — existing nearby-store listing page.
- `/categories` — supported catalogue categories linking to store discovery.
- `/become-merchant` — existing merchant application entry point.
- `/contact` — public general inquiry form backed by a mock contact service.
- `/privacy-policy` — structured privacy draft based on current frontend functionality.
- `/terms-and-conditions` — structured terms draft reflecting the current business model.

## Footer mapping

The footer now links to the canonical routes above. Merchant Support remains a protected dashboard route at `/merchant/support`; public Help & Support links to `/contact`.

## Configuration

`apps/main-web/app/lib/site-config.ts` centralizes the display name, description, official contact placeholders, and legal-review label. Official contact details and final legal language remain unconfirmed and are intentionally not fabricated.

## Contact behavior

The contact form validates required fields, email shape, character limits, and submission state. `mockService.submitContactMessage` simulates a successful local submission without sending email or calling a backend.

## Legal review

Privacy and Terms pages are product-content drafts only. Retention, user-rights, cancellation, refund, dispute, liability, compliance, and contact policies require business/legal review before publication.
