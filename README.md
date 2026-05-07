# ArtSkin

Landing website for **ArtSkin** — next-generation artificial skin that restores sensation for amputees by closing the bionic feedback loop.

Live: https://artskin.ai

## About the project

Conventional prosthetics are a one-way street: muscle signals go out, but no sensation comes back. ArtSkin engineers an artificial skin layer that wraps existing prosthetic platforms and stimulates the peripheral nervous system directly, so the user can feel pressure, texture, and temperature in real time.

This repository contains the public-facing site that introduces the technology, the team, and the roadmap. It is a single-page experience composed of:

- **Hero** — the ArtSkin promise (`SENSATION RESTORED.`) and primary call-to-action
- **Features** — core capabilities (tactile precision, thermal sensing, universal neural interface) with a live simulation chart and key spec tiles (32 sensors/unit, <15 ms latency)
- **Story** — mission and origin
- **Timeline** — development and clinical-trial milestones
- **Media / Partners** — press coverage and partner logos
- **Footer** — contact and social links

The visual language is dark, technical, and grid-driven — built to feel closer to medical-device documentation than a typical product page.

## Tech stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS** (loaded via CDN, configured inline in `index.html`)
- **lucide-react** for iconography
- **recharts** for the simulation chart
- **GitHub Pages** + **GitHub Actions** for hosting and CD

## Project structure

```
.
├── App.tsx                  # Root component, composes the page sections
├── index.tsx                # React entry point
├── index.html               # HTML shell + Tailwind config + fonts
├── components/              # All page sections (Hero, Features, Story, ...)
├── public/
│   └── CNAME                # Custom domain marker for GitHub Pages
├── vite.config.ts           # Vite config (base, alias, dev server)
└── .github/workflows/
    └── deploy.yml           # Build + deploy to GitHub Pages
```

## Run locally

**Prerequisites:** Node.js 20+

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the built site locally
```

## Deploy

Every push to `main` is built and published to GitHub Pages by `.github/workflows/deploy.yml`, then served from the custom domain `artskin.ai`.
