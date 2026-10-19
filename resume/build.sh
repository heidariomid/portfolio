#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

print_pdf() {
	local src="$PWD/$1" out="$PWD/../public/assets/$2"
	"$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check --disable-extensions \
		--allow-file-access-from-files --user-data-dir="$PROFILE" --no-pdf-header-footer \
		--virtual-time-budget=10000 --print-to-pdf="$out" "file://$src" 2>/dev/null

	local pages
	pages="$(pdfinfo "$out" | awk '/^Pages:/ {print $2}')"
	echo "Wrote $out ($pages page)"
	[ "$pages" = 1 ] || { echo "Expected 1 page, got $pages" >&2; exit 1; }
}

print_pdf omid-heidari-resume.html omid-heidari-resume.pdf
print_pdf omid-heidari-resume-fa.html omid-heidari-resume-fa.pdf

python3 build-docx.py
