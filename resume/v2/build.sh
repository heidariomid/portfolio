#!/usr/bin/env bash
# Prints the four v2 resumes into public/assets. The v1 files and ../build.sh are left alone.
# Each source prints twice: as is for the designed layout, with #ats for the plain one.
set -euo pipefail
cd "$(dirname "$0")"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
OUT="$(cd ../../public/assets && pwd)"
PROFILE="$(mktemp -d)"
trap 'rm -rf "$PROFILE"' EXIT

print_pdf() {
	local url="file://$PWD/$1" out="$OUT/$2" expected="$3" pages
	"$CHROME" --headless=new --disable-gpu --no-first-run --no-default-browser-check --disable-extensions \
		--allow-file-access-from-files --user-data-dir="$PROFILE" --no-pdf-header-footer \
		--virtual-time-budget=10000 --print-to-pdf="$out" "$url" 2>/dev/null
	pages="$(pdfinfo "$out" | awk '/^Pages:/ {print $2}')"
	echo "Wrote $out ($pages page)"
	[ "$pages" = "$expected" ] || { echo "Expected $expected page, got $pages" >&2; exit 1; }
}

print_pdf en.html omid-heidari-resume-v2-en.pdf 1
print_pdf 'en.html#ats' omid-heidari-resume-v2-en-ats.pdf 1
print_pdf fa.html omid-heidari-resume-v2-fa.pdf 1
print_pdf 'fa.html#ats' omid-heidari-resume-v2-fa-ats.pdf 1
