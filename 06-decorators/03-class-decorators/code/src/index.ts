function Component(constructor: Function) {
  console.log("Component decorator called");

  // Access the constructor's prototype to add a new property & assign a value
  constructor.prototype.uniqueId = Date.now();

  // Add a new method
  constructor.prototype.insertInDOM = () => {
    console.log("Inserting the component in the DOM");
  };
}

@Component
class ProfileComponent {}
