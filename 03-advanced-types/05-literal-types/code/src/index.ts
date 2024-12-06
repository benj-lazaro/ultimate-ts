// Declare a variable using a literal type to annotate a variable
// Based on the assigned value to the variable
let quantity: 50 = 50;

// Define a custom data type using type aliases
// Containing Literal data types
type Count = 50 | 100 | 200;
type Metric = "cm" | "inch";

// Annotate the custom data type Count to the corresponding variables
let count: Count = 100;
let measurement: Metric = "inch";
