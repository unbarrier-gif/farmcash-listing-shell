# FarmCash Sales Portal

A lightweight React + Vite sales portal for FarmCash machinery listings, designed for fast, clean presentation of assets **for sale** and **wanted**.

The portal is intentionally simple, visual, and mobile-friendly, acting as a professional front-end for FarmCash machinery enquiries.

---

## What this portal does

This project supports:

- A home page showing **all current adverts**
- Clear separation of **For Sale** and **Wanted** assets
- Individual listing pages (one per machine)
- A wanted page for sourcing machinery on request
- Direct enquiry via WhatsApp and phone

Built for **static delivery via Google Cloud Run** using a containerised Vite build.

---

## Routes

| Route | Purpose |
|------|--------|
| `/` | All adverts (Home) |
| `/for-sale` | For sale adverts |
| `/listing/:slug` | Individual listing page |
| `/wanted` | Wanted / sourcing page |

---

## Tech Stack

- React 19
- Vite
- TypeScript
- React Router
- Tailwind CSS
- `serve` (for static hosting in Cloud Run)
- Docker
- Google Cloud Build + Cloud Run

---

## Deployment model (important)

This repository is connected to **Google Cloud Build**.

On every push to the `main` branch:

1. Cloud Build runs `cloudbuild.yaml`
2. A Docker image is built using the `Dockerfile`
3. The image is pushed to Artifact Registry
4. Cloud Run deploys the latest revision automatically

There is **no manual deployment step** once configured.

---

## Project structure (high level)
/
├── public/ # Static assets (images, video)
├── src/ # React application source
│ ├── components/
│ ├── pages/
│ ├── data/
│ └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
├── Dockerfile
├── cloudbuild.yaml
└── README.md


---

## Notes

- This repository is intended to be a **single source of truth** for the FarmCash sales portal.
- Additional machine listings are added via structured data files, not CMS tooling.
- The portal is deliberately not a marketplace — it is a **curated sales surface**.
- 

---

Deployment test – Cloud Build trigger verification.

