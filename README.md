# Whaiora Connect — Static Renderer (SSR)

This folder contains a lightweight **server-side rendering (SSR)** helper that bundles and pre-renders React pages from `src/pages` into static HTML files inside `dist/`.  
It enables **SEO-friendly**, crawlable HTML while keeping your existing `.tsx` components intact.

---

## ✳️ What’s Included

- **`package.json`** — minimal manifest with a `render` script and dependencies.  
- **`scripts/render.js`** — Node script using `esbuild` and `react-dom/server` to pre-render pages.  
- **`README_SSR.md`** — this guide, with usage, troubleshooting, and extension notes.

---

## ⚙️ Prerequisites

- Node.js **v16+** (recommended v18 – v24) and npm installed.  
  - On Windows, download from [nodejs.org](https://nodejs.org/) and ensure `node` and `npm` are in your PATH.

---

## 🚀 Quick Start (PowerShell)

```powershell
cd "C:\Users\Maxwell\Documents\Whaiora Connect Limited\Project"
npm install
npm run render
# whaiora-connect
# whaiora-connect
