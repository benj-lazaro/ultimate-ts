// Declare a variable annotate the value as either the data type of "number" or "null"
// Initially assigns a value of "null"
let speed: number | null = null;

// If the value of speed is "null" or "undefined"
// Return the value of 30; otherwise return the value of speed
let ride = {
  speed: speed ?? 30,
};
