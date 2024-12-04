// A function that returns a value
// Parameter variable taxYear has a default value of 2022
function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

// A function that does NOT return value
function doesNotReturnValue(): void {}

calculateTax(10_000);