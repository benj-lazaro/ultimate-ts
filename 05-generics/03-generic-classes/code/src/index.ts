// Generic class
class KeyValuePair<TKey, TValue> {
  constructor(public key: TKey, public value: TValue) {}
}

// Instantiate object from class

// Optional explicit annotation of the data type of the values passed
let pair = new KeyValuePair<string, string>("Name", "John Wick");
console.log(pair.key + ": " + pair.value);

// NO annotation of data type of the values passed
// TypeScript compiler automatically detects it
let pair2 = new KeyValuePair(1, "100");
console.log(pair2.key + ": " + pair2.value);
