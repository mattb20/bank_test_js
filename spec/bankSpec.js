describe("Making a deposit at the bank", function() {
  it("has a function that will allow you to make a deposit at the bank", function() {
    var bank = new Bank();
    expect(typeof bank.deposit).toBe('function');
  })
});
