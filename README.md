# Personal Profile

A responsive profile website for Heorhi Kheladze, a Computer Science student at WSB Merito University in Gdańsk.

## Built with

- HTML
- SCSS
- JavaScript
- Vite

## Running locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

- `index.html` — page content
- `src/styles/` — styling and responsive layout
- `src/main.js` — application entry point
- `public/favicon.svg` — favicon
- `.github/workflows/build.yml` — GitHub Pages deployment

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which publishes the `dist` folder to the `gh-pages` branch. To publish it, select **Settings → Pages → Deploy from a branch → gh-pages / (root)**.
