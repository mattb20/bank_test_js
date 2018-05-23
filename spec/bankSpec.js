describe('Bank', function() {
  var bank;
  beforeEach(function() {
    bank = new Bank();
  });
  it("has a balance of 0 on initialization", function() {
    expect(bank.balance).toEqual(0);
  });
  it("has a function that will allow you to make a deposit at the bank", function() {
      expect(typeof bank.deposit).toBe('function');
  })
  it("increases the balance of the bank by a given amount", function() {
      // act
      bank.deposit(10);
      // assert
      expect(bank.balance).toEqual(10);
  });
  it("it has a method that will detect whether a user has entered a non numerical value", function() {
      // act
      // assert
      expect(bank.is_numerical_value('ab-')).toBe(false);
  });
});
