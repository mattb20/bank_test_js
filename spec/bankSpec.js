var bank_module = require("../bank.js");
describe("Making a deposit at the bank", function() {
  it("has a function that will allow you to make a deposit at the bank", function() {
    var bank = new bank_module();
    expect(typeof bank.deposit).toBe('function');
  })
});
