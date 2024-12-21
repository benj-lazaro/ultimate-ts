interface Product {
  name: string;
  price: number;
}

// Generic class
// Mechanism for storing different kinds of objects (i.e. product, orders, shopping cart, etc.)
class Store<T> {
  // Define a protected property that stores an array of objects
  // NOTE: Initialize property an empty array instead of using a constructor method
  //       It does NOT makes to make a new instance of this class
  protected _objects: T[] = [];

  // Method
  add(obj: T): void {
    this._objects.push(obj);
  }
}

// Three different scenarios to extend a Generic class

// Scenario #1: Pass on the Generic type parameter
class CompressibleStore<T> extends Store<T> {
  // Method
  compress() {
    console.log("Compressing data...");
  }
}

let test = new CompressibleStore<Product>();
test.add({ name: "Teapot", price: 123.0 });
test.compress();

// Scenario #2: Restrict the Generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  // Method for finding objects
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Scenario #3: Fix (terminating) the Generic type parameter
class ProductStore extends Store<Product> {
  // Method
  filterByCategory(category: string): Product[] {
    console.log(category);
    return [];
  }
}
