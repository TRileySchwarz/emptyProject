# emptyProject

This project is intended to provide developers with a foundation for developing Solidity Smart Contracts. It has been filled with a series
of scripts, commands, example contract structures, javascript test suites, and packages pre-installed to meet the demands of most projects. 
It utilizes the OpenZeppelin package as a means of demonstrating some of the most common contracts such as ERC20, SafeMath.sol etc.

For the best results this project should be run using the IntelliJ Ultimate IDE. https://www.jetbrains.com/idea/ 

&nbsp;
## Debugging Smart Contracts in IntelliJ Ultimate IDE
 
For more information on debugging your smart contracts inside of IntelliJ follow the instructions here

https://github.com/TRileySchwarz/truffle-intellij-debug

&nbsp;
## NPM
From the project root. 
    
    $ npm install

&nbsp;
## Running Tests
*Ensure there is no ganache-cli currently running

Run truffle tests - port 8545 

    $ sh scripts/test.sh

Run tests with coverage - port 8555 

    $ sh scripts/coverage.sh

&nbsp;
## Solidity Linter - [solhint](https://protofire.github.io/solhint/)
Solidity specific linter. This is helpful in running static analysis on your code to catch simple mistakes and maintain best practice/style guide adherence

    $ npm run lint:sol


&nbsp;
## Generating Flat Files - [truffle-flattener](https://www.npmjs.com/package/truffle-flattener)
Used for generating flat files. This is useful when needing to very contracts on etherscan, or deploying through something like Remix IDE.

    $ npm run generateFlats


&nbsp;
## Latex Test Formatting
If you are interested in displaying your console log test output in Latex, this script will format it automatically.

Replace the S variable in parse_test.py (in the scripts folder) with the terminal output of "$ truffle test"

    $ python3 parse_test.py
    
&nbsp;
## SHA256 hashing
In the root of the files you want the hashes of. This allows users to verify the contents of a file.
    
    $ shasum -a 256 * 

&nbsp;
### Author

- T. Riley Schwarz








