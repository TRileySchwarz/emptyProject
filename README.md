# emptyproject

This project is used as a base generic project for testing/auditing/developing Solidity Smart Contracts

## openZeppelinContracts

This directory contains unedited OPENZeppelin smart contracts from 1.10.00

If zeppelin version is updated:
 - update openZeppelinContracts
 - update .solcover.js
 - update testOZ

## testOZ 

This directory contains unedited OPENZeppelin smart contract TESTS from 1.10.00

### NPM
$npm install

### Latex Test Formatting

Replace the S variable in parse_test.py (in the scripts folder) with the terminal output of "$ truffle test"

$python3 parse_test.py

### Solium
"$solium -d contracts"/ or "$solium -d ." or "$solium -f myContract.sol"

for custom configs
http://solium.readthedocs.io/en/latest/user-guide.html 

### SHA256 hashing
In the root of the files you want the hashes of
$shasum -a 256 * 


### Deploy to test network

$npm run deploy rinkeby

## TODO

Update Dependencies, look at FansUnite

Update Truffle flattener
Update open zeppelin files / think about ways to make it work without having to update for each version of zeppelin?

Possible to get rid of es2015 thing for await?








