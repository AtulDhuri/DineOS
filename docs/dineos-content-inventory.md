# DineOS Content Inventory

## Audit scope

Audited the React/Vite source, shared shell, routed pages, API handlers, product screenshots, build configuration, and the existing `docs/dineos-content-audit.md` before the redesign.

## Product narrative retained

DineOS is a restaurant operating system, not a standalone QR menu. The central story is one connected workflow from guest scan to kitchen preparation, service, billing, payment, and management reporting.

### Product capabilities found

- QR table ordering and digital menus
- Prepaid and postpaid ordering, split bills, UPI, card, cash, and digital invoices
- Kitchen ticket management, prep tracking, ready status, and notifications
- Waiter operations, table states, call-waiter requests, and bill requests
- Table and floor mapping
- Zone-specific menus, visibility, pricing, and rules
- Availability states: available, out of stock, hidden, seasonal, and disabled
- Revenue, occupancy, popular item, table turnover, AOV, payment, and outlet reporting
- Staff, tax, menu, outlet, and multi-branch management
- Setup, QR generation, training, printer review, migration, and go-live support

### Existing workflows

1. Guest scans table QR.
2. DineOS captures table and zone context.
3. Guest browses the current menu.
4. Guest adds items and chooses the supported payment journey.
5. Order enters the kitchen queue.
6. Kitchen moves the order through preparation and ready status.
7. Service team sees table, order, waiter, and bill context.
8. Manager reviews activity, payments, occupancy, revenue, turnover, and outlet performance.

## Content reused in the redesign

- Existing business positioning and operating-system language
- Existing eight platform modules and twelve feature themes
- Existing prepaid/postpaid model distinction
- Existing implementation and onboarding promise
- Existing eight hospitality segments
- Existing FAQ themes
- Existing 13-stage product proof journey
- Existing customer, kitchen, manager, and admin screenshots
- Existing pricing and demo/contact conversion paths

## Content deliberately not fabricated

The repository does not contain verified customer logos, named testimonials, case studies, deployment counts, orders processed, revenue managed, cities served, or quantified before/after outcomes. The redesign uses product-proof facts such as platform module count and screenshot stages instead of inventing customer evidence.

Hotel folio charging, POS integrations, inventory depth, payment processing, CRM, and database integrations were not verified in source code. These remain sales/discovery topics until confirmed by the product team.

## Routes and content roles

- `/`: conversion-led platform narrative, product proof, operating loop, outcomes, industries, FAQ, demo CTA
- `/product`: interactive platform modules with real screenshots and lead capture
- `/features`: existing feature catalog and workflow detail
- `/solutions`: existing hospitality segment content
- `/pricing`: existing Standard Outlet and Multi-Outlet pricing calculator
- `/demo`: existing 13-stage product proof and structured booking form
- `/about`: mission and values
- `/contact`: general inquiry form and direct contact details
- `/blog`: operations content hub and email-only newsletter request

## Known content gaps

- Blog cards have no article routes.
- Footer legal labels have no legal routes.
- No verified testimonials or customer proof assets are present.
- SEO needs sitemap, robots, structured data, and a verified canonical domain.
