# Phishing Awareness Simulator

This is a security-awareness training simulator. Not for generating or deploying real phishing.

## What it is
- A static, offline-friendly inbox-style simulator to practice spotting suspicious emails.
- Includes immediate feedback, indicators, scoring, streaks, and a retry flow for missed items.
- Provides a learning checklist and clear, always-visible safety banner: �Training Simulator � Do Not Use for Real-World Targeting�.

## What it is NOT
- No credential collection, no sign-in flows, no email sending, no tracking pixels, and no cloning of real brands.
- All messages are fictional and for training only.

## Running locally
1. Clone or download the repository.
2. Open `index.html` in your browser. Everything works offline�no build steps or dependencies.

## Deploying to GitHub Pages
1. Commit the files to a GitHub repository.
2. In the repo settings, enable GitHub Pages with the root as the source.
3. Access the published URL from Pages; it will serve `index.html` as the entry point.

## File structure
- `index.html` � main page and layout
- `assets/styles.css` � styles and responsive design
- `assets/app.js` � data and interaction logic
- `README.md` � setup and safety notes

## Accessibility and safety
- Keyboard navigation for email list and controls, ARIA labels, and high-contrast design.
- All �links� inside training emails are blocked and open an internal notice instead.
- Prominent disclaimer and banner ensure this stays a training-only experience.
