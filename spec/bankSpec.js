const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
    colors: 1,           // (0|false)|(1|true)|2
    cleanStack: 1,       // (0|false)|(1|true)|2|3
    verbosity: 4,        // (0|false)|1|2|(3|true)|4
    listStyle: 'indent', // "flat"|"indent"
    activity: false,     // boolean or string ("dots"|"star"|"flip"|"bouncingBar"|...)
    emoji: true,
    beep: true
});
var bank_module = require("../bank.js");
describe("On opening a new account at the bank", function() {
  it("has a balance of 0", function() {
    var bank = new bank_module();
    expect(bank.balance).toBe(0);
  })
});
describe("Making a deposit at the bank", function() {
  it("has a function that will allow you to make a deposit at the bank", function() {
    var bank = new bank_module();
    expect(typeof bank.deposit).toBe('function');
  })
});