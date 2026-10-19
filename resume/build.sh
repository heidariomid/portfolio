#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
SRC="$PWD/omid-heidari-resume.html"
OUT="$PWD/../public/assets/omid-heidari-resume.pdf"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

"$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check --disable-extensions \
	--allow-file-access-from-files --user-data-dir="$PROFILE" --no-pdf-header-footer \
	--virtual-time-budget=10000 --print-to-pdf="$OUT" "file://$SRC" 2>/dev/null

pages="$(pdfinfo "$OUT" | awk '/^Pages:/ {print $2}')"
echo "Wrote $OUT ($pages page)"
[ "$pages" = 1 ] || { echo "Expected 1 page, got $pages" >&2; exit 1; }

python3 build-docx.py
