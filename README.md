# Modern IT Pathways Website

Static website for Modern IT Pathways, now positioned as practical modern IT guidance for both individuals and growing teams.

The site keeps the individual coaching flow, embedded session finder quiz modal, and embedded intake form modal, while adding a consulting path for teams that need lightweight IT operations workflow support.

## Main flow

Website → Choose coaching or consulting → Get started → Intake form → Review responses → Send the right payment/scheduling, fit call, or consulting next step

## Active intake form

https://forms.gle/hcFHaVqoPvMcrN6X7

## Calendly

https://calendly.com/sarairamadan/itmentorship

Recommendation: keep Calendly links mostly private for now. Use the intake form as the public front door, then send the right booking link after reviewing the person's responses.

## What's changed

- Updated the homepage hero and SEO metadata for both individual coaching and team consulting.
- Added a two-path “For individuals” / “For teams” section near the top of the homepage.
- Added a dedicated consulting section for growing teams, including common needs, signs, pilot offer details, fit, and CTA.
- Clarified that coaching options, pricing, session finder, and community-rate language apply to individual coaching.
- Updated the About copy to connect the coaching and consulting sides of the work.
- Changed the top navigation CTA from “Start with intake” to “Get started”.
- Updated the hero CTA buttons to “Get started,” “Explore coaching,” “Explore consulting,” and “Take the session finder quiz”.
- Reworked the “How to start” section so clients can compare options, use the quiz, then complete intake.
- Added a built-in session finder quiz as a website pop-up/modal.
- Added a built-in intake form pop-up/modal using an embedded Google Form.
- Added backup links in case the embedded Google Form does not load in a browser.
- Updated session card CTAs from external intake links to modal-based “Get started” buttons.
- Added a “Not sure? Take the session finder quiz” callout under the session options.
- Updated FAQ language to explain the session finder quiz and intake flow.

## Important note about the embedded Google Form

The intake modal currently uses the short Google Forms link inside an iframe:

https://forms.gle/hcFHaVqoPvMcrN6X7

If the form does not display correctly inside the modal, replace the iframe `src` in `index.html` with the official Google Forms embed URL from Google Forms:

1. Open the Google Form.
2. Click Send.
3. Click the embed icon `< >`.
4. Copy the URL from the iframe code.
5. Replace the iframe `src` value in `index.html`.

The backup link will still work even if the embedded version does not load.

## Files to upload to GitHub

- index.html
- styles.css
- README.md

## How to preview

Open `index.html` in your browser.

## How to deploy

Upload or replace these files in your GitHub repo. Cloudflare Pages should automatically redeploy after the commit.
