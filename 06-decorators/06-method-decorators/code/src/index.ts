// Method Decorators

// Function called by the decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // Copies the implementation of the original method
  const original = descriptor.value as Function;

  // Override / enhancement the implementation of the original method
  descriptor.value = function (...args: any) {
    console.log("Before");

    // This is the new implementation of the .say() method
    original.call(this, ...args);

    console.log("After");
  };
}

class Person {
  @Log
  say(message: string) {
    console.log("Person says " + message);
  }
}

let person = new Person();
person.say("hello!");
