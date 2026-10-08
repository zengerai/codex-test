#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SKILL_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"
TARGET_BASE="${PRODUCT_UI_SKILLS_DIR:-$HOME/.agents/skills}"
TARGET="$TARGET_BASE/product-ui"

mkdir -p "$TARGET_BASE"

if [[ -e "$TARGET" || -L "$TARGET" ]]; then
  if [[ -L "$TARGET" && "$(cd -- "$(dirname -- "$TARGET")" && realpath "$TARGET" 2>/dev/null || true)" == "$SKILL_ROOT" ]]; then
    echo "product-ui is already linked at $TARGET"
    exit 0
  fi
  echo "ERROR: $TARGET already exists." >&2
  echo "Move or remove the existing installation first; it will not be overwritten automatically." >&2
  exit 1
fi

ln -s "$SKILL_ROOT" "$TARGET"
echo "Installed product-ui via symlink:"
echo "  $TARGET -> $SKILL_ROOT"
echo "Restart/reload Codex if it does not detect the skill immediately."
