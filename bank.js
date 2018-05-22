function Bank() {
  balance = 0;
};
Bank.prototype.deposit = function(amount) {
  balance += amount;
}
Bank.prototype.balance = function() {
  return balance;
}
module.exports = Bank;
