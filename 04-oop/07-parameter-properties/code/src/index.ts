class Acccount {
  nickname?: string;

  // Using parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
    this._calculateTax();
  }

  private _calculateTax() {
    // Do something there
  }

  getBalance(): number {
    return this._balance;
  }
}

// Instantiate an object from the class "Account"
let account = new Acccount(1, "John Wick", 5000);
console.log(account.getBalance());
