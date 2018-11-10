# emptyproject

This project is used as a base generic project for testing/auditing/developing Solidity Smart Contracts

### NPM
$npm install

### Latex Test Formatting

Replace the S variable in parse_test.py (in the scripts folder) with the terminal output of "$ truffle test"

$python3 parse_test.py

### Solium
"$solium -d contracts"/ or "$solium -d ." or "$solium -f ERC20Mock.sol"

for custom configs
http://solium.readthedocs.io/en/latest/user-guide.html 

### SHA256 hashing
In the root of the files you want the hashes of
$shasum -a 256 * 

### Deploy to test network

$npm run deploy rinkeby

requires a .env file with mnemonic saved

## Truffle Flattener

## TODO

Update Truffle flattener
Update open zeppelin files / think about ways to make it work without having to update for each version of zeppelin?








