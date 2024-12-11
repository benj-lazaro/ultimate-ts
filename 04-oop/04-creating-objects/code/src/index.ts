// Define a class
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

// Create an object from the class
let account = new Acccount(1, "John Wick", 1000);

// Call the object's method "deposit" & pass a value
account.deposit(1000);

// Check the current value of the property "balance"
console.log(account.balance);

// Display the properties & corresponding values of the object "account"
console.log(account);

// Check if object "account" is an instance of the class "Account"
console.log(account instanceof Acccount);
