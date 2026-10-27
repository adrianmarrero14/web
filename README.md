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
| `npm run deploy` | Manual fallback: build and `rsync` `dist/` to the VPS as the `deploy` user |

## Deploy

Work on `develop` and open a PR into `main`. [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds every push and PR, and deploys every push to `main`: it uploads the built `dist/` with `rsync` over SSH, then checks that `/` and `/es/` answer.

- The SSH key belongs to the `deploy` user on the VPS, which can only `rsync` into `/srv/sites/adrianmarrero.com` (no shell, no sudo).
- Secrets and variables live in the `production` environment, which only accepts `main`: secrets `DEPLOY_SSH_KEY` and `DEPLOY_KNOWN_HOSTS`, variables `DEPLOY_HOST` and `DEPLOY_USER`.

Hosting details (Caddy, DNS, server, the `deploy` user) live in the `hetzner-vps` project.
