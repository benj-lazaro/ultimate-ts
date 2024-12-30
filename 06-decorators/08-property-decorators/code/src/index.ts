// Property Decorator

// Function with a parameterized decorator
function MinLength(length: number) {
  // Returns the actual decorator function
  return (target: any, propertyName: string) => {
    // Will hold the value that passed the setter's validation logic
    let value: string;

    // Define the descriptor of type PropertyDescriptor for the "target" property
    // Contains both getter & setter
    const descriptor: PropertyDescriptor = {
      // Getter
      get() {
        return value;
      },
      // Setter
      set(newValue: string) {
        // Validation logic
        if (newValue.length < length)
          throw new Error(
            `The value assigned to property "${propertyName}" should be at least ${length} characters long.`
          );

        // Passed the validation logic; returns the value stored in newValue as the value (of the descriptor)
        value = newValue;
      },
    };

    // Assigns the descriptor object to the "target" property
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class User {
  // Declare property decorator; pass an argulent value of 4 (number type)
  @MinLength(4)
  password: string;

  // Initialzies the property with the value passed in the argument "password"
  constructor(password: string) {
    this.password = password;
  }
}

// Assign a string whose length meets the validation logic of the Property Decorator MinLength()
let user = new User("1234");
console.log(user.password);

// Assign a new string whose length does NOT meet the validation logic of the property decorator MinLength()
user.password = "1";
console.log(user.password);
