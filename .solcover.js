module.exports = {
    //copyNodeModules: true,
    copyPackages:  ['openzeppelin-solidity'],
    norpc: true,
    skipFiles: [
        // Comment out which files you want to see the coverage for.
        'Migrations.sol'
        //'mocks'
    ]
};
