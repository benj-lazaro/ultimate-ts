// Declaration of the type aliasn "Employee"
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// Variable annotated with an type alias "Employee"
let employee: Employee = {
  id: 1,
  name: "John Wick",
  retire: (date: Date) => console.log(date),
};
