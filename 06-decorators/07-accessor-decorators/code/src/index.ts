// Accessor Decorators

function Capitalized(
  target: any,
  methodName: string,
  desciptor: PropertyDescriptor
) {
  const original = desciptor.get;

  // Redefine the getter
  desciptor.get = function () {
    // Calls the original method / getter (i.e. fullName)
    const result = original?.call(this);

    // Return the modified value; otherwise return the "result" instead
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  // Constructor
  constructor(public firstName: string, public lastName: string) {}

  // Accessor decorator
  @Capitalized
  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Instantiate class into an object
let person = new Person("john", "wick");

// Call the method
console.log(person.fullName);
