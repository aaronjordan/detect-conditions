#!/bin/bash

set -e

LIVE_VERSION=$(bun info detect-conditions version)
NEXT_VERSION=$(sed -n 's/.*"version": "\([0-9.]*\)".*/\1/p' < ./package.json)

if [[ "$LIVE_VERSION" == "$NEXT_VERSION" ]]; then
  echo "! Cannot re-publish v$LIVE_VERSION."
  echo "  Update version in package.json."
  exit 1
fi

bun run build
bun publish
