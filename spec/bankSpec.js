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
  it('does not allow user to deposit non numerical values', function() {
    // assert
    spyOn(console, 'log');
    make_deposit(bank, 'this_is_not_a_number');
    expect(console.log).toHaveBeenCalledWith('You can only deposit numerical amounts!');

  });
});
