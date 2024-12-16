// Parent class (Abstract)
abstract class Shape {
  constructor(public color: string) {}

  // Abstract method = NO implementation & of data type of "void"
  abstract render(): void;
}

// Child class
class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

// Instantiate class Circle into an object
let circle = new Circle(20, "blue");

// Call method render
circle.render();
