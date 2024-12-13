class SeatAssignment {
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();

// Dynamically add a new property using the "." and "[]" notation
seats.A1 = "John Wick";
seats["A2"] = "Thomas Anderson";

// View the values
console.log(seats["A1"]);
console.log(seats["A2"]);
