// Parameterized decorators

// Define a new type using a Type alias
type ComponentOptions = {
  selector: string;
};

// Decorator Factory
// A function that returns an arrow function that calls a Class decorator
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");

    // New property
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();

    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#my-profile" })
class ProfileComponent {}
