'use strict';
var transaction;
function Bank() {
    this.balance = 0;
  };
Bank.prototype.deposit = (function(amount) {
    transaction = new Transaction();
  });
Bank.prototype.balance = (function() {
    return this.balance;
  });
function Transaction(transaction_type, amount) {
  this.transaction_type = transaction_type;
  this.amount = amount;
}
Transaction.prototype.transaction = (function() {
  return this.transaction_type;
})
Transaction.prototype.amount = (function() {
  return this.amount;
});
Transaction.prototype.is_numerical_value = (function(value) {
  var regex = new RegExp(value);
  if (value.match(regex) !== true) {
    return false
  }
  else {
    return true
  }
});
