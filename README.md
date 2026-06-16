# Modern IT Pathways Website

Static website for Modern IT Pathways, structured around two clear audiences:

- Individuals looking for IT career coaching and beginner-friendly modern IT training
- Teams, startups, and small companies looking for lightweight IT operations consulting

## Site structure

- `index.html` is the high-level homepage and chooser page.
- `coaching.html` contains individual coaching copy, coaching options, pricing, community-rate/pay-what-you-can language, the session finder quiz, and the native get started form.
- `intake-form.js` handles native form validation, Formspree submission, and the redirect to Calendly after a successful submission.
- `consulting.html` contains team-focused consulting copy for onboarding/offboarding, access management, SaaS admin workflows, documentation, automation opportunities, vendor cleanup, and practical security-minded IT operations.
- `resources.html` contains starter guide cards.
- `resources/onboarding-cleanup.html` is the first full guide.

## Main flow

Home → Choose coaching or consulting → Dedicated page → Correct CTA

Coaching visitors use the native get started form and the session finder quiz.

Consulting visitors use the same short form as the front door.

## Form submission setup

This static site uses Formspree for native form submissions. Create a Formspree form that delivers responses to the desired email address, then replace the placeholder endpoint in `intake-form.js`:

```js
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
```

The Formspree endpoint is not a private key. Do not add private API keys to frontend code.

## Calendly

https://calendly.com/sarairamadan/modern-it-pathways-intro-call

After a successful form submission, visitors are redirected to the Modern IT Pathways Intro Call.

## How to preview

Open `index.html` in your browser, or run a local static server from this directory.

## How to deploy

Upload or replace these files in the GitHub repo. Cloudflare Pages should automatically redeploy after the commit.
