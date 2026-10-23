# adrianmarrero.com

Personal website of Adrián Marrero. Static site built with [Astro](https://astro.build), following the brand in `../branding/`.

- Bilingual: English at `/`, Spanish at `/es/`. All copy lives in `src/i18n/ui.ts`.
- Dark only: Ink background, five grays and one accent (Acid Green `#B8FF2E`). Tokens in `src/styles/global.css`.
- Fonts are self-hosted via Fontsource (Archivo, IBM Plex Mono). No third-party requests.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Preview the build locally |
| `npm run deploy` | Build and `rsync` `dist/` to the VPS (`hetzner:/srv/sites/adrianmarrero.com/`) |

Hosting details (Caddy, DNS, server) live in the `hetzner-vps` project.
