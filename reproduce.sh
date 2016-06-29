#!/bin/sh
set -x
rm -rf node_modules/ build/ && npm i
# roc build here would fail, complaining about missing modules:
npm i hjson toml jison cson properties
roc build --verbose
