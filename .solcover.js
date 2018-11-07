module.exports = {
    //copyNodeModules: true,
    copyPackages:  ['openzeppelin-solidity'],
    norpc: true,
    skipFiles: [
        'Migrations.sol',
        //'mocks',

        // Comment out which files you want to see the coverage for.
        // Before running coverage, make sure to copy the node modules contracts folder into 'openZeppelinContracts'
        'openZeppelinContracts/',
        'openZeppelinContracts/access/',
        'openZeppelinContracts/crowdsale/distribution/',
        'openZeppelinContracts/crowdsale/distribution/utils/',
        'openZeppelinContracts/crowdsale/emission/',
        'openZeppelinContracts/crowdsale/price/',
        'openZeppelinContracts/crowdsale/validation/',
        'openZeppelinContracts/lifecycle/',
        'openZeppelinContracts/math/',
        'openZeppelinContracts/ownership/',
        'openZeppelinContracts/ownership/rbac/',
        'openZeppelinContracts/payment/',
        'openZeppelinContracts/token/ERC20/',
        'openZeppelinContracts/token/ERC721/',
        'openZeppelinContracts/token/ERC827/'
    ]
};
