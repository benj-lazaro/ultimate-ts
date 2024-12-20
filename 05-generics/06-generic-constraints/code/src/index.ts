// Generic constraint by data type(s)
function echo<T extends string | number>(value: T) {
  return value;
}

console.log(echo("Hey"));
console.log(echo(1));
// console.log(echo(true));   // TypeScript compilation error

// Generic constraint by an object
function echo1<T extends { name: string }>(value: T): T {
  return value;
}

console.log(echo1({ name: "John Wick" }));

// Generic constraint by an interface
interface Person {
  name: string;
}

function echo2<T extends Person>(value: T): T {
  return value;
}

console.log(echo2({ name: "John Constantine" }));

// Generic constraint by a class
class Individual {
  constructor(public name: string) {}
}

function echo3<T extends Individual>(value: T): T {
  return value;
}

console.log(echo3({ name: "Simon Anderson" }));

// Generic constraint by an instance of a class
class Customer extends Individual {}

function echo4<T extends Customer>(value: T): T {
  return value;
}

let result = new Customer("Johnny Mnemonic");
console.log(result);
