#!/usr/bin/env bash
# Build the site and sync it to the VPS, where Caddy serves /srv/sites/adrianmarrero.com.
# Manual fallback: GitHub Actions already deploys every push to main.
# Logs in as `deploy`, whose key is forced into rrsync rooted at the site dir.
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build
rsync -avz --delete -e 'ssh -l deploy' dist/ hetzner:
