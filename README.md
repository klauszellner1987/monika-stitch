# Monika Stitch

Handgemachte Stickkunst – Website mit Online-Shop und Stickanfrage-Formular.

## Tech Stack

- [Astro](https://astro.build/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Stripe](https://stripe.com/) Checkout (clientseitig)
- GitHub Pages Deployment

## Entwicklung

```bash
npm install
npm run dev
```

Dev-Server läuft auf `http://localhost:4321/monika-stitch`

## Build

```bash
npm run build
npm run preview
```

## Konfiguration

### Stripe

1. Produkte im [Stripe Dashboard](https://dashboard.stripe.com/) anlegen
2. Price-IDs in `src/data/products.ts` eintragen
3. Publishable Key in `src/pages/shop.astro` bei `window.Stripe("pk_live_...")` eintragen

### Formspree (Stickanfrage)

1. Formular bei [Formspree](https://formspree.io/) erstellen
2. Form-ID in `src/components/StickanfrageForm.astro` eintragen

### Deployment

Push zu `main` Branch triggert automatisches Deployment via GitHub Actions.
