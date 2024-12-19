// Generic method in a class
class ArrayUtils {
  static wrapInArray2<T>(value: T) {
    return [value];
  }
}

// Generic (stand-alone) function
function wrapInArray<T>(value: T) {
  return [value];
}

let numbers = wrapInArray(1);
console.log(numbers);

let strings = wrapInArray("Hello");
console.log(strings);

// If the Generic method is NOT a Static method, do this:
// let utils = new ArrayUtils();
// console.log(utils.wrapInArray2("Ola"));

console.log(ArrayUtils.wrapInArray2(345));
console.log(ArrayUtils.wrapInArray2("Ola"));
