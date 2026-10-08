#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
SKILL_ROOT="$(cd -- "$SCRIPT_DIR/.." && pwd)"
cd "$SKILL_ROOT"

if ! command -v git >/dev/null 2>&1; then
  echo "ERROR: git is required to update product-ui." >&2
  exit 1
fi

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "ERROR: This product-ui installation is not backed by a Git checkout." >&2
  echo "Install it once from Git, then future updates can use this script." >&2
  exit 2
fi

REPO_ROOT="$(git rev-parse --show-toplevel)"
cd "$REPO_ROOT"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "ERROR: Local changes detected. Update aborted; nothing was overwritten." >&2
  git status --short >&2
  exit 3
fi

BRANCH="$(git symbolic-ref --short -q HEAD || true)"
if [[ -z "$BRANCH" ]]; then
  echo "ERROR: Detached HEAD. Checkout the tracked product-ui branch before updating." >&2
  exit 4
fi

REMOTE="$(git config --get "branch.${BRANCH}.remote" || true)"
MERGE_REF="$(git config --get "branch.${BRANCH}.merge" || true)"
REMOTE="${REMOTE:-origin}"

if ! git remote get-url "$REMOTE" >/dev/null 2>&1; then
  echo "ERROR: Configured remote '$REMOTE' does not exist." >&2
  exit 5
fi

OLD_COMMIT="$(git rev-parse HEAD)"
OLD_VERSION="$(cat "$SKILL_ROOT/VERSION" 2>/dev/null || echo unknown)"

echo "product-ui: $OLD_VERSION"
echo "remote: $(git remote get-url "$REMOTE")"
echo "branch: $BRANCH"

git fetch "$REMOTE" "$BRANCH"
git pull --ff-only "$REMOTE" "$BRANCH"

NEW_COMMIT="$(git rev-parse HEAD)"
NEW_VERSION="$(cat "$SKILL_ROOT/VERSION" 2>/dev/null || echo unknown)"

echo "previous_version=$OLD_VERSION"
echo "new_version=$NEW_VERSION"
echo "previous_commit=$OLD_COMMIT"
echo "new_commit=$NEW_COMMIT"

if [[ "$OLD_COMMIT" == "$NEW_COMMIT" ]]; then
  echo "product-ui is already up to date."
else
  echo "Updated files:"
  git diff --name-status "$OLD_COMMIT" "$NEW_COMMIT"
  if [[ -f "$SKILL_ROOT/CHANGELOG.md" ]]; then
    echo
    echo "Review CHANGELOG.md for release notes."
  fi
fi
