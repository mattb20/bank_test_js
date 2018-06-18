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
