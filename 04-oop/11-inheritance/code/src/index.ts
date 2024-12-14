// Parent class
class Person {
  // Declare common properties in this class' constructor
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  walk() {
    console.log("Walking");
  }
}

// Child class
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    // Calls the constructor of the Parent class
    super(firstName, lastName);
  }

  // Child class specific method
  takeTest() {
    console.log("Taking a test");
  }
}

// Instantiate an object from the child class
let student = new Student(1, "John", "Wick");

// Access child object's properties & method
console.log(student);
student.takeTest();

// Access inherited methods from parent class
console.log(
  "The full name of the student with ID no. " +
    student.studentId +
    " is " +
    student.fullName
);

student.walk();
