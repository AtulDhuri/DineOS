# DineOS Integration Safety Report

Prepared before UI changes and used as the protected-component contract for the redesign.

## Protected components

| Component | Source | Contract preserved |
|---|---|---|
| Contact form | `src/pages/Contact.tsx` | POST `/api/contact` with `name`, `email`, `inquiryType`, `message` |
| Reusable lead form | `src/components/ui/LeadForm.tsx` | POST `/api/contact`; preserves restaurant, phone, business type, and details in the message |
| Demo booking | `src/components/DemoBookingForm.tsx` | POST `/api/book-demo` with structured booking fields and IST timezone |
| Newsletter request | `src/pages/Blog.tsx` | POST `/api/contact` with `inquiryType: newsletter` |
| Express API | `server/index.js` | Nodemailer, server-side validation, escaped HTML, team notification, demo confirmation |
| Serverless API | `api/contact.js`, `api/book-demo.js` | Duplicate deployment handlers retained and untouched |
| Chatbot | `index.html`, `server/www/index.html` | Active external chatbot script and public chatbot ID retained |
| SEO | `src/components/ui/SEO.tsx` | Page metadata, Open Graph, Twitter, robots, canonical metadata retained; title duplication fixed |

## Email behavior preserved

- Contact submissions are emailed to `CONTACT_EMAIL` with requester `replyTo`.
- Demo bookings email the DineOS team and send a confirmation email to the requester.
- The five-working-day follow-up expectation remains visible in the existing demo flow.
- Server-side required-field and email validation remains authoritative.
- User content is escaped before insertion into HTML email bodies.

## Verification checklist

- Run `npm run build` after UI changes. Current build passes.
- Run the Express server with production build output and POST valid/invalid payloads to `/api/contact`.
- POST a complete `/api/book-demo` request and confirm both email messages arrive.
- Confirm Product/Solutions lead forms still send restaurant, phone, business type, and details.
- Confirm the Blog newsletter form still reaches `/api/contact` and is understood as an email-only request, not a list subscription.
- Confirm direct refreshes of all SPA routes return the application shell.
- Verify actual hosting routing so `/api/*` does not fall through to the SPA rewrite.
- Verify SMTP secrets in the hosting secret manager. Do not rely on the checked-in `.env`.
- Rotate the SMTP credential currently present in `.env` and remove secrets from repository history if necessary.
- Add production rate limiting, origin controls, abuse protection, consent handling, and durable lead storage before scaling paid traffic.

## Explicitly not changed

No API endpoint, request payload, SMTP handler, external chatbot script, or form submission behavior was changed as part of the redesign. UI components were restyled and the homepage/platform page were rebuilt around the same business content and assets.

## Remaining operational risks

- Express and serverless handlers are duplicated and can diverge.
- The repository contains an active-looking SMTP credential in `.env`.
- There is no CRM, database, newsletter provider, calendar, payment processor, analytics platform, consent manager, or rate limiter verified in source.
- The canonical domain and OG image URL must be confirmed before launch.
