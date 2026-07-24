# ArtSkin

Landing website for **ArtSkin** — a non-invasive sensory interface platform for prosthetics, XR and robotic systems.

Live: https://artskin.ai

## About the project

Most human–machine interfaces are a one-way street: commands go out, but useful sensation does not come back. ArtSkin adds the missing return path with a modular layer that senses contact, adapts stimulation to the individual and communicates through the peripheral nervous system.

This repository contains the public-facing site that introduces the technology, the team, and the roadmap. It is a single-page experience composed of:

- **Hero** — the ArtSkin promise and interactive tactile-field visual
- **Mission** — the human need, non-invasive strategy and company foundation
- **Platform** — a clear four-step explanation of the sensory feedback loop
- **Applications** — prosthetics, XR and robotic teleoperation
- **Story** — Iliias Dzhentaev's engineering background, company timeline and original photography
- **Press & recognition** — verified programs and awards, with space for the full media archive
- **Footer** — collaboration CTA and verified contact links

The visual language is dark, technical and tactile: restrained typography, signal-map graphics, responsive motion and an electric mint palette.

## Tech stack

- **Vite 6** + **React 19** + **TypeScript**
- **Tailwind CSS** (loaded via CDN, configured inline in `index.html`)
- **lucide-react** for iconography
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

On Windows, you can also double-click `START_LOCAL_PREVIEW.bat`. It installs
dependencies when needed, starts the development server and opens the site in
your default browser.

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serve the built site locally
```

## Deploy

Every push to `main` is built and published to GitHub Pages by `.github/workflows/deploy.yml`, then served from the custom domain `artskin.ai`.
