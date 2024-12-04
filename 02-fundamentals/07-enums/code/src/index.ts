// Overrides default value of enum elements; starts with 1 instead of 0
const enum Size {
  Small = 1,
  Medium,
  Large,
}

// Annotate variable with enum data type & assign the 2nd element as value
let mySize: Size = Size.Medium;

// NOTE: To compile & run code on VS Code's integrated terminal window
// Compile using "tsc"
// Execute using "node list/index.js"

// Returns a number value of 2 that is associated to the enum element "Medium"
console.log(mySize);
