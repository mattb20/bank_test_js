'use strict';
var Transaction = require("./transaction");
module.exports = class Bank {
  constructor() {
    this.balance = 0;
  };
deposit(amount) {
    var bank = this;
    var transaction = new Transaction('deposit', amount, bank);
    if (transaction.is_numerical_value(amount.toString()) === true){
      transaction.make_transaction('deposit', amount, bank);
      transaction.confirm_transaction('Deposit', amount)
    } else {
      console.log('You can only deposit numerical amounts!');
    };

  };
print_balance(){
    return 'Current balance: £' + this.balance;
  };
}
