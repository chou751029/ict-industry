#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "$0")/.." && pwd)"
source_page="$project_root/ICT產業追蹤平台設計/ICT產業追蹤平台.dc.html"
deploy_copy="$project_root/ict-industry-deploy/index.html"
pages_entry="$project_root/index.html"

cmp -s "$source_page" "$deploy_copy" || {
  echo "FAIL: ict-industry-deploy/index.html is not synchronized with the source page." >&2
  exit 1
}
cmp -s "$source_page" "$pages_entry" || {
  echo "FAIL: repository-root index.html (GitHub Pages entry) is not synchronized." >&2
  exit 1
}

node - "$source_page" <<'NODE'
const fs = require('fs');
const html = fs.readFileSync(process.argv[2], 'utf8');
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .join('\n');
new Function(scripts);
NODE

echo "PASS: source page, deploy copy, and GitHub Pages entry are identical; embedded JavaScript parses."
