// Parent class

// Open Closed principle in action (i.e. properties & getter method)
class Person {
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
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teacher extends Person {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

// Function that takes objects of data type class Person (e.g. Student & Teacher)
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// Polymorphism in action
// 1st loop iteration = Student object
// 2nd loop iteration = Teacher object
// 3rd loop iteration = Principal object
printNames([
  new Student(1, "John", "Smith"),
  new Teacher("John", "Wick"),
  new Principal("Seymour", "Skinner"),
]);
