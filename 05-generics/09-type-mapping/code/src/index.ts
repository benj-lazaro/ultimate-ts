// Existing data type
interface Product {
  name: string;
  price: number;
}

// New data type based on Product & transform their properties as readonly
type ReadOnlyProduct = {
  readonly [Key in keyof Product]: Product[Key];
};

// New data type based on a Generic data type parameter & transform their properties as readonly
type ReadOnly<T> = {
  readonly [Key in keyof T]: T[Key];
};

// New data type based on a Generic data type parameter & transform their properties as optional (partial)
type Optional<T> = {
  [Key in keyof T]?: T[Key];
};

// New data type based on a Generic data type parameter & transform their properties as nullable
type Nullable<T> = {
  [Key in keyof T]: T[Key] | null;
};
