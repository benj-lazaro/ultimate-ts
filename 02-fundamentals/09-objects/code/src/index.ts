// An object with an explicitly declared properties & their corresponding data types
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = { id: 1, name: "John Wick", retire: (date: Date) => console.log(date) };

// Triggers an error after an attempt to modify an read-only property
// employee.id = 100;

console.log(employee);
console.log(employee.id);
console.log(employee.name);
