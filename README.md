# mubu.dev

Personal portfolio of **Mustafa Budak** — Computer Science student, former Ford automation apprentice.

Live at [mubu.dev](https://mubu.dev)

## Setup

React + Vite. Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Profile photo

Drop your portrait into `public/profile.jpg` (recommended: ~800×1000px). The site falls back to initials if the file is missing.

### Production build

```bash
npm run build
npm run preview
```

## Deploy to mubu.dev

### Vercel (recommended)

1. Push this repo to GitHub
2. Import at [vercel.com](https://vercel.com) — Vite is auto-detected
3. Add domain `mubu.dev` in Project → Settings → Domains
4. Point your registrar's DNS:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`

## Structure

```
src/
  App.jsx              — layout & providers
  i18n.js              — English & German translations
  index.css            — dark industrial theme (amber accent)
  components/          — section components
  context/             — language & UI state
  hooks/               — typewriter effect
public/
  profile.jpg          — your portrait
```

## Languages

Use the **EN / DE** toggle in the sidebar to switch between:

- **EN** — English with German terms shown in parentheses where relevant
- **DE** — Full German version

Your choice is saved in `localStorage`.

## License

© Mustafa Budak. All rights reserved. Inspired by Gazi Jarin's Portfolio Site
