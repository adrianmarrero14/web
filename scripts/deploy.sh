#!/usr/bin/env bash
# Build the site and sync it to the VPS, where Caddy serves /srv/sites/adrianmarrero.com.
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build
rsync -avz --delete --chmod=D755,F644 dist/ hetzner:/srv/sites/adrianmarrero.com/
