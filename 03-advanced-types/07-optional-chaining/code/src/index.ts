// *** Optional chaining on objects
// Use Type alias to define a new custom data type
type Customer = {
  birthday?: Date;
};

// Declare a function that return a value based on the recently defined custom data type
// Returns a data type of "null" when the id === 0
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

// Retrieve a record with an ID of 1 & save it to a variable
let customer = getCustomer(1);

// Perform null & undefined checks using an Optional Property Access operator
console.log(customer?.birthday?.getFullYear());

// *** Optional chaining on arrays
let customers: number[] = [];

// Access the 1st element ONLY if the element is NOT "null"
// Otherwise returns an "undefined" value
console.log(customers?.[0]);

// *** Optional chaining on functions
let log: any = null;

// Calls the function stored in the variable if value is NOT "null"
// Otherwise returns an "undefined" value
log?.("a");
