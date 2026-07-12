#!/usr/bin/env bash

cat >/dev/null

bunx agent-browser --session personal-local close >/dev/null 2>&1 || true
