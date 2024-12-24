// Exercise #1: Generic class
function echo<T>(arg: T): T {
  return arg;
}

// Exercise #2: Constraints on generic type parameters
function printName<T extends { name: string }>(obj: T) {
  console.log(obj.name);
}

// Exercise #3: Generic class
class Entity<T> {
  constructor(public id: T) {}
}

// Exercise #4: keyof operator
interface User {
  userId: number;
  username: string;
}

// Answer: "keyof User" returns a union of the properties of User "userId" | "username"
