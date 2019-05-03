const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const { ZERO_ADDRESS } = constants;

const BlockchainsBasketball = artifacts.require('BlockchainsBasketball');

contract('ERC20', function ([_, initialHolder, recipient, anotherAccount]) {
  const initialSupply = new BN(100);

  beforeEach(async function () {
   // this.token = await ERC20Mock.new(initialHolder, initialSupply);
    this.potato = await BlockchainsBasketball.new();
  });

  describe.only('potato Test', function () {
    it('returns the total amount of tokens', async function () {

      let test = await this.potato.potatosAreGreat.call();

      assert.equal(test, 5, "broken");
    });
  });
});
