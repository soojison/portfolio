#!/usr/bin/env bash

set -e
set -u

# Add yarn.lock to each commit if changed
yarn_lock() {
	yarn
	git add yarn.lock
}

# Run prettier code formatter
prettier() {
	pretty-quick --staged
}

main() {
	yarn_lock
	prettier
}

main "$@"