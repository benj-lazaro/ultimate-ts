// Creating classes
class Acccount {
  id: number;
  owner: string;
  balance: number;

  // Initializes the object's properties based on this (i.e. Account) class
  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    // Check for 0 deposits
    if (amount <= 0) throw new Error("Invalid amount");

    // Otherwise, add value to the property "balance"
    this.balance += amount;
  }
}
