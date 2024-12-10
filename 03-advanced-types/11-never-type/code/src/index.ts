// Never data type
function processEvents(): never {
  // Performs somehting...
}

// Calls the function that does NOT have an end point (i.e. ends)
processEvents();

// This line of code is NEVER executed
console.log("Hello");
