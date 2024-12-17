// Interface
interface Person1 {
  name: string;
}

let person1: Person1 = {
  name: "John Wick",
};

// Type Alias
type Person2 = {};

let person2: Person2 = {
  name: "John Constantine",
};

// Class implementation of an Interface
class Assasin implements Person1 {
  constructor(public name: string) {}
}
