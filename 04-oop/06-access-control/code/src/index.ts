// Define a class with property modifiers
class Acccount {
  readonly id: number;
  owner: string;
  // Private property
  private _balance: number;
  nickname?: string;

  constructor(id: number, owner: string, balance: number, nickname: string) {
    this.id = id;
    this.owner = owner;
    this._balance = balance;
    this.nickname = nickname;
  }

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;

    // Calling "private" method
    this._calculateTax();
  }

  // Private method
  private _calculateTax() {
    // Do something there
  }

  // Method that returns the value of a "private" property
  getBalance(): number {
    return this._balance;
  }
}

// Instantiate a new objects from the class
let account = new Acccount(1, "John Wick", 5000, "Babayaga");

// Calls method that returns the value of the object's private property "balance"
console.log(account.getBalance());
