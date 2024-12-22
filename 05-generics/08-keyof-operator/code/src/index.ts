interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // Method that find the matching actual property & assigned value of an object
  // T = interface "Product"
  // keyof T = "name" | "price" (or undefined if no matching assigned value of property found)
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store = new Store<Product>();
store.add({ name: "a", price: 1 });

let result = store.find("name", "a");
console.log(result);

result = store.find("price", 1);
console.log(result);

// Returns "undefined" due to a NO meatch value of 1000 assigned to the property "price"
result = store.find("price", 1000);
console.log(result);
