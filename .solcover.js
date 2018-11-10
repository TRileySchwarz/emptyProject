module.exports = {
    //copyNodeModules: true,
    copyPackages:  ['openzeppelin-solidity'],
    norpc: true,
    skipFiles: [
        // Comment out which files you want to see the coverage for.
        // Before running coverage, make sure to copy the node modules contracts folder into 'openZeppelinContracts'
        'Migrations.sol',
        'mocks'
    ]
};
