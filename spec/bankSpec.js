describe('Bank', function() {
  beforeEach(function() {
    bank = new Bank();
  });
  it("has a balance of 0 on initialization", function() {
    expect(bank.balance).toEqual(0);
  });
  it("has a function that will allow you to make a deposit at the bank", function() {
    expect(typeof bank.deposit).toBe('function');
  });
  it('it increases the bank balance by a given amount as long as it is a numeriacl value', function() {
    // arrange
    bank.deposit(10);
    // assert
    expect(bank.balance).toEqual(10);

  });
});
describe('Transaction', function() {
  beforeEach(function(){
    bank = new Bank();
  });
  it('has a function that will return the transaction type', function() {
    transaction = new Transaction('deposit', 10);
    expect(transaction.transaction_type).toEqual('deposit');
})
  it('has a function that will return the transaction amount', function() {
    transaction = new Transaction('deposit', 10);
    expect(transaction.amount).toEqual(10);
  });
  it('has a function that will return the transaction type', function() {
    transaction = new Transaction('deposit', 10);
    expect(transaction.transaction_type).toEqual('deposit');
  })
  it('it has a method that will detect whether a user has entered a non numerical value', function() {
      // arrange
      transaction = new Transaction('deposit', 10);
      // act
      // assert
      expect(transaction.is_numerical_value('ab-')).toBe(false);
  });
  it('has a method that will confirm to the user that the confirmation was successful', function() {
    // arrange
    transaction = new Transaction('deposit', 10);
    // assert
    expect(transaction.confirm_transaction('Deposit',10)).toBe('Deposit of £10 successful');
  })
})
