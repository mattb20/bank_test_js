'use strict';
var transaction = require('./transaction')
function Bank() {
    this.balance = 0;
  };
Bank.prototype.deposit = (function(amount) {
    transaction = new Transaction('deposit', amount);
    if (transaction.is_numerical_value(amount.toString()) === true){
      this.balance += amount;
    };

  });
Bank.prototype.balance = (function() {
    return this.balance;
  });
