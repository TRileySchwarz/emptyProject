#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

#rm -f build/contracts/*

# Constant helpers.
. scripts/constants.sh

if [ "$SOLIDITY_COVERAGE" = true ]; then
  port=8555
else
  port=8545
fi

if ganache_running $port; then
  echo "Using existing ganache instance"
else
  echo "Starting our own ganache instance"

  node_modules/.bin/ganache-cli  --gasLimit 0xfffffffffff "${accounts[@]}" > /dev/null &

  ganache_pid=$!
fi

