// Define a class with property modifiers
class Acccount {
  // Readonly property
  readonly id: number;
  owner: string;
  balance: number;
  // Optional property
  nickname?: string;

  // Initialize the class's properties
  constructor(id: number, owner: string, balance: number, nickname: string) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
    this.nickname = nickname;
  }

  deposit(amount: number): void {
    // Check for 0 deposits
    if (amount <= 0) throw new Error("Invalid amount");

    // Otherwise, add value to the property "balance"
    this.balance += amount;
  }
}

// Instantiate a new objects from the class
let account1 = new Acccount(1, "John Wick", 5000, "Babayaga");
let account2 = new Acccount(2, "John Constantine", 1500, "");

// Display contents of the instantiated objects
console.log(account1);
console.log(account2);
