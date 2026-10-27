#!/usr/bin/env bash
# Build the site and sync it to the VPS, where Caddy serves /srv/sites/adrianmarrero.com.
# Manual fallback: GitHub Actions already deploys every push to main.
# The site dir belongs to `deploy`, so the remote rsync runs as that user. macOS ships
# openrsync, which the CI path (rrsync) rejects, hence sudo instead of deploy's own key.
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build
rsync -avz --delete --rsync-path='sudo -u deploy rsync' dist/ hetzner:/srv/sites/adrianmarrero.com/
