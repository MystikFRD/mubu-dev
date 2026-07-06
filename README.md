# mubu.dev

Personal portfolio of **Mustafa Budak** — Computer Science student, former Ford automation apprentice.

Live at [mubu.dev](https://mubu.dev)

## Setup

No build step required. Static HTML, CSS, and JavaScript.

### Profile photo

Drop your portrait into the project root as `profile.jpg` (recommended: ~800×1000px). The site falls back to initials if the file is missing.

### Local preview

```bash
# Python
python3 -m http.server 8080

# Or npx (if Node is installed)
npx serve .
```

Open [http://localhost:8080](http://localhost:8080)

## Deploy to mubu.dev

### Vercel (recommended)

1. Push this repo to GitHub
2. Import at [vercel.com](https://vercel.com)
3. Add domain `mubu.dev` in Project → Settings → Domains
4. Point your registrar's DNS:
   - `A` record → `76.76.21.21`
   - `CNAME` for `www` → `cname.vercel-dns.com`

### Netlify

1. Drag-and-drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop), or connect GitHub
2. Add custom domain `mubu.dev` in Domain settings
3. Update DNS per Netlify's instructions

### Cloudflare Pages

1. Connect repo, set build command to empty, publish directory to `/`
2. Add `mubu.dev` as custom domain

## Structure

```
index.html   — page content
styles.css   — dark industrial theme (amber accent)
script.js    — typewriter, tabs, scroll nav, mode toggle, i18n
i18n.js      — English & German translations
profile.jpg  — your portrait
```

## Languages

Use the **EN / DE** toggle in the sidebar to switch between:

- **EN** — English with German terms shown in parentheses where relevant (e.g. *Elektroniker für Automatisierungstechnik*, *Sicherheitsbeauftragter*)
- **DE** — Full German version

Your choice is saved in `localStorage`.

## License

© Mustafa Budak. All rights reserved. Inspired by Gazi Jarin's Portfolio Site
