// Exercise #1:
// Define a class named Logger with the right members
// Takes the name of a file in its constructor
// Provide a method for writing messages to that file
// NOTE: Do NOT worry about the actual file I/O operations

class Logger {
  constructor(public fileName: string) {}

  log(message: string) {
    return message;
  }
}

// Exercise #2:
// Given the Person class below
// Create a getter method for getting the fullname of a person

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new Person("John", "Wick");
console.log("The person's fullname is " + person.getFullName);

// Exercise #3:
// Create a new class called Employee that extends the Person class
// Adds a new property called salary

class Employee extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

let newEmployee = new Employee("John", "Doe", 50);
console.log(
  "The newly hired employee " +
    newEmployee.getFullName +
    " earns $" +
    newEmployee.salary +
    "/hour."
);

// Exercise #4:
// Difference between Access modifiers "private" & "protected"
// Private is NOT inherited by Child classes

// Exercise #5:
// Define an interface based on the object assigned to the variable "employee"
let employee = {
  name: "John Smith",
  salary: 50_000,
  address: {
    street: "Flinder Street",
    city: "Melbourne",
    zipCode: 1234,
  },
};

interface address {
  street: string;
  city: string;
  zipCode: number;
}

interface employee {
  name: string;
  salary: number;
  adddress: address;
}
