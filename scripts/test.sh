#!/usr/bin/env bash

# Exit script as soon as a command fails.
set -o errexit

# Executes cleanup function at script exit.
trap cleanup EXIT

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

  if [ "$SOLIDITY_COVERAGE" = true ]; then
     node_modules/.bin/ganache-cli-coverage --emitFreeLogs true --allowUnlimitedContractSize true --gasLimit 0xfffffffffff --port "$port" "${accounts[@]}" > /dev/null &
  else
     node_modules/.bin/ganache-cli  --gasLimit 0xfffffffffff --port "$port" "${accounts[@]}" > /dev/null &
  fi

  ganache_pid=$!

  echo "Waiting for ganache to launch on port "$port"..."

  while ! ganache_running; do
    sleep 0.1 # wait for 1/10 of the second before check again
  done

  echo "Ganache launched!"
fi

if [ "$SOLC_NIGHTLY" = true ]; then
  echo "Downloading solc nightly"
  wget -q https://raw.githubusercontent.com/ethereum/solc-bin/gh-pages/bin/soljson-nightly.js -O /tmp/soljson.js && find . -name soljson.js -exec cp /tmp/soljson.js {} \;
fi

truffle version

if [ "$SOLIDITY_COVERAGE" = true ]; then
  node_modules/.bin/solidity-coverage

  if [ "$CONTINUOUS_INTEGRATION" = true ]; then
    cat coverage/lcov.info | node_modules/.bin/coveralls
  fi
else
  node_modules/.bin/truffle test "$@"
fi

