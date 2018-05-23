'use strict';
function Bank() {
    this.balance = 0;
  };
  Bank.prototype.deposit = (function(amount) {
    this.balance += amount;
  });
  Bank.prototype.balance = (function() {
    return this.balance;
  });
  Bank.prototype.is_numerical_value = (function(value) {
    var regex = new RegExp(value);
    if (value.match(regex) !== true) {
      return false
    }
    else {
      return true
    }
  })
