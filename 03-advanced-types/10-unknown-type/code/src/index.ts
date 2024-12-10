// Unknown data type
function render(document: unknown) {
  // Type narrowing with primitive data types
  if (typeof document === "string") {
    document.toUpperCase();
  }

  // Type narrowing with custom data types
  if (document instanceof WordDocument) {
    // ...
  }
}
