// Decorator composition

// Define a new type using a Type alias
type ComponentOptions = {
  selector: string;
};

// Decorator Factory
// A function that returns an arrow function that calls a Class decorator
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();

    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

// New decorator
function Pipe(constructor: Function) {
  console.log("Pipe decoraetor called");
  constructor.prototype.pipe = true;
}

// Two decorators assigned to the class ProfileComponent
// The last one will be executed first (i.e. Pipe)
// Returned results/values passed to the succeeding decorator (i.e. Component)
@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}
