export default class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  getName() {
    return this.name;
  }
  getBalance() {
    return this.balance;
  }
  setName(name) {
    this.name = name;
  }
  setBalance(balance) {
    this.balance = balance;
  }
}
