'use strict';
var Transaction = require("./transaction");
module.exports = class Bank {
  constructor() {
    this.balance = 0;
  };
deposit(amount) {
    var transaction = new Transaction('deposit', amount);
    if (transaction.is_numerical_value(amount.toString()) === true){
      this.balance += amount;
    };

  };
balance(){
    return this.balance;
  };
}
