// Assigning the value 1 on the 1st enum element
// To override the default value of 0
const enum Size {
  Small = 1,
  Medium,
  Large,
}

console.log(`Small: ${Size.Small}`);
console.log(`Medium: ${Size.Medium}`);
console.log(`Large: ${Size.Large}`);

// Annotate variable type type Size (enum) and assign the 2nd element as value
let mySize: Size = Size.Medium;
console.log(`My size is ${mySize}`);

// NOTE: To compile & run the code on the integrated terminal window
//  Use the command "tsc && node dist/index.js"
