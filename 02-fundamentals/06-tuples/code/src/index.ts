// Best practice tuple declaration
let user: [number, string] = [1, "John Wick"];

// NOT so best practice tuple declaration
let complicatedUser: [number, string, boolean, number] = [2, "Ted", false, 12];

// Caveat when working with the method .push()
// TypeScript does NOT trigger an error when it should
user.push("John Constantine");
