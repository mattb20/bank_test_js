var Transaction = require("../transaction")
var Bank = require("../bank")
describe('Transaction', function() {
  var bank;
  var transaction;
  beforeEach(function(){
    bank = new Bank();
    transaction = new Transaction('deposit', 10);
  });
  it('has a function that will return the transaction type', function() {
    expect(transaction.transaction_type).toEqual('deposit');
})
  it('has a function that will return the transaction amount', function() {
    expect(transaction.amount).toEqual(10);
  });
  it('has a function that will return the transaction type', function() {
    expect(transaction.transaction_type).toEqual('deposit');
  })
  it('it has a method that will detect whether a user has entered a non numerical value', function() {
      // assert
      expect(transaction.is_numerical_value('ab-')).toBe(false);
  });
  it('has a method that will confirm to the user that the confirmation was successful', function() {
    // assert
    expect(transaction.confirm_transaction('Deposit',10)).toBe('Deposit of £10 successful');
  });
  it('has a method that will confirm to the user that the confirmation was successful', function() {
    // assert
    expect(transaction.confirm_transaction('Deposit',10)).toBe('Deposit of £10 successful');
  });
  it('has a method that will withdraw a given amount from a bank balance', function() {
    // arrange
    let bank = new Bank();
    let transaction = new Transaction('withdraw', 5);
    bank.balance = 10;
    // act
    transaction.make_transaction('withdraw', 5, bank);
    // assert
    expect(bank.balance).toEqual(5);
  });
  // it('has a method that will return false when passed an amount greater than the bank balance', function() {
  //   // arrange
  //   let transaction = new Transaction();
  //   // assert
  //   expect(transaction.confirm_transaction('Deposit',10)).toBe('Deposit of £10 successful');
  // });
})
