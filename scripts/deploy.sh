#!/usr/bin/env bash
# Build the site and sync it to the VPS, where Caddy serves /srv/sites/adrianmarrero.com.
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build
rsync -avz --delete dist/ hetzner:/srv/sites/adrianmarrero.com/
