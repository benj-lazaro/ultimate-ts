// Using a Union operator on the function's parameter variable to annotate the "null" & "undefined" data type
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase);
  else console.log("Hola!");
}

// Passing an arugment value of "string" data type
greet("John Wick");

// Passing an arugment value of "null" data type
greet(null);

// Passing an arugment value of "undefined" data type
greet(undefined);
