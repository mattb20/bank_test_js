var Bank = require("../bank");
describe('Bank', function() {
  var bank;
  const make_deposit = (bank, amount) => bank.deposit(amount);
;  beforeEach(function() {
     bank = new Bank();
  });
  it("has a balance of 0 on initialization", function() {
    expect(bank.balance).toEqual(0);
  });
  it("has a function that will allow you to make a deposit at the bank", function() {
    expect(typeof bank.deposit).toBe('function');
  });
  it('it increases the bank balance by a given amount as long as it is a numerical value', function() {
    // arrange
    make_deposit(bank, 10);
    // assert
    expect(bank.balance).toEqual(10);

  });
  it('has a function that will print the curent balance of the bank', function() {
    // arrange
    make_deposit(bank, 10);
    // assert
    expect(bank.print_balance()).toEqual('Current balance: £10');

  });
  it('prints a confirmation of a successful deposit', function() {
    // arrange
    make_deposit(bank, 5);
    // assert
    expect(bank.print_balance()).toEqual('Current balance: £10');

  });
});
