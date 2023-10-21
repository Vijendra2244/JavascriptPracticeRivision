function bankAccount(name, accountNumber, type, balance) {
  this.name = name;
  this.accountNumber = accountNumber;
  this.type = type;
  this.balance = balance;
  this.deposite = function (Amount) {
    this.balance += Amount;

    console.log(`Total Amount in your Account ${this.balance}`);
  };
  this.withdrawl = function (Amount) {
    if (this.balance >= Amount) {
      this.balance -= Amount;
    }
    console.log(`Total Amount in you bank account ${this.balance}`);
  };
  this.checkBalance = function () {
    console.log(`In your account ${this.balance} rs`);
  };
  this.isActive = function () {
    if (this.balance <= 0) {
      console.log(`Your bank account is not active`);
    } else {
      console.log(`Your bank account is active`);
    }
  };
}
let firstAccount = new bankAccount("Vijendra", "123456533", "Saving", 1000);
firstAccount.deposite(1000);
firstAccount.withdrawl(500);
firstAccount.checkBalance();
firstAccount.isActive();

let secondAccount = new bankAccount("Vijend", "12345246533", "Current", 100000);
console.log(firstAccount);
console.log(secondAccount);
