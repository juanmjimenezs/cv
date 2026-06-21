#!/usr/bin/env bash
# Rebuilds the React app in cv-site/ and publishes the static output to docs/
# (the folder GitHub Pages serves). Run this after editing anything in cv-site/.
set -e

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT/cv-site"

echo "📦 Installing dependencies (if needed)..."
pnpm install

echo "🔨 Building..."
# Use the local binaries directly so the build is independent of the package manager.
./node_modules/.bin/tsc -b
./node_modules/.bin/vite build

echo "📤 Publishing to docs/..."
rm -rf "$ROOT/docs"
mkdir -p "$ROOT/docs"
cp -R "$ROOT/cv-site/dist/." "$ROOT/docs/"
touch "$ROOT/docs/.nojekyll"

echo "✅ Done. The published site is in docs/ — commit and push to deploy."
