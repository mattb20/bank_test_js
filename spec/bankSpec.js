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
