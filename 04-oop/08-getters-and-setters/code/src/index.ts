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

  // Implement a Getter
  get balance(): number {
    return this._balance;
  }

  // Implement a Setter
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

// Instantiate an object from the class "Account"
let account = new Acccount(1, "John Wick", 5000);

// Get the current value of the property "balance" using a getter of the same name
console.log("Calls a Getter...");
console.log("Current Balance: " + account.balance);

// Set a new value of the property "balance" using a setter
console.log("Calls a Setter...");
account.balance = 1;

// Re-check the current value of the property "balance"
console.log("Current Balance: " + account.balance);
