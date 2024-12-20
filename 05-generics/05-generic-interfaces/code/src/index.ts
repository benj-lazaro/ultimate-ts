// Generic interface

// Define a generic interface that takes a website's endpoint (e.g. users, products)
interface Result<T> {
  data: T | null;
  error: string | null;
}

// Define a function for fetching an API endpoint
// It returns an object based on the Generic interface (e.g. users, products)
function fetch<T>(_url: string): Result<T> {
  return { data: null, error: null };
}

// Define normal interface
interface User {
  username: string;
}

interface Product {
  title: string;
}

// Calling the function that fetches the corresponding list based on the passed endpoint
let userList = fetch<User>("users");
console.log(userList.data?.username);

let productList = fetch<Product>("products");
console.log(productList.data?.title);
