"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
function doesNotReturnValue() { }
const result = calculateTax(10000);
console.log(result);
//# sourceMappingURL=index.js.map