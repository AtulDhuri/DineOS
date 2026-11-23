# DineOS Redesign QA Checklist

## Completed in source

- [x] Homepage uses verified DineOS positioning and business meaning.
- [x] Real customer, kitchen, manager, and admin screenshots are used.
- [x] Homepage product module showcase is interactive.
- [x] Product page uses real screenshots and outcome-led module descriptions.
- [x] Desktop navigation uses real routes and a mobile hamburger menu.
- [x] Feature grids collapse from desktop columns to tablet and mobile layouts through responsive Tailwind classes.
- [x] Demo/contact/lead/newsletter endpoints were not changed.
- [x] SEO component continues to emit title, description, social, robots, and canonical tags.
- [x] Production TypeScript/Vite build passes with `npm run build`.

## Manual browser checks before launch

- [ ] Test at 320px, 375px, 768px, 1024px, 1440px, and 1920px.
- [ ] Confirm no horizontal scroll on every route.
- [ ] Open and close the mobile menu with keyboard and touch.
- [ ] Confirm all homepage CTA links land on the intended route.
- [ ] Switch each homepage platform showcase tab and verify image, label, benefit, and outcome update together.
- [ ] Run the ProductDemo pause, play, replay, and reduced-motion behavior.
- [ ] Test the demo form with valid data and every required-field failure.
- [ ] Test contact, lead, and newsletter forms against the actual deployed API.
- [ ] Confirm the external chatbot still loads or fails gracefully under an ad blocker.
- [ ] Run Lighthouse on mobile and desktop; optimize screenshot loading and bundle size if scores are below target.
- [ ] Confirm canonical domain, OG image, favicon, and legal URLs with the product owner.
- [ ] Confirm verified customer logos, testimonials, metrics, and integration claims before publishing them.
