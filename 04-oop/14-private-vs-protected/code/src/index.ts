// Parent class

// Open Closed principle in action (i.e. properties & getter method)
class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log("Walking");
  }
}

// Child class
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    // Calling an inherited method with access modifier "protected"
    this.walk();

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

let student = new Student(1, "John", "Cena");
student.takeTest();
