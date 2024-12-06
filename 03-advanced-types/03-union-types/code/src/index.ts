// Declared a function with a union type parameter variable
function kgToLbs(weight: number | string): number {
  // Narrowing a Union type into a number and string data types
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// Passing an argument value of data type number
kgToLbs(10);

// Passing an argument value of data type string
kgToLbs("10");
