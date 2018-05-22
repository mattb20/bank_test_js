function Bank() {
  balance = 0;
};
Bank.prototype.deposit = function(amount) {
  balance += amount;
}
module.exports = Bank;
