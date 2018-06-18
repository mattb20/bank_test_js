'use strict';
var transaction = require("./transaction");
module.exports = class Bank {
  constructor() {
    this.balance = 0;
  };
deposit(amount) {
    transaction = new Transaction('deposit', amount);
    if (transaction.is_numerical_value(amount.toString()) === true){
      this.balance += amount;
    };

  };
balance(){
    return this.balance;
  };
}
