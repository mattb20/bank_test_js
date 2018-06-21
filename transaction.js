module.exports = class Transaction {
  constructor(transaction_type, amount) {
    this.transaction_type = transaction_type;
    this.amount = amount;
  }
  transaction_type() {
    return this.transaction_type;
  };
  amount() {
    return this.amount;
  };
  is_numerical_value(value) {
    var regex = new RegExp('[a-z-]');
    if (value.match(regex) !== null) {
      return false
    }
    else {
      return true
    }
  };
  confirm_transaction(transaction_type, amount) {
      return (transaction_type + ' of ' + '£' + amount.toString() + ' successful');

  };

}
